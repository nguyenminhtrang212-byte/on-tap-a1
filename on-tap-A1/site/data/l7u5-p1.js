/* Lớp 7 · Unit 5 Food and Drink (Global Success 7, tr.50–52) · Link 1: Món ăn – thức uống – định lượng (15 phút). Nội dung do Claude soạn mới. */
(function(){
const GL={
 order:{w:'an order of',m:'an order of',ipa:'/ən ˈɔːdər əv/',pos:'cụm danh từ',vi:'một phần (món) gọi trong nhà hàng'},
 pork:{w:'pork cooked in fish sauce',m:'pork cooked in fish sauce',ipa:'/pɔːk ˈkʊkt ɪn fɪʃ sɔːs/',pos:'cụm danh từ',vi:'thịt heo kho nước mắm'},
 tofu:{w:'fried tofu',m:'fried tofu',ipa:'/fraɪd ˈtəʊfuː/',pos:'cụm danh từ',vi:'đậu phụ chiên'},
 rolls:{w:'spring rolls',m:'spring rolls',ipa:'/sprɪŋ rəʊlz/',pos:'n.',vi:'chả giò, nem rán'},
 water:{w:'mineral water',m:'mineral water',ipa:'/ˈmɪnərəl ˈwɔːtə/',pos:'cụm danh từ',vi:'nước khoáng'},
 tea:{w:'green tea',m:'green tea',ipa:'/ɡriːn tiː/',pos:'cụm danh từ',vi:'trà xanh'},
 melon:{w:'winter melon juice',m:'winter melon juice',ipa:'/ˈwɪntə ˈmelən dʒuːs/',pos:'cụm danh từ',vi:'nước bí đao'},
 can:{w:'a can of',m:'a can of',ipa:'/ə kæn əv/',pos:'cụm danh từ',vi:'một lon'}
};
const EX={
 menu:['menu','/ˈmenju:/','n.','thực đơn'],lemonade:['lemonade','/ˌleməˈneɪd/','n.','nước chanh'],shrimp:['shrimp','/ʃrɪmp/','n.','tôm'],
 soup:['canh','/kɑːn/','n.','canh (món súp Việt)'],waiter:['waiter','/ˈweɪtə/','n.','nam phục vụ bàn'],children:['children','/ˈtʃɪldrən/','n.','trẻ em'],
 dong:['dong','/dɒŋ/','n.','đồng (tiền Việt Nam)'],evening:['evening','/ˈiːvnɪŋ/','n.','buổi tối']
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const TEXT=['Waiter: Good evening! What can I get you?','Mark: We\'d like an order of rice with pork cooked in fish sauce, please.','Waiter: Would you like some canh? It\'s a kind of Vietnamese soup.','Dad: Yes, we\'ll try some canh with shrimp.','Waiter: And anything to drink?','Mum: Mineral water for me, green tea for my husband, and lemonade for the children.','Mark: How much is a can of winter melon juice?','Waiter: The menu says it\'s 10,000 dong.','Mark: Great! We\'d also like some fried tofu and spring rolls.'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('\\b('+keys.map(k=>GL[k].m).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào từ có gạch chấm để nghe, xem phiên âm và nghĩa nhé. Em tra giúp cô <b>5 từ</b> bất kỳ là đủ rồi!</p><h3 style="margin:6px 0">At a Vietnamese restaurant 🍜</h3>`+TEXT.map(p=>'<p>'+wrap(p)+'</p>').join('')+`<p><button class="say" data-say="${TEXT.join(' ').replace(/(Waiter|Mark|Dad|Mum): /g,'')}">🔊 Nghe cả bài</button></p>`;
const tr=(a,b,c,d)=>`<tr><td><b>${a}</b> <button class="say" data-say="${a}">🔊</button></td><td>${b}</td><td>${c}</td><td>${d}</td></tr>`;
window.STUDY={
  lesson:'L7 U5 Phien 1',filePrefix:'L7U5P1',
  title:'Tự học Unit 5: Food and Drink · Link 1',
  sub:'Lớp 7 · Link 1/3 · khoảng 15 phút · Bám SGK tr.50–52 · Món ngon lên bàn 🍜',
  intro:'Chào em! 🍜 Hôm nay mình cùng bước vào một nhà hàng Việt Nam nhỏ. Em sẽ nhớ lại vài điều đã học, nghe một cuộc gọi món, rồi làm quen với những chiếc thìa, chiếc cân trong bếp. <b>Từng bước một thôi</b>, em làm được mà! Xong mỗi mục, bấm <b>Tiếp theo</b>. Cuối cùng cô sẽ xem bài của em.',
  emoji:'🍜',stampTitle:'Unit 5',stampSub:'Food and Drink',
  gloss:GL,glossStep:'r-read',glossNeed:5,
  vocab:{},rounds:[],
  parts:[
  {id:'warm',title:'Mục 1 · 🌱 Khởi động: nhớ lại điều em đã biết',steps:[
    {id:'w-q',type:'items',short:'🌱 Nhớ lại',title:'Khởi động: em còn nhớ không?',sub:'4 câu nhẹ nhàng để làm nóng người',items:[
      {kind:'choice',q:'Ở Unit 4, em đã học cụm <b>listen ___ music</b>. Từ nào còn thiếu?',o:['to','at','in'],a:0,x:'Đúng rồi! <b>listen to music</b>. Em nhớ bài cũ tốt lắm 🎵'},
      {kind:'choice',q:'Cụm <b>play ___ guitar</b> thiếu từ nào?',o:['a','the','an'],a:1,x:'<b>play the guitar</b>: chơi nhạc cụ thì dùng <i>the</i>. Giỏi quá!'},
      {kind:'choice',q:'Câu <i>“I\'d like a bowl of rice.”</i> có nghĩa là gì?',o:['Em đã ăn một bát cơm.','Em muốn một bát cơm.','Em không thích cơm.'],a:1,x:'<b>I\'d like…</b> = Em muốn… Đây là câu lịch sự khi gọi món.'},
      {kind:'choice',q:'Từ nào là một loại <b>đồ uống</b>?',o:['pork','juice','tofu'],a:1,x:'<b>juice</b> = nước ép, là đồ uống. Pork (thịt heo) và tofu (đậu phụ) là đồ ăn.'}
    ]}
  ]},
  {id:'read',title:'Mục 2 · 🟢 Nghe và đọc: một bữa tối ở nhà hàng (SGK tr.50)',steps:[
    {id:'r-read',type:'read',short:'🟢 Đọc hội thoại',title:'Cùng đọc cuộc gọi món của gia đình Mark',sub:'Bấm từ để tra (5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'r-q',type:'items',short:'🟢 3 câu đọc hiểu',title:'3 câu kiểm tra nhanh',sub:'Em vừa đọc xong, thử xem nhé!',items:[
      {kind:'choice',q:'Gia đình Mark gọi món gì ăn với cơm?',o:['pork cooked in fish sauce','fried tofu only','roast chicken'],a:0,x:'Mark nói: “an order of rice with pork cooked in fish sauce”. Em đọc kỹ ghê!'},
      {kind:'choice',q:'Các bạn nhỏ uống gì?',o:['green tea','lemonade','mineral water'],a:1,x:'Mum nói: “lemonade for the children”.'},
      {kind:'choice',q:'Một lon nước bí đao giá bao nhiêu?',o:['10,000 dong','20,000 dong','5,000 dong'],a:0,x:'Người phục vụ: “it’s 10,000 dong”.'}
    ]}
  ]},
  {id:'amount',title:'Mục 3 · 🟡 Thìa, cân, lít: những con số trong bếp (SGK tr.52)',steps:[
    {id:'q-card',type:'read',short:'🟡 Học 6 định lượng',title:'Làm quen với 6 cách đong đo trong nhà bếp',sub:'Bấm 🔊 để nghe',html:`
      <div class="card ins">⚠️ Cấu trúc luôn là: <b>số lượng + of + thứ đó</b>. Ví dụ: <b>a kilo of beef</b>, <b>a litre of water</b>. Em nhớ có chữ <b>of</b> nha!</div>
      <div class="tbl"><table><tr><th>Cụm từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      ${tr('a kilo (kg) of beef','/ə ˈkiːləʊ əv biːf/','một cân thịt bò','We need a kilo of beef.')}${tr('a teaspoon (tsp) of salt','/ə ˈtiːspuːn əv sɔːlt/','một thìa cà phê muối','Add a teaspoon of salt.')}${tr('a litre (l) of water','/ə ˈliːtə əv ˈwɔːtə/','một lít nước','I drink a litre of water.')}${tr('a tablespoon (tbsp) of sugar','/ə ˈteɪblspuːn əv ˈʃʊɡə/','một thìa canh đường','Put in a tablespoon of sugar.')}${tr('200 grams (g) of flour','/tuː ˈhʌndrəd ɡræmz əv ˈflaʊə/','200 gam bột mì','Use 200 grams of flour.')}${tr('400 millilitres (ml) of milk','/fɔː ˈhʌndrəd ˈmɪlɪliːtəz əv mɪlk/','400 ml sữa','Pour in 400 ml of milk.')}</table></div>
      <div class="card">💡 Nhẩm nhanh: <b>thìa</b> (spoon) cho lượng nhỏ như muối, đường. <b>Lít, ml</b> cho nước, sữa. <b>Kilo, gam</b> cho thịt, bột.</div>`},
    {id:'q-q',type:'items',short:'🟡 6 câu định lượng',title:'6 câu: đong đúng lượng',sub:'Từ dễ đến khó',items:[
      {kind:'choice',q:'Cụm nào nghĩa là <b>một thìa cà phê muối</b>?',o:['a teaspoon of salt','a litre of salt','a kilo of salt'],a:0,x:'<b>teaspoon</b> = thìa cà phê, dùng cho lượng nhỏ như muối.'},
      {kind:'choice',q:'We need a ___ of water. (Nước thì tính bằng…)',o:['litre','gram','kilo'],a:0,x:'Nước đong bằng <b>litre</b> (lít).'},
      {kind:'choice',q:'Cô muốn mua một cân thịt bò: <b>a ___ of beef</b>.',o:['teaspoon','kilo','litre'],a:1,x:'<b>a kilo of beef</b> = một cân thịt bò.'},
      {kind:'choice',q:'Chọn cách viết <b>đúng</b>.',o:['400 ml milk','400 ml of milk','400 ml for milk'],a:1,x:'Luôn có <b>of</b>: <b>400 ml of milk</b>.'},
      {kind:'fill',q:'Điền từ còn thiếu: 200 grams ___ flour.',a:['of'],hint:'Từ rất ngắn, 2 chữ cái, bắt đầu bằng “o”.',x:'<b>200 grams of flour</b>. Có <b>of</b> nè 🌾'},
      {kind:'fill',say:'a tablespoon of sugar',q:'🔊 Nghe và <b>gõ lại</b> cụm em nghe được (4 từ).',a:['a tablespoon of sugar','1 tablespoon of sugar'],hint:'Nghĩa: một thìa canh đường.',x:'<b>a tablespoon of sugar</b> = một thìa canh đường.'}
    ]}
  ]}
  ]
};
})();
