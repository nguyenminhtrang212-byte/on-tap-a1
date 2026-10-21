/* Lớp 7 · Unit 3 Community Service · Phiên 1 (Đọc – Từ vựng – Phát âm – Nghe và đọc to). Nội dung do Claude soạn mới. */
(function(){
const GL={
 community:{w:'community',m:'community',ipa:'/kəˈmjuːnəti/',pos:'n.',vi:'cộng đồng'},
 volunteer:{w:'volunteer',m:'volunteer',ipa:'/ˌvɒlənˈtɪə/',pos:'v. / n.',vi:'tình nguyện; tình nguyện viên'},
 charity:{w:'charity',m:'charity',ipa:'/ˈtʃærəti/',pos:'n.',vi:'tổ chức từ thiện'},
 cleanup:{w:'clean up',m:'clean up',ipa:'/ˌkliːn ˈʌp/',pos:'phr. v.',vi:'dọn dẹp'},
 collect:{w:'collect',m:'collect',ipa:'/kəˈlekt/',pos:'v.',vi:'thu gom, sưu tầm'},
 recycling:{w:'recycling',m:'recycling',ipa:'/ˌriːˈsaɪklɪŋ/',pos:'n.',vi:'việc tái chế'},
 plant:{w:'plant',m:'plant',ipa:'/plɑːnt/',pos:'v.',vi:'trồng (cây)'},
 donate:{w:'donate',m:'donate',ipa:'/dəʊˈneɪt/',pos:'v.',vi:'quyên góp, tặng'},
 elderly:{w:'elderly',m:'elderly',ipa:'/ˈeldəli/',pos:'adj.',vi:'lớn tuổi'},
 neighbourhood:{w:'neighbourhood',m:'neighbourhood',ipa:'/ˈneɪbəhʊd/',pos:'n.',vi:'khu phố, hàng xóm'},
 carry:{w:'carry',m:'carry',ipa:'/ˈkæri/',pos:'v.',vi:'mang, xách'},
 diff:{w:'make a big difference',m:'make a big difference',ipa:'/meɪk ə bɪɡ ˈdɪfrəns/',pos:'phr.',vi:'tạo ra sự khác biệt lớn'}
};

const EX={
 need:['need','/niːd/','v.','cần'],money:['money','/ˈmʌni/','n.','tiền'],time:['time','/taɪm/','n.','thời gian'],
 local:['local','/ˈləʊkl/','adj.','ở địa phương'],plastic_bottles:['plastic bottles','/ˈplæstɪk ˈbɒtlz/','n.','chai nhựa'],
 trees:['trees','/triːz/','n.','cây'],school:['school','/skuːl/','n.','trường học'],air:['air','/eə/','n.','không khí'],
 fresh:['fresh','/freʃ/','adj.','trong lành, tươi'],street:['street','/striːt/','n.','đường phố'],green:['green','/ɡriːn/','adj.','xanh'],
 books:['books','/bʊks/','n.','sách'],clothes:['clothes','/kləʊðz/','n.','quần áo'],children:['children','/ˈtʃɪldrən/','n.','trẻ em'],
 visit:['visit','/ˈvɪzɪt/','v.','thăm'],shopping_bags:['shopping bags','/ˈʃɒpɪŋ bæɡz/','n.','túi mua sắm'],talk:['talk','/tɔːk/','v.','nói chuyện'],
 actions:['actions','/ˈækʃnz/','n.','hành động'],students:['students','/ˈstjuːdnts/','n.','học sinh'],together:['together','/təˈɡeðə/','adv.','cùng nhau'],
 cleaner:['cleaner','/ˈkliːnə/','adj.','sạch hơn'],kinder:['kinder','/ˈkaɪndə/','adj.','tốt bụng hơn'],happier:['happier','/ˈhæpiə/','adj.','vui hơn'],
 weekend:['weekend','/ˌwiːkˈend/','n.','cuối tuần'],start:['start','/stɑːt/','v.','bắt đầu'],forget:['forget','/fəˈɡet/','v.','quên'],
 help:['help','/help/','v.','giúp đỡ'],people:['people','/ˈpiːpl/','n.','mọi người'],home:['home','/həʊm/','n.','nhà'],
 saturday_mornings:['Saturday mornings','/ˈsætədeɪ ˈmɔːnɪŋz/','n.','sáng thứ Bảy'],person:['person','/ˈpɜːsn/','n.','một người'],
 park:['park','/pɑːk/','n.','công viên'],old:['old','/əʊld/','adj.','cũ'],
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const TEXT=['Our neighbourhood is a community, and every person can help it. You do not need much money or time. First, you can volunteer at a local charity on Saturday mornings. You can clean up the park and collect plastic bottles for recycling. Next, you can plant small trees near your school, so the air is fresh and the street is green. You can also donate old books and clothes to children who need them.',
 'Finally, do not forget the elderly people near your home. You can visit them, carry their shopping bags, or just talk with them. Small actions can make a big difference. When many students work together, our community becomes cleaner, kinder and happier. Why don\'t you start this weekend?'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('\\b('+keys.map(k=>GL[k].m).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào bất kỳ từ nào có gạch chấm: máy đọc + hiện phiên âm + loại từ + nghĩa tiếng Việt. Bấm lần nữa để đóng. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">Helping Our Community</h3>`+TEXT.map(p=>'<p>'+wrap(p)+'</p>').join('')+`<p><button class="say" data-say="${TEXT.join(' ').replace(/"/g,'')}">🔊 Nghe cả bài</button></p>`;

const bank='<b>Word bank:</b> volunteer · clean up · collect · plant · community · elderly · neighbourhood · <i>(từ gây nhiễu: donate, recycle)</i>';

window.STUDY={
  lesson:'L7 U3 Phien 1',filePrefix:'L7U3P1',
  title:'Tự học Unit 3: Community Service · Phiên 1',
  sub:'Lớp 7 · Phiên 1/3 (khoảng 33 phút): Đọc · Từ vựng · Âm vô thanh – hữu thanh · Nghe và đọc to',
  intro:'Làm theo thứ tự: bước sau chỉ mở khi em xong bước trước. Sai không sao, em được thử lại. Ghi âm xong em nghe lại rồi mới bấm gửi.',
  emoji:'🤝',stampTitle:'Unit 3',stampSub:'Community Service',
  gloss:GL,glossStep:'r-read',glossNeed:5,
  
  vocab:{},rounds:[],
  parts:[
  {id:'read',title:'Mục 1 · Đọc (Reading)',steps:[
    {id:'r-read',type:'read',short:'Đọc bài',title:'Đọc bài “Helping Our Community”',sub:'Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'r-q',type:'items',short:'5 câu đọc hiểu',title:'5 câu hỏi đọc hiểu',sub:'Trả lời dựa vào bài đọc',items:[
      {kind:'choice',q:'Đúng hay sai? <i>You need a lot of money to help your community.</i>',o:['Đúng (True)','Sai (False)'],a:1,x:'Bài nói: “You do not need much money or time.” → <b>Sai</b>.'},
      {kind:'choice',q:'Where can you volunteer on Saturday mornings?',o:['at a bank','at a local charity','at a cinema'],a:1,x:'Bài: “volunteer at a local charity on Saturday mornings”.'},
      {kind:'choice',q:'Why can students plant small trees near school?',o:['so they can sell them','so the school is bigger','so the air is fresh and the street is green'],a:2,x:'Đọc phần sau chữ <b>so</b> để biết mục đích: “so the air is fresh and the street is green”.'},
      {kind:'choice',q:'Việc nào <b>KHÔNG</b> có trong bài để giúp người lớn tuổi? (They can…)',o:['visit them','carry their shopping bags','give them money','talk with them'],a:2,x:'Bài chỉ nói: visit, carry their shopping bags, talk. “give them money” không có trong bài.'},
      {kind:'choice',q:'Tiêu đề nào hợp nhất với ý chính của cả bài?',o:['How to cook rice','A day at the cinema','Small actions can make a big difference'],a:2,x:'Ý chính: hành động nhỏ cũng tạo khác biệt lớn cho cộng đồng.'}
    ]}
  ]},
  {id:'vocab',title:'Mục 2 · Từ vựng (Vocabulary)',steps:[
    {id:'v-bs',type:'solve',short:'Tình huống',title:'Brainstorm: giải quyết tình huống',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Đọc 3 tình huống. Em nghĩ ra <b>1 cách giải quyết</b> cho mỗi tình huống và viết bằng <b>tiếng Anh</b> (ít nhất 3 từ). Chưa biết nói hay cũng không sao, cứ thử!',
     scenarios:[
      {q:'You see trash around your classroom, and everyone walks past and doesn\'t notice it. What can you do?',vi:'Em thấy rác quanh lớp học, nhưng mọi người đi ngang qua mà không để ý. Em có thể làm gì?',hint:'Bắt đầu bằng <b>I can…</b> hoặc <b>We can…</b> (nhặt rác, rủ bạn cùng dọn, đặt thùng rác)',model:'I can pick up the trash and ask my friends to clean up the classroom with me.'},
      {q:'Your neighbour is an elderly woman. She is walking slowly and carrying heavy shopping bags. What can you do?',vi:'Hàng xóm của em là một bà cụ. Bà đi chậm và xách túi đồ nặng. Em có thể làm gì?',hint:'Dùng <b>I can help her…</b> / <b>I can carry…</b> (giúp bà xách đồ, hỏi bà có cần giúp không)',model:'I can carry her shopping bags and walk home with her.'},
      {q:'Your school yard has no trees, and it is very hot in summer. What can you and your friends do?',vi:'Sân trường em không có cây và mùa hè rất nóng. Em và các bạn có thể làm gì?',hint:'Dùng <b>We can plant…</b> / <b>We can ask…</b> (trồng cây, xin cây giống, xin phép thầy cô)',model:'We can plant small trees and ask our teacher to help us.'}
     ]},
    {id:'v-cards',type:'read',short:'Học 10 từ',title:'Học 10 từ mới',sub:'Thẻ từ: bấm 🔊 để nghe',html:`
      <p>Đọc to từng từ, bấm 🔊 để nghe. Che cột nghĩa để tự thử.</p>
      <div class="tbl"><table><tr><th>Từ</th><th>Loại từ · Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      <tr><td><b>volunteer</b> <button class="say" data-say="volunteer">🔊</button></td><td>v. / n. · /ˌvɒlənˈtɪə/</td><td>tình nguyện</td><td>I volunteer at a charity.</td></tr>
      <tr><td><b>community</b> <button class="say" data-say="community">🔊</button></td><td>n. · /kəˈmjuːnəti/</td><td>cộng đồng</td><td>We help our community.</td></tr>
      <tr><td><b>donate</b> <button class="say" data-say="donate">🔊</button></td><td>v. · /dəʊˈneɪt/</td><td>quyên góp, tặng</td><td>I donate old books.</td></tr>
      <tr><td><b>recycle</b> <button class="say" data-say="recycle">🔊</button></td><td>v. · /ˌriːˈsaɪkl/</td><td>tái chế</td><td>We recycle plastic bottles.</td></tr>
      <tr><td><b>clean up</b> <button class="say" data-say="clean up">🔊</button></td><td>phr. v. · /ˌkliːn ˈʌp/</td><td>dọn dẹp</td><td>We clean up the park.</td></tr>
      <tr><td><b>collect</b> <button class="say" data-say="collect">🔊</button></td><td>v. · /kəˈlekt/</td><td>thu gom, sưu tầm</td><td>They collect old clothes.</td></tr>
      <tr><td><b>plant</b> <button class="say" data-say="plant">🔊</button></td><td>v. · /plɑːnt/</td><td>trồng (cây)</td><td>I plant trees at school.</td></tr>
      <tr><td><b>elderly</b> <button class="say" data-say="elderly">🔊</button></td><td>adj. · /ˈeldəli/</td><td>lớn tuổi (<i>the elderly</i> = người cao tuổi)</td><td>I help the elderly.</td></tr>
      <tr><td><b>neighbourhood</b> <button class="say" data-say="neighbourhood">🔊</button></td><td>n. · /ˈneɪbəhʊd/</td><td>khu phố, hàng xóm</td><td>My neighbourhood is clean.</td></tr>
      <tr><td><b>charity</b> <button class="say" data-say="charity">🔊</button></td><td>n. · /ˈtʃærəti/</td><td>tổ chức từ thiện</td><td>She works for a charity.</td></tr></table></div>`},
    {id:'v-q',type:'items',short:'10 câu từ vựng',title:'10 câu luyện từ vựng',sub:'Nghe, nhận ra phiên âm, nghe viết, điền từ vào câu',items:[
      {kind:'choice',say:'recycle',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['trồng cây','tái chế','quyên góp'],a:1,x:'<b>recycle</b> = tái chế.'},
      {kind:'choice',q:'Phiên âm <span class="ipa">/kəˈmjuːnəti/</span> là từ nào? (bấm 🔊 để nghe)',say:'community',o:['charity','community','collect'],a:1,x:'<b>community</b> /kəˈmjuːnəti/ = cộng đồng.'},
      {kind:'choice',q:`“Cuối tuần, em tình nguyện ở một tổ chức từ thiện.”<br>→ I ___ at a charity on Sundays.<div class="hint">${bank}</div>`,o:['plant','volunteer','collect'],a:1,x:'<b>volunteer</b> = tình nguyện.'},
      {kind:'fill',say:'elderly',q:'🔊 Nghe và <b>gõ lại</b> từ em nghe được.',a:['elderly'],hint:'Từ có 7 chữ cái, bắt đầu bằng “e”. Nghĩa: lớn tuổi.',x:'<b>elderly</b> = lớn tuổi (the elderly = người cao tuổi).'},
      {kind:'choice',q:`“Cả lớp dọn dẹp công viên.”<br>→ Our class will ___ the park.<div class="hint">${bank}</div>`,o:['clean up','donate','plant'],a:0,x:'<b>clean up</b> = dọn dẹp. “donate” là quyên góp (từ gây nhiễu).'},
      {kind:'choice',say:'donate',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['thu gom','dọn dẹp','quyên góp, tặng'],a:2,x:'<b>donate</b> = quyên góp, tặng.'},
      {kind:'choice',q:'Phiên âm <span class="ipa">/ˈtʃærəti/</span> là từ nào? (bấm 🔊 để nghe)',say:'charity',o:['neighbourhood','charity','community'],a:1,x:'<b>charity</b> /ˈtʃærəti/ = tổ chức từ thiện.'},
      {kind:'choice',q:`“Chúng em thu gom chai nhựa.”<br>→ We ___ plastic bottles.<div class="hint">${bank}</div>`,o:['recycle','collect','volunteer'],a:1,x:'<b>collect</b> = thu gom. “recycle” là tái chế (từ gây nhiễu).'},
      {kind:'fill',say:'neighbourhood',q:'🔊 Nghe và <b>gõ lại</b> từ em nghe được.',a:['neighbourhood','neighborhood'],hint:'Từ dài, bắt đầu bằng “n”. Nghĩa: khu phố.',x:'<b>neighbourhood</b> = khu phố, hàng xóm.'},
      {kind:'choice',q:`“Em trồng cây trước trường.”<br>→ I ___ trees near my school.<div class="hint">${bank}</div>`,o:['collect','clean up','plant'],a:2,x:'<b>plant</b> = trồng.'}
    ]}
  ]},
  {id:'sound',title:'Mục 3 · Âm vô thanh và hữu thanh',steps:[
    {id:'s-th',type:'read',short:'Lý thuyết âm',title:'Đọc: đặt tay lên cổ',sub:'Lý thuyết',html:`
      <p>Đặt tay lên cổ họng rồi đọc âm. <b>Cổ không rung</b> → âm <b>vô thanh</b> (voiceless). <b>Cổ rung</b> → âm <b>hữu thanh</b> (voiced).</p>
      <div class="tbl"><table><tr><th>Loại</th><th>Âm</th><th>Ví dụ</th></tr>
      <tr><td>Vô thanh 🤫 (cổ không rung)</td><td>/p/ /t/ /k/ /f/ /s/ /ʃ/ /tʃ/</td><td>help /p/, pick /k/, wash /ʃ/</td></tr>
      <tr><td>Hữu thanh 🔔 (cổ rung)</td><td>/b/ /d/ /g/ /v/ /z/ /l/ /n/ /m/ và các nguyên âm</td><td>clean /n/, recycle /l/, play (nguyên âm)</td></tr></table></div>
      <div class="card">💡 Âm <b>cuối</b> của động từ quyết định cách đọc đuôi <b>-ed</b> ở Phiên 2. Hôm nay em chỉ cần nhận ra âm cuối là vô thanh hay hữu thanh.</div>
      <p>Thử nghe: <button class="say" data-say="p, b">p / b</button> <button class="say" data-say="s, z">s / z</button> <button class="say" data-say="t, d">t / d</button></p>`},
    {id:'s-q',type:'items',short:'8 câu âm',title:'8 câu nhận diện âm',sub:'Nghe rồi chọn',items:[
      {kind:'choice',say:'help',q:'Động từ <b>help</b>: âm cuối /p/ là âm nào?',o:['Vô thanh (cổ không rung)','Hữu thanh (cổ rung)'],a:0,x:'/p/ là âm <b>vô thanh</b>.'},
      {kind:'choice',say:'pick',q:'Động từ <b>pick</b>: âm cuối /k/ là âm nào?',o:['Vô thanh (cổ không rung)','Hữu thanh (cổ rung)'],a:0,x:'/k/ là âm <b>vô thanh</b>.'},
      {kind:'choice',say:'clean',q:'Động từ <b>clean</b>: âm cuối /n/ là âm nào?',o:['Vô thanh (cổ không rung)','Hữu thanh (cổ rung)'],a:1,x:'/n/ là âm <b>hữu thanh</b> (cổ rung).'},
      {kind:'choice',say:'recycle',q:'Động từ <b>recycle</b>: âm cuối /l/ là âm nào?',o:['Vô thanh (cổ không rung)','Hữu thanh (cổ rung)'],a:1,x:'/l/ là âm <b>hữu thanh</b>.'},
      {kind:'choice',say:'wash',q:'Động từ <b>wash</b>: âm cuối /ʃ/ là âm nào?',o:['Vô thanh (cổ không rung)','Hữu thanh (cổ rung)'],a:0,x:'/ʃ/ là âm <b>vô thanh</b>.'},
      {kind:'choice',say:'peas',sayAfter:'peace. peas.',q:'🔊 Nghe và chọn từ em nghe được.',o:['peace /piːs/','peas /piːz/'],a:1,x:'<b>peas</b> kết thúc bằng /z/ (hữu thanh). Tách âm cuối rồi đặt tay lên cổ kiểm tra nhé.'},
      {kind:'choice',say:'tie',sayAfter:'tie. die.',q:'🔊 Nghe và chọn từ em nghe được.',o:['die /daɪ/','tie /taɪ/'],a:1,x:'<b>tie</b> bắt đầu bằng /t/ (vô thanh), <b>die</b> bằng /d/ (hữu thanh).'},
      {kind:'choice',say:'back',sayAfter:'pack. back.',q:'🔊 Nghe và chọn từ em nghe được.',o:['pack /pæk/','back /bæk/'],a:1,x:'<b>back</b> bắt đầu bằng /b/ (hữu thanh), <b>pack</b> bằng /p/ (vô thanh).'}
    ]}
  ]},
  {id:'say',title:'Mục 4 · Nghe và đọc to (ghi âm)',steps:[
    {id:'a-read',type:'speak',short:'Đọc to 3 câu',title:'Đọc to 3 câu trả lời (ngắn → dài)',sub:'Nghe mẫu, ghi âm, xem % đọc đúng, gửi',
     intro:'Mỗi mục có 1 <b>câu hỏi</b> và 1 <b>câu trả lời mẫu</b>. Em bấm <b>🔊 Nghe mẫu</b>, rồi <b>ghi âm</b> câu trả lời. Máy sẽ cho em <b>% từ đọc đúng</b> và chỉ ra từ chưa đúng (bấm 🔊 để nghe lại từ đó). Hài lòng thì bấm <b>📤 Gửi</b>.',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi câu.'],
     prompts:[
      {ask:'How can you help your community?',text:'<b>I can plant trees and clean up the park.</b>',vi:'Em có thể giúp cộng đồng bằng cách nào? → Em có thể trồng cây và dọn dẹp công viên.',say:'I can plant trees and clean up the park.',maxSec:30},
      {ask:'What do you often do to help your community?',text:'<b>To help my community, I often collect old books and donate them to a charity.</b>',vi:'Em thường làm gì để giúp cộng đồng? → Để giúp cộng đồng, em thường thu gom sách cũ và tặng cho một tổ chức từ thiện.',say:'To help my community, I often collect old books and donate them to a charity.',maxSec:40},
      {ask:'What do you do at school to help other people?',text:'<b>Sometimes I join my classmates to clean up the school yard, and last month we planted ten small trees near the library.</b>',vi:'Ở trường em làm gì để giúp người khác? → Thỉnh thoảng em cùng các bạn dọn dẹp sân trường, và tháng trước chúng em trồng mười cây nhỏ gần thư viện.',say:'Sometimes I join my classmates to clean up the school yard, and last month we planted ten small trees near the library.',maxSec:60}
     ]}
  ]}
  ]
};
})();
