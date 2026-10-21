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
const TEXT=['Our neighbourhood is a community, and every person can help it. You do not need much money or time. First, you can volunteer at a local charity on Saturday mornings. You can clean up the park and collect plastic bottles for recycling. Next, you can plant small trees near your school, so the air is fresh and the street is green. You can also donate old books and clothes to children who need them.',
 'Finally, do not forget the elderly people near your home. You can visit them, carry their shopping bags, or just talk with them. Small actions can make a big difference. When many students work together, our community becomes cleaner, kinder and happier. Why don\'t you start this weekend?'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('\\b('+keys.map(k=>GL[k].m).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const READ=`<p class="hint">👆 Bấm vào <b>từ có gạch chấm</b>: lần 1 nghe + phiên âm + loại từ, lần 2 hiện nghĩa tiếng Việt, lần 3 đóng lại. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">Helping Our Community</h3>`+TEXT.map(p=>'<p>'+wrap(p)+'</p>').join('')+`<p><button class="say" data-say="${TEXT.join(' ').replace(/"/g,'')}">🔊 Nghe cả bài</button></p>`;

const bank='<b>Word bank:</b> volunteer · clean up · collect · plant · community · elderly · neighbourhood · <i>(từ gây nhiễu: donate, recycle)</i>';
const PH=(w)=>({kind:'choice',q:'',o:[],a:0});

window.STUDY={
  lesson:'L7 U3 Phien 1',filePrefix:'L7U3P1',
  title:'Tự học Unit 3: Community Service · Phiên 1',
  sub:'Lớp 7 · Phiên 1/3 (khoảng 33 phút): Đọc · Từ vựng · Âm vô thanh – hữu thanh · Nghe và đọc to',
  intro:'Làm theo thứ tự: bước sau chỉ mở khi em xong bước trước. Sai không sao, em được thử lại. Ghi âm xong em nghe lại rồi mới bấm gửi.',
  emoji:'🤝',stampTitle:'Unit 3',stampSub:'Community Service',
  gloss:GL,glossStep:'r-read',glossNeed:5,
  recallFrom:'v-bs',
  recall:[
   {re:'dọn|quét|rác|vệ sinh',en:'clean up the park / pick up rubbish',vi:'dọn dẹp công viên, nhặt rác'},
   {re:'trồng|cây',en:'plant trees',vi:'trồng cây'},
   {re:'tặng|cho|quyên|ủng hộ|từ thiện',en:'donate old books and clothes',vi:'quyên góp sách và quần áo cũ'},
   {re:'tình nguyện',en:'volunteer at a charity',vi:'làm tình nguyện ở tổ chức từ thiện'},
   {re:'thu gom|nhặt|chai|tái chế',en:'collect bottles for recycling',vi:'thu gom chai để tái chế'},
   {re:'già|cao tuổi|lớn tuổi|ông|bà|giúp đỡ',en:'help the elderly in my neighbourhood',vi:'giúp người cao tuổi trong khu phố'}
  ],
  vocab:{},rounds:[],
  parts:[
  {id:'read',title:'Mục 1 · Đọc (Reading)',steps:[
    {id:'r-read',type:'read',title:'Đọc bài “Helping Our Community”',sub:'Bước 1 · Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'r-q',type:'items',title:'5 câu hỏi đọc hiểu',sub:'Bước 2 · Trả lời dựa vào bài đọc',items:[
      {kind:'choice',q:'Đúng hay sai? <i>You need a lot of money to help your community.</i>',o:['Đúng (True)','Sai (False)'],a:1,x:'Bài nói: “You do not need much money or time.” → <b>Sai</b>.'},
      {kind:'choice',q:'Where can you volunteer on Saturday mornings?',o:['at a bank','at a local charity','at a cinema'],a:1,x:'Bài: “volunteer at a local charity on Saturday mornings”.'},
      {kind:'choice',q:'Why can students plant small trees near school?',o:['so they can sell them','so the school is bigger','so the air is fresh and the street is green'],a:2,x:'Đọc phần sau chữ <b>so</b> để biết mục đích: “so the air is fresh and the street is green”.'},
      {kind:'choice',q:'Việc nào <b>KHÔNG</b> có trong bài để giúp người lớn tuổi? (They can…)',o:['visit them','carry their shopping bags','give them money','talk with them'],a:2,x:'Bài chỉ nói: visit, carry their shopping bags, talk. “give them money” không có trong bài.'},
      {kind:'choice',q:'Tiêu đề nào hợp nhất với ý chính của cả bài?',o:['How to cook rice','A day at the cinema','Small actions can make a big difference'],a:2,x:'Ý chính: hành động nhỏ cũng tạo khác biệt lớn cho cộng đồng.'}
    ]}
  ]},
  {id:'vocab',title:'Mục 2 · Từ vựng (Vocabulary)',steps:[
    {id:'v-bs',type:'brainstorm',title:'Brainstorm: giúp đỡ người xung quanh',sub:'Bước 3 · 2 phút, không chấm điểm',
     prompt:'Em biết những việc nào giúp đỡ người xung quanh? Viết 3 ý (tiếng Việt hoặc tiếng Anh đều được). Học xong em sẽ thấy lại ý của mình kèm cách nói tiếng Anh.',
     min:3,fields:[{label:'🤝 Việc em biết có thể làm',hint:'Ví dụ: dọn rác, trồng cây, giúp bà cụ xách đồ…',n:3}]},
    {id:'v-cards',type:'read',title:'Học 10 từ mới',sub:'Bước 4 · Thẻ từ: bấm 🔊 để nghe',html:`
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
    {id:'v-recall',type:'read',title:'Ý của em, nói bằng tiếng Anh',sub:'Bước 5 · Xem lại brainstorm',html:'<div data-recall="1"></div>'},
    {id:'v-q',type:'items',title:'10 câu luyện từ vựng',sub:'Bước 6 · Nghe, nhận ra nghĩa, điền từ vào câu',items:[
      {kind:'choice',say:'recycle',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['trồng cây','tái chế','quyên góp'],a:1,x:'<b>recycle</b> = tái chế.'},
      {kind:'choice',say:'donate',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['thu gom','dọn dẹp','quyên góp, tặng'],a:2,x:'<b>donate</b> = quyên góp, tặng.'},
      {kind:'choice',say:'elderly',q:'🔊 Nghe và chọn cách viết đúng.',o:['eldery','elderly','olderly'],a:1,x:'Cách viết đúng: <b>elderly</b> (lớn tuổi).'},
      {kind:'choice',say:'neighbourhood',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['thư viện','bệnh viện','khu phố'],a:2,x:'<b>neighbourhood</b> = khu phố, hàng xóm.'},
      {kind:'choice',q:`“Cuối tuần, em tình nguyện ở một tổ chức từ thiện.”<br>→ I ___ at a charity on Sundays.<div class="hint">${bank}</div>`,o:['plant','volunteer','collect'],a:1,x:'<b>volunteer</b> = tình nguyện.'},
      {kind:'choice',q:`“Cả lớp dọn dẹp công viên.”<br>→ Our class will ___ the park.<div class="hint">${bank}</div>`,o:['clean up','donate','plant'],a:0,x:'<b>clean up</b> = dọn dẹp. “donate” là quyên góp (từ gây nhiễu).'},
      {kind:'choice',q:`“Chúng em thu gom chai nhựa.”<br>→ We ___ plastic bottles.<div class="hint">${bank}</div>`,o:['recycle','collect','volunteer'],a:1,x:'<b>collect</b> = thu gom. “recycle” là tái chế (từ gây nhiễu).'},
      {kind:'choice',q:`“Em trồng cây trước trường.”<br>→ I ___ trees near my school.<div class="hint">${bank}</div>`,o:['collect','clean up','plant'],a:2,x:'<b>plant</b> = trồng.'},
      {kind:'choice',q:`“Cộng đồng của chúng ta sẽ sạch hơn.”<br>→ Our ___ will be cleaner.<div class="hint">${bank}</div>`,o:['community','charity','neighbourhood'],a:0,x:'<b>community</b> = cộng đồng. “neighbourhood” là khu phố.'},
      {kind:'choice',q:`“Em giúp người cao tuổi trong khu phố.”<br>→ I help the ___ in my ___.<div class="hint">${bank}</div>`,o:['community – elderly','neighbourhood – elderly','elderly – neighbourhood'],a:2,x:'<b>the elderly</b> = người cao tuổi; <b>my neighbourhood</b> = khu phố của em.'}
    ]}
  ]},
  {id:'sound',title:'Mục 3 · Âm vô thanh và hữu thanh',steps:[
    {id:'s-th',type:'read',title:'Đọc: đặt tay lên cổ',sub:'Bước 7 · Lý thuyết',html:`
      <p>Đặt tay lên cổ họng rồi đọc âm. <b>Cổ không rung</b> → âm <b>vô thanh</b> (voiceless). <b>Cổ rung</b> → âm <b>hữu thanh</b> (voiced).</p>
      <div class="tbl"><table><tr><th>Loại</th><th>Âm</th><th>Ví dụ</th></tr>
      <tr><td>Vô thanh 🤫 (cổ không rung)</td><td>/p/ /t/ /k/ /f/ /s/ /ʃ/ /tʃ/</td><td>help /p/, pick /k/, wash /ʃ/</td></tr>
      <tr><td>Hữu thanh 🔔 (cổ rung)</td><td>/b/ /d/ /g/ /v/ /z/ /l/ /n/ /m/ và các nguyên âm</td><td>clean /n/, recycle /l/, play (nguyên âm)</td></tr></table></div>
      <div class="card">💡 Âm <b>cuối</b> của động từ quyết định cách đọc đuôi <b>-ed</b> ở Phiên 2. Hôm nay em chỉ cần nhận ra âm cuối là vô thanh hay hữu thanh.</div>
      <p>Thử nghe: <button class="say" data-say="p, b">p / b</button> <button class="say" data-say="s, z">s / z</button> <button class="say" data-say="t, d">t / d</button></p>`},
    {id:'s-q',type:'items',title:'8 câu nhận diện âm',sub:'Bước 8 · Nghe rồi chọn',items:[
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
    {id:'a-phr',type:'speak',title:'Đọc to 4 cụm từ',sub:'Bước 9 · Nghe mẫu, ghi âm, nghe lại, gửi',
     intro:'Bấm <b>🔊 Nghe mẫu</b> (rồi <b>🐢 Chậm</b> nếu cần), sau đó ghi âm. Nghe lại thấy ổn thì bấm <b>📤 Gửi</b>.',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi cụm.'],
     prompts:[
      {text:'<b>plant trees</b>',vi:'trồng cây',say:'plant trees',maxSec:15},
      {text:'<b>clean up the park</b>',vi:'dọn dẹp công viên',say:'clean up the park',maxSec:15},
      {text:'<b>collect old clothes</b>',vi:'thu gom quần áo cũ',say:'collect old clothes',maxSec:15},
      {text:'<b>help the elderly in my neighbourhood</b>',vi:'giúp người cao tuổi trong khu phố của em',say:'help the elderly in my neighbourhood',maxSec:20}
     ]},
    {id:'a-sen',type:'speak',title:'Đọc to 4 câu trả lời mẫu',sub:'Bước 10 · Khi ai đó hỏi em về việc giúp cộng đồng',
     intro:'Mỗi mục có một <b>câu hỏi</b> và một <b>câu trả lời mẫu</b>. Em nghe mẫu, rồi đọc to câu trả lời. Sau này em có thể dùng các câu này để trả lời khi được hỏi.',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi câu.','Em đã đọc rõ âm cuối của các từ.'],
     prompts:[
      {text:'❓ <i>How can we help our community?</i><br><b>We can collect old books and donate them to a local charity.</b>',vi:'Làm sao để giúp cộng đồng? → Chúng ta có thể thu gom sách cũ và tặng cho một tổ chức từ thiện.',say:'We can collect old books and donate them to a local charity.',maxSec:30},
      {text:'❓ <i>What can you do to protect the environment?</i><br><b>I can recycle plastic bottles and plant small trees near my school.</b>',vi:'Em làm gì để bảo vệ môi trường? → Em có thể tái chế chai nhựa và trồng cây nhỏ gần trường.',say:'I can recycle plastic bottles and plant small trees near my school.',maxSec:30},
      {text:'❓ <i>What did you do to help last month?</i><br><b>Last month, I joined a group and we cleaned up the beach near my neighbourhood.</b>',vi:'Tháng trước em đã làm gì để giúp đỡ? → Tháng trước em tham gia một nhóm và chúng em dọn bãi biển gần khu phố.',say:'Last month, I joined a group and we cleaned up the beach near my neighbourhood.',maxSec:40},
      {text:'❓ <i>Why is volunteering important?</i><br><b>Volunteering is important because it helps people and makes our community better.</b>',vi:'Vì sao làm tình nguyện quan trọng? → Vì nó giúp mọi người và làm cộng đồng tốt hơn.',say:'Volunteering is important because it helps people and makes our community better.',maxSec:40}
     ]}
  ]}
  ]
};
})();
