/* Engine trang TỰ HỌC: các bước khóa tuần tự, % tiến độ, xác nhận đã đọc, từ vựng lặp lại ~40% */
(function(){
const {$,$$,h,esc,wc,toast}=OB;
const D=window.STUDY;
OB.init({lesson:D.lesson,filePrefix:D.filePrefix||'TuHoc'});OB.recInit();
const ST=OB.load('st',{steps:{},items:{},bs:{},wr:{},chk:{},pron:{}});ST.pron=ST.pron||{};
const save=()=>OB.store('st',ST);
let touched=false;

/* ---------- từ vựng: tính lần gặp ---------- */
const EXPO={},seen={};
(D.rounds||[]).forEach(r=>{
  const list=[],nn=r.new.slice(),rr=r.review.slice();
  while(nn.length||rr.length){if(nn.length)list.push(nn.shift());if(rr.length)list.push(rr.shift());}
  EXPO[r.id]=list.map(id=>{seen[id]=(seen[id]||0)+1;return{id,n:seen[id]};});
});
function hashS(s){let x=7;for(const c of s)x=(x*31+c.charCodeAt(0))%100003;return x;}
function distract(id,k){
  const w=D.vocab[id];if(w.dis)return w.dis.slice(0,2);
  let pool=Object.keys(D.vocab).filter(x=>x!==id&&D.vocab[x].group===w.group);
  if(pool.length<2)pool=Object.keys(D.vocab).filter(x=>x!==id);
  return OB.shuffle(pool,hashS(id+k)).slice(0,2);
}
function vocabItems(roundId){
  return EXPO[roundId].map(({id,n})=>{
    const w=D.vocab[id];const d=distract(id,n);
    const badge=n===1?'<span class="badge new">🆕 Từ mới</span>':`<span class="badge rev">🔁 Ôn lại lần ${n}</span>`;
    if(n===1){
      const opts=OB.shuffle([id,d[0],d[1]],hashS(id)).map(x=>D.vocab[x].vi);
      return{kind:'choice',vid:id,badge,say:w.en,q:`<b style="font-size:20px">${esc(w.en)}</b> <span class="ipa">${esc(w.ipa||'')}</span> ${w.emoji||''}<div class="hint" style="margin:2px 0 0">Chọn nghĩa tiếng Việt đúng:</div>`,o:opts,a:opts.indexOf(w.vi),x:`<b>${esc(w.en)}</b> = ${esc(w.vi)}.`};
    }
    if(n===2){
      const opts=OB.shuffle([id,d[0],d[1]],hashS(id)+3).map(x=>D.vocab[x].en);
      return{kind:'choice',vid:id,badge,sayAfter:w.ctx.replace('___',w.en),q:`${esc(w.ctx).replace('___','<b>_____</b>')}<div class="hint" style="margin:2px 0 0">Chọn từ đúng điền vào chỗ trống:</div>`,o:opts,a:opts.indexOf(w.en),x:`Đáp án: <b>${esc(w.en)}</b> (${esc(w.vi)}).`};
    }
    return{kind:'fill',vid:id,badge,q:`Gõ từ tiếng Anh có nghĩa: <b>${esc(w.vi)}</b> ${w.emoji||''}`,a:[w.en].concat(w.alt||[]),hint:`Bắt đầu bằng chữ "${w.en[0]}" · ${w.en.length} ký tự`,x:`Đáp án: <b>${esc(w.en)}</b>.`,sayAfter:w.en};
  });
}
function itemsOf(step){return step.type==='vocab'?vocabItems(step.round):(step.items||[]);}
function weight(step){
  if(step.type==='read')return 1;
  if(step.type==='vocab'||step.type==='items')return itemsOf(step).length;
  if(step.type==='brainstorm')return 2;
  if(step.type==='solve')return 3;
  if(step.type==='write')return 3;
  if(step.type==='speak')return step.prompts.length;
  return 1;
}

/* ---------- dữ liệu phẳng ---------- */
const STEPS=[];
D.parts.filter(p=>!D.only||D.only.includes(p.id)).forEach(p=>p.steps.forEach(s=>STEPS.push(Object.assign({},s,{part:p}))));
STEPS.push({id:'finish',type:'finish',title:'Hoàn thành và nộp tiến độ',sub:'Gửi kết quả cho thầy/cô',part:{id:'fin',title:'Hoàn thành'}});
const isDone=s=>!!(ST.steps[s.id]&&ST.steps[s.id].done);
const req=s=>!s.optional;
function blocker(i){return null;}
function earlier(i){const r=[];for(let k=0;k<i;k++){if(req(STEPS[k])&&!isDone(STEPS[k])&&STEPS[k].type!=='finish')r.push(k);}return r;}
const short=s=>s.short||s.title;
const VI=/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
const ACT=/\b(pick|picks|picking|clean|collect|plant|help|carry|ask|tell|put|throw|join|volunteer|donate|recycle|organi[sz]e|invite|talk|visit|give|make|bring|share|use|start|call|take|walk)\b/i;
function solveOK(v){return !!v&&wc(v)>=3&&!VI.test(v);}
function missing(s){
  if(s.type==='read')return isDone(s)?'':(s.id===(D.glossStep||'r-read')?'chưa tra đủ 5 từ và chưa tick “Em đã đọc kỹ”':'chưa tick “Em đã đọc kỹ”');
  if(s.type==='items'||s.type==='vocab'){const its=itemsOf(s);const n=its.filter((_,i)=>{const k=ST.items[s.id+'#'+i];return !(k&&k.ok!=null);}).length;return n?`còn ${n}/${its.length} câu chưa làm`:'';}
  if(s.type==='solve'){const n=s.scenarios.filter((_,i)=>!solveOK((ST.bs[s.id]||{})[i])).length;return n?`còn ${n}/${s.scenarios.length} tình huống chưa viết`:'';}
  if(s.type==='speak'){const n=s.prompts.filter((p,i)=>!OB.REC[s.id+'_'+i]).length;const c=(s.check||[]).some((_,i)=>!(ST.chk[s.id]||{})[i]);return n?`còn ${n}/${s.prompts.length} bản ghi âm chưa làm`:(c?'chưa tick phần tự kiểm tra':(isDone(s)?'':'chưa bấm “Xong phần nói”'));}
  return isDone(s)?'':'chưa hoàn thành';
}
function progress(){let t=0,d=0;STEPS.forEach(s=>{if(!req(s))return;const w=weight(s);t+=w;if(isDone(s))d+=w;});return{t,d,pct:t?Math.round(d/t*100):0};}
function nextStep(){return STEPS.find(s=>req(s)&&!isDone(s));}

/* ---------- khung trang ---------- */
const root=$('#app');
root.innerHTML=`<header class="hero"><div><h1>${D.title}</h1><p class="sub">${D.sub}</p><div class="tip">${D.intro||''}</div></div><div class="stamp" aria-hidden="true"><span class="e">${D.emoji}</span><span class="t">${D.stampTitle||''}</span><span class="s">${D.stampSub||''}</span></div></header>
<div class="topbar"><div class="row"><div class="pbar"><i id="pfill"></i></div><div class="pct" id="ppct">0%</div></div><div class="navchips" id="navchips"></div><div class="pwarn" id="pwarn"></div></div>
<div id="banner"></div><div id="steps"></div>`;
const stepsEl=$('#steps');
const EL={};
let lastPart=null;
STEPS.forEach((s,i)=>{
  if(!lastPart||lastPart!==s.part.id){
    lastPart=s.part.id;
    stepsEl.appendChild(h('div',{class:'part','data-part':s.part.id},`${esc(s.part.title)} ${s.part.required===false?'<small>Tùy chọn</small>':s.part.id==='fin'?'':'<small>Bắt buộc</small>'}<small class="pp"></small>`));
  }
  const el=h('section',{class:'step','data-id':s.id});
  el.innerHTML=`<div class="sh"><div class="ic"></div><div class="tt">${i+1}. ${esc(s.title)}<small>${s.sub?esc(s.sub):''}${s.optional?' <span class="badge optional">Tùy chọn</span>':''}</small></div><div class="ch">▾</div></div><div class="sb" hidden></div>`;
  stepsEl.appendChild(el);EL[s.id]=el;
  $('.sh',el).onclick=()=>toggle(i);
});
function paint(){
  STEPS.forEach((s,i)=>{
    const el=EL[s.id],b=blocker(i),done=isDone(s);
    const locked=!!b&&!done;
    el.classList.toggle('done',done);el.classList.toggle('locked',locked);
    el.classList.toggle('active',!done&&!locked&&req(s)&&nextStep()===s);
    $('.ic',el).textContent=done?'✅':locked?'🔒':'▶️';
  });
  $$('.part[data-part]').forEach(p=>{
    const ss=STEPS.filter(s=>s.part.id===p.dataset.part&&req(s));const dn=ss.filter(isDone).length;
    const pp=$('.pp',p);pp.textContent=ss.length?`${dn}/${ss.length} bước`:'';
  });
  const pr=progress();$('#pfill').style.width=pr.pct+'%';$('#ppct').textContent=pr.pct+'%';
  paintNav();aheadUpdate();
}
function paintNav(){
  const box=$('#navchips');if(!box)return;
  if(!box.dataset.b){STEPS.forEach((s,i)=>{const b=h('button',{class:'nc','data-i':i,title:s.title},`<span class="n">${i+1}</span><span class="l">${esc(short(s))}</span>`);b.onclick=()=>jump(i);box.appendChild(b);});box.dataset.b=1;}
  const nx=nextStep();
  STEPS.forEach((s,i)=>{const b=box.children[i];const d=isDone(s);b.classList.toggle('done',d);b.classList.toggle('todo',!d&&s.type!=='finish');b.classList.toggle('cur',nx===s);});
  const left=STEPS.filter(s=>req(s)&&!isDone(s)&&s.type!=='finish');
  $('#pwarn').innerHTML=left.length?`⚠️ Còn <b>${left.length}</b> phần chưa làm. Phần tiếp theo: <b>${esc(short(left[0]))}</b>`:'✅ Em đã làm đủ các phần. Vào bước cuối để nộp bài.';
}
function jump(i){const s=STEPS[i];const sb=$('.sb',EL[s.id]);if(sb.hidden)toggle(i);setTimeout(()=>EL[s.id].scrollIntoView({behavior:'smooth',block:'start'}),60);}
function aheadUpdate(){
  STEPS.forEach((s,i)=>{const sb=$('.sb',EL[s.id]);if(!sb||sb.hidden||!sb.dataset.built)return;let a=$('.ahead',sb);const e=earlier(i);
    if(!e.length||isDone(s)||s.type==='finish'){if(a)a.remove();return;}
    if(!a){a=h('div',{class:'ahead'});sb.prepend(a);}
    a.innerHTML=`⚠️ <b>Em đang xem trước.</b> Em chưa làm xong: ${e.map(k=>`<a href="#" data-j="${k}">${esc(short(STEPS[k]))}</a>`).join(', ')}. Em vẫn xem được, nhưng nhớ quay lại làm nhé.`;
    $$('[data-j]',a).forEach(l=>l.onclick=ev=>{ev.preventDefault();jump(+l.dataset.j);});
  });
}
function addFoot(s,sb){
  const f=h('div',{class:'nextbar','data-foot':s.id});
  f.innerHTML='<div class="nmsg"></div><button class="b primary big" data-next></button>';
  sb.appendChild(f);
  $('[data-next]',f).onclick=()=>{
    const miss=(isDone(s)||!req(s))?'':missing(s);
    if(!miss){goNext(s);return;}
    const m=$('.nmsg',f);
    m.innerHTML=`<div class="alert">⚠️ Phần này em chưa làm xong: <b>${miss}</b><div class="row" style="margin-top:8px"><button class="b" data-back>↩ Quay lại làm tiếp</button><button class="b" data-skipon>Vẫn sang phần sau ▶</button></div></div>`;
    $('[data-back]',m).onclick=()=>{m.innerHTML='';};
    $('[data-skipon]',m).onclick=()=>{m.innerHTML='';goNext(s);};
  };
  refreshFoot(s);
}
function refreshFoot(s){
  const f=document.querySelector(`[data-foot="${s.id}"]`);if(!f)return;
  const i=STEPS.indexOf(s),nx=STEPS[i+1];const b=$('[data-next]',f);
  b.textContent=nx?`Tiếp theo ▶ ${nx.title}`:'Xong';b.classList.toggle('ready',isDone(s));
  if(isDone(s))$('.nmsg',f).innerHTML='<div class="okmsg">✅ Em đã xong phần này. Bấm nút bên dưới để sang phần tiếp theo.</div>';
}
function goNext(s){const i=STEPS.indexOf(s);const nx=STEPS[i+1];if(!nx)return;const sb=$('.sb',EL[s.id]);sb.hidden=true;$('.ch',EL[s.id]).textContent='▾';jump(i+1);}
function toggle(i){
  const s=STEPS[i],b=blocker(i);
  const sb=$('.sb',EL[s.id]);
  if(sb.hidden){if(!sb.dataset.built){build(s,sb);sb.dataset.built='1';}sb.hidden=false;$('.ch',EL[s.id]).textContent='▴';touched=true;aheadUpdate();const e=earlier(i);if(e.length&&!isDone(s))toast('⚠️ Em đang xem trước. Còn '+e.length+' phần phía trên chưa làm xong.',4500);}
  else{sb.hidden=true;$('.ch',EL[s.id]).textContent='▾';}
}
function openStep(s){const i=STEPS.indexOf(s);STEPS.forEach(x=>{const sb=$('.sb',EL[x.id]);if(x!==s&&!sb.hidden&&!isDone(x)){}});const sb=$('.sb',EL[s.id]);if(sb.hidden)toggle(i);setTimeout(()=>EL[s.id].scrollIntoView({behavior:'smooth',block:'start'}),60);}
function complete(s,extra){
  if(isDone(s))return;
  ST.steps[s.id]=Object.assign({done:true,t:Date.now()},extra||{});save();paint();
  toast(`🎉 Xong "${s.title}"! Bấm “Tiếp theo” để sang phần sau.`);
  refreshFoot(s);
}

/* ---------- xây nội dung từng bước ---------- */
function build(s,sb){
  const optBar=s.optional&&!isDone(s)?`<div class="banner" style="margin-top:10px"><span>Phần này là <b>tùy chọn</b> (thử thách thêm).</span><button class="b" data-skip>⏭ Bỏ qua phần này</button></div>`:'';
  sb.innerHTML=optBar;
  const sk=$('[data-skip]',sb);if(sk)sk.onclick=()=>{ST.steps[s.id]={done:true,skipped:true};save();paint();toast('Đã bỏ qua phần tùy chọn.');const nx=nextStep();if(nx)openStep(nx);};
  const body=h('div');sb.appendChild(body);
  ({read:buildRead,vocab:buildItems,items:buildItems,brainstorm:buildBrain,solve:buildSolve,write:buildWrite,speak:buildSpeak,finish:buildFinish})[s.type](s,body);
  if(s.type!=='finish')addFoot(s,sb);
}
function buildRead(s,b){
  b.innerHTML=`<div class="rd">${s.html}</div>`;
  const done=isDone(s);
  const row=h('div',{class:'card row'},`<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="c_${s.id}" ${done?'checked disabled':''}> <b>Em đã đọc kỹ phần này</b></label><button class="b primary" ${done?'disabled':'disabled'} id="g_${s.id}">${done?'Đã xác nhận ✅':'Xác nhận và tiếp tục ▶'}</button>`);
  b.appendChild(row);
  const c=$('input',row),g=$('button',row);
  if(!done){c.onchange=()=>{g.disabled=!c.checked;};g.onclick=()=>complete(s);}
}
function buildItems(s,b){
  const items=itemsOf(s);
  if(s.intro)b.insertAdjacentHTML('beforeend',`<div class="card ins">${s.intro}</div>`);
  if(s.type==='vocab'){const r=D.rounds.find(x=>x.id===s.round);const rv=r.review.length,tot=r.new.length+rv;b.insertAdjacentHTML('beforeend',`<div class="card"><b>Vòng này:</b> ${r.new.length} từ mới${rv?` + ${rv} từ ôn lại`:''}. Tỉ lệ ôn lại: <b>${Math.round(rv/tot*100)}%</b>. Mỗi từ gặp lại sẽ khó hơn một chút (nhận ra nghĩa → điền vào câu → tự gõ).</div>`);}
  const sum=h('div',{class:'card'});b.appendChild(sum);
  const keys=[];
  const refresh=()=>{
    const done=keys.filter(k=>ST.items[k]&&ST.items[k].ok!=null).length,first=keys.filter(k=>ST.items[k]&&ST.items[k].first).length;
    sum.innerHTML=`Đã xong <b>${done}/${items.length}</b> câu · đúng ngay lần đầu <span class="score ${first>=items.length*0.8?'hi':first>=items.length*0.5?'mid':'lo'}">${first}/${items.length}</span>`;
    if(done===items.length&&!isDone(s)){complete(s,{first,total:items.length});}
  };
  items.forEach((it,i)=>{const key=s.id+'#'+i;keys.push(key);b.appendChild(renderItem(it,i,key,refresh));});
  refresh();
}
function fin(key,ok,tries,refresh){ST.items[key]=Object.assign(ST.items[key]||{},{ok,tries,first:ok&&tries===1});save();touched=true;refresh();}
function renderItem(it,i,key,refresh){
  const st=ST.items[key]||(ST.items[key]={tries:0,ok:null,wrong:[]});if(!st.wrong)st.wrong=[];
  const d=h('div',{class:'item'});
  const sayBtn=it.say?` <button class="say" data-say="${esc(it.say)}">🔊</button>`:'';
  d.innerHTML=`<div class="qt">${i+1}. ${it.badge||''}${it.q}${sayBtn}</div><div class="body"></div><div class="fb"></div>`;
  const body=$('.body',d),fb=$('.fb',d);
  const showX=(ok)=>{fb.innerHTML=(ok?'✅ <b>Đúng rồi!</b> ':'💡 ')+(it.x||'')+(it.sayAfter?` <button class="say" data-say="${esc(it.sayAfter)}">🔊</button>`:'');d.classList.toggle('right',!!ok);d.classList.toggle('wrong',ok===false);};
  if(it.kind==='choice'){
    body.className='opts';body.innerHTML=it.o.map((o,k)=>`<button class="b opt" data-k="${k}">${esc(o)}</button>`).join('');
    const paint=()=>{$$('.opt',body).forEach(b=>{const k=+b.dataset.k;b.classList.remove('right','wrong');if(st.wrong.includes(k)){b.classList.add('wrong');b.disabled=true;}if(st.ok!=null&&k===it.a){b.classList.add('right');}if(st.ok!=null)b.disabled=true;});};
    body.onclick=e=>{const b=e.target.closest('.opt');if(!b||st.ok!=null)return;const k=+b.dataset.k;st.tries++;
      if(k===it.a){fin(key,true,st.tries,refresh);paint();showX(true);}
      else{st.wrong.push(k);save();paint();fb.innerHTML=`🤔 Chưa đúng. Em thử lại nhé!${st.tries>=2&&it.hint?' Gợi ý: '+it.hint:''}`;d.classList.remove('right');}};
    paint();if(st.ok!=null)showX(true);
  }else if(it.kind==='fill'){
    body.innerHTML=`<div class="row"><input type="text" style="flex:1;min-width:180px" placeholder="Gõ đáp án…" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="b primary">Kiểm tra</button></div>`;
    const inp=$('input',body),btn=$('button',body);
    const lock=()=>{inp.disabled=true;btn.disabled=true;};
    const check=()=>{if(st.ok!=null)return;const v=inp.value.trim();if(!v){inp.focus();return;}st.tries++;
      if(OB.same(v,it.a)){inp.value=v;lock();fin(key,true,st.tries,refresh);showX(true);}
      else if(st.tries>=3){inp.value=it.a[0];lock();fin(key,false,st.tries,refresh);showX(false);fb.insertAdjacentHTML('afterbegin','Không sao, mình xem đáp án nhé. ');}
      else{save();fb.innerHTML=`🤔 Chưa đúng. ${it.hint?'Gợi ý: '+it.hint:'Đọc lại thật kỹ rồi thử lại nhé.'}`;}};
    btn.onclick=check;inp.onkeydown=e=>{if(e.key==='Enter')check();};
    if(st.ok!=null){inp.value=it.a[0];lock();showX(st.ok);}
  }else if(it.kind==='order'){
    const words=OB.shuffle(it.w,hashS(key));
    body.innerHTML=`<div class="slot"></div><div class="bank"></div><div class="row" style="margin-top:6px"><button class="b primary" data-c>Kiểm tra</button><button class="b" data-r>↺ Xóa</button></div>`;
    const slot=$('.slot',body),bank=$('.bank',body);let pick=[];
    words.forEach((w,k)=>bank.appendChild(h('button',{class:'chip','data-k':k},esc(w))));
    const redraw=()=>{slot.innerHTML=pick.map(k=>`<button class="chip" data-p="${k}">${esc(words[k])}</button>`).join('');$$('.chip',bank).forEach(c=>c.classList.toggle('used',pick.includes(+c.dataset.k)));};
    bank.onclick=e=>{const c=e.target.closest('.chip');if(c&&st.ok==null){pick.push(+c.dataset.k);redraw();}};
    slot.onclick=e=>{const c=e.target.closest('.chip');if(c&&st.ok==null){pick=pick.filter(k=>k!==+c.dataset.p);redraw();}};
    $('[data-r]',body).onclick=()=>{if(st.ok==null){pick=[];redraw();}};
    $('[data-c]',body).onclick=()=>{if(st.ok!=null)return;if(!pick.length){toast('Em bấm các từ để xếp thành câu nhé.');return;}
      const v=pick.map(k=>words[k]).join(' ');st.tries++;
      if(OB.same(v,[it.a].concat(it.alt||[]))){fin(key,true,st.tries,refresh);showX(true);$('[data-c]',body).disabled=true;}
      else if(st.tries>=3){slot.textContent=it.a;fin(key,false,st.tries,refresh);showX(false);$('[data-c]',body).disabled=true;}
      else{save();fb.innerHTML='🤔 Chưa đúng. '+(it.hint?'Gợi ý: '+it.hint:'Thử đổi thứ tự các từ nhé.');}};
    if(st.ok!=null){slot.textContent=it.a;$('[data-c]',body).disabled=true;showX(st.ok);}
  }
  return d;
}
function buildBrain(s,b){
  b.insertAdjacentHTML('beforeend',`<p class="hint">${s.prompt}</p>`);
  const vals=ST.bs[s.id]||(ST.bs[s.id]={});
  const status=h('div',{class:'tip'});
  s.fields.forEach((f,fi)=>{
    const c=h('div',{class:'card'},`<b>${esc(f.label)}</b><div class="hint" style="margin:0 0 6px">${esc(f.hint||'')}</div>`);
    for(let k=0;k<f.n;k++){const id=fi+'_'+k;const inp=h('input',{type:'text',placeholder:'…',style:'margin:3px 0'});inp.value=vals[id]||'';inp.oninput=()=>{vals[id]=inp.value;save();upd();};c.appendChild(inp);}
    b.appendChild(c);
  });
  const btn=h('button',{class:'b primary'},'Xong, tiếp tục ▶');b.appendChild(status);b.appendChild(btn);
  const filled=()=>Object.values(vals).filter(v=>v&&v.trim()).length;
  function upd(){const n=filled();status.textContent=`Em đã viết ${n} từ/cụm từ (cần ít nhất ${s.min}).`;btn.disabled=n<s.min||isDone(s);}
  btn.onclick=()=>complete(s);upd();if(isDone(s)){btn.textContent='Đã xong ✅';btn.disabled=true;}
}
function buildWrite(s,b){
  b.insertAdjacentHTML('beforeend',`<p class="hint">${s.prompt}</p>${s.tips?`<div class="card">${s.tips}</div>`:''}`);
  const ta=h('textarea');ta.value=ST.wr[s.id]||'';if(isDone(s))ta.disabled=true;
  const cnt=h('div',{class:'tip'}),ck=h('ul',{class:'checks'}),btn=h('button',{class:'b primary'},'Chốt bài viết ✔');
  b.append(ta,cnt,ck,btn);
  const upd=()=>{const n=wc(ta.value);const res=s.checks.map(c=>[c.label,new RegExp(c.re,'i').test(ta.value)]);
    ck.innerHTML=res.map(([l,ok])=>`<li>${ok?'✅':'⬜'} ${esc(l)}</li>`).join('');
    cnt.innerHTML=`<b>${n}</b> từ (cần ít nhất ${s.min})`;
    btn.disabled=isDone(s)||n<s.min||!res.every(r=>r[1]);};
  ta.oninput=()=>{ST.wr[s.id]=ta.value;save();upd();touched=true;};upd();
  btn.onclick=()=>{ST.wr[s.id]=ta.value;complete(s);ta.disabled=true;if(s.model)b.insertAdjacentHTML('beforeend',`<div class="card"><b>💡 Bài tham khảo:</b><br>${s.model}</div>`);};
  if(isDone(s)){btn.textContent='Đã chốt ✅';if(s.model)b.insertAdjacentHTML('beforeend',`<div class="card"><b>💡 Bài tham khảo:</b><br>${s.model}</div>`);}
}
function buildSolve(s,b){
  if(s.intro)b.insertAdjacentHTML('beforeend',`<div class="card ins">${s.intro}</div>`);
  const vals=ST.bs[s.id]||(ST.bs[s.id]={});
  const status=h('div',{class:'tip'}),btn=h('button',{class:'b primary'},'Hoàn thành phần này ✔');
  const st=()=>{const n=s.scenarios.filter((_,i)=>solveOK(vals[i])).length;status.textContent=`Em đã viết ${n}/${s.scenarios.length} ý hợp lệ.`;btn.disabled=n<s.scenarios.length||isDone(s);};
  const models=()=>{if(b.querySelector('.models'))return;b.insertAdjacentHTML('beforeend','<div class="card models"><b>💡 Ý tham khảo:</b><br>'+s.scenarios.map((x,i)=>`${i+1}. ${esc(x.model)}`).join('<br>')+'</div>');};
  s.scenarios.forEach((sc,i)=>{
    const c=h('div',{class:'card scen'},`<div class="qt"><b>${i+1}.</b> ${sc.q}</div><div class="row" style="margin:6px 0"><button class="b" data-vi>🇻🇳 Hiện / ẩn tiếng Việt</button></div><div class="vi" hidden>${esc(sc.vi)}</div><div class="hint">💡 ${sc.hint}</div><textarea rows="2" placeholder="Write your idea in English…"></textarea><div class="fb2 tip"></div>`);
    const ta=$('textarea',c),fb=$('.fb2',c);ta.value=vals[i]||'';if(isDone(s))ta.disabled=true;
    $('[data-vi]',c).onclick=()=>{const v=$('.vi',c);v.hidden=!v.hidden;};
    const show=()=>{const v=ta.value.trim();
      if(!v)fb.textContent='';
      else if(VI.test(v))fb.innerHTML='<span class="bad">✍️ Em viết bằng <b>tiếng Anh</b> nhé (không dùng chữ có dấu tiếng Việt).</span>';
      else if(wc(v)<3)fb.textContent='Viết thêm một chút: ít nhất 3 từ.';
      else fb.innerHTML='✅ Ý hay!'+(ACT.test(v)?'':' <span class="bad">Gợi ý: dùng động từ hành động như pick up, clean up, help, ask…</span>');};
    ta.oninput=()=>{vals[i]=ta.value;save();touched=true;show();st();};
    show();b.appendChild(c);
  });
  b.append(status,btn);st();
  btn.onclick=()=>{complete(s);btn.textContent='Đã xong ✅';btn.disabled=true;$$('textarea',b).forEach(t=>t.disabled=true);models();};
  if(isDone(s)){btn.textContent='Đã xong ✅';btn.disabled=true;models();}
}
/* ---------- chấm phát âm bằng nhận diện giọng nói (Chrome); chỉ để tham khảo ---------- */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const SAMEW={neighborhood:'neighbourhood',colour:'color'};
function toks(t){return String(t).toLowerCase().replace(/[’]/g,"'").replace(/[^a-z0-9' ]+/g,' ').split(/\s+/).map(w=>w.replace(/^'+|'+$/g,'')).filter(Boolean).map(w=>SAMEW[w]||w);}
function grade(target,heard){
  const T=toks(target),H=toks(heard),n=T.length,m=H.length;
  const dp=Array.from({length:n+1},()=>Array(m+1).fill(0));
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=T[i-1]===H[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  const ok=Array(n).fill(false);let i=n,j=m;
  while(i>0&&j>0){if(T[i-1]===H[j-1]){ok[i-1]=true;i--;j--;}else if(dp[i-1][j]>=dp[i][j-1])i--;else j--;}
  return{pct:n?Math.round(ok.filter(Boolean).length/n*100):0,heard:String(heard).trim(),words:T.map((w,k)=>({w,ok:ok[k]})),t:Date.now()};
}
function showPron(box,res){
  const bad=[...new Set(res.words.filter(x=>!x.ok).map(x=>x.w))];
  const cls=res.pct>=90?'hi':res.pct>=70?'mid':'lo';
  box.innerHTML=`<div class="pronbox"><div><span class="pctbig ${cls}">${res.pct}%</span> từ em đọc đúng</div><div class="vi">Máy nghe được: “${esc(res.heard||'(chưa nghe rõ, em thử ghi âm lại, nói to và gần micro hơn)')}”</div>`+
   (bad.length?`<div style="margin-top:6px"><b>Từ chưa đúng:</b> ${bad.map(w=>`<button class="say bad" data-say="${esc(w)}">🔊 ${esc(w)}</button>`).join(' ')}</div><div class="tip">Bấm 🔊 để nghe cách đọc từ đó, rồi ghi âm lại cả câu.</div>`:`<div style="margin-top:6px">🎉 Em đọc đúng tất cả các từ!</div>`)+
   `<div class="tip" style="color:var(--muted);font-weight:500">Máy nhận diện chỉ để tham khảo. Cô sẽ nghe lại bản ghi âm của em.</div></div>`;
}
function attachPron(rec,key,target,box){
  const recB=$('[data-a=rec]',rec);
  if(ST.pron[key])showPron(box,ST.pron[key]);
  let r=null,txt='',on=false;
  new MutationObserver(()=>{
    const live=/Dừng/.test(recB.textContent);
    if(live&&!on){on=true;txt='';
      if(!SR)return;
      try{r=new SR();r.lang='en-GB';r.interimResults=false;r.continuous=true;r.maxAlternatives=1;
        r.onresult=e=>{for(let k=e.resultIndex;k<e.results.length;k++){if(e.results[k].isFinal)txt+=' '+e.results[k][0].transcript;}};
        r.onerror=()=>{};r.start();}catch(_){r=null;}
    }else if(!live&&on){on=false;
      if(!SR||!r){box.innerHTML=SR?'':'<div class="tip">Trình duyệt này chưa nhận diện giọng nói nên chưa tính được %. Cô sẽ nghe bản ghi âm của em. (Dùng Chrome để xem % đọc đúng.)</div>';return;}
      const rr=r;r=null;box.innerHTML='<div class="tip">⏳ Đang chấm phát âm…</div>';
      let fin=false;const done=()=>{if(fin)return;fin=true;const res=grade(target,txt);ST.pron[key]=res;save();showPron(box,res);};
      rr.onend=done;setTimeout(done,2500);try{rr.stop();}catch(_){done();}
    }
  }).observe(recB,{childList:true,characterData:true,subtree:true});
}
function buildSpeak(s,b){
  if(s.intro)b.insertAdjacentHTML('beforeend',`<div class="card ins">${s.intro}</div>`);
  const status=h('div',{class:'tip'}),btn=h('button',{class:'b primary'},'Xong phần nói ▶');
  const chk=ST.chk[s.id]||(ST.chk[s.id]={});
  const upd=()=>{const rec=s.prompts.filter((p,i)=>OB.REC[s.id+'_'+i]).length;const cks=(s.check||[]).every((c,i)=>chk[i]);
    status.innerHTML=`Đã ghi âm <b>${rec}/${s.prompts.length}</b>${s.check?' · tự kiểm tra '+(cks?'✅':'⬜'):''}`;btn.disabled=isDone(s)||rec<s.prompts.length||!cks;};
  s.prompts.forEach((p,i)=>{
    const key=s.id+'_'+i;
    const c=h('div',{class:'item'},`<div class="qt">${i+1}. ${p.ask?`<div class="ask">❓ ${p.ask}</div>`:''}<div>${p.text}</div>${p.vi?`<div class="vi">${esc(p.vi)}</div>`:''}</div><div class="row">${p.say?`<button class="b" data-say="${esc(p.say)}">🔊 Nghe mẫu</button><button class="b" data-say="${esc(p.say)}" data-slow="1">🐢 Chậm</button>`:''}</div>${p.hint?`<div class="tip">💡 ${p.hint}</div>`:''}`);
    const target=p.say||p.text.replace(/<[^>]+>/g,'');
    const rec=OB.recorder({key,label:s.title+' · '+(i+1),target:()=>target,maxSec:p.maxSec||60,onChange:upd});
    c.appendChild(rec);const box=h('div',{class:'pron'});c.appendChild(box);attachPron(rec,key,target,box);
    b.appendChild(c);
  });
  if(s.check){const c=h('div',{class:'card'},'<b>Tự kiểm tra trước khi xong:</b>');s.check.forEach((t,i)=>{const l=h('label',{style:'display:flex;gap:8px;margin:4px 0'},`<input type="checkbox" ${chk[i]?'checked':''}> <span>${esc(t)}</span>`);$('input',l).onchange=e=>{chk[i]=e.target.checked;save();upd();};c.appendChild(l);});b.appendChild(c);}
  b.append(status,btn);btn.onclick=()=>complete(s);upd();if(isDone(s)){btn.textContent='Đã xong ✅';btn.disabled=true;}
}
function buildFinish(s,b){
  const rows=[];
  STEPS.forEach(x=>{if(x.type==='vocab'||x.type==='items'){const its=itemsOf(x);const ks=its.map((_,i)=>x.id+'#'+i);const first=ks.filter(k=>ST.items[k]&&ST.items[k].first).length;rows.push({part:x.title,question:`${its.length} câu`,answer:`đúng ngay lần đầu ${first}/${its.length}`,correct:'',result:isDone(x)?(x.skipped?'Bỏ qua':'Xong'):'Chưa xong'});}
    if(x.type==='solve')x.scenarios.forEach((sc,i)=>rows.push({part:x.title,question:sc.q.replace(/<[^>]+>/g,''),answer:(ST.bs[x.id]||{})[i]||'',correct:sc.model,result:'(giáo viên xem)'}));
    if(x.type==='write'&&ST.wr[x.id])rows.push({part:x.title,question:x.prompt.replace(/<[^>]+>/g,''),answer:ST.wr[x.id],correct:'(giáo viên chấm)',result:wc(ST.wr[x.id])+' từ'});
    if(x.type==='brainstorm'&&ST.bs[x.id])rows.push({part:x.title,question:'Brainstorm',answer:Object.values(ST.bs[x.id]).filter(Boolean).join(', '),correct:'',result:'Xong'});
    if(x.type==='speak')x.prompts.forEach((p,i)=>{const k=x.id+'_'+i,pr=ST.pron[k],r=OB.REC[k];rows.push({part:x.title+' · '+(i+1),question:(p.say||p.text.replace(/<[^>]+>/g,'')),answer:pr?pr.heard:'',correct:'',result:(r?`ghi âm ${r.dur}s, ${r.sent?'đã gửi':'chưa gửi'}`:'chưa ghi âm')+(pr?` · máy chấm ${pr.pct}% · sai: ${[...new Set(pr.words.filter(w=>!w.ok).map(w=>w.w))].join(', ')||'không'}`:'')});});});
  b.innerHTML=`<p>Em đã hoàn thành <b>${progress().pct}%</b> bài. Bấm nút dưới đây để gửi kết quả cho thầy/cô.</p><div id="fleft"></div><div class="card row">Tên em: <input type="text" id="fname" style="max-width:260px" value="${esc(OB.stuName())}"></div><button class="b primary" id="fsend" style="font-size:18px;padding:10px 18px">📨 Nộp tiến độ cho thầy/cô</button><div class="tip" id="fmsg"></div><div id="funsent"></div>`;
  const msg=$('#fmsg',b),un=$('#funsent',b),fl=$('#fleft',b);
  const leftList=()=>STEPS.filter(x=>x!==s&&req(x)&&!isDone(x));
  const chkLeft=()=>{const l=leftList();fl.innerHTML=l.length?`<div class="alert">⚠️ Em còn <b>${l.length}</b> phần chưa làm xong: ${l.map(x=>`<a href="#" data-j="${STEPS.indexOf(x)}">${esc(short(x))}</a>`).join(', ')}. Bấm tên phần để quay lại làm.</div>`:'';$$('[data-j]',fl).forEach(a=>a.onclick=e=>{e.preventDefault();jump(+a.dataset.j);});};chkLeft();setInterval(chkLeft,3000);
  const chkUn=()=>{const n=Object.keys(OB.REC).filter(k=>!OB.REC[k].sent).length;un.innerHTML=n?`<p class="warn">⚠️ Còn <b>${n}</b> bản ghi âm chưa gửi. Vào phần ghi âm, nghe lại rồi bấm <b>📤 Gửi bản ghi này</b>.</p>`:'';};chkUn();setInterval(chkUn,3000);
  let ack=false;
  $('#fsend',b).onclick=async()=>{
    const nm=$('#fname',b).value.trim();if(!nm){toast('Em ghi tên trước nhé.');return;}OB.store('name',nm);
    const pr=progress();const l=leftList();
    if(l.length&&!ack){ack=true;msg.innerHTML=`⚠️ Em còn ${l.length} phần chưa làm. Em bấm <b>📨 Nộp</b> thêm lần nữa nếu vẫn muốn nộp ngay, hoặc quay lại làm cho xong nhé.`;return;}
    $('#fsend',b).disabled=true;msg.textContent='Đang gửi…';
    try{
      const sent=Object.keys(OB.REC).filter(k=>OB.REC[k].sent).length;
      await OB.submit({summary:{recordings:sent,avg:null,full:'Tiến độ '+pr.pct+'%'+(l.length?' · CHƯA LÀM: '+l.map(short).join(', '):' · làm đủ các phần'),writes:'',quiz:rows.filter(r=>r.question.includes('câu')).map(r=>r.part+': '+r.answer).join(' · ')},details:rows});
      msg.innerHTML='✅ <b>Đã nộp!</b> Thầy/cô đã nhận được bài của em.'+(OB.pending()?' Còn bản ghi âm đang gửi, em đợi một chút nhé.':'');
      ST.steps.finish={done:true,t:Date.now()};save();paint();
    }catch(e){msg.textContent='⚠️ Chưa gửi được (mạng yếu?). Em bấm lại nhé.';$('#fsend',b).disabled=false;}
  };
}

/* ---------- nhắc nhở ---------- */
OB.guardUnload=()=>{const p=progress();return touched&&p.pct<100;};
setInterval(()=>{const p=progress();if(p.pct<100&&touched){toast(`⏰ Em đã xong ${p.pct}%. Cố lên, còn bước "${nextStep().title}" nữa nhé!`,5000);}},5*60*1000);

window.__STUDY={itemsOf:id=>itemsOf(STEPS.find(s=>s.id===id)),steps:STEPS,progress,grade,missing};
/* ---------- khởi động ---------- */
let started=false;
paint();
OB.gate(D.emoji,()=>start());
if(OB.stuName()){const g=$('.gate');if(g)g.remove();start();}
function start(){
  if(started)return;started=true;
  const p=progress(),nx=nextStep();
  if(p.pct>0&&p.pct<100){$('#banner').innerHTML=`<div class="banner"><span>👋 Chào mừng em quay lại! Em đã xong <b>${p.pct}%</b>. Em còn bước <b>${esc(nx.title)}</b> chưa xong.</span><button class="b primary" id="goNext">Đến bước tiếp theo ▶</button></div>`;$('#goNext').onclick=()=>openStep(nx);}
  else if(p.pct===0&&nx){openStep(nx);}
}
})();
