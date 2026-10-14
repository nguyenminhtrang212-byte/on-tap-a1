window.STUDY = {
  lesson: 'CU A1 U3 Tu hoc 1',
  filePrefix: 'TuHoc',
  title: 'Tự học Unit 3 · Link 1: Từ vựng',
  sub: 'Close-up A1+ · Link 1/2: Khởi động và Từ vựng. Xong link này em làm tiếp Link 2 (Ngữ pháp, Đọc, Nói).',
  intro: 'Làm theo thứ tự: bước sau chỉ mở khi em xong bước trước. Phần <b>lý thuyết</b>: đọc xong nhớ tick “Em đã đọc kỹ”. Sai không sao, em được thử lại.',
  emoji: '🏙️', stampTitle: 'Unit 3', stampSub: 'My Home Town',

  vocab: {
    stadium:{en:'stadium',vi:'sân vận động',ipa:'/ˈsteɪdiəm/',emoji:'🏟️',group:'place',ctx:'We watch football at the ___.'},
    hospital:{en:'hospital',vi:'bệnh viện',ipa:'/ˈhɒspɪtl/',emoji:'🏥',group:'place',ctx:'My uncle is sick, so he is in the ___.'},
    restaurant:{en:'restaurant',vi:'nhà hàng',ipa:'/ˈrestrɒnt/',emoji:'🍽️',group:'place',ctx:'We eat pizza at the ___ on Sundays.'},
    theatre:{en:'theatre',vi:'nhà hát',ipa:'/ˈθɪətə/',emoji:'🎭',group:'place',ctx:'We saw a funny play at the ___.'},
    supermarket:{en:'supermarket',vi:'siêu thị',ipa:'/ˈsuːpəmɑːkɪt/',emoji:'🛒',group:'place',ctx:'Mum buys rice and milk at the ___.'},
    library:{en:'library',vi:'thư viện',ipa:'/ˈlaɪbrəri/',emoji:'📚',group:'place',ctx:'I borrow story books from the ___.'},
    village:{en:'village',vi:'làng',ipa:'/ˈvɪlɪdʒ/',emoji:'🏡',group:'place',ctx:'My grandparents live in a small ___ with rice fields.',dis:['hospital','library']},
    city:{en:'city',vi:'thành phố',ipa:'/ˈsɪti/',emoji:'🌆',group:'place',ctx:'There are many tall buildings and busy roads in a big ___.',dis:['stadium','library']},
    police:{en:'police officer',vi:'cảnh sát',ipa:'/pəˈliːs ˈɒfɪsə/',emoji:'👮',group:'job',ctx:'A ___ helps us when there is a crime.',alt:['policeman','policewoman']},
    firefighter:{en:'firefighter',vi:'lính cứu hỏa',ipa:'/ˈfaɪəfaɪtə/',emoji:'🚒',group:'job',ctx:'The ___ puts out the fire with water.',alt:['fire fighter']},
    shopasst:{en:'shop assistant',vi:'nhân viên bán hàng',ipa:'/ʃɒp əˈsɪstənt/',emoji:'🛍️',group:'job',ctx:'The ___ helps me find a T-shirt in the shop.'},
    waiter:{en:'waiter',vi:'bồi bàn (nam)',ipa:'/ˈweɪtə/',emoji:'🍝',group:'job',ctx:'The ___ brings our food to the table.',alt:['waitress']},
    actor:{en:'actor',vi:'diễn viên',ipa:'/ˈæktə/',emoji:'🎬',group:'job',ctx:'The ___ is on the stage at the theatre.',alt:['actress']},
    librarian:{en:'librarian',vi:'thủ thư',ipa:'/laɪˈbreəriən/',emoji:'👩‍🏫',group:'job',ctx:'The ___ helps you find books.'},
    geton:{en:'get on',vi:'lên xe (buýt, tàu)',ipa:'/ɡet ɒn/',emoji:'🚌',group:'verb',ctx:"The bus is here. Let's ___ and find a seat.",dis:['arrive','ride']},
    getoff:{en:'get off',vi:'xuống xe (buýt, tàu)',ipa:'/ɡet ɒf/',emoji:'🛑',group:'verb',ctx:'This is our stop, so we ___ the bus here.',dis:['miss','arrive']},
    catch:{en:'catch',vi:'bắt kịp (xe)',ipa:'/kætʃ/',emoji:'🏃',group:'verb',ctx:'Run! The bus is leaving. We want to ___ it.',dis:['getoff','arrive']},
    miss:{en:'miss',vi:'lỡ (xe)',ipa:'/mɪs/',emoji:'⏰',group:'verb',ctx:'Hurry up, or we will ___ the train.',dis:['geton','arrive']},
    ride:{en:'ride',vi:'đạp (xe), cưỡi',ipa:'/raɪd/',emoji:'🚲',group:'verb',ctx:'I ___ my bike to school every day.',dis:['catch','arrive']},
    arrive:{en:'arrive',vi:'đến nơi',ipa:'/əˈraɪv/',emoji:'📍',group:'verb',ctx:'We ___ at school at 7 a.m.',dis:['getoff','ride']}
  },
  /* Tỉ lệ ôn lại: vòng 1 = 0% · vòng 2 = 5/11 · vòng 3 = 8/14 → cả bài 13/33 ≈ 39% */
  rounds: [
    {id:'r1',new:['stadium','hospital','restaurant','theatre','supermarket','library','village','city'],review:[]},
    {id:'r2',new:['police','firefighter','shopasst','waiter','actor','librarian'],review:['stadium','hospital','library','supermarket','theatre']},
    {id:'r3',new:['geton','getoff','catch','miss','ride','arrive'],review:['restaurant','city','village','waiter','police','firefighter','actor','hospital']}
  ],

  only: ['warm','vocab'],
  parts: [
  {id:'warm',title:'Khởi động',steps:[
    {id:'w-bs',type:'brainstorm',title:'Brainstorm: MY TOWN',sub:'3 phút · đánh thức những từ em đã biết',
     prompt:'Viết thật nhiều từ em biết về thị trấn / khu phố của em. Chưa biết tiếng Anh thì viết tiếng Việt, học xong em quay lại đổi.',
     min:8,
     fields:[
       {label:'📍 Places (nơi chốn)',hint:'Quanh nhà em có những nơi nào?',n:3},
       {label:'👩‍🚒 People & jobs (người, nghề)',hint:'Ai làm việc ở những nơi đó?',n:3},
       {label:'🚌 Transport (di chuyển)',hint:'Em đi đến đó bằng gì?',n:3},
       {label:'🎯 Things I do (việc em làm)',hint:'Em làm gì ở đó?',n:3}
     ]}
  ]},

  {id:'vocab',title:'Mục 1 · Từ vựng (Vocabulary)',steps:[
    {id:'v-r1',type:'read',title:'Đọc: Places (nơi chốn)',sub:'Bước 1 · Lý thuyết',html:`
      <p>Đọc to từng từ, bấm 🔊 để nghe. Che cột tiếng Việt để tự thử.</p>
      <div class="tbl"><table><tr><th></th><th>Word</th><th>Phát âm</th><th>Nghĩa</th></tr>
      <tr><td>🏟️</td><td><b>stadium</b> <button class="say" data-say="stadium">🔊</button></td><td class="ipa">/ˈsteɪdiəm/</td><td>sân vận động</td></tr>
      <tr><td>🏥</td><td><b>hospital</b> <button class="say" data-say="hospital">🔊</button></td><td class="ipa">/ˈhɒspɪtl/</td><td>bệnh viện</td></tr>
      <tr><td>🍽️</td><td><b>restaurant</b> <button class="say" data-say="restaurant">🔊</button></td><td class="ipa">/ˈrestrɒnt/</td><td>nhà hàng</td></tr>
      <tr><td>🎭</td><td><b>theatre</b> <button class="say" data-say="theatre">🔊</button></td><td class="ipa">/ˈθɪətə/</td><td>nhà hát</td></tr>
      <tr><td>🛒</td><td><b>supermarket</b> <button class="say" data-say="supermarket">🔊</button></td><td class="ipa">/ˈsuːpəmɑːkɪt/</td><td>siêu thị</td></tr>
      <tr><td>📚</td><td><b>library</b> <button class="say" data-say="library">🔊</button></td><td class="ipa">/ˈlaɪbrəri/</td><td>thư viện</td></tr>
      <tr><td>🏡</td><td><b>village</b> <button class="say" data-say="village">🔊</button></td><td class="ipa">/ˈvɪlɪdʒ/</td><td>làng</td></tr>
      <tr><td>🌆</td><td><b>city</b> <button class="say" data-say="city">🔊</button></td><td class="ipa">/ˈsɪti/</td><td>thành phố</td></tr></table></div>
      <div class="card">📖 Sau bài này, em mở sách làm <b>Workbook tr.19, bài A</b> (điền chữ cái cho từng địa điểm).</div>`},
    {id:'v-q1',type:'vocab',round:'r1',title:'Luyện: vòng 1 (8 từ mới)',sub:'Bước 2 · Nhận ra nghĩa'},
    {id:'v-r2',type:'read',title:'Đọc: People & jobs (người, nghề)',sub:'Bước 3 · Lý thuyết',html:`
      <p>Mỗi nghề thường gắn với một nơi. Nhớ theo cặp sẽ dễ hơn.</p>
      <div class="tbl"><table><tr><th></th><th>Job</th><th>Làm việc ở</th><th>Nghĩa</th></tr>
      <tr><td>👮</td><td><b>police officer</b> <button class="say" data-say="police officer">🔊</button></td><td>police station</td><td>cảnh sát</td></tr>
      <tr><td>🚒</td><td><b>firefighter</b> <button class="say" data-say="firefighter">🔊</button></td><td>fire station</td><td>lính cứu hỏa</td></tr>
      <tr><td>🛍️</td><td><b>shop assistant</b> <button class="say" data-say="shop assistant">🔊</button></td><td>shop</td><td>nhân viên bán hàng</td></tr>
      <tr><td>🍝</td><td><b>waiter</b> <button class="say" data-say="waiter">🔊</button></td><td>restaurant</td><td>bồi bàn</td></tr>
      <tr><td>🎬</td><td><b>actor</b> <button class="say" data-say="actor">🔊</button></td><td>theatre</td><td>diễn viên</td></tr>
      <tr><td>👩‍🏫</td><td><b>librarian</b> <button class="say" data-say="librarian">🔊</button></td><td>library</td><td>thủ thư</td></tr></table></div>
      <div class="card">💡 Em để ý: <b>police officer</b> và <b>firefighter</b> là cụm hay gặp trong sách (Workbook tr.19, bài B: ghép cụm từ).</div>`},
    {id:'v-q2',type:'vocab',round:'r2',title:'Luyện: vòng 2 (6 từ mới + 5 từ ôn lại)',sub:'Bước 4 · Từ cũ quay lại khó hơn một chút'},
    {id:'v-r3',type:'read',title:'Đọc: Transport (di chuyển)',sub:'Bước 5 · Lý thuyết',html:`
      <p>Người Việt hay nhầm các động từ này. Em đọc kỹ cặp “đi đôi” với nhau:</p>
      <div class="tbl"><table><tr><th>Cụm từ</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      <tr><td><b>get on</b> / <b>get off</b> <button class="say" data-say="get on, get off">🔊</button></td><td>lên / xuống xe buýt, tàu</td><td class="ex">We get off the bus at the stadium.</td></tr>
      <tr><td><b>get in</b> (the car)</td><td>lên ô tô, taxi</td><td class="ex">Get in the car, please.</td></tr>
      <tr><td><b>catch</b> / <b>miss</b> <button class="say" data-say="catch, miss">🔊</button></td><td>bắt kịp / lỡ xe</td><td class="ex">Run! We want to catch the bus.</td></tr>
      <tr><td><b>ride</b> a bike</td><td>đạp xe (cũng dùng cho xe máy)</td><td class="ex">I ride my bike to school.</td></tr>
      <tr><td><b>drive</b> a car</td><td>lái ô tô</td><td class="ex">My dad drives a car.</td></tr>
      <tr><td><b>take</b> a train</td><td>đi tàu</td><td class="ex">She takes a train to the city.</td></tr>
      <tr><td><b>arrive</b> (at school)</td><td>đến nơi</td><td class="ex">We arrive at school at 7. / He arrives home at six.</td></tr></table></div>
      <div class="card">⚠️ Nói <b>arrive home</b> (không nói “arrive at home”). Nói <b>arrive at</b> school / the station.<br>📖 Sau bài này, em mở sách làm <b>Workbook tr.20, bài D</b>.</div>`},
    {id:'v-q3',type:'vocab',round:'r3',title:'Luyện: vòng 3 (6 từ mới + 8 từ ôn lại)',sub:'Bước 6 · Có từ phải tự gõ'},
    {id:'v-w',type:'write',title:'Viết: nơi em thích nhất (Level 3)',sub:'Bước 7 · Dùng từ vựng nói về em',
     prompt:'Viết 4 câu về nơi em thích nhất trong khu phố của em.',
     tips:`<b>Khung câu:</b><br>My favourite place is the ______.<br>It is near / opposite / next to ______.<br>I go there with ______.<br>I like it because ______.`,
     min:25,
     checks:[
       {label:'Có “favourite”',re:'favou?rite'},
       {label:'Có giới từ chỉ vị trí (near, opposite, next to, between…)',re:'\\b(near|opposite|next to|between|behind|in front of)\\b'},
       {label:'Có “because” (giải thích lý do)',re:'because'},
       {label:'Dùng ít nhất 1 từ mới của bài (library, stadium, village…)',re:'(stadium|hospital|restaurant|theatre|supermarket|library|village|city|police|firefighter|waiter|librarian|shop assistant)'}
     ],
     model:'My favourite place is the library. It is next to my school. I go there with my friend Lan. I like it because it is quiet and the librarian is very kind.'}
  ]},

  {id:'gram',title:'Mục 2 · Ngữ pháp (Grammar)',steps:[
    {id:'g-r1',type:'read',title:'Đọc: There is / There are',sub:'Bước 1 · Lý thuyết',html:`
      <p><b>There is / There are</b> = “có …”, dùng để nói trong một nơi có cái gì.</p>
      <div class="tbl"><table><tr><th></th><th>Số ít (1 cái)</th><th>Số nhiều (nhiều cái)</th></tr>
      <tr><td>＋</td><td>There <b>is</b> a library.</td><td>There <b>are</b> two cinemas.</td></tr>
      <tr><td>－</td><td>There <b>isn't</b> a bank.</td><td>There <b>aren't</b> any shops.</td></tr>
      <tr><td>？</td><td><b>Is</b> there a park?<br>Yes, there is. / No, there isn't.</td><td><b>Are</b> there any shops?<br>Yes, there are. / No, there aren't.</td></tr></table></div>
      <div class="card">💡 Mẹo: nhìn <b>danh từ phía sau</b>. “a bank” (1) → <i>is</i>. “two parks”, “a lot of people” (nhiều) → <i>are</i>.<br>📖 Sau bài này, em mở sách làm <b>Workbook tr.20, phần Grammar bài A</b>.</div>`},
    {id:'g-q1',type:'items',title:'Luyện: there is / there are',sub:'Bước 2 · Chọn đáp án rồi tự gõ',items:[
      {kind:'choice',q:'There ___ a bank near here.',o:['is','are'],a:0,x:'“a bank” là 1 cái → <b>there is</b>.'},
      {kind:'choice',q:'There ___ two parks in my town.',o:['is','are'],a:1,x:'“two parks” là nhiều → <b>there are</b>.'},
      {kind:'choice',q:'___ there any shops in your village?',o:['Is','Are'],a:1,x:'“any shops” là số nhiều → <b>Are there</b> …?'},
      {kind:'choice',q:'There ___ any taxis outside.',o:["isn't","aren't"],a:1,x:'“taxis” là số nhiều → <b>aren\'t</b>.'},
      {kind:'choice',q:'___ there a cinema near your school?',o:['Is','Are'],a:0,x:'“a cinema” là 1 cái → <b>Is there</b> …?'},
      {kind:'choice',q:'There ___ a lot of people in the stadium.',o:['is','are'],a:1,x:'“a lot of people” là nhiều người → <b>are</b>.'},
      {kind:'fill',q:'Gõ <b>is</b> hoặc <b>are</b>: There ___ three chemist\'s shops in my neighbourhood.',a:['are'],hint:'“three” là nhiều.',x:'<b>are</b> (vì có ba cửa hàng).'},
      {kind:'fill',q:'Gõ <b>is</b> hoặc <b>are</b>: There ___ a good restaurant near here.',a:['is'],hint:'“a good restaurant” là 1 cái.',x:'<b>is</b>.'},
      {kind:'fill',q:'Gõ <b>Is</b> hoặc <b>Are</b>: ___ there a library in your town?',a:['is'],hint:'“a library” là 1 cái.',x:'<b>Is</b> there a library …?'},
      {kind:'fill',q:'Gõ <b>isn\'t</b> hoặc <b>aren\'t</b>: There ___ any good films tonight.',a:["aren't"],hint:'“films” là nhiều, câu phủ định.',x:'<b>aren\'t</b>.'}
    ]},
    {id:'g-r2',type:'read',title:'Đọc: Giới từ chỉ nơi chốn',sub:'Bước 3 · Lý thuyết',html:`
      <div class="tbl"><table><tr><th>Giới từ</th><th>Nghĩa</th><th>Giới từ</th><th>Nghĩa</th></tr>
      <tr><td><b>in front of</b></td><td>phía trước</td><td><b>behind</b></td><td>phía sau</td></tr>
      <tr><td><b>next to</b></td><td>bên cạnh</td><td><b>opposite</b></td><td>đối diện (bên kia đường)</td></tr>
      <tr><td><b>between</b></td><td>ở giữa (2 nơi)</td><td><b>under</b></td><td>dưới</td></tr></table></div>
      <div class="card">My school is <b>next to</b> the park.<br>The bank is <b>opposite</b> the library.<br>The cat is <b>under</b> the table.<br><br>📖 Sau bài này, em mở sách làm <b>Workbook tr.21, bài B</b>.</div>`},
    {id:'g-r3',type:'read',title:'Đọc: Present continuous (đang làm gì)',sub:'Bước 4 · Lý thuyết',html:`
      <p>Dùng để nói việc <b>đang xảy ra ngay bây giờ</b>. Công thức: <b>am / is / are + V-ing</b>.</p>
      <div class="tbl"><table><tr><th></th><th>Ví dụ</th></tr>
      <tr><td>＋</td><td>I <b>am reading</b>. She <b>is cooking</b>. They <b>are playing</b>.</td></tr>
      <tr><td>－</td><td>He <b>isn't</b> cooking. We <b>aren't</b> playing.</td></tr>
      <tr><td>？</td><td><b>Are</b> you reading? What <b>is</b> she doing? Where <b>are</b> they going?</td></tr></table></div>
      <div class="card"><b>Cách thêm -ing:</b><br>• bỏ <i>e</i>: make → <b>making</b>, leave → <b>leaving</b><br>• gấp đôi phụ âm cuối: put → <b>putting</b>, sit → <b>sitting</b>, run → <b>running</b><br>• còn lại thêm -ing: rain → <b>raining</b>, play → <b>playing</b></div>
      <div class="card"><b>Phân biệt:</b> <i>usually, often, every day</i> → present simple (thói quen). <i>Look!, Be quiet!, now, at the moment</i> → present continuous (đang xảy ra).<br>📖 Sau bài này, em mở sách làm <b>Workbook tr.21, bài C và D</b>.</div>`},
    {id:'g-q3',type:'items',title:'Luyện: present continuous',sub:'Bước 5 · Thêm -ing, chọn thì, tự chia động từ',items:[
      {kind:'fill',q:'Thêm -ing: <b>make</b> → ?',a:['making'],hint:'Bỏ e rồi thêm -ing.',x:'make → <b>making</b>.'},
      {kind:'fill',q:'Thêm -ing: <b>put</b> → ?',a:['putting'],hint:'Gấp đôi chữ t.',x:'put → <b>putting</b>.'},
      {kind:'fill',q:'Thêm -ing: <b>run</b> → ?',a:['running'],hint:'Gấp đôi chữ n.',x:'run → <b>running</b>.'},
      {kind:'fill',q:'Thêm -ing: <b>rain</b> → ?',a:['raining'],hint:'Chỉ thêm -ing.',x:'rain → <b>raining</b>.'},
      {kind:'fill',q:'Thêm -ing: <b>leave</b> → ?',a:['leaving'],hint:'Bỏ e rồi thêm -ing.',x:'leave → <b>leaving</b>.'},
      {kind:'fill',q:'Thêm -ing: <b>sit</b> → ?',a:['sitting'],hint:'Gấp đôi chữ t.',x:'sit → <b>sitting</b>.'},
      {kind:'choice',q:'My dad usually ___ to work.',o:['drives','is driving'],a:0,x:'<i>usually</i> = thói quen → present simple: <b>drives</b>.'},
      {kind:'choice',q:'Be quiet! The baby ___.',o:['sleeps','is sleeping'],a:1,x:'“Be quiet!” = đang xảy ra → <b>is sleeping</b>.'},
      {kind:'choice',q:'We often ___ at that restaurant.',o:['eat','are eating'],a:0,x:'<i>often</i> = thói quen → <b>eat</b>.'},
      {kind:'choice',q:'Look! The firefighters ___ on the fire engine.',o:['get','are getting'],a:1,x:'“Look!” = đang xảy ra → <b>are getting</b>.'},
      {kind:'choice',q:'I ___ TV at the moment.',o:["don't watch",'am not watching'],a:1,x:'<i>at the moment</i> → <b>am not watching</b>.'},
      {kind:'fill',q:'Gõ dạng đúng: She ___ (cook) dinner now.',a:['is cooking'],hint:'is + V-ing',x:'She <b>is cooking</b> dinner now.'},
      {kind:'fill',q:'Gõ dạng đúng: They ___ (not play) football at the moment.',a:["aren't playing"],hint:"aren't + V-ing",x:"They <b>aren't playing</b> football at the moment."},
      {kind:'fill',q:'Gõ <b>am / is / are</b>: ___ you doing your homework now?',a:['are'],hint:'Chủ ngữ là “you”.',x:'<b>Are</b> you doing your homework now?'}
    ]},
    {id:'g-w',type:'write',title:'Viết: nói về khu phố của em (Level 3)',sub:'Bước 6 · Dùng cả 3 điểm ngữ pháp',
     prompt:'Viết 5 câu về khu phố của em.',
     tips:`<b>Em cần có:</b> 1 câu <i>there is / there are</i> · 1 câu <i>there isn't / aren't</i> · 1 câu có giới từ · 1 câu present continuous · 1 câu hỏi <i>Is there …?</i><br>Ví dụ: <i>There is a market near my house. There isn't a cinema in my village. The school is opposite the park. My mum is cooking now. Is there a library near your house?</i>`,
     min:25,
     checks:[
       {label:'Có There is / There are',re:'there (is|are|\'s)'},
       {label:"Có câu phủ định (isn't / aren't)",re:"(isn't|aren't|is not|are not)"},
       {label:'Có giới từ (near, opposite, next to…)',re:'\\b(near|opposite|next to|between|behind|in front of)\\b'},
       {label:'Có present continuous (am/is/are + V-ing)',re:'\\b(am|is|are) \\w+ing\\b'},
       {label:'Có một câu hỏi (dấu ?)',re:'\\?'}
     ],
     model:"There is a big market near my house. There isn't a cinema in my village. The school is opposite the park. My mum is cooking dinner now. Is there a library near your house?"}
  ]},

  {id:'read',title:'Mục 3 · Đọc (Reading)',required:false,steps:[
    {id:'r-q1',type:'items',optional:true,title:'Biển báo: ghép với ý nghĩa',sub:'Level 1 · Nhận ra từ quen thuộc',
     intro:'💡 Mẹo trong Exam Reminder: không cần hiểu hết các từ trên biển, chỉ cần tìm <b>từ em biết</b>. 📖 Sau bài này làm <b>Workbook tr.18</b>.',
     items:[
      {kind:'choice',q:'Biển báo: <b>LIBRARY – QUIET PLEASE</b>',o:["Don't talk loudly here.",'You can park here.','You can get a free gift.'],a:0,x:'<i>quiet</i> = yên lặng → đừng nói to.'},
      {kind:'choice',q:'Biển báo: <b>BUY 2, GET 1 FREE</b>',o:['You pay for two things and get three.','You must buy one thing only.','The shop is closed.'],a:0,x:'<i>free</i> = miễn phí → mua 2, tặng 1.'},
      {kind:'choice',q:'Biển báo: <b>NO MOBILE PHONES IN THE THEATRE</b>',o:['You can take photos here.',"Don't use your phone here.",'You can buy a phone here.'],a:1,x:'<i>No … </i> = cấm.'},
      {kind:'choice',q:'Biển báo: <b>NO PARKING – FIRE STATION</b>',o:['You can leave your car here.','This is a restaurant.',"You can't leave your car here."],a:2,x:'<i>No parking</i> = cấm đỗ xe.'},
      {kind:'choice',q:'Biển báo: <b>OPEN: Mon–Sat, 9 a.m.–6 p.m.</b>',o:['You can visit on Sunday.','You can visit on Saturday morning.','It is open at night.'],a:1,x:'Mở từ thứ Hai đến thứ Bảy, 9 giờ sáng → thứ Bảy buổi sáng được.'}
    ]},
    {id:'r-q2',type:'items',optional:true,title:'Đọc đoạn văn ngắn: Ben’s Saturday',sub:'Level 2 · True / False',
     intro:'<b>Saturday, 10 a.m.</b> Ben is at the bus stop opposite the supermarket. He is waiting for the number 12 bus. It arrives at 10:10. Ben gets on and rides to the stadium. There is a football match at 12 p.m. Tickets cost £8, or £5 for students. Ben has a student card, so he pays £5. His friend Leo is already at the stadium entrance.',
     items:[
      {kind:'choice',q:'Ben is at the supermarket.',o:['True','False'],a:1,x:'Ben is at the <b>bus stop</b> opposite the supermarket.'},
      {kind:'choice',q:'The bus arrives at 10:10.',o:['True','False'],a:0,x:'“It arrives at 10:10.”'},
      {kind:'choice',q:'The match starts at 10 a.m.',o:['True','False'],a:1,x:'The match is at <b>12 p.m.</b>'},
      {kind:'choice',q:'Ben pays £8 for his ticket.',o:['True','False'],a:1,x:'Ben pays <b>£5</b> (student price).'},
      {kind:'choice',q:'Leo is waiting at the bus stop.',o:['True','False'],a:1,x:'Leo is at the <b>stadium entrance</b>.'},
      {kind:'choice',q:'Why does Ben pay £5?',o:['He has a student card.','He is a child.','He has a free ticket.'],a:0,x:'“Ben has a student card, so he pays £5.”'}
    ]},
    {id:'r-w',type:'write',optional:true,title:'Viết: em muốn đến đâu?',sub:'Level 3 · Dùng điều em đọc',
     prompt:'Cuối tuần này em muốn đến đâu (stadium, theatre, library…)? Viết 2 câu.',
     tips:'Khung câu: <i>I want to go to the ______ because ______.</i>',min:10,
     checks:[{label:'Có “I want to”',re:'I want to'},{label:'Có “because”',re:'because'}],
     model:'I want to go to the stadium because I love football. I want to go with my brother.'}
  ]},

  {id:'speak',title:'Mục 4 · Nói (Speaking)',steps:[
    {id:'s-r',type:'read',title:'Đọc: mẹo phát âm',sub:'Bước 1 · Lý thuyết',html:`
      <p>Nghe mẫu, đọc theo, chú ý <b>âm tiết được nhấn</b> (viết hoa) và <b>âm cuối</b>.</p>
      <div class="tbl"><table><tr><th>Từ</th><th>Nhấn</th><th>Lưu ý</th></tr>
      <tr><td><b>stadium</b> <button class="say" data-say="stadium">🔊</button></td><td>STAY-di-um</td><td>âm cuối /m/ (khép môi)</td></tr>
      <tr><td><b>hospital</b> <button class="say" data-say="hospital">🔊</button></td><td>HOS-pi-tl</td><td>âm cuối /l/ (đầu lưỡi chạm lợi trên)</td></tr>
      <tr><td><b>restaurant</b> <button class="say" data-say="restaurant">🔊</button></td><td>RES-tront</td><td>âm cuối /t/</td></tr>
      <tr><td><b>library</b> <button class="say" data-say="library">🔊</button></td><td>LY-bruh-ry</td><td>không đọc “lai-be-ri”</td></tr>
      <tr><td><b>theatre</b> <button class="say" data-say="theatre">🔊</button></td><td>THEE-uh-ter</td><td>âm /th/: đặt lưỡi giữa hai hàm răng</td></tr>
      <tr><td><b>supermarket</b> <button class="say" data-say="supermarket">🔊</button></td><td>SOO-per-mar-kit</td><td>âm cuối /t/</td></tr></table></div>
      <div class="card">Chuẩn bị: điện thoại hoặc máy tính có micro. Phòng yên tĩnh. Nói to, rõ, chậm. Ghi âm xong nghe lại; thấy ổn thì bấm gửi cho thầy/cô (không bắt buộc).</div>`},
    {id:'s-1',type:'speak',title:'Level 1 · Đọc theo mẫu',sub:'Bước 2 · Nghe mẫu rồi ghi âm',
     prompts:[
      {text:'Đọc 3 từ: <b>stadium · hospital · restaurant</b>',say:'stadium, hospital, restaurant',maxSec:30},
      {text:'Đọc 3 từ: <b>theatre · supermarket · library</b>',say:'theatre, supermarket, library',maxSec:30},
      {text:'Đọc câu: <b>There is a stadium in my city.</b>',say:'There is a stadium in my city.',maxSec:30},
      {text:'Đọc câu: <b>Is there a library near your house?</b>',say:'Is there a library near your house?',maxSec:30},
      {text:'Đọc câu: <b>She is waiting at the bus stop.</b>',say:'She is waiting at the bus stop.',maxSec:30}
     ],
     check:['Em đã nghe mẫu ít nhất 1 lần trước khi ghi âm','Em đã đọc rõ âm cuối của từ (/m/, /l/, /t/)']},
    {id:'s-2',type:'speak',title:'Level 2 · Trả lời câu hỏi',sub:'Bước 3 · Nói thành câu đầy đủ',
     prompts:[
      {text:'<b>Where do you live?</b>',vi:'Em sống ở đâu?',say:'Where do you live?',hint:'I live in …  (village / town / city)',maxSec:30},
      {text:'<b>Is there a park near your house?</b>',vi:'Gần nhà em có công viên không?',say:'Is there a park near your house?',hint:"Yes, there is. It's … / No, there isn't, but there's a …",maxSec:30},
      {text:'<b>What is your favourite place in your town? Why?</b>',vi:'Nơi em thích nhất trong khu phố là gì? Vì sao?',say:'What is your favourite place in your town? Why?',hint:'My favourite place is … because …',maxSec:40}
     ],
     check:['Em trả lời bằng câu đầy đủ (không chỉ nói Yes hoặc No)']},
    {id:'s-3',type:'speak',title:'Level 3 · Bài nói 1 phút “My neighbourhood”',sub:'Bước 4 · Tự nói về em',
     intro:`<b>Chuẩn bị 3 phút bằng từ khóa, không viết cả câu. Nói theo 5 ý:</b><br>1. <b>Where I live:</b> I live in …<br>2. <b>What there is:</b> There is a … There are … There isn't a …<br>3. <b>My favourite place:</b> My favourite place is the … It is next to / opposite …<br>4. <b>How I go there:</b> I ride / take / get on … I arrive at …<br>5. <b>Right now:</b> At the moment I am …ing …`,
     prompts:[{text:'Ghi âm bài nói <b>45–60 giây</b> theo 5 ý trên.',hint:'Nói chậm, không sao nếu dừng ngắn để nghĩ.',maxSec:90}],
     check:['Có ít nhất 2 câu there is / there are','Có ít nhất 1 giới từ chỉ nơi chốn','Có 1 câu present continuous','Dùng ít nhất 5 từ mới của Unit 3']}
  ]}
  ]
};
