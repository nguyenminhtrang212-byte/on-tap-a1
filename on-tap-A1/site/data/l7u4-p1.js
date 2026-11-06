/* Lớp 7 · Unit 4 Music and Arts · Phiên 1 (Từ vựng theo cụm – Brainstorm). Nội dung do Claude soạn mới. */
(function(){
const GL={
 listen:{w:'listen to music',m:'listen to music',ipa:'/ˈlɪsn tə ˈmjuːzɪk/',pos:'cụm động từ',vi:'nghe nhạc'},
 concert:{w:'go to a concert',m:'went to a concert',ipa:'/ɡəʊ tə ə ˈkɒnsət/',pos:'cụm động từ',vi:'đi xem hòa nhạc'},
 gallery:{w:'art gallery',m:'art gallery',ipa:'/ɑːt ˈɡæləri/',pos:'cụm danh từ',vi:'phòng triển lãm tranh'},
 paint:{w:'paint pictures',m:'paint pictures',ipa:'/peɪnt ˈpɪktʃəz/',pos:'cụm động từ',vi:'vẽ tranh'},
 guitar:{w:'play the guitar',m:'play the guitar',ipa:'/pleɪ ðə ɡɪˈtɑː/',pos:'cụm động từ',vi:'chơi đàn ghi-ta'},
 practise:{w:'practise every day',m:'practise every day',ipa:'/ˈpræktɪs ˈevri deɪ/',pos:'cụm động từ',vi:'luyện tập mỗi ngày'},
 club:{w:'join a music club',m:'join a music club',ipa:'/dʒɔɪn ə ˈmjuːzɪk klʌb/',pos:'cụm động từ',vi:'tham gia câu lạc bộ âm nhạc'},
 festival:{w:'take part in a festival',m:'take part in a festival',ipa:'/teɪk pɑːt ɪn ə ˈfestɪvl/',pos:'cụm động từ',vi:'tham gia một lễ hội'},
 watch:{w:'watch a performance',m:'watch a performance',ipa:'/wɒtʃ ə pəˈfɔːməns/',pos:'cụm động từ',vi:'xem một buổi biểu diễn'},
 choir:{w:'sing in a choir',m:'sing in a choir',ipa:'/sɪŋ ɪn ə ˈkwaɪə/',pos:'cụm động từ',vi:'hát trong dàn đồng ca'}
};
const EX={
 colourful:['colourful','/ˈkʌləfl/','adj.','nhiều màu sắc, sinh động'],band:['band','/bænd/','n.','ban nhạc'],
 pop:['pop music','/pɒp ˈmjuːzɪk/','n.','nhạc pop'],show:['show','/ʃəʊ/','n.','buổi biểu diễn'],theatre:['theatre','/ˈθɪətə/','n.','nhà hát'],
 paintings:['paintings','/ˈpeɪntɪŋz/','n.','những bức tranh'],photos:['photos','/ˈfəʊtəʊz/','n.','những bức ảnh'],
 sister:['sister','/ˈsɪstə/','n.','chị / em gái'],young:['young','/jʌŋ/','adj.','trẻ'],
 school:['school','/skuːl/','n.','trường học'],month:['month','/mʌnθ/','n.','tháng'],friends:['friends','/frendz/','n.','những người bạn'],
 life:['life','/laɪf/','n.','cuộc sống'],sundays:['Sunday','/ˈsʌndeɪ/','n.','Chủ nhật'],people:['people','/ˈpiːpl/','n.','mọi người'],
 art:['art','/ɑːt/','n.','nghệ thuật, mỹ thuật'],music:['music','/ˈmjuːzɪk/','n.','âm nhạc']
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const TEXT=['Music and art make our life colourful. Last Sunday I went to a concert with my sister. A young band played pop music, and many people sang along. After the show, we visited an art gallery near the theatre. My sister likes to paint pictures, so she took many photos of the paintings.',
 'I often listen to music on my way to school. I can play the guitar, so I practise every day. I want to join a music club at school. Next month, our school will take part in a festival. We will watch a performance by the school band, and I will sing in a choir with my friends.'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('\\b('+keys.map(k=>GL[k].m).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào bất kỳ từ nào có gạch chấm: máy đọc + hiện phiên âm + loại từ + nghĩa tiếng Việt. Bấm lần nữa để đóng. Các <b>cụm gạch chân màu</b> là cụm từ cần học. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">Music and Art in My Life</h3>`+TEXT.map(p=>'<p>'+wrap(p)+'</p>').join('')+`<p><button class="say" data-say="${TEXT.join(' ').replace(/"/g,'')}">🔊 Nghe cả bài</button></p>`;

const bank='<b>Cụm từ:</b> play the guitar · listen to music · go to a concert · join a music club · take part in a festival · sing in a choir';

window.STUDY={
  lesson:'L7 U4 Phien 1',filePrefix:'L7U4P1',
  title:'Tự học Unit 4: Music and Arts · Phiên 1',
  sub:'Lớp 7 · Phiên 1/3 (khoảng 33 phút): Brainstorm · Từ vựng học theo cụm',
  intro:'Em học từ vựng theo <b>cụm</b> (chunk), không học từng chữ rời. Em được xem trước các phần sau, nhưng máy sẽ nhắc những phần chưa làm. Cuối cùng cô sẽ xem lại bài của em.',
  emoji:'🎵',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:GL,glossStep:'r-read',glossNeed:5,
  act:'\\b(pick|clean|help|ask|tell|invite|join|share|use|start|call|take|practise|practice|borrow|teach|sing|play|show|perform|learn|draw|paint|listen|watch|give|make|bring|find|record|organi[sz]e|talk)\\b',
  vocab:{},rounds:[],
  parts:[
  {id:'read',title:'Mục 1 · Đọc (Reading)',steps:[
    {id:'r-read',type:'read',short:'Đọc bài',title:'Đọc bài “Music and Art in My Life”',sub:'Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'r-q',type:'items',short:'5 câu đọc hiểu',title:'5 câu hỏi đọc hiểu',sub:'Trả lời dựa vào bài đọc',items:[
      {kind:'choice',q:'Đúng hay sai? <i>The writer went to the concert alone.</i>',o:['Đúng (True)','Sai (False)'],a:1,x:'Bài nói: “I went to a concert with my sister.” → <b>Sai</b>.'},
      {kind:'choice',q:'Where did they go after the show?',o:['to a café','to an art gallery','to a school'],a:1,x:'Bài: “we visited an art gallery near the theatre”.'},
      {kind:'choice',q:'What does the writer do on the way to school?',o:['plays the guitar','paints pictures','listens to music'],a:2,x:'Bài: “I often listen to music on my way to school.”'},
      {kind:'choice',q:'What will the school do next month?',o:['take part in a festival','close for a holiday','build an art gallery'],a:0,x:'Bài: “our school will take part in a festival”.'},
      {kind:'choice',q:'Việc nào <b>KHÔNG</b> có trong bài? (The writer…)',o:['can play the guitar','will sing in a choir','can play the piano'],a:2,x:'Bài không nhắc đến đàn piano (piano). Người viết chơi guitar.'}
    ]}
  ]},
  {id:'vocab',title:'Mục 2 · Từ vựng theo cụm (Chunks)',steps:[
    {id:'v-bs',type:'solve',short:'Tình huống',title:'Brainstorm: giải quyết tình huống',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Đọc 3 tình huống về âm nhạc và mỹ thuật. Em nghĩ ra <b>1 cách giải quyết</b> cho mỗi tình huống và viết bằng <b>tiếng Anh</b> (ít nhất 3 từ). Chưa biết nói hay cũng không sao, cứ thử!',
     scenarios:[
      {q:'Your school wants to have a music festival, but many students are shy and don\'t want to perform. What can you do?',vi:'Trường em muốn tổ chức lễ hội âm nhạc, nhưng nhiều bạn nhút nhát và không muốn biểu diễn. Em có thể làm gì?',hint:'Bắt đầu bằng <b>I can…</b> hoặc <b>We can…</b> (rủ bạn, luyện tập cùng nhau, hát chung cả nhóm)',model:'We can practise together in a small group and invite shy students to sing with us.'},
      {q:'Your friend loves painting, but she has no place to show her pictures. What can you do?',vi:'Bạn em rất thích vẽ nhưng không có chỗ để trưng bày tranh. Em có thể làm gì?',hint:'Dùng <b>I can ask…</b> / <b>We can show…</b> (xin thầy cô, trưng bày ở lớp, làm triển lãm nhỏ)',model:'I can ask our teacher and we can show her pictures on the classroom wall.'},
      {q:'Your classmate wants to learn the guitar, but he has no guitar and no money. What can you do?',vi:'Bạn cùng lớp muốn học đàn ghi-ta nhưng không có đàn và không có tiền. Em có thể làm gì?',hint:'Dùng <b>I can lend…</b> / <b>We can borrow…</b> / <b>join a music club</b> (mượn đàn, rủ vào câu lạc bộ, dạy bạn)',model:'We can borrow a guitar from the music club, and I can teach him some easy songs.'}
     ]},
    {id:'v-cards',type:'read',short:'Học 10 cụm',title:'Học 10 cụm từ mới',sub:'Thẻ cụm từ: bấm 🔊 để nghe',html:`
      <div class="card ins">⚠️ Học <b>cả cụm</b>, đừng dịch từng chữ: <b>listen TO music</b> (không nói “listen music”), <b>play THE guitar</b>, <b>take PART IN</b> a festival, <b>go TO</b> a concert.</div>
      <p>Đọc to từng cụm, bấm 🔊 để nghe. Che cột nghĩa để tự thử.</p>
      <div class="tbl"><table><tr><th>Cụm từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      <tr><td><b>listen to music</b> <button class="say" data-say="listen to music">🔊</button></td><td>/ˈlɪsn tə ˈmjuːzɪk/</td><td>nghe nhạc</td><td>I listen to music every night.</td></tr>
      <tr><td><b>play the guitar</b> <button class="say" data-say="play the guitar">🔊</button></td><td>/pleɪ ðə ɡɪˈtɑː/</td><td>chơi đàn ghi-ta</td><td>He plays the guitar well.</td></tr>
      <tr><td><b>go to a concert</b> <button class="say" data-say="go to a concert">🔊</button></td><td>/ɡəʊ tə ə ˈkɒnsət/</td><td>đi xem hòa nhạc</td><td>We went to a concert on Friday.</td></tr>
      <tr><td><b>join a music club</b> <button class="say" data-say="join a music club">🔊</button></td><td>/dʒɔɪn ə ˈmjuːzɪk klʌb/</td><td>tham gia câu lạc bộ âm nhạc</td><td>I want to join a music club.</td></tr>
      <tr><td><b>take part in a festival</b> <button class="say" data-say="take part in a festival">🔊</button></td><td>/teɪk pɑːt ɪn ə ˈfestɪvl/</td><td>tham gia một lễ hội</td><td>Our class takes part in a festival.</td></tr>
      <tr><td><b>sing in a choir</b> <button class="say" data-say="sing in a choir">🔊</button></td><td>/sɪŋ ɪn ə ˈkwaɪə/</td><td>hát trong dàn đồng ca</td><td>She sings in a school choir.</td></tr>
      <tr><td><b>watch a performance</b> <button class="say" data-say="watch a performance">🔊</button></td><td>/wɒtʃ ə pəˈfɔːməns/</td><td>xem một buổi biểu diễn</td><td>We watch a performance at the theatre.</td></tr>
      <tr><td><b>paint pictures</b> <button class="say" data-say="paint pictures">🔊</button></td><td>/peɪnt ˈpɪktʃəz/</td><td>vẽ tranh</td><td>My sister likes to paint pictures.</td></tr>
      <tr><td><b>visit an art gallery</b> <button class="say" data-say="visit an art gallery">🔊</button></td><td>/ˈvɪzɪt ən ɑːt ˈɡæləri/</td><td>thăm phòng triển lãm tranh</td><td>They visit an art gallery in town.</td></tr>
      <tr><td><b>practise every day</b> <button class="say" data-say="practise every day">🔊</button></td><td>/ˈpræktɪs ˈevri deɪ/</td><td>luyện tập mỗi ngày</td><td>I practise every day after school.</td></tr></table></div>`},
    {id:'v-q',type:'items',short:'10 câu cụm từ',title:'10 câu luyện cụm từ',sub:'Nghe, nhận ra cụm, nghe viết, điền cụm vào câu',items:[
      {kind:'choice',say:'go to a concert',q:'🔊 Nghe và chọn nghĩa của cụm em nghe được.',o:['đi xem hòa nhạc','đi mua sắm','đi bộ đường dài'],a:0,x:'<b>go to a concert</b> = đi xem hòa nhạc.'},
      {kind:'choice',q:`“Chúng em tham gia lễ hội của trường.”<br>→ We ___ the school festival.<div class="hint">${bank}</div>`,o:['join to','take part in','go in'],a:1,x:'<b>take part in</b> = tham gia. Nhớ đủ cả cụm: take PART IN.'},
      {kind:'choice',q:`“Em nghe nhạc trên đường đến trường.”<br>→ I ___ on my way to school.<div class="hint">${bank}</div>`,o:['listen music','listen to music','hear to music'],a:1,x:'<b>listen to music</b>: sau <i>listen</i> luôn có <b>to</b>.'},
      {kind:'fill',say:'practise every day',q:'🔊 Nghe và <b>gõ lại</b> cụm em nghe được (3 từ).',a:['practise every day','practice every day'],hint:'Nghĩa: luyện tập mỗi ngày. Từ đầu bắt đầu bằng “p”.',x:'<b>practise every day</b> = luyện tập mỗi ngày (Anh – Mỹ: practise / practice).'},
      {kind:'choice',q:`“Bạn em muốn tham gia câu lạc bộ âm nhạc.”<br>→ My friend wants to ___ a music club.`,o:['join','do','make'],a:0,x:'<b>join</b> a music club = tham gia câu lạc bộ.'},
      {kind:'choice',say:'watch a performance',q:'🔊 Nghe và chọn nghĩa của cụm em nghe được.',o:['xem một buổi biểu diễn','tham gia lễ hội','vẽ tranh'],a:0,x:'<b>watch a performance</b> = xem một buổi biểu diễn.'},
      {kind:'choice',q:'“Chị em thích vẽ tranh.”<br>→ My sister likes to ___.',o:['paint pictures','make music','sing pictures'],a:0,x:'<b>paint pictures</b> = vẽ tranh.'},
      {kind:'fill',say:'sing in a choir',q:'🔊 Nghe và <b>gõ lại</b> cụm em nghe được (4 từ).',a:['sing in a choir'],hint:'Nghĩa: hát trong dàn đồng ca. Từ cuối bắt đầu bằng “c”.',x:'<b>sing in a choir</b> = hát trong dàn đồng ca.'},
      {kind:'choice',q:'“Cuối tuần trước chúng em đi xem một buổi hòa nhạc.”<br>→ Last weekend we ___ a concert.',o:['went to','played','sang'],a:0,x:'<b>went to a concert</b> (go → went) = đi xem hòa nhạc.'},
      {kind:'choice',q:'“Em chơi đàn ghi-ta mỗi ngày.”<br>→ I ___ every day.',o:['play the guitar','play guitar to','do the guitar'],a:0,x:'<b>play the guitar</b>: chơi nhạc cụ dùng <i>play the…</i>'}
    ]}
  ]}
  ]
};
})();
