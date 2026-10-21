/* Phụ trợ cho bài tự học lớp 7: bấm từ để tra (lần 1: đọc + phiên âm + loại từ; lần 2: nghĩa; lần 3: đóng) và nhắc lại brainstorm */
(function(){
const D=window.STUDY,G=D.gloss||{};
const css=document.createElement('style');
css.textContent='.gl{border-bottom:2px dotted var(--sea,#0a7);cursor:pointer;padding:0 1px;border-radius:3px}.gl:hover,.gl.on{background:var(--seaSoft,#dff4f2)}.glpop{display:inline-block;margin:2px 4px;padding:3px 10px;border-radius:12px;background:var(--sunSoft,#fff3cd);font-size:.92em;line-height:1.5;vertical-align:baseline}.glpop .pos{font-style:italic;color:var(--muted,#667)}.glpop .vn{display:block;font-weight:700}.rd[data-gloss] p{line-height:2.1}';
document.head.appendChild(css);
const seen=new Set();
function ranked(){return Object.keys(G).sort((a,b)=>G[b].m.length-G[a].m.length);}
document.addEventListener('click',e=>{
  const el=e.target.closest('.gl');if(!el)return;
  const g=G[el.dataset.k];if(!g)return;
  const n=+(el.dataset.n||0);
  const nxt=el.nextElementSibling;if(nxt&&nxt.classList.contains('glpop'))nxt.remove();
  if(n===1){el.dataset.n=0;el.classList.remove('on');return;}
  const pop=document.createElement('span');pop.className='glpop';
  pop.innerHTML=`🔊 <b>${g.w}</b> <span>${g.ipa}</span> · <span class="pos">${g.pos}</span>`+`<span class="vn">🇻🇳 ${g.vi}</span>`;
  el.after(pop);el.dataset.n=1;el.classList.add('on');
  if(window.OB)OB.speak(g.w,0.8);seen.add(el.dataset.k);upd();
});
function upd(){
  const c=document.querySelector('input[id^="c_"][data-gate="gloss"]');
  const need=D.glossNeed||5;
  const cnt=document.getElementById('glcount');
  if(cnt)cnt.innerHTML=`Em đã bấm tra <b>${seen.size}</b> từ (cần ít nhất ${need}). ${seen.size>=need?'✅ Đủ rồi, em tick bên dưới.':'👆 Bấm vào các từ gạch chấm để nghe và xem nghĩa.'}`;
  if(c&&!c.checked)c.disabled=seen.size<need;
}
const RECALL=D.recall||[];
function recall(box){
  let vals=[];try{const st=JSON.parse(localStorage.getItem('ob-'+D.lesson+':st')||'{}');vals=Object.values((st.bs||{})[D.recallFrom]||{}).filter(v=>v&&v.trim());}catch(x){}
  if(!vals.length){box.innerHTML='<p class="hint">Em chưa viết ý nào ở phần Brainstorm. Không sao, đây là các cách giúp đỡ trong bài: '+RECALL.map(r=>'<b>'+r.en+'</b>').join(', ')+'.</p>';return;}
  box.innerHTML='<p>Đây là ý em viết lúc đầu, kèm cách nói tiếng Anh em vừa học:</p>'+vals.map(v=>{
    const hit=RECALL.find(r=>new RegExp(r.re,'i').test(v));
    return `<div class="card">✍️ “${v.replace(/</g,'&lt;')}” → ${hit?'<b>'+hit.en+'</b> <button class="say" data-say="'+hit.en+'">🔊</button> <span class="vi">('+hit.vi+')</span>':'<span class="vi">ý hay! Cô sẽ góp ý thêm khi chấm.</span>'}</div>`;}).join('');
}
new MutationObserver(()=>{
  const c=document.getElementById('c_'+(D.glossStep||'r-read'));
  if(c&&!c.dataset.gate){c.dataset.gate='gloss';
    const row=c.closest('.card');
    if(row&&!document.getElementById('glcount')){const t=document.createElement('div');t.className='tip';t.id='glcount';row.before(t);}
    upd();}
  document.querySelectorAll('[data-recall]:not([data-done])').forEach(b=>{b.dataset.done=1;recall(b);});
}).observe(document.body,{childList:true,subtree:true});
})();
