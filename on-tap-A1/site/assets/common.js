/* Dùng chung cho 4 trang: lưu tiến độ, đọc máy, ghi âm, gửi bài cho giáo viên */
(function(){
const OB = window.OB = {};
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnf8X3_Xfk9F_8HQtBwSFU_s28sRjxKb0aFaHCA4ybmMJvgaztBAbdvaFzITdbVXBt/exec';
OB.SCRIPT_URL = SCRIPT_URL;
OB.$ = (s,r)=>(r||document).querySelector(s);
OB.$$ = (s,r)=>Array.from((r||document).querySelectorAll(s));
OB.esc = s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
OB.h = (tag,attrs,html)=>{const e=document.createElement(tag);for(const k in (attrs||{})){if(k==='class')e.className=attrs[k];else e.setAttribute(k,attrs[k]);}if(html!=null)e.innerHTML=html;return e;};
OB.wc = s=>((s||'').trim().match(/[A-Za-z0-9'’-]+/g)||[]).length;
OB.init = function(cfg){
  OB.cfg = cfg; OB.LESSON = cfg.lesson;
  OB.HAS_URL = /^https:\/\/script\.google(usercontent)?\.com\//.test(SCRIPT_URL);
};
/* ---------- lưu trữ ---------- */
OB.store = (k,v)=>{try{localStorage.setItem('ob-'+OB.LESSON+':'+k,JSON.stringify(v));}catch(e){}};
OB.load = (k,d)=>{try{const v=localStorage.getItem('ob-'+OB.LESSON+':'+k);return v?JSON.parse(v):d;}catch(e){return d;}};
OB.toast = function(msg,ms){const t=OB.$('#toast');if(!t)return;t.textContent=msg;t.style.display='block';clearTimeout(OB.toast._t);OB.toast._t=setTimeout(()=>t.style.display='none',ms||3500);};
OB.stuName = ()=>(OB.load('name','')||'').trim();

/* ---------- so sánh câu trả lời ---------- */
const CONTR = [["i'm","i am"],["it's","it is"],["he's","he is"],["she's","she is"],["that's","that is"],["there's","there is"],["what's","what is"],["where's","where is"],["isn't","is not"],["aren't","are not"],["don't","do not"],["doesn't","does not"],["can't","cannot"],["we're","we are"],["they're","they are"],["you're","you are"],["i've","i have"],["haven't","have not"],["hasn't","has not"]];
OB.canon = function(s){
  s=String(s||'').toLowerCase().replace(/[’`]/g,"'").replace(/[.!?,;:"]/g,' ').replace(/\s+/g,' ').trim();
  CONTR.forEach(([a,b])=>{s=s.replace(new RegExp("\\b"+a.replace("'","'")+"\\b","g"),b);});
  return s.replace(/\s+/g,' ').trim();
};
OB.same = (val,list)=>{const c=OB.canon(val);return !!c&&list.some(x=>OB.canon(x)===c);};
OB.shuffle = function(arr,seed){const a=arr.slice();let s=seed||7;for(let i=a.length-1;i>0;i--){s=(s*9301+49297)%233280;const j=Math.floor(s/233280*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};

/* ---------- đọc bằng giọng máy ---------- */
const synth = window.speechSynthesis;
let EN=null;
function rank(v){if(!/^en/i.test(v.lang))return -1;let s=0,n=v.name;if(/en[-_](US|GB)/i.test(v.lang))s+=10;if(/Natural|Neural|Online|Premium|Enhanced/i.test(n))s+=30;if(/Google/i.test(n))s+=18;if(/Samantha|Ava|Allison|Serena|Daniel|Karen|Moira|Aria|Jenny|Guy|Libby|Sonia|Emma/i.test(n))s+=15;if(/Fred|Albert|Bad News|Bells|Boing|Bubbles|Cellos|Jester|Organ|Trinoids|Whisper|Zarvox|Wobble|Superstar|Junior|Ralph|Kathy|Grandma|Grandpa|Rocko|Shelley|Flo|Eddy|Reed|Sandy/i.test(n))s-=40;return s;}
const VKEY='ob-voice',RKEY='ob-vrate';
let ALLV=[];
function pref(){try{return localStorage.getItem(VKEY)||''}catch(e){return''}}
const gb=v=>/en[-_]GB/i.test(v.lang)?25:0;
function loadVoices(){if(!synth)return;
  ALLV=synth.getVoices().filter(v=>rank(v)>=0);
  const saved=pref();const pick=saved&&ALLV.find(v=>v.voiceURI===saved);
  /* mặc định: ưu tiên giọng Anh (en-GB) nếu máy có */
  const sorted=ALLV.slice().sort((a,b)=>(rank(b)+gb(b))-(rank(a)+gb(a)));
  EN=pick||sorted[0]||null;buildVoiceUI();}
const ACC={'en-GB':'Anh','en-US':'Mỹ','en-AU':'Úc','en-IN':'Ấn Độ','en-IE':'Ireland','en-ZA':'Nam Phi','en-CA':'Canada','en-NZ':'New Zealand'};
function vlabel(v){const a=ACC[v.lang.replace('_','-')]||v.lang;return 'Giọng '+a+' · '+v.name.replace(/^(Microsoft|Google)\s*/,'').replace(/ - English.*$/,'');}
function rateMul(){try{return parseFloat(localStorage.getItem(RKEY))||1}catch(e){return 1}}
function buildVoiceUI(){
  if(!document.body)return;
  let box=document.getElementById('voicebox');
  if(!box){box=document.createElement('div');box.id='voicebox';box.style.cssText='position:fixed;left:12px;bottom:12px;z-index:31;font-size:13px';document.body.appendChild(box);}
  if(!ALLV.length){box.innerHTML='';return;}
  const open=box.dataset.open==='1';
  const opts=ALLV.slice().sort((a,b)=>(rank(b)+gb(b))-(rank(a)+gb(a))).map(v=>`<option value="${v.voiceURI}"${EN&&v.voiceURI===EN.voiceURI?' selected':''}>${vlabel(v)}</option>`).join('');
  const r=rateMul();
  box.innerHTML=`<button class="b" id="vbtn" style="border-radius:999px;font-size:13px;padding:5px 12px" aria-expanded="${open}">🔊 Giọng đọc</button>`+
   (open?`<div class="card" style="background:var(--paper);border:1.5px solid var(--line);position:absolute;left:0;bottom:44px;width:290px;margin:0"><b>Chọn giọng đọc</b>
    <select id="vsel" style="width:100%;margin:6px 0;padding:6px;border-radius:8px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font:inherit">${opts}</select>
    <div class="row" style="gap:6px">Tốc độ: <select id="vrate" style="padding:4px;border-radius:8px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font:inherit"><option value="0.8"${r===0.8?' selected':''}>Chậm</option><option value="1"${r===1?' selected':''}>Vừa</option><option value="1.15"${r===1.15?' selected':''}>Nhanh</option></select> <button class="b" id="vtest" style="padding:4px 10px">▶ Nghe thử</button></div>
    <div class="tip">Giọng nghe tự nhiên nhất thường có chữ “Natural” hoặc “Online”. Mỗi máy có các giọng khác nhau.</div></div>`:'');
  document.getElementById('vbtn').onclick=()=>{box.dataset.open=open?'0':'1';buildVoiceUI();};
  if(open){
    document.getElementById('vsel').onchange=e=>{try{localStorage.setItem(VKEY,e.target.value)}catch(x){}EN=ALLV.find(v=>v.voiceURI===e.target.value)||EN;OB.speak('Hello! This is my voice.',1);};
    document.getElementById('vrate').onchange=e=>{try{localStorage.setItem(RKEY,e.target.value)}catch(x){}};
    document.getElementById('vtest').onclick=()=>OB.speak('Hello! There is a library next to my school.',1);
  }
}
if(synth){loadVoices();synth.onvoiceschanged=loadVoices;document.addEventListener('DOMContentLoaded',buildVoiceUI);}
OB.speak = function(text,rate,onend){
  if(!synth){OB.toast('Trình duyệt này không đọc được âm thanh. Hãy dùng Chrome hoặc Safari.');return;}
  synth.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=EN?EN.lang:'en-US';if(EN)u.voice=EN;u.rate=(rate||0.9)*rateMul();if(onend)u.onend=onend;
  setTimeout(()=>synth.speak(u),40);
};
OB.stopSpeak = ()=>{synth&&synth.cancel();};
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b){OB.speak(b.dataset.say,b.dataset.slow?0.6:0.85);}});

/* ---------- ghi âm ---------- */
const BLOBS = {}; let STREAM=null, ACTIVE=null;
OB.REC = {}; // key -> {dur,sent,label}
OB.recInit = function(){OB.REC = OB.load('rec',{});};
function saveRec(){OB.store('rec',OB.REC);}
async function getStream(){if(STREAM&&STREAM.active)return STREAM;STREAM=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}});return STREAM;}
function pickMime(){if(!window.MediaRecorder)return'';for(const m of['audio/webm;codecs=opus','audio/mp4','audio/webm','audio/ogg'])if(MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m))return m;return'';}
OB.recorder = function(o){ // {key,label,target,maxSec,onChange,needText:()=>bool}
  const key=o.key, maxSec=o.maxSec||60;
  const el=OB.h('div',{class:'rec-box'});
  el.innerHTML=`<div class="row">
    <button class="b rec" data-a="rec">🎙 Ghi âm</button>
    <button class="b" data-a="play" disabled>▶ Nghe lại</button>
    <button class="b primary" data-a="send" hidden>📤 Gửi bản ghi này cho thầy/cô</button>
    <span class="rt"></span></div><div class="tip st"></div>`;
  const q=s=>el.querySelector(s);const recB=q('[data-a=rec]'),playB=q('[data-a=play]'),sendB=q('[data-a=send]'),rt=q('.rt'),st=q('.st');
  let audio=null,cur=null;
  function refresh(){
    const has=!!BLOBS[key], r=OB.REC[key];
    playB.disabled=!has; sendB.hidden=!(has&&!(r&&r.sent));
    if(r&&r.sent){st.className='tip st sent-ok';st.textContent='✅ Đã gửi thầy/cô ('+r.dur+'s). Em vẫn có thể ghi âm lại và gửi bản mới.';}
    else if(has){st.className='tip st sent-wait';st.textContent='Nghe lại – thấy ổn thì bấm 📤 Gửi. Chưa ổn thì ghi âm lại.';}
    else if(r){st.className='tip st sent-wait';st.textContent='Em đã ghi âm ('+r.dur+'s) nhưng bản ghi đã mất khi tải lại trang. Hãy ghi âm lại nếu muốn gửi.';}
    else {st.textContent='';}
    o.onChange&&o.onChange();
  }
  function cloudCb(state){
    st.className='tip st '+(state==='ok'?'sent-ok':state==='bad'?'sent-bad':'sent-wait');
    st.textContent=state==='ok'?'✅ Đã gửi thầy/cô':state==='bad'?'⚠️ Chưa gửi được, đang thử lại…':'☁️ Đang gửi…';
    if(state==='ok')refresh();
  }
  el.addEventListener('click',async e=>{
    const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;
    if(a==='play'){if(!BLOBS[key])return;OB.stopSpeak();if(!audio||audio._b!==BLOBS[key]){audio=new Audio(URL.createObjectURL(BLOBS[key]));audio._b=BLOBS[key];}audio.currentTime=0;audio.play();}
    if(a==='send'){if(!OB.stuName()){OB.toast('Em ghi tên trước nhé.');return;}OB.enqueueUpload(key,o.label,o.target&&o.target(),cloudCb);}
    if(a==='rec'){
      if(o.needText&&!o.needText()){OB.toast('Em hãy viết câu trả lời trước rồi mới ghi âm nhé.');return;}
      if(ACTIVE){const same=ACTIVE.key===key;stopActive();if(same)return;}
      OB.stopSpeak();
      if(!navigator.mediaDevices||!window.MediaRecorder){OB.toast('Trình duyệt này chưa ghi âm được. Hãy mở bằng Chrome (máy tính/Android) hoặc Safari (iPhone).',6000);return;}
      let s;try{s=await getStream();}catch(err){OB.toast('Chưa mở được micro. Bấm biểu tượng 🔒 trên thanh địa chỉ → cho phép Micro rồi thử lại.',6000);return;}
      const mime=pickMime();let mr;try{mr=new MediaRecorder(s,mime?{mimeType:mime,audioBitsPerSecond:48000}:{});}catch(_){mr=new MediaRecorder(s);}
      cur={key,mr,chunks:[],t0:Date.now(),ui:{recB,rt,refresh}};
      mr.ondataavailable=ev=>{if(ev.data&&ev.data.size)cur.chunks.push(ev.data);};
      const c=cur;
      mr.onstop=()=>{const dur=Math.round((Date.now()-c.t0)/100)/10;BLOBS[key]=new Blob(c.chunks,{type:mr.mimeType||'audio/webm'});
        OB.REC[key]=Object.assign({},OB.REC[key]||{},{dur,sent:false,label:o.label,t:Date.now()});saveRec();refresh();};
      mr.start();ACTIVE=c;recB.classList.add('on');recB.textContent='■ Dừng';
      c.tick=setInterval(()=>{const sec=(Date.now()-c.t0)/1000;rt.textContent=Math.floor(sec)+'s / '+maxSec+'s';if(sec>=maxSec)stopActive();},250);
    }
  });
  refresh();
  return el;
};
function stopActive(){const c=ACTIVE;if(!c)return;ACTIVE=null;clearInterval(c.tick);c.ui.recB.classList.remove('on');c.ui.recB.textContent='🎙 Ghi âm';c.ui.rt.textContent='';try{c.mr.stop();}catch(_){}}
OB.stopRecording = stopActive;
OB.hasBlob = k=>!!BLOBS[k];
OB.unsentKeys = ()=>Object.keys(BLOBS).filter(k=>!(OB.REC[k]&&OB.REC[k].sent));

/* ---------- gửi cho giáo viên ---------- */
async function toMp3(blob){
  if(!window.lamejs)return null;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;const ac=new AC();
  try{
    const buf=await new Promise((res,rej)=>{blob.arrayBuffer().then(ab=>ac.decodeAudioData(ab,res,rej)).catch(rej);});
    const rate=22050,len=Math.ceil(buf.duration*rate);const off=new OfflineAudioContext(1,len,rate);const src=off.createBufferSource();src.buffer=buf;src.connect(off.destination);src.start();
    const out=await off.startRendering();const f=out.getChannelData(0);const pcm=new Int16Array(f.length);
    for(let i=0;i<f.length;i++){const v=Math.max(-1,Math.min(1,f[i]));pcm[i]=v<0?v*0x8000:v*0x7FFF;}
    const enc=new lamejs.Mp3Encoder(1,rate,48);const parts=[];
    for(let i=0;i<pcm.length;i+=1152){const b=enc.encodeBuffer(pcm.subarray(i,i+1152));if(b.length)parts.push(new Uint8Array(b));}
    const e=enc.flush();if(e.length)parts.push(new Uint8Array(e));return new Blob(parts,{type:'audio/mpeg'});
  }catch(err){return null;}finally{try{ac.close();}catch(_){}}
}
const b64=blob=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=rej;r.readAsDataURL(blob);});
async function postJSON(obj){
  const body=JSON.stringify(obj);
  try{const r=await fetch(SCRIPT_URL,{method:'POST',body,headers:{'Content-Type':'text/plain;charset=utf-8'},redirect:'follow'});const j=await r.json();if(!j.ok)throw new Error(j.error||'fail');return j;}
  catch(err){if(err instanceof TypeError){await fetch(SCRIPT_URL,{method:'POST',body,mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'}});return{ok:true};}throw err;}
}
OB.postJSON = postJSON;
const QUEUE=[],CB={};let BUSY=false;
function cloud(){const el=OB.$('#cloud');if(!el)return;const n=QUEUE.length+(BUSY?1:0);if(n){el.hidden=false;el.textContent='☁️ Đang gửi '+n+' bản ghi âm cho thầy/cô…';}else if(cloud.sent){el.hidden=false;el.textContent='✅ Đã gửi '+cloud.sent+' bản ghi âm';}else el.hidden=true;}
cloud.sent=0;
OB.enqueueUpload = function(key,label,target,cb){
  if(!OB.HAS_URL||!BLOBS[key])return;CB[key]=cb;cb&&cb('wait');
  const job={key,blob:BLOBS[key],label,target,tries:0};const i=QUEUE.findIndex(q=>q.key===key);if(i>=0)QUEUE[i]=job;else QUEUE.push(job);cloud();run();
};
async function run(){
  if(BUSY||!QUEUE.length)return;BUSY=true;const job=QUEUE.shift();cloud();const cb=CB[job.key];
  try{
    let blob=await toMp3(job.blob),ext='mp3',mime='audio/mpeg';
    if(!blob){blob=job.blob;mime=(blob.type||'audio/webm').split(';')[0];ext=mime.includes('mp4')?'m4a':mime.includes('ogg')?'ogg':'webm';}
    const r=OB.REC[job.key]||{};
    await postJSON({type:'audio',name:OB.stuName()||'Không tên',lesson:OB.LESSON,file:(OB.cfg.filePrefix||'Noi')+'_'+job.key+'.'+ext,mime,label:job.label,target:job.target||'',transcript:'',score:null,dur:r.dur,audio:await b64(blob)});
    OB.REC[job.key].sent=true;saveRec();cloud.sent++;cb&&cb('ok');
  }catch(err){job.tries++;cb&&cb('bad');if(job.tries<6)setTimeout(()=>{if(!QUEUE.some(q=>q.key===job.key))QUEUE.push(job);cloud();run();},Math.min(30000,2000*2**job.tries));}
  finally{BUSY=false;cloud();run();}
}
OB.pending = ()=>QUEUE.length+(BUSY?1:0);
OB.submit = async function(payload){
  if(!OB.HAS_URL)throw new Error('no url');
  return postJSON(Object.assign({type:'submit',name:OB.stuName()||'Không tên',lesson:OB.LESSON,link:location.href},payload));
};

/* ---------- hỏi tên ---------- */
OB.gate = function(emoji,onGo){
  const g=OB.h('div',{class:'gate'});
  g.innerHTML=`<div class="gate-box"><div style="font-size:48px">${emoji||'📘'}</div><h2 style="margin:4px 0">Chào em!</h2><p>Em gõ họ và tên để thầy/cô nhận được bài nhé.</p><input type="text" id="gateName" placeholder="Họ và tên" autocomplete="name"><button class="b primary" id="gateGo" style="font-size:18px;padding:10px 20px;margin-top:12px">Bắt đầu ▶</button><p class="tip" style="color:var(--muted)">🎙 Khi máy hỏi dùng micro, em bấm <b>Cho phép</b> (Allow).</p></div>`;
  document.body.appendChild(g);
  const inp=OB.$('#gateName',g);inp.value=OB.stuName();
  const go=()=>{const v=inp.value.trim();if(!v){inp.focus();return;}OB.store('name',v);g.remove();onGo&&onGo(v);};
  OB.$('#gateGo',g).onclick=go;inp.onkeydown=e=>{if(e.key==='Enter')go();};
  setTimeout(()=>inp.focus(),50);
};
window.addEventListener('beforeunload',e=>{if(OB.pending()||ACTIVE||(OB.guardUnload&&OB.guardUnload())){e.preventDefault();e.returnValue='';}});
})();
