/* Engine trang QUIZ: 60 phút, 5 phần, mở khóa tuần tự, chấm và giải thích đơn giản khi nộp */
(function(){
const {$,$$,h,esc,wc,toast}=OB;
const Q=window.QUIZ;
OB.init({lesson:Q.lesson,filePrefix:Q.filePrefix||'Quiz'});OB.recInit();
const QS=OB.load('qs',{start:null,max:0,cur:0,submitted:false,res:null});
const A=OB.load('ans',{});
const saveQS=()=>OB.store('qs',QS),saveA=()=>OB.store('ans',A);
const TOTAL=Q.minutes*60;
const root=$('#app');
const kind=p=>p.type||'items';
function hashS(s){let x=7;for(const c of s)x=(x*31+c.charCodeAt(0))%100003;return x;}

/* ---------- khung ---------- */
root.innerHTML=`<header class="hero"><div><h1>${Q.title}</h1><p class="sub">${Q.sub}</p></div><div class="stamp" aria-hidden="true"><span class="e">${Q.emoji}</span><span class="t">${Q.stampTitle}</span><span class="s">${Q.stampSub}</span></div></header>
<div id="intro"></div>
<div id="quiz" hidden>
  <div class="topbar"><div class="row"><div class="timer" id="timer">60:00</div><div class="pbar"><i id="pfill"></i></div><div class="pct" id="ppct">0%</div></div>
  <div class="row" id="tabs" style="margin-top:6px;flex-wrap:nowrap;overflow-x:auto"></div></div>
  <div id="parts"></div>
</div>
<div id="result" hidden></div>`;

/* ---------- màn hình giới thiệu ---------- */
function showIntro(){
  $('#intro').innerHTML=`<div class="card" style="background:var(--paper);border:1.5px solid var(--line)">
   <h2>Trước khi làm bài</h2>
   <ul>
     <li>Bài có <b>5 phần</b>, làm trong <b>${Q.minutes} phút</b>. Đồng hồ chạy ngay khi em bấm “Bắt đầu”.</li>
     <li>Làm <b>theo thứ tự</b>: xong phần này mới mở phần sau. Em có thể quay lại sửa phần đã làm.</li>
     <li>Trong lúc làm bài <b>chưa hiện đáp án</b>. Khi nộp, máy sẽ chấm và giải thích từng câu cho em.</li>
     <li>Phần 4 (Nói): em viết câu trả lời, rồi ghi âm. Cần micro. Bấm <b>Cho phép</b> khi trình duyệt hỏi.</li>
     <li>Hết giờ, bài tự động nộp. Đừng đóng trang khi chưa thấy chữ “Đã nộp”.</li>
   </ul>
   <div class="row">Tên em: <input type="text" id="qname" style="max-width:260px" value="${esc(OB.stuName())}" placeholder="Họ và tên"></div>
   <p><button class="b primary" id="qstart" style="font-size:18px;padding:10px 20px">▶ Bắt đầu làm bài (${Q.minutes} phút)</button></p></div>`;
  $('#qstart').onclick=()=>{const v=$('#qname').value.trim();if(!v){toast('Em ghi tên trước nhé.');$('#qname').focus();return;}OB.store('name',v);
    QS.start=Date.now();QS.max=0;QS.cur=0;saveQS();beginQuiz();};
}

/* ---------- dựng bài ---------- */
const PARTS=Q.parts;
let tick=null;
function key(pi,si,ii){return `${PARTS[pi].id}.${si}.${ii}`;}
function beginQuiz(){
  $('#intro').hidden=true;$('#quiz').hidden=false;
  const tabs=$('#tabs');tabs.innerHTML='';
  PARTS.forEach((p,i)=>{const b=h('button',{class:'b','data-i':i},esc(p.tab));b.onclick=()=>goPart(i);tabs.appendChild(b);});
  const holder=$('#parts');holder.innerHTML='';
  PARTS.forEach((p,pi)=>{const sec=h('section',{class:'partbox','data-p':pi});sec.hidden=true;holder.appendChild(sec);buildPart(p,pi,sec);});
  goPart(Math.min(QS.cur,QS.max),true);
  updateAll();
  clearInterval(tick);tick=setInterval(onTick,1000);onTick();
}
function buildPart(p,pi,sec){
  sec.innerHTML=`<h2>${esc(p.title)}</h2>${p.intro?`<p class="hint">${p.intro}</p>`:''}`;
  if(kind(p)==='items'){
    p.sections.forEach((s,si)=>{
      sec.insertAdjacentHTML('beforeend',`<h3>${esc(s.title)}</h3>${s.hint?`<p class="hint">${s.hint}</p>`:''}`);
      s.items.forEach((it,ii)=>sec.appendChild(renderItem(key(pi,si,ii),it,ii+1)));
    });
  }else if(kind(p)==='speaking'){buildSpeaking(p,pi,sec);}
  else if(kind(p)==='letter'){buildLetter(p,pi,sec);}
  const nav=h('div',{class:'row',style:'margin:16px 0'});
  const last=pi===PARTS.length-1;
  nav.innerHTML=last?`<button class="b primary" data-submit style="font-size:18px;padding:10px 20px">📨 Nộp bài</button><span class="tip" data-miss></span>`:`<button class="b primary" data-next>Xong phần này, sang ${esc(PARTS[pi+1].tab)} ▶</button><span class="tip" data-miss></span>`;
  sec.appendChild(nav);
  if(last)$('[data-submit]',nav).onclick=()=>{const m=missing(pi);if(m.length&&!confirm('Em còn '+m.length+' mục chưa xong. Em vẫn muốn nộp bài chứ?'))return;finish(false);};
  else $('[data-next]',nav).onclick=()=>{const m=missing(pi);if(m.length){toast('Em còn '+m.length+' mục chưa làm: '+m.slice(0,6).join(', ')+(m.length>6?'…':''),5000);return;}QS.max=Math.max(QS.max,pi+1);saveQS();goPart(pi+1);};
}
function renderItem(k,it,n){
  const d=h('div',{class:'item'});
  const say=it.say?` <button class="say" data-say="${esc(it.say)}">🔊 Nghe</button>`:'';
  d.innerHTML=`<div class="qt">${n}. ${it.q}${say}</div><div class="body"></div>`;
  const body=$('.body',d);
  if(it.kind==='choice'){
    body.className='body opts';body.innerHTML=it.o.map((o,i)=>`<button class="b opt" data-k="${i}">${esc(o)}</button>`).join('');
    const paint=()=>$$('.opt',body).forEach(b=>b.classList.toggle('picked',A[k]===+b.dataset.k));
    body.onclick=e=>{const b=e.target.closest('.opt');if(!b)return;A[k]=+b.dataset.k;saveA();paint();updateAll();};paint();
  }else if(it.kind==='fill'){
    body.innerHTML=`<input type="text" placeholder="Gõ đáp án…" autocomplete="off" autocapitalize="off" spellcheck="false">`;
    const inp=$('input',body);inp.value=A[k]||'';inp.oninput=()=>{A[k]=inp.value;saveA();updateAll();};
  }else if(it.kind==='order'){
    const words=OB.shuffle(it.w,hashS(k));
    body.innerHTML=`<div class="slot"></div><div class="bank"></div><div class="row" style="margin-top:6px"><button class="b" data-r>↺ Xóa</button></div>`;
    const slot=$('.slot',body),bank=$('.bank',body);
    words.forEach((w,i)=>bank.appendChild(h('button',{class:'chip','data-k':i},esc(w))));
    const redraw=()=>{const pick=A[k]||[];slot.innerHTML=pick.map(i=>`<button class="chip" data-p="${i}">${esc(words[i])}</button>`).join('');$$('.chip',bank).forEach(c=>c.classList.toggle('used',pick.includes(+c.dataset.k)));};
    bank.onclick=e=>{const c=e.target.closest('.chip');if(!c)return;A[k]=(A[k]||[]).concat(+c.dataset.k);saveA();redraw();updateAll();};
    slot.onclick=e=>{const c=e.target.closest('.chip');if(!c)return;A[k]=(A[k]||[]).filter(i=>i!==+c.dataset.p);saveA();redraw();updateAll();};
    $('[data-r]',body).onclick=()=>{A[k]=[];saveA();redraw();updateAll();};redraw();
    it._words=words;
  }
  return d;
}
function answerText(k,it){
  const v=A[k];
  if(it.kind==='choice')return v==null?'':it.o[v];
  if(it.kind==='fill')return (v||'').trim();
  if(it.kind==='order'){const words=OB.shuffle(it.w,hashS(k));return (v||[]).map(i=>words[i]).join(' ');}
  return '';
}
function isAnswered(k,it){return answerText(k,it)!=='';}
function isRight(k,it){
  const t=answerText(k,it);if(!t)return false;
  if(it.kind==='choice')return A[k]===it.a;
  if(it.kind==='fill')return OB.same(t,it.a);
  if(it.kind==='order')return OB.same(t,[it.a].concat(it.alt||[]));
  return false;
}
function correctText(it){return it.kind==='choice'?it.o[it.a]:it.kind==='fill'?it.a[0]:it.a;}

/* ---------- phần Nói ---------- */
function spItems(p){const out=[];['A','B'].forEach(g=>{(p['part'+g].items||[]).forEach((it,i)=>out.push({g,i,it,id:'p4'+g+i,tr:!!p['part'+g].translate}));});return out;}
function buildSpeaking(p,pi,sec){
  ['A','B'].forEach(g=>{
    const part=p['part'+g];
    sec.insertAdjacentHTML('beforeend',`<h3>${esc(part.title)}</h3><p class="hint">${part.hint}</p>`);
    part.items.forEach((it,i)=>{
      const id='p4'+g+i;const d=h('div',{class:'item'});
      d.innerHTML=`<div class="qt">${i+1}. ${it.q} <button class="say" data-say="${esc(it.q.replace(/<[^>]+>/g,''))}">🔊 Nghe câu hỏi</button><div class="vi">${esc(it.vi)}</div></div>
        <div class="tip">💡 Gợi ý mở đầu: <i>${esc(it.starter)}</i></div>
        <div class="step"><b>① Viết câu trả lời bằng tiếng Anh</b></div><textarea data-t placeholder="Viết câu trả lời của em…"></textarea>
        ${part.translate?`<div class="step"><b>② Dịch câu trả lời của em sang tiếng Việt</b></div><textarea data-v placeholder="Em dịch sang tiếng Việt…" style="min-height:60px"></textarea>`:''}
        <div class="step"><b>${part.translate?'③':'②'} Đọc to câu em đã viết và ghi âm</b></div>`;
      const ta=$('[data-t]',d);ta.value=(A[id]&&A[id].t)||'';
      ta.oninput=()=>{A[id]=Object.assign(A[id]||{},{t:ta.value});saveA();updateAll();};
      if(part.translate){const tv=$('[data-v]',d);tv.value=(A[id]&&A[id].v)||'';tv.oninput=()=>{A[id]=Object.assign(A[id]||{},{v:tv.value});saveA();updateAll();};}
      d.appendChild(OB.recorder({key:id,label:'Nói '+g+(i+1),target:()=>(A[id]&&A[id].t)||'',maxSec:60,needText:()=>wc((A[id]&&A[id].t)||'')>=3,onChange:updateAll}));
      sec.appendChild(d);
    });
  });
}
function spDone(){const bad=[];spItems(Q.parts.find(p=>kind(p)==='speaking')).forEach(o=>{const a=A[o.id]||{};if(wc(a.t||'')<3)bad.push('Nói '+o.g+(o.i+1)+' (chưa viết)');else if(o.tr&&wc(a.v||'')<2)bad.push('Nói '+o.g+(o.i+1)+' (chưa dịch)');else if(!OB.REC[o.id])bad.push('Nói '+o.g+(o.i+1)+' (chưa ghi âm)');});return bad;}

/* ---------- phần Viết thư ---------- */
function buildLetter(p,pi,sec){
  const L=p.letter;
  sec.insertAdjacentHTML('beforeend',`<div class="card"><b>${esc(L.task)}</b><div class="vi">🇻🇳 ${esc(L.vi)}</div><ul>${L.points.map(x=>`<li>${esc(x.label)}</li>`).join('')}</ul></div>
   <div class="card"><div class="step"><b>📮 Thư gồm 4 phần. Viết theo thứ tự:</b></div>
   <ol style="margin:6px 0;padding-left:20px"><li><b>Lời chào</b> (Hi Sam,) — mở đầu thư.</li><li><b>Câu mở đầu</b> — hỏi thăm hoặc cảm ơn (Thanks for your email.)</li><li><b>Nội dung chính</b> — 3 ý, mỗi ý 1–2 câu (mời đi đâu, ở đâu, gặp lúc nào, đi bằng gì).</li><li><b>Lời kết + tên</b> (Write back soon, Mai)</li></ol>
   <div class="tip">Bấm vào các <b>mẫu câu</b> dưới đây để thêm vào bài, rồi sửa lại cho giống ý của em.</div>
   ${Object.entries(L.helpers).map(([g,list])=>`<div class="step"><b>${esc(L.helperTitles[g])}</b></div><div class="chipbar">${list.map(t=>`<button class="chip" data-ins="${esc(t)}">${esc(t)}</button>`).join('')}</div>`).join('')}</div>`);
  const ta=h('textarea',{style:'min-height:220px',placeholder:'Viết thư của em ở đây…'});ta.value=A.p5||'';
  const cnt=h('div',{class:'tip'}),ck=h('ul',{class:'checks'});
  sec.append(ta,cnt,h('div',{class:'card'},'<b>Tự kiểm tra trong lúc viết</b>'),ck);
  sec.querySelector('.card:last-of-type')&&0;
  const checks=[['Lời chào (Hi … / Dear …,)',/^\s*(hi|hello|dear)\b/i],['Câu mở đầu (Thanks for… / How are you?)',/(thanks for|thank you for|how are you|hope you)/i],['Lời kết (Write back soon / See you / Bye for now)',/(write back|see you|bye for now|best wishes|love,)/i]].concat(L.points.map(x=>[x.label,x.re?new RegExp(x.re,'i'):null]));
  const upd=()=>{const n=wc(ta.value);cnt.innerHTML=`<b>${n}</b> từ (yêu cầu ${L.min}–${L.max} từ) ${n>=L.min&&n<=L.max?'✅':n>L.max?'⚠️ hơi dài':''}`;ck.innerHTML=checks.map(([t,re])=>`<li>${re&&re.test(ta.value)?'✅':'⬜'} ${esc(t)}</li>`).join('');};
  ta.oninput=()=>{A.p5=ta.value;saveA();upd();updateAll();};upd();
  sec.addEventListener('click',e=>{const c=e.target.closest('[data-ins]');if(!c)return;const add=c.dataset.ins;const cur=ta.value;const needNl=/^(Hi|Dear|Write back|See you|Bye)/i.test(add)||/[,]$/.test(cur.trim())&&false;
    ta.value=(cur&&!/\s$/.test(cur)?cur+(/^(Write back|See you|Bye for now|Best wishes)/i.test(add)?'\n':' '):cur)+add+(/^(Hi|Dear) .*,$/.test(add)?'\n':'');A.p5=ta.value;saveA();upd();updateAll();ta.focus();});
}

/* ---------- tiến độ ---------- */
function missing(pi){
  const p=PARTS[pi],out=[];
  if(kind(p)==='items'){p.sections.forEach((s,si)=>s.items.forEach((it,ii)=>{if(!isAnswered(key(pi,si,ii),it))out.push('câu '+(ii+1)+' ('+s.title.split('·')[0].trim()+')');}));}
  else if(kind(p)==='speaking')return spDone();
  else if(kind(p)==='letter'){if(wc(A.p5||'')<p.letter.min)out.push('thư cần ít nhất '+p.letter.min+' từ');}
  return out;
}
function totals(){let t=0,d=0;PARTS.forEach((p,pi)=>{if(kind(p)==='items'){p.sections.forEach((s,si)=>s.items.forEach((it,ii)=>{t++;if(isAnswered(key(pi,si,ii),it))d++;}));}
  else if(kind(p)==='speaking'){const items=spItems(p);t+=items.length;d+=items.length-spDone().length;}
  else if(kind(p)==='letter'){t++;if(wc(A.p5||'')>=p.letter.min)d++;}});return{t,d};}
function updateAll(){
  const{t,d}=totals();const pct=Math.round(d/t*100);$('#pfill').style.width=pct+'%';$('#ppct').textContent=pct+'%';
  $$('#tabs .b').forEach((b,i)=>{b.disabled=i>QS.max;b.classList.toggle('primary',i===QS.cur);b.textContent=(missing(i).length===0&&i<=QS.max&&i<QS.cur?'✅ ':'')+PARTS[i].tab;});
  PARTS.forEach((p,pi)=>{const m=missing(pi);const el=$(`.partbox[data-p="${pi}"] [data-miss]`);if(el)el.textContent=m.length?`Còn ${m.length} mục chưa xong`:'Đã xong phần này ✅';});
}
function goPart(i,silent){
  if(i>QS.max){toast('🔒 Em cần hoàn thành phần trước nhé.');return;}
  QS.cur=i;saveQS();$$('.partbox').forEach(s=>s.hidden=+s.dataset.p!==i);updateAll();
  if(!silent)window.scrollTo({top:0,behavior:'smooth'});
}
OB.guardUnload=()=>!!QS.start&&!QS.submitted;

/* ---------- đồng hồ ---------- */
let warned5=false,warned1=false;
function onTick(){
  if(QS.submitted){clearInterval(tick);return;}
  const left=Math.max(0,Math.round(TOTAL-(Date.now()-QS.start)/1000));
  const mm=String(Math.floor(left/60)).padStart(2,'0'),ss=String(left%60).padStart(2,'0');
  const el=$('#timer');el.textContent=mm+':'+ss;el.classList.toggle('low',left<=300);
  if(left<=300&&left>60&&!warned5){warned5=true;toast('⏰ Còn 5 phút! Em kiểm tra lại bài nhé.',6000);}
  if(left<=60&&left>0&&!warned1){warned1=true;toast('⏰ Còn 1 phút! Bài sẽ tự động nộp khi hết giờ.',6000);}
  if(left<=0){clearInterval(tick);toast('⏰ Hết giờ! Bài đang được nộp…',6000);finish(true);}
}

/* ---------- chấm thư (theo quy tắc, giải thích đơn giản) ---------- */
function snip(text,re){const m=text.match(re);return m?m[0]:'';}
const ERRS=[
  {re:/(^|[\s(])i(\s|'m|'ll|'ve|,|\.)/g,test:t=>/(^|[\s(])i(\s|'m|'ll|'ve|,|\.)/.test(t),ex:t=>snip(t,/(^|[\s(])i(\s|'m|'ll|'ve|,|\.)[^.!?]{0,15}/).trim(),fix:s=>s.replace(/\bi\b/,'I'),why:'Chữ “I” (tôi) luôn viết hoa.'},
  {test:t=>/\b(dont|doesnt|isnt|arent|cant|wont|im|ive|didnt)\b/i.test(t),ex:t=>snip(t,/\b(dont|doesnt|isnt|arent|cant|wont|im|ive|didnt)\b/i),fix:s=>({dont:"don't",doesnt:"doesn't",isnt:"isn't",arent:"aren't",cant:"can't",wont:"won't",im:"I'm",ive:"I've",didnt:"didn't"})[s.toLowerCase()]||s,why:'Dạng viết tắt cần có dấu phẩy trên (dấu ’).'},
  {test:t=>/\b(he|she) (like|love|go|play|live|have|want|need|enjoy|watch|ride|get)\b/i.test(t),ex:t=>snip(t,/\b(he|she) (like|love|go|play|live|have|want|need|enjoy|watch|ride|get)\b/i),fix:s=>{const[p,v]=s.split(' ');const m={have:'has',go:'goes',watch:'watches'};return p+' '+(m[v.toLowerCase()]||v+'s');},why:'Với he / she, động từ thêm -s (go → goes, have → has).'},
  {test:t=>/\b(am|is|are) (go|like|play|have|watch|ride|want|live)\b/i.test(t),ex:t=>snip(t,/\b(am|is|are) (go|like|play|have|watch|ride|want|live)\b/i),fix:s=>{const[b,v]=s.split(' ');return b+' '+v+'ing / '+v;},why:'Sau am / is / are không dùng động từ nguyên mẫu. Dùng V-ing (đang làm) hoặc bỏ am/is/are đi.'},
  {test:t=>/\bwant (go|play|see|watch|visit|eat|ride)\b/i.test(t),ex:t=>snip(t,/\bwant (go|play|see|watch|visit|eat|ride)\b/i),fix:s=>s.replace('want ','want to '),why:'Sau want cần có “to”: want <b>to</b> go.'},
  {test:t=>/\bthere is (two|three|four|five|six|many|some|a lot of)\b/i.test(t),ex:t=>snip(t,/\bthere is (two|three|four|five|six|many|some|a lot of)\b/i),fix:s=>s.replace(/there is/i,'there are'),why:'Nhiều cái thì dùng <b>there are</b>.'},
  {test:t=>/\b(next|opposite to|in front) (the|my|your|a)\b/i.test(t)&&/\b(next|in front) (the|my|your|a)\b/i.test(t),ex:t=>snip(t,/\b(next|in front) (the|my|your|a)\b/i),fix:s=>s.replace(/next /i,'next to ').replace(/in front /i,'in front of '),why:'Nói <b>next to</b> và <b>in front of</b> (đừng bỏ “to”, “of”).'},
  {test:t=>/\barrive at home\b/i.test(t),ex:t=>snip(t,/\barrive at home\b/i),fix:()=>'arrive home',why:'Nói <b>arrive home</b>, không có “at”.'},
  {test:t=>/\b(\w+) \1\b/i.test(t)&&!/\b(that that|had had)\b/i.test(t),ex:t=>snip(t,/\b(\w+) \1\b/i),fix:s=>s.split(' ')[0],why:'Em viết lặp một từ hai lần.'}
];
function sentencesOf(t){return t.split(/(?<=[.!?])\s+|\n+/).map(s=>s.trim()).filter(Boolean);}
function letterFeedback(text,L){
  const out={ok:[],fix:[],score:0,parts:{}};
  const t=text||'';const n=wc(t);
  const greet=/^\s*(hi|hello|dear)\b/i.test(t),close=/(write back|see you|bye for now|best wishes|love,)/i.test(t),open=/(thanks for|thank you for|how are you|hope you)/i.test(t);
  let structure=(greet?1:0)+(close?1:0);
  greet?out.ok.push('Em có <b>lời chào</b> ở đầu thư.'):out.fix.push({h:'Thiếu lời chào',w:'Thư cần bắt đầu bằng <b>Hi Sam,</b> hoặc <b>Dear Sam,</b>.'});
  open?out.ok.push('Em có <b>câu mở đầu</b> (hỏi thăm hoặc cảm ơn).'):out.fix.push({h:'Chưa có câu mở đầu',w:'Sau lời chào, thêm 1 câu như <b>Thanks for your email.</b> hoặc <b>How are you?</b>'});
  close?out.ok.push('Em có <b>lời kết</b> ở cuối thư.'):out.fix.push({h:'Thiếu lời kết',w:'Cuối thư viết <b>Write back soon,</b> hoặc <b>See you on Saturday!</b> rồi ghi tên em.'});
  let content=0;
  L.points.forEach(p=>{const ok=p.re&&new RegExp(p.re,'i').test(t);if(ok){content++;out.ok.push('Em đã viết ý: <b>'+esc(p.label)+'</b>.');}else out.fix.push({h:'Thiếu ý: '+p.label,w:'Thêm 1 câu cho ý này. Ví dụ: <i>'+esc(p.tip)+'</i>'});});
  const link=/\b(and|but|so|because)\b/i.test(t);
  link?out.ok.push('Em dùng từ nối (<b>and / but / so / because</b>) để nối ý. Rất tốt!'):out.fix.push({h:'Chưa có từ nối',w:'Dùng <b>and, but, so, because</b> để nối hai ý thành một câu dài hơn. Ví dụ: <i>I like it because it is quiet.</i>'});
  const needHit=(L.need||[]).filter(w=>new RegExp(w,'i').test(t));
  if((L.need||[]).length){needHit.length===L.need.length?out.ok.push('Em dùng đủ các mẫu câu của bài: <b>'+L.need.join(', ')+'</b>.'):out.fix.push({h:'Em chưa dùng: '+(L.need.filter(w=>!needHit.includes(w))).join(', '),w:'Thử dùng các cụm này trong thư để bài hay hơn.'});}
  // lỗi thường gặp
  const errs=[];ERRS.forEach(e=>{if(e.test(t)){const s=e.ex(t);errs.push({s,f:e.fix(s),w:e.why});}});
  // chữ cái đầu câu
  const sents=sentencesOf(t);const lowStart=sents.filter(s=>/^[a-z]/.test(s)).slice(0,1);
  lowStart.filter(s=>!errs.some(e=>/^(i|I)\b/.test(s)&&e.w.indexOf('“I”')>=0)).forEach(s=>errs.push({s:s.split(' ').slice(0,4).join(' ')+'…',f:s.charAt(0).toUpperCase()+s.slice(1).split(' ').slice(0,4).join(' ')+'…',w:'Chữ cái đầu mỗi câu phải viết hoa.'}));
  if(!/[.!?]/.test(t.replace(/[,]/g,'')))errs.push({s:'(cả bài không có dấu chấm)',f:'Kết thúc mỗi câu bằng dấu chấm (.)',w:'Mỗi câu cần dấu chấm, dấu hỏi hoặc dấu chấm than ở cuối.'});
  errs.slice(0,5).forEach(e=>out.fix.push({h:`Em viết: “${esc(e.s)}” → Nên viết: “${esc(e.f)}”`,w:e.w}));
  if(!errs.length&&n>=10)out.ok.push('Máy không thấy lỗi ngữ pháp thường gặp. Giỏi lắm!');
  // độ dài
  let length=0;if(n>=L.min&&n<=L.max*1.3){length=1;out.ok.push('Độ dài vừa đủ ('+n+' từ).');}else if(n>=L.min*0.6){length=0.5;out.fix.push({h:n<L.min?'Thư hơi ngắn ('+n+' từ)':'Thư hơi dài ('+n+' từ)',w:'Mục tiêu là '+L.min+'–'+L.max+' từ.'});}else out.fix.push({h:'Thư quá ngắn ('+n+' từ)',w:'Em cần viết ít nhất '+L.min+' từ.'});
  const language=Math.min(3,(link?1:0)+((L.need||[]).length?needHit.length/L.need.length:1)+(errs.length===0?1:errs.length<=2?0.5:0));
  const sc=structure+content+language+length;out.score=n<5?0:Math.max(0,Math.min(10,Math.round(sc*2)/2));
  out.parts={structure,content,language:Math.round(language*10)/10,length};
  return out;
}

/* ---------- nộp bài và chấm ---------- */
let finished=false;
function gradeAll(){
  const g={parts:[],rows:[]};
  PARTS.forEach((p,pi)=>{
    if(kind(p)==='items'){
      let ok=0,tot=0;const secs=[];
      p.sections.forEach((s,si)=>{const list=[];s.items.forEach((it,ii)=>{const k=key(pi,si,ii);const right=isRight(k,it),ans=answerText(k,it);tot++;if(right)ok++;list.push({n:ii+1,q:it.q,ans,right,cor:correctText(it),x:it.x||''});
        g.rows.push({part:p.tab+' · '+s.title.split('·')[0].trim()+' · câu '+(ii+1),question:it.q.replace(/<[^>]+>/g,''),answer:ans||'(bỏ trống)',correct:correctText(it),result:right?'Đúng':'Sai'});});secs.push({title:s.title,list});});
      g.parts.push({p,ok,tot,secs});
    }else if(kind(p)==='speaking'){
      let okc=0,totc=0;const list=[];
      spItems(p).forEach(o=>{const a=A[o.id]||{};const t=a.t||'';const res=(o.it.check||[]).map(c=>({label:c.label,ok:c.re?new RegExp(c.re,'i').test(t):wc(t)>=c.min}));res.forEach(r=>{totc++;if(r.ok)okc++;});
        list.push({o,t,v:a.v||'',res,rec:!!OB.REC[o.id]});
        g.rows.push({part:'Nói '+o.g+(o.i+1),question:o.it.q.replace(/<[^>]+>/g,''),answer:t+(o.tr?' | Dịch: '+(a.v||''):''),correct:'(giáo viên chấm)',result:res.filter(r=>r.ok).length+'/'+res.length+' ý đạt · '+(OB.REC[o.id]?'có ghi âm':'chưa ghi âm')});});
      g.parts.push({p,ok:okc,tot:totc,list,speak:true});
    }else{
      const fb=letterFeedback(A.p5||'',p.letter);
      g.parts.push({p,fb,letter:true,n:wc(A.p5||'')});
      g.rows.push({part:'Viết thư',question:p.letter.task,answer:(A.p5||'').trim()||'(bỏ trống)',correct:'(giáo viên chấm)',result:'Máy chấm '+fb.score+'/10 · '+wc(A.p5||'')+' từ'});
    }
  });
  return g;
}
async function finish(auto){
  if(finished)return;finished=true;
  OB.stopRecording();
  QS.submitted=true;saveQS();clearInterval(tick);
  const g=gradeAll();
  showResult(g,auto);
  // gửi ghi âm chưa gửi
  Object.keys(OB.REC).forEach(k=>{if(OB.hasBlob(k)&&!OB.REC[k].sent)OB.enqueueUpload(k,OB.REC[k].label,'',()=>{});});
  const parts=g.parts;const itemParts=parts.filter(x=>!x.speak&&!x.letter);
  const sentCount=Object.keys(OB.REC).filter(k=>OB.hasBlob(k)||OB.REC[k].sent).length;
  const payload={summary:{recordings:sentCount,avg:null,
    full:'Nói: '+g.parts.find(x=>x.speak).list.filter(x=>x.rec).length+'/'+g.parts.find(x=>x.speak).list.length+' câu có ghi âm',
    writes:'Thư: '+g.parts.find(x=>x.letter).n+' từ · máy chấm '+g.parts.find(x=>x.letter).fb.score+'/10',
    quiz:itemParts.map(x=>x.p.tab+' '+x.ok+'/'+x.tot).join(' · ')},details:g.rows};
  OB.store('payload',payload);
  await sendResult(payload);
}
async function sendResult(payload){
  const el=$('#sendstate');
  try{await OB.submit(payload);if(el)el.innerHTML='✅ <b>Đã nộp!</b> Thầy/cô đã nhận được bài của em.'+(OB.pending()?' Còn bản ghi âm đang gửi, em đợi một chút nhé.':'');}
  catch(e){if(el)el.innerHTML='⚠️ Chưa gửi được (mạng yếu?). <button class="b" id="retry">Gửi lại</button>';const r=$('#retry');if(r)r.onclick=()=>{el.textContent='Đang gửi…';sendResult(payload);};}
}
function showResult(g,auto){
  $('#quiz').hidden=true;$('#intro').hidden=true;const R=$('#result');R.hidden=false;
  const itemParts=g.parts.filter(x=>!x.speak&&!x.letter);
  const ok=itemParts.reduce((s,x)=>s+x.ok,0),tot=itemParts.reduce((s,x)=>s+x.tot,0);const pct=Math.round(ok/tot*100);
  let html=`<div class="card" style="background:var(--paper);border:2px solid var(--ink)"><h2>${auto?'⏰ Hết giờ — ':''}Kết quả của em</h2>
   <div class="big">${ok}/${tot} <span style="font-size:20px">câu đúng (${pct}%)</span></div>
   <div class="tip" id="sendstate">Đang gửi bài cho thầy/cô…</div>
   <div class="tbl"><table><tr><th>Phần</th><th>Kết quả</th></tr>${g.parts.map(x=>`<tr><td>${esc(x.p.tab)}</td><td>${x.letter?`Thư: <b>${x.fb.score}/10</b> (${x.n} từ)`:x.speak?`Đủ ý theo máy: <b>${x.ok}/${x.tot}</b> · thầy/cô sẽ nghe ghi âm`:`<b>${x.ok}/${x.tot}</b>`}</td></tr>`).join('')}</table></div>
   <p class="tip">Máy chấm theo quy tắc nên có thể bỏ sót. Thầy/cô sẽ đọc bài viết và nghe ghi âm của em để nhận xét kỹ hơn.</p></div>`;
  g.parts.forEach(x=>{
    html+=`<h2>${esc(x.p.title)}</h2>`;
    if(x.secs){x.secs.forEach(s=>{html+=`<h3>${esc(s.title)}</h3>`+s.list.map(r=>`<div class="rv ${r.right?'ok':'no'}"><b>${r.n}.</b> ${r.q}<br>${r.right?'✅ Em chọn / viết: <b>'+esc(r.ans)+'</b>':`❌ Em viết: <b>${esc(r.ans||'(bỏ trống)')}</b> · Đáp án đúng: <b>${esc(r.cor)}</b>`}${r.x?`<div class="tip">💡 ${r.x}</div>`:''}</div>`).join('');});}
    else if(x.speak){html+=x.list.map(r=>`<div class="rv ${r.res.every(c=>c.ok)&&r.rec?'ok':'no'}"><b>${r.o.g}${r.o.i+1}.</b> ${r.o.it.q}<br>Em viết: <i>${esc(r.t||'(bỏ trống)')}</i>${r.o.tr?`<br>Em dịch: <i>${esc(r.v||'(bỏ trống)')}</i>`:''}<br>${r.res.map(c=>`${c.ok?'✅':'⬜'} ${esc(c.label)}`).join('<br>')}<br>${r.rec?'🎙 Có ghi âm':'⚠️ Chưa ghi âm'}${r.o.it.model?`<div class="tip">💡 Câu tham khảo: <i>${esc(r.o.it.model)}</i></div>`:''}</div>`).join('');}
    else if(x.letter){
      html+=`<div class="card"><b>Bức thư của em:</b><br>${esc(A.p5||'(bỏ trống)').replace(/\n/g,'<br>')}</div>
      <div class="card"><div class="big">${x.fb.score}/10</div><div class="tip">Bố cục ${x.fb.parts.structure}/2 · Nội dung ${x.fb.parts.content}/${x.p.letter.points.length} · Ngôn ngữ ${x.fb.parts.language}/3 · Độ dài ${x.fb.parts.length}/1</div>
      <h3>👍 Em làm tốt</h3><ul>${x.fb.ok.map(t=>`<li>${t}</li>`).join('')||'<li>Em hãy thử viết nhiều hơn nhé.</li>'}</ul>
      <h3>🔧 Em có thể sửa</h3><ul>${x.fb.fix.map(f=>`<li><b>${f.h}</b><br>${f.w}</li>`).join('')||'<li>Không có gì cần sửa. Tuyệt vời!</li>'}</ul></div>
      <div class="card"><b>💡 Thư mẫu để em tham khảo:</b><br>${esc(x.p.letter.model).replace(/\n/g,'<br>')}</div>`;}
  });
  R.innerHTML=html;window.scrollTo({top:0});
}

/* ---------- khởi động ---------- */
if(QS.submitted&&OB.load('payload',null)){
  showIntro();$('#intro').hidden=true;
  const g=gradeAll();finished=true;showResult(g,false);
  const el=$('#sendstate');if(el)el.innerHTML='✅ Bài đã được nộp (xem lại kết quả). <button class="b" id="resend">Gửi lại cho thầy/cô</button>';const rs=$('#resend');if(rs)rs.onclick=()=>{el.textContent='Đang gửi…';sendResult(OB.load('payload'));};
}else if(QS.start&&!QS.submitted){
  if(Date.now()-QS.start>=TOTAL*1000){showIntro();$('#intro').hidden=true;$('#quiz').hidden=false;beginQuiz();}
  else beginQuiz();
}else showIntro();
window.__QUIZ={letterFeedback,A,QS,gradeAll,finish};
})();
