window.STUDY = {
  lesson: 'CU A1 U1-3 Tu hoc tong hop 1',
  filePrefix: 'TuHocTH',
  title: 'Tự học tổng hợp · Link 1: Từ vựng',
  sub: 'Units 1–3 · Link 1/2: Khởi động và Từ vựng. Xong link này em làm tiếp Link 2 (Ngữ pháp, Đọc, Nói).',
  intro: 'Làm theo thứ tự: bước sau chỉ mở khi em xong bước trước. Từ vựng cũ sẽ <b>quay lại</b> (ôn lại khoảng 40%) và mỗi lần quay lại sẽ khó hơn một chút. Phần <b>lý thuyết</b>: đọc xong nhớ tick “Em đã đọc kỹ”.',
  emoji: '🌟', stampTitle: 'Units 1–3', stampSub: 'Tổng hợp',

  vocab: {
    grandma:{en:'grandma',vi:'bà (nội, ngoại)',ipa:'/ˈɡrænmɑː/',emoji:'👵',group:'family',ctx:"My ___ is my mum's mother.",alt:['grandmother'],dis:['uncle','parents']},
    uncle:{en:'uncle',vi:'chú, bác, cậu',ipa:'/ˈʌŋkl/',emoji:'👨',group:'family',ctx:"My ___ is my dad's brother.",dis:['grandma','parents']},
    cousin:{en:'cousin',vi:'anh, chị, em họ',ipa:'/ˈkʌzn/',emoji:'🧒',group:'family',ctx:"My uncle's daughter is my ___.",dis:['parents','grandma']},
    parents:{en:'parents',vi:'bố mẹ',ipa:'/ˈpeərənts/',emoji:'👨‍👩‍👧',group:'family',ctx:'My mum and dad are my ___.',dis:['cousin','uncle']},
    surname:{en:'surname',vi:'họ',ipa:'/ˈsɜːneɪm/',emoji:'🪪',group:'family',ctx:'My first name is Anna and my ___ is Brown.',dis:['parents','cousin']},
    teenager:{en:'teenager',vi:'thiếu niên',ipa:'/ˈtiːneɪdʒə/',emoji:'🧑',group:'family',ctx:'A ___ is someone between 13 and 19 years old.',alt:['teen'],dis:['uncle','cousin']},
    hoodie:{en:'hoodie',vi:'áo hoodie (có mũ)',ipa:'/ˈhʊdi/',emoji:'🧥',group:'clothes',ctx:'It is cold, so I wear a warm ___ with a hood.'},
    trainers:{en:'trainers',vi:'giày thể thao',ipa:'/ˈtreɪnəz/',emoji:'👟',group:'clothes',ctx:'I wear my ___ in PE lessons.',alt:['sneakers']},
    skirt:{en:'skirt',vi:'váy',ipa:'/skɜːt/',emoji:'👗',group:'clothes',ctx:'She wears a pretty ___ and a white blouse.'},
    sociable:{en:'sociable',vi:'hòa đồng',ipa:'/ˈsəʊʃəbl/',emoji:'🤝',group:'adj',ctx:'Lan is very ___; she makes friends easily.'},
    creative:{en:'creative',vi:'sáng tạo',ipa:'/kriˈeɪtɪv/',emoji:'🎨',group:'adj',ctx:'He is ___; he paints and writes stories.'},
    energetic:{en:'energetic',vi:'năng động',ipa:'/ˌenəˈdʒetɪk/',emoji:'⚡',group:'adj',ctx:'My sister is ___; she runs and plays sport all day.'},
    stadium:{en:'stadium',vi:'sân vận động',ipa:'/ˈsteɪdiəm/',emoji:'🏟️',group:'place',ctx:'We watch football at the ___.'},
    hospital:{en:'hospital',vi:'bệnh viện',ipa:'/ˈhɒspɪtl/',emoji:'🏥',group:'place',ctx:'My uncle is sick, so he is in the ___.'},
    library:{en:'library',vi:'thư viện',ipa:'/ˈlaɪbrəri/',emoji:'📚',group:'place',ctx:'I borrow story books from the ___.'},
    supermarket:{en:'supermarket',vi:'siêu thị',ipa:'/ˈsuːpəmɑːkɪt/',emoji:'🛒',group:'place',ctx:'Mum buys rice and milk at the ___.'},
    waiter:{en:'waiter',vi:'bồi bàn',ipa:'/ˈweɪtə/',emoji:'🍝',group:'job',ctx:'The ___ brings our food to the table.',alt:['waitress'],dis:['library','hoodie']},
    firefighter:{en:'firefighter',vi:'lính cứu hỏa',ipa:'/ˈfaɪəfaɪtə/',emoji:'🚒',group:'job',ctx:'The ___ puts out the fire with water.',alt:['fire fighter'],dis:['hospital','skirt']}
  },
  /* Ôn lại: vòng 1 = 0% · vòng 2 = 5/11 · vòng 3 = 7/13 → cả bài 12/30 = 40% */
  rounds: [
    {id:'r1',new:['grandma','uncle','cousin','parents','surname','teenager'],review:[]},
    {id:'r2',new:['hoodie','trainers','skirt','sociable','creative','energetic'],review:['grandma','uncle','cousin','parents','teenager']},
    {id:'r3',new:['stadium','hospital','library','supermarket','waiter','firefighter'],review:['surname','hoodie','trainers','sociable','creative','grandma','uncle']}
  ],

  only: ['warm','vocab'],
  parts: [
  {id:'warm',title:'Khởi động',steps:[
    {id:'w-bs',type:'brainstorm',title:'Brainstorm: MY LIFE',sub:'3 phút · đánh thức những từ em đã biết',
     prompt:'Viết thật nhiều từ tiếng Anh em biết. Chưa biết thì viết tiếng Việt cũng được, học xong em đổi lại.',
     min:8,
     fields:[
       {label:'👪 Family (gia đình)',hint:'Những người trong nhà em',n:3},
       {label:'👕 Clothes (quần áo)',hint:'Em thường mặc gì?',n:3},
       {label:'⚽ Free time (lúc rảnh)',hint:'Em và bạn bè hay làm gì?',n:3},
       {label:'🏙️ My town (khu phố)',hint:'Quanh nhà em có những nơi nào?',n:3}
     ]}
  ]},

  {id:'vocab',title:'Mục 1 · Từ vựng (Vocabulary)',steps:[
    {id:'v-r1',type:'read',title:'Đọc: Unit 1 · Family (gia đình)',sub:'Bước 1 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th></th><th>Word</th><th>Phát âm</th><th>Nghĩa</th></tr>
      <tr><td>👵</td><td><b>grandma</b> <button class="say" data-say="grandma">🔊</button></td><td class="ipa">/ˈɡrænmɑː/</td><td>bà</td></tr>
      <tr><td>👨</td><td><b>uncle</b> <button class="say" data-say="uncle">🔊</button></td><td class="ipa">/ˈʌŋkl/</td><td>chú, bác, cậu</td></tr>
      <tr><td>🧒</td><td><b>cousin</b> <button class="say" data-say="cousin">🔊</button></td><td class="ipa">/ˈkʌzn/</td><td>anh, chị, em họ</td></tr>
      <tr><td>👨‍👩‍👧</td><td><b>parents</b> <button class="say" data-say="parents">🔊</button></td><td class="ipa">/ˈpeərənts/</td><td>bố mẹ</td></tr>
      <tr><td>🪪</td><td><b>surname</b> <button class="say" data-say="surname">🔊</button></td><td class="ipa">/ˈsɜːneɪm/</td><td>họ</td></tr>
      <tr><td>🧑</td><td><b>teenager</b> <button class="say" data-say="teenager">🔊</button></td><td class="ipa">/ˈtiːneɪdʒə/</td><td>thiếu niên (13–19 tuổi)</td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.5, bài A và B</b> (cây gia đình).</div>`},
    {id:'v-q1',type:'vocab',round:'r1',title:'Luyện: vòng 1 (6 từ mới)',sub:'Bước 2 · Nhận ra nghĩa'},
    {id:'v-r2',type:'read',title:'Đọc: Unit 2 · Clothes và tính cách',sub:'Bước 3 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th></th><th>Word</th><th>Phát âm</th><th>Nghĩa</th></tr>
      <tr><td>🧥</td><td><b>hoodie</b> <button class="say" data-say="hoodie">🔊</button></td><td class="ipa">/ˈhʊdi/</td><td>áo hoodie</td></tr>
      <tr><td>👟</td><td><b>trainers</b> <button class="say" data-say="trainers">🔊</button></td><td class="ipa">/ˈtreɪnəz/</td><td>giày thể thao</td></tr>
      <tr><td>👗</td><td><b>skirt</b> <button class="say" data-say="skirt">🔊</button></td><td class="ipa">/skɜːt/</td><td>váy</td></tr>
      <tr><td>🤝</td><td><b>sociable</b> <button class="say" data-say="sociable">🔊</button></td><td class="ipa">/ˈsəʊʃəbl/</td><td>hòa đồng</td></tr>
      <tr><td>🎨</td><td><b>creative</b> <button class="say" data-say="creative">🔊</button></td><td class="ipa">/kriˈeɪtɪv/</td><td>sáng tạo</td></tr>
      <tr><td>⚡</td><td><b>energetic</b> <button class="say" data-say="energetic">🔊</button></td><td class="ipa">/ˌenəˈdʒetɪk/</td><td>năng động</td></tr></table></div>
      <div class="card"><b>do / go / play:</b> <i>do</i> homework, judo · <i>go</i> swimming, cycling · <i>play</i> football, chess.<br>📖 Sau bài này, em mở sách làm <b>Workbook tr.10–11, bài A, B, C</b>.</div>`},
    {id:'v-q2',type:'vocab',round:'r2',title:'Luyện: vòng 2 (6 từ mới + 5 từ ôn lại)',sub:'Bước 4 · Từ Unit 1 quay lại, khó hơn một chút'},
    {id:'v-r3',type:'read',title:'Đọc: Unit 3 · Places và jobs',sub:'Bước 5 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th></th><th>Word</th><th>Phát âm</th><th>Nghĩa</th></tr>
      <tr><td>🏟️</td><td><b>stadium</b> <button class="say" data-say="stadium">🔊</button></td><td class="ipa">/ˈsteɪdiəm/</td><td>sân vận động</td></tr>
      <tr><td>🏥</td><td><b>hospital</b> <button class="say" data-say="hospital">🔊</button></td><td class="ipa">/ˈhɒspɪtl/</td><td>bệnh viện</td></tr>
      <tr><td>📚</td><td><b>library</b> <button class="say" data-say="library">🔊</button></td><td class="ipa">/ˈlaɪbrəri/</td><td>thư viện</td></tr>
      <tr><td>🛒</td><td><b>supermarket</b> <button class="say" data-say="supermarket">🔊</button></td><td class="ipa">/ˈsuːpəmɑːkɪt/</td><td>siêu thị</td></tr>
      <tr><td>🍝</td><td><b>waiter</b> <button class="say" data-say="waiter">🔊</button></td><td class="ipa">/ˈweɪtə/</td><td>bồi bàn (làm ở restaurant)</td></tr>
      <tr><td>🚒</td><td><b>firefighter</b> <button class="say" data-say="firefighter">🔊</button></td><td class="ipa">/ˈfaɪəfaɪtə/</td><td>lính cứu hỏa (làm ở fire station)</td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.19, bài A và B</b>.</div>`},
    {id:'v-q3',type:'vocab',round:'r3',title:'Luyện: vòng 3 (6 từ mới + 7 từ ôn lại)',sub:'Bước 6 · Từ Unit 1 và 2 quay lại, có từ phải tự gõ'},
    {id:'v-w',type:'write',title:'Viết: giới thiệu một người (Level 3)',sub:'Bước 7 · Dùng từ vựng của cả 3 unit',
     prompt:'Viết 5 câu giới thiệu một người trong gia đình em: là ai, tính cách thế nào, thường mặc gì.',
     tips:`<b>Khung câu:</b> My ______ is ______ (tên). He / She is ______ (sociable, creative, energetic…). He / She often wears ______. He / She likes ______ing.`,
     min:25,
     checks:[
       {label:'Có từ về gia đình (grandma, uncle, cousin, mum, dad, sister…)',re:'(grandma|grandmother|uncle|cousin|parents|mum|dad|sister|brother)'},
       {label:'Có tính từ về tính cách (sociable, creative, energetic, kind…)',re:'(sociable|creative|energetic|patient|organised|sporty|kind|funny|friendly)'},
       {label:'Nói về quần áo (wear / wears / wearing)',re:'(wears?|wearing)'},
       {label:'Có “and” hoặc “because” để nối ý',re:'\\b(and|because|but)\\b'}
     ],
     model:'My cousin is Minh. He is creative and sociable. He often wears a blue hoodie and white trainers. He likes drawing because it is fun. We play badminton together at weekends.'}
  ]},

  {id:'gram',title:'Mục 2 · Ngữ pháp (Grammar)',steps:[
    {id:'g-r1',type:'read',title:'Đọc: Unit 1 · be, have got, this/that/these/those',sub:'Bước 1 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th>Điểm</th><th>Nhớ</th></tr>
      <tr><td><b>be</b></td><td>I <b>am</b> · He / She / It <b>is</b> · We / You / They <b>are</b>. &nbsp; <i>I am 13. My parents are from Hanoi.</i></td></tr>
      <tr><td><b>have got</b></td><td>I / You / We / They <b>have got</b> · He / She / It <b>has got</b>. &nbsp; <i>She has got a smartphone.</i><br>Hỏi: <i>Have you got a pet? — Yes, I have. / No, I haven't.</i></td></tr>
      <tr><td><b>this / that / these / those</b></td><td><b>this / these</b> = ở gần (1 / nhiều). <b>that / those</b> = ở xa (1 / nhiều).<br><i>This is my book. Those are my cousins.</i></td></tr>
      <tr><td><b>my, your, his, her…</b></td><td>đứng trước danh từ: <i>my</i> book, <i>your</i> bag, <i>his</i> uncle, <i>her</i> surname.</td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.6–7</b> (Grammar Unit 1).</div>`},
    {id:'g-q1',type:'items',title:'Luyện: be, have got, this/that',sub:'Bước 2 · Chọn đáp án rồi tự gõ',items:[
      {kind:'choice',q:'I ___ 13 years old.',o:['am','is','are'],a:0,x:'Với <b>I</b> dùng <b>am</b>.'},
      {kind:'choice',q:'My brother ___ got two bikes.',o:['have','has'],a:1,x:'<b>My brother</b> = he → <b>has got</b>.'},
      {kind:'choice',q:'___ is my cousin over there.',o:['This','That'],a:1,x:'“over there” = ở xa → <b>That</b>.'},
      {kind:'choice',q:'___ are my new trainers on my feet.',o:['These','Those'],a:0,x:'Ở gần và nhiều → <b>These</b>.'},
      {kind:'choice',q:'Is this ___ book?',o:['you','your','yours'],a:1,x:'Trước danh từ dùng <b>your</b>.'},
      {kind:'choice',q:'They ___ got a big house.',o:['have','has'],a:0,x:'<b>They</b> → <b>have got</b>.'},
      {kind:'fill',q:'Gõ <b>am / is / are</b>: My parents ___ from Hanoi.',a:['are'],hint:'“My parents” là nhiều người.',x:'My parents <b>are</b> from Hanoi.'},
      {kind:'fill',q:'Gõ <b>has / have</b>: She ___ got a smartphone.',a:['has'],hint:'She → ?',x:'She <b>has</b> got a smartphone.'},
      {kind:'fill',q:'Gõ <b>this / that / these / those</b> (ở gần, nhiều): ___ are my friends here.',a:['these'],hint:'“here” = ở gần, “friends” = nhiều.',x:'<b>These</b> are my friends here.'},
      {kind:'fill',q:'Gõ <b>Have / Has</b>: ___ you got a pet?',a:['have'],hint:'Chủ ngữ là “you”.',x:'<b>Have</b> you got a pet?'}
    ]},
    {id:'g-r2',type:'read',title:'Đọc: Unit 2 · Present simple và trạng từ tần suất',sub:'Bước 3 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th>Điểm</th><th>Nhớ</th></tr>
      <tr><td><b>Khẳng định</b></td><td>I / You / We / They + động từ gốc. He / She / It + động từ <b>-s</b>. &nbsp; <i>I play. She plays.</i></td></tr>
      <tr><td><b>Phủ định</b></td><td><b>don't</b> (I, you, we, they) · <b>doesn't</b> (he, she, it) + động từ gốc. &nbsp; <i>He doesn't like spiders.</i></td></tr>
      <tr><td><b>Câu hỏi</b></td><td><b>Do</b> you play tennis? — Yes, I <b>do</b>. / No, I <b>don't</b>.<br><b>Does</b> she play tennis? — Yes, she <b>does</b>. / No, she <b>doesn't</b>.</td></tr>
      <tr><td><b>Từ hỏi</b></td><td>What, Where, When, Who, Why, How · <i>What time</i> does the film start?</td></tr>
      <tr><td><b>Tần suất</b></td><td>always &gt; usually &gt; often &gt; sometimes &gt; never — đứng <b>trước</b> động từ thường: <i>My dad always drives me to school.</i></td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.12–13</b> (Grammar Unit 2).</div>`},
    {id:'g-q2',type:'items',title:'Luyện: present simple',sub:'Bước 4 · Chọn, gõ và xếp câu',items:[
      {kind:'choice',q:'My mum ___ in a bank.',o:['work','works'],a:1,x:'<b>My mum</b> = she → động từ thêm <b>-s</b>.'},
      {kind:'choice',q:'He ___ like football.',o:["don't","doesn't"],a:1,x:'<b>He</b> → <b>doesn\'t</b>.'},
      {kind:'choice',q:'___ your sister play tennis?',o:['Do','Does'],a:1,x:'<b>your sister</b> = she → <b>Does</b>.'},
      {kind:'choice',q:'“Does Anna play the guitar?” — “Yes, she ___.”',o:['do','does'],a:1,x:'Trả lời ngắn: Yes, she <b>does</b>.'},
      {kind:'choice',q:'___ do you go to school? — By bike.',o:['How','Where','When'],a:0,x:'Hỏi cách đi → <b>How</b>.'},
      {kind:'choice',q:'___ does the film start? — At 8 o\'clock.',o:['What time','Where','Who'],a:0,x:'Hỏi giờ → <b>What time</b>.'},
      {kind:'fill',q:'Chia động từ: Tom ___ (play) football on Saturdays.',a:['plays'],hint:'He → thêm -s.',x:'Tom <b>plays</b> football on Saturdays.'},
      {kind:'fill',q:"Gõ dạng phủ định: She ___ (not like) spiders.",a:["doesn't like"],hint:"doesn't + động từ gốc",x:"She <b>doesn't like</b> spiders."},
      {kind:'fill',q:'Gõ <b>Do / Does</b>: ___ they live near the school?',a:['do'],hint:'Chủ ngữ là “they”.',x:'<b>Do</b> they live near the school?'},
      {kind:'fill',q:'Gõ <b>do / go / play</b>: I ___ swimming on Sundays.',a:['go'],hint:'swimming đi với động từ nào?',x:'I <b>go</b> swimming on Sundays.'},
      {kind:'order',q:'Xếp thành câu đúng:',w:['My','dad','always','drives','me','to','school'],a:'My dad always drives me to school',hint:'always đứng trước động từ.',x:'My dad always drives me to school.'},
      {kind:'order',q:'Xếp thành câu đúng:',w:['They','never','eat','breakfast','at','home'],a:'They never eat breakfast at home',hint:'never đứng trước động từ.',x:'They never eat breakfast at home.'},
      {kind:'order',q:'Xếp thành câu hỏi đúng:',w:['Does','she','often','play','chess'],a:'Does she often play chess',hint:'Câu hỏi bắt đầu bằng Does.',x:'Does she often play chess?'}
    ]},
    {id:'g-r3',type:'read',title:'Đọc: Unit 3 · there is/are, giới từ, present continuous',sub:'Bước 5 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th>Điểm</th><th>Nhớ</th></tr>
      <tr><td><b>there is / are</b></td><td><i>There <b>is</b> a library.</i> (1 cái) · <i>There <b>are</b> two cinemas.</i> (nhiều)<br>Hỏi: <i><b>Is</b> there a park? / <b>Are</b> there any shops?</i></td></tr>
      <tr><td><b>Giới từ</b></td><td>in front of, behind, next to, opposite, between, under.</td></tr>
      <tr><td><b>Present continuous</b></td><td><b>am / is / are + V-ing</b> = đang làm. <i>She is wearing a hoodie. They aren't playing.</i><br>Thêm -ing: make → <b>making</b> · sit → <b>sitting</b> · play → <b>playing</b>.</td></tr>
      <tr><td><b>So sánh</b></td><td><i>usually, often, every day</i> → present simple. <i>now, at the moment, Look!</i> → present continuous.</td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.20–21</b> (Grammar Unit 3).</div>`},
    {id:'g-q3',type:'items',title:'Luyện: Unit 3 và so sánh các thì',sub:'Bước 6 · Chọn, gõ và xếp câu',items:[
      {kind:'choice',q:'There ___ a bank near my school.',o:['is','are'],a:0,x:'“a bank” là 1 cái → <b>is</b>.'},
      {kind:'choice',q:'Are there ___ shops in your village?',o:['some','any'],a:1,x:'Trong câu hỏi dùng <b>any</b>.'},
      {kind:'choice',q:'The cinema is ___ the hospital, on the other side of the street.',o:['opposite','between'],a:0,x:'Bên kia đường → <b>opposite</b>.'},
      {kind:'choice',q:'Look! It ___ now.',o:['rains','is raining'],a:1,x:'“Look!”, “now” → <b>is raining</b>.'},
      {kind:'choice',q:'We usually ___ lunch at school.',o:['have','are having'],a:0,x:'<i>usually</i> = thói quen → <b>have</b>.'},
      {kind:'fill',q:'Gõ dạng đúng: She ___ (wear) a hoodie today.',a:['is wearing'],hint:'is + V-ing',x:'She <b>is wearing</b> a hoodie today.'},
      {kind:'fill',q:'Gõ <b>Is / Are</b>: ___ there a library near here?',a:['is'],hint:'“a library” là 1 cái.',x:'<b>Is</b> there a library near here?'},
      {kind:'fill',q:'Thêm -ing: <b>sit</b> → ?',a:['sitting'],hint:'Gấp đôi chữ t.',x:'sit → <b>sitting</b>.'},
      {kind:'order',q:'Xếp thành câu đúng:',w:['There','are','two','supermarkets','in','my','city'],a:'There are two supermarkets in my city',hint:'Bắt đầu bằng There are.',x:'There are two supermarkets in my city.'},
      {kind:'order',q:'Xếp thành câu hỏi đúng:',w:['What','are','you','doing','now'],a:'What are you doing now',hint:'Từ hỏi đứng đầu.',x:'What are you doing now?'}
    ]},
    {id:'g-w',type:'write',title:'Viết: một ngày của em và khu phố (Level 3)',sub:'Bước 7 · Dùng ngữ pháp của cả 3 unit',
     prompt:'Viết 6 câu về em: một thói quen hằng ngày, đồ em có, khu phố của em, và việc em đang làm bây giờ.',
     tips:`<b>Em cần có:</b> 1 trạng từ tần suất (always, usually, often, never) · 1 câu <i>have / has got</i> · 1 câu <i>there is / there are</i> · 1 câu present continuous.<br>Ví dụ: <i>I usually go to school by bike. I have got a new smartphone. There is a big park near my house. At the moment I am writing English sentences.</i>`,
     min:30,
     checks:[
       {label:'Có trạng từ tần suất (always, usually, often, never…)',re:'\\b(always|usually|often|sometimes|never)\\b'},
       {label:'Có have got / has got',re:'\\b(have|has) got\\b'},
       {label:'Có there is / there are',re:'there (is|are|\'s)'},
       {label:'Có present continuous (am/is/are + V-ing)',re:'\\b(am|is|are) \\w+ing\\b'}
     ],
     model:'I usually go to school by bike. I have got a new smartphone, but I never play games at school. There is a big park near my house. My sister has got a cat. At the moment I am writing English sentences.'}
  ]},

  {id:'read',title:'Mục 3 · Đọc (Reading)',required:false,steps:[
    {id:'r-q1',type:'items',optional:true,title:'Đọc thư giới thiệu: True / False',sub:'Level 2 · Đọc hiểu đoạn ngắn',
     intro:'<b>Hi Mai,</b> I\'m Tom and I\'m 13. I have got two sisters and a brother. My sister Jane is sociable and energetic. She often plays basketball after school. Today she is wearing her new trainers. There is a big stadium near my house, and we sometimes watch football there. What about you? Have you got any brothers or sisters? <b>Write back soon, Tom</b>',
     items:[
      {kind:'choice',q:'Tom is 13 years old.',o:['True','False'],a:0,x:'“I\'m Tom and I\'m 13.”'},
      {kind:'choice',q:'Tom has got one sister.',o:['True','False'],a:1,x:'Tom has got <b>two sisters and a brother</b>.'},
      {kind:'choice',q:'Jane is creative.',o:['True','False'],a:1,x:'Jane is <b>sociable and energetic</b>.'},
      {kind:'choice',q:'Jane is wearing new trainers today.',o:['True','False'],a:0,x:'“Today she is wearing her new trainers.”'},
      {kind:'choice',q:'There is a library near Tom\'s house.',o:['True','False'],a:1,x:'Near his house there is a <b>stadium</b>.'},
      {kind:'choice',q:'What does Tom ask Mai?',o:['If she has got brothers or sisters.','If she likes football.','Where she lives.'],a:0,x:'“Have you got any brothers or sisters?”'}
    ]},
    {id:'r-w',type:'write',optional:true,title:'Viết thư trả lời (Level 3)',sub:'Dùng điều em đọc',
     prompt:'Em là Mai. Viết 3–4 câu trả lời Tom: em có anh chị em không, và gần nhà em có gì.',
     tips:'Khung: <i>Hi Tom, I have got … There is / are … near my house. Write back soon, Mai.</i>',min:15,
     checks:[{label:'Có “Hi Tom”',re:'hi tom'},{label:'Có have got / has got',re:'(have|has) got'},{label:'Có there is / there are',re:'there (is|are|\'s)'}],
     model:'Hi Tom, I have got one brother and no sisters. There is a library and a small park near my house. Write back soon, Mai'}
  ]},

  {id:'speak',title:'Mục 4 · Nói (Speaking)',steps:[
    {id:'s-r',type:'read',title:'Đọc: mẹo phát âm',sub:'Bước 1 · Lý thuyết',html:`
      <p>Nghe mẫu, đọc theo, chú ý <b>âm tiết được nhấn</b> (viết hoa) và <b>âm cuối</b>.</p>
      <div class="tbl"><table><tr><th>Từ</th><th>Nhấn</th><th>Lưu ý</th></tr>
      <tr><td><b>teenager</b> <button class="say" data-say="teenager">🔊</button></td><td>TEEN-ay-jer</td><td>âm /dʒ/ như trong “juice”</td></tr>
      <tr><td><b>sociable</b> <button class="say" data-say="sociable">🔊</button></td><td>SO-sha-bl</td><td>“ci” đọc là /ʃ/</td></tr>
      <tr><td><b>creative</b> <button class="say" data-say="creative">🔊</button></td><td>kree-AY-tiv</td><td>nhấn âm thứ 2</td></tr>
      <tr><td><b>energetic</b> <button class="say" data-say="energetic">🔊</button></td><td>en-er-JET-ik</td><td>nhấn âm thứ 3</td></tr>
      <tr><td><b>trainers</b> <button class="say" data-say="trainers">🔊</button></td><td>TRAY-ners</td><td>đọc rõ âm cuối /z/</td></tr>
      <tr><td><b>hospital</b> <button class="say" data-say="hospital">🔊</button></td><td>HOS-pi-tl</td><td>âm cuối /l/</td></tr></table></div>
      <div class="card">Chuẩn bị: điện thoại hoặc máy tính có micro, phòng yên tĩnh. Nói to, rõ, chậm. Ghi âm xong nghe lại; thấy ổn thì bấm gửi cho thầy/cô (không bắt buộc).</div>`},
    {id:'s-1',type:'speak',title:'Level 1 · Đọc theo mẫu',sub:'Bước 2 · Nghe mẫu rồi ghi âm',
     prompts:[
      {text:'Đọc 3 từ: <b>teenager · sociable · creative</b>',say:'teenager, sociable, creative',maxSec:30},
      {text:'Đọc 3 từ: <b>energetic · trainers · hospital</b>',say:'energetic, trainers, hospital',maxSec:30},
      {text:'Đọc câu: <b>These are my new trainers.</b>',say:'These are my new trainers.',maxSec:30},
      {text:'Đọc câu: <b>My cousin is very creative.</b>',say:'My cousin is very creative.',maxSec:30},
      {text:'Đọc câu: <b>She is wearing a hoodie.</b>',say:'She is wearing a hoodie.',maxSec:30}
     ],
     check:['Em đã nghe mẫu ít nhất 1 lần trước khi ghi âm','Em đã đọc rõ âm cuối của từ (/z/, /l/, /t/)']},
    {id:'s-2',type:'speak',title:'Level 2 · Trả lời câu hỏi',sub:'Bước 3 · Nói thành câu đầy đủ',
     prompts:[
      {text:'<b>Who is in your family?</b>',vi:'Gia đình em có những ai?',say:'Who is in your family?',hint:'There are … people in my family. I have got … / My … is …',maxSec:40},
      {text:'<b>What do you usually do after school?</b>',vi:'Em thường làm gì sau giờ học?',say:'What do you usually do after school?',hint:'I usually … / I often … / Sometimes I …',maxSec:40},
      {text:'<b>What is your favourite place in your town? Why?</b>',vi:'Nơi em thích nhất trong khu phố là gì? Vì sao?',say:'What is your favourite place in your town? Why?',hint:'My favourite place is … because …',maxSec:40}
     ],
     check:['Em trả lời bằng câu đầy đủ (không chỉ nói vài từ)']},
    {id:'s-3',type:'speak',title:'Level 3 · Bài nói 1 phút “About me”',sub:'Bước 4 · Tự giới thiệu về em',
     intro:`<b>Chuẩn bị 3 phút bằng từ khóa, không viết cả câu. Nói theo 5 ý:</b><br>1. <b>Me and my family:</b> I'm … I'm … years old. I have got …<br>2. <b>Free time:</b> I usually … / I love …ing …<br>3. <b>A friend or cousin:</b> He / She is … (sociable, creative…). He / She is wearing …<br>4. <b>My town:</b> There is a … near my house. It is next to / opposite …<br>5. <b>Right now:</b> At the moment I am …ing …`,
     prompts:[{text:'Ghi âm bài nói <b>45–60 giây</b> theo 5 ý trên.',hint:'Nói chậm, không sao nếu dừng ngắn để nghĩ.',maxSec:90}],
     check:['Có câu have got / has got','Có ít nhất 1 trạng từ tần suất (usually, often…)','Có ít nhất 1 câu there is / there are','Có 1 câu present continuous']}
  ]}
  ]
};
