/* Lớp 7 · Unit 4 Music and Arts (Global Success 7, tr.40–42, 44) · Phiên 1: Từ vựng theo cụm + Brainstorm. Nội dung do Claude soạn mới, bám từ vựng và chủ đề của sách. */
(function(){
const GL={
 piano:{w:'play the piano',m:'play the piano',ipa:'/pleɪ ðə piˈænəʊ/',pos:'cụm động từ',vi:'chơi đàn piano'},
 instr:{w:'musical instruments',m:'musical instruments',ipa:'/ˈmjuːzɪkl ˈɪnstrəmənts/',pos:'cụm danh từ',vi:'nhạc cụ'},
 classical:{w:'classical music',m:'classical music',ipa:'/ˈklæsɪkl ˈmjuːzɪk/',pos:'cụm danh từ',vi:'nhạc cổ điển'},
 painting:{w:'painting',m:'painting',ipa:'/ˈpeɪntɪŋ/',pos:'n.',vi:'hội họa; bức tranh'},
 photos:{w:'take photos',m:'taking photos',ipa:'/ˈteɪkɪŋ ˈfəʊtəʊz/',pos:'cụm động từ',vi:'chụp ảnh'},
 landscapes:{w:'landscapes',m:'landscapes',ipa:'/ˈlændskeɪps/',pos:'n.',vi:'phong cảnh'},
 gallery:{w:'art gallery',m:'art gallery',ipa:'/ɑːt ˈɡæləri/',pos:'cụm danh từ',vi:'phòng triển lãm tranh'},
 prefer:{w:'prefer',m:'prefer',ipa:'/prɪˈfɜː/',pos:'v.',vi:'thích hơn'},
 festival:{w:'music festival',m:'music festival',ipa:'/ˈmjuːzɪk ˈfestɪvl/',pos:'cụm danh từ',vi:'lễ hội âm nhạc'},
 different:{w:'different from',m:'different from',ipa:'/ˈdɪfrənt frəm/',pos:'cụm tính từ',vi:'khác với'}
};
const EX={
 hobby:['hobby','/ˈhɒbi/','n.','sở thích'],free:['free time','/friː taɪm/','n.','thời gian rảnh'],instrument:['instruments','/ˈɪnstrəmənts/','n.','nhạc cụ'],
 animals:['animals','/ˈænɪmlz/','n.','động vật'],share:['share','/ʃeə/','v.','chia sẻ'],weekend:['weekend','/ˌwiːkˈend/','n.','cuối tuần'],
 idea:['idea','/aɪˈdɪə/','n.','ý tưởng'],fun:['fun','/fʌn/','adj.','vui'],saturday:['Saturday','/ˈsætədeɪ/','n.','thứ Bảy'],sunday:['Sunday','/ˈsʌndeɪ/','n.','Chủ nhật'],
 music:['music','/ˈmjuːzɪk/','n.','âm nhạc'],paint:['paint','/peɪnt/','v.','vẽ (bằng màu)'],piano2:['piano','/piˈænəʊ/','n.','đàn piano'],good:['good','/ɡʊd/','adj.','tốt'],friends:['friends','/frendz/','n.','những người bạn']
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const TEXT=['Trang: Hi, Nick. What are you listening to?','Nick: I\'m listening to classical music. I often play the piano in my free time.','Trang: Great! I can\'t play any musical instruments.','Nick: So what\'s your hobby?','Trang: I like painting and taking photos.','Nick: Is taking photos as fun as painting?','Trang: Not really. They are different from each other. I paint landscapes and animals, and I share them with my friends.','Nick: Maybe we can go to an art gallery next weekend.','Trang: Good idea, but I\'d prefer to go to the music festival at my school.','Nick: OK, let\'s go to the art gallery on Saturday and the music festival on Sunday.'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('\\b('+keys.map(k=>GL[k].m).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào từ có gạch chấm: máy đọc + phiên âm + loại từ + nghĩa tiếng Việt. Bấm lần nữa để đóng. Cụm <b>gạch chân màu</b> là cụm cần học. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">A talk at the school gate</h3>`+TEXT.map(p=>'<p>'+wrap(p)+'</p>').join('')+`<p><button class="say" data-say="${TEXT.join(' ').replace(/"/g,'').replace(/(Trang|Nick): /g,'')}">🔊 Nghe cả bài</button></p>`;
const bank='<b>Cụm từ:</b> play the piano · take photos · perform a show · paint landscapes · watch a show · go to an art gallery';
const tr=(a,b,c,d)=>`<tr><td><b>${a}</b> <button class="say" data-say="${a}">🔊</button></td><td>${b}</td><td>${c}</td><td>${d}</td></tr>`;

window.STUDY={
  lesson:'L7 U4 Phien 1',filePrefix:'L7U4P1',
  title:'Tự học Unit 4: Music and Arts · Phiên 1',
  sub:'Lớp 7 · Phiên 1/3 (khoảng 35 phút) · Bám sách Global Success 7, Unit 4 · Từ vựng theo cụm: 🟢 cơ bản → 🟡 trung bình → 🔴 nâng cao',
  intro:'Các mục nằm ở <b>thanh phía trên</b>. Em làm từ 🟢 cơ bản đến 🔴 nâng cao. Em được xem trước các mục sau, nhưng máy sẽ nhắc những phần chưa làm. Xong mỗi mục, bấm <b>Tiếp theo</b>. Cuối cùng cô sẽ xem lại bài của em.',
  emoji:'🎵',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:GL,glossStep:'r-read',glossNeed:5,
  act:'\\b(pick|clean|help|ask|tell|invite|join|share|use|start|call|take|practise|practice|borrow|teach|sing|play|show|perform|learn|draw|paint|listen|watch|give|make|bring|find|record|organi[sz]e|talk|go|choose|let)\\b',
  vocab:{},rounds:[],
  parts:[
  {id:'read',title:'Mục 1 · 🟢 Đọc hội thoại (Getting Started, SGK tr.40)',steps:[
    {id:'r-read',type:'read',short:'🟢 Đọc hội thoại',title:'Đọc hội thoại “A talk at the school gate”',sub:'Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'r-q',type:'items',short:'🟢 5 câu đọc hiểu',title:'5 câu hỏi đọc hiểu',sub:'Trả lời dựa vào hội thoại',items:[
      {kind:'choice',q:'Đúng hay sai? <i>Trang can play the piano.</i>',o:['Đúng (True)','Sai (False)'],a:1,x:'Trang nói: “I can’t play any musical instruments.” → <b>Sai</b>. Nick mới là người chơi piano.'},
      {kind:'choice',q:'What does Nick often do in his free time?',o:['He takes photos.','He plays the piano.','He paints animals.'],a:1,x:'Nick: “I often play the piano in my free time.”'},
      {kind:'choice',q:'What does Trang paint?',o:['landscapes and animals','portraits of musicians','pianos and cameras'],a:0,x:'Trang: “I paint landscapes and animals.”'},
      {kind:'choice',q:'Where will they go on Saturday?',o:['to the music festival','to an art gallery','to a concert hall'],a:1,x:'Nick: “let’s go to the art gallery on Saturday and the music festival on Sunday.”'},
      {kind:'choice',q:'Which does Trang <b>prefer</b> to go to first?',o:['the music festival at her school','a museum in town','a puppet theatre'],a:0,x:'Trang: “I’d prefer to go to the music festival at my school.” <b>prefer</b> = thích hơn.'}
    ]}
  ]},
  {id:'words',title:'Mục 2 · 🟢 Từ vựng theo nhóm (A Closer Look 1, SGK tr.42)',steps:[
    {id:'v-cards',type:'read',short:'🟢 Học từ theo nhóm',title:'Học từ vựng theo 3 nhóm: Người · Nơi chốn · Vật',sub:'Bấm 🔊 để nghe, che cột nghĩa để tự thử',html:`
      <div class="card ins">⚠️ Học từ theo <b>nhóm</b> để dễ nhớ: <b>Người</b> (làm nghề gì), <b>Nơi chốn</b> (đi đến đâu), <b>Vật</b> (dùng cái gì).</div>
      <h4>👤 Người (People)</h4>
      <div class="tbl"><table><tr><th>Từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      ${tr('artist','/ˈɑːtɪst/','nghệ sĩ, họa sĩ','She is a talented artist.')}${tr('painter','/ˈpeɪntə/','họa sĩ (vẽ tranh)','The painter draws animals.')}${tr('musician','/mjuːˈzɪʃn/','nhạc sĩ, nhạc công','The musician plays the violin.')}${tr('composer','/kəmˈpəʊzə/','nhà soạn nhạc','Van Cao was a composer.')}${tr('actress','/ˈæktrəs/','nữ diễn viên','The actress is on TV.')}</table></div>
      <h4>🏛️ Nơi chốn (Places)</h4>
      <div class="tbl"><table><tr><th>Từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      ${tr('art gallery','/ɑːt ˈɡæləri/','phòng triển lãm tranh','We visit an art gallery.')}${tr('concert hall','/ˈkɒnsət hɔːl/','phòng hòa nhạc','The concert hall is big.')}${tr('museum','/mjuˈziːəm/','bảo tàng','The museum has many paintings.')}${tr('puppet theatre','/ˈpʌpɪt ˈθɪətə/','nhà hát múa rối','We watch a show at the puppet theatre.')}</table></div>
      <h4>🎨 Vật (Things)</h4>
      <div class="tbl"><table><tr><th>Từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      ${tr('paintbrush','/ˈpeɪntbrʌʃ/','cọ vẽ','I use a paintbrush.')}${tr('camera','/ˈkæmrə/','máy ảnh','This camera is new.')}${tr('musical instruments','/ˈmjuːzɪkl ˈɪnstrəmənts/','nhạc cụ','I can’t play musical instruments.')}${tr('water puppet show','/ˈwɔːtə ˈpʌpɪt ʃəʊ/','buổi múa rối nước','The water puppet show is famous.')}${tr('portrait','/ˈpɔːtrət/','tranh chân dung','She paints a portrait.')}</table></div>`},
    {id:'v-q',type:'items',short:'🟢 8 câu từ vựng',title:'8 câu luyện từ vựng (dễ → khó)',sub:'Nghe, phân loại, nghe viết, điền từ',items:[
      {kind:'choice',say:'composer',q:'🔊 Nghe và chọn nghĩa của từ em nghe được.',o:['nhà soạn nhạc','nữ diễn viên','cọ vẽ'],a:0,x:'<b>composer</b> = nhà soạn nhạc.'},
      {kind:'choice',q:'<b>concert hall</b> thuộc nhóm nào?',o:['Người (People)','Nơi chốn (Places)','Vật (Things)'],a:1,x:'<b>concert hall</b> là nơi chốn (phòng hòa nhạc).'},
      {kind:'choice',q:'<b>musician</b> thuộc nhóm nào?',o:['Nơi chốn (Places)','Vật (Things)','Người (People)'],a:2,x:'<b>musician</b> là người (nhạc sĩ, nhạc công).'},
      {kind:'choice',q:'Phiên âm <span class="ipa">/ˈɡæləri/</span> trong cụm <b>art ___</b> là từ nào? (bấm 🔊 nghe)',say:'art gallery',o:['gallery','museum','theatre'],a:0,x:'<b>art gallery</b> /ɑːt ˈɡæləri/ = phòng triển lãm tranh.'},
      {kind:'fill',say:'actress',q:'🔊 Nghe và <b>gõ lại</b> từ em nghe được.',a:['actress'],hint:'Từ có 7 chữ cái, bắt đầu bằng “a”. Nghĩa: nữ diễn viên.',x:'<b>actress</b> = nữ diễn viên.'},
      {kind:'choice',q:'Người vẽ tranh là một ___.',o:['painter','composer','musician'],a:0,x:'<b>painter</b> = họa sĩ (người vẽ tranh).'},
      {kind:'choice',q:'Người sáng tác nhạc là một ___.',o:['actress','composer','artist'],a:1,x:'<b>composer</b> = nhà soạn nhạc (người sáng tác nhạc).'},
      {kind:'fill',say:'paintbrush',q:'🔊 Nghe và <b>gõ lại</b> từ em nghe được (1 từ).',a:['paintbrush','paint brush'],hint:'Vật dùng để vẽ tranh. Bắt đầu bằng “p”.',x:'<b>paintbrush</b> = cọ vẽ.'}
    ]}
  ]},
  {id:'chunk',title:'Mục 3 · 🟡 Học theo cụm: động từ + danh từ (SGK tr.42, 48)',steps:[
    {id:'c-cards',type:'read',short:'🟡 Học 10 cụm',title:'Học 10 cụm: động từ + danh từ',sub:'Học cả cụm, đừng dịch từng chữ',html:`
      <div class="card ins">⚠️ Mỗi <b>động từ</b> đi với những danh từ nhất định: <b>play</b> the piano (không nói “do the piano”), <b>take</b> photos (không nói “make photos”). Học <b>cả cụm</b> cho chắc!</div>
      <div class="tbl"><table><tr><th>Cụm từ</th><th>Phiên âm</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      ${tr('play the piano','/pleɪ ðə piˈænəʊ/','chơi đàn piano','Nick plays the piano.')}${tr('play the guitar','/pleɪ ðə ɡɪˈtɑː/','chơi đàn ghi-ta','I play the guitar.')}${tr('draw animals','/drɔː ˈænɪmlz/','vẽ động vật','Duong draws animals well.')}${tr('paint landscapes','/peɪnt ˈlændskeɪps/','vẽ phong cảnh','Trang paints landscapes.')}${tr('take photos','/teɪk ˈfəʊtəʊz/','chụp ảnh','I take photos with my camera.')}${tr('perform a show','/pəˈfɔːm ə ʃəʊ/','biểu diễn một chương trình','They perform a show every month.')}${tr('write songs','/raɪt sɒŋz/','viết bài hát','Pham Tuyen wrote many songs.')}${tr('compose music','/kəmˈpəʊz ˈmjuːzɪk/','sáng tác nhạc','He composes music.')}${tr('watch a show','/wɒtʃ ə ʃəʊ/','xem một buổi biểu diễn','We watched a show last night.')}${tr('go to an art gallery','/ɡəʊ tu ən ɑːt ˈɡæləri/','đi đến phòng triển lãm tranh','Let’s go to an art gallery.')}</table></div>
      <div class="card">💡 Cùng một động từ có thể đi với nhiều danh từ: <b>play</b> the piano / the violin / the cello / the guitar · <b>draw</b> animals / a picture / a portrait · <b>watch</b> a show / a film / a performance.</div>`},
    {id:'c-q',type:'items',short:'🟡 10 câu cụm từ',title:'10 câu luyện cụm từ (dễ → khó)',sub:'Chọn động từ, tìm từ lạc nhóm, điền cụm',items:[
      {kind:'choice',q:`“Nick chơi đàn piano.”<br>→ Nick ___ the piano.<div class="hint">${bank}</div>`,o:['plays','does','makes'],a:0,x:'<b>play the piano</b>: chơi nhạc cụ dùng <i>play the…</i>'},
      {kind:'choice',q:'“Trang thích chụp ảnh.”<br>→ Trang likes to ___ photos.',o:['make','take','do'],a:1,x:'<b>take photos</b> = chụp ảnh.'},
      {kind:'choice',q:'“Họ biểu diễn một chương trình mỗi tháng.”<br>→ They ___ a show every month.',o:['perform','draw','write'],a:0,x:'<b>perform a show</b> = biểu diễn một chương trình.'},
      {kind:'choice',q:'“Bạn ấy thích vẽ phong cảnh.”<br>→ She likes to ___ landscapes.',o:['play','paint','watch'],a:1,x:'<b>paint landscapes</b> = vẽ phong cảnh.'},
      {kind:'choice',q:'“Hôm qua chúng em xem một buổi múa rối nước.”<br>→ Yesterday we ___ a water puppet show.',o:['watched','composed','performed in'],a:0,x:'<b>watch a show</b>: <i>watch</i> → <i>watched</i> (quá khứ).'},
      {kind:'choice',q:'Từ nào <b>KHÔNG</b> đi với <b>play</b>?',o:['the violin','the cello','a portrait'],a:2,x:'Ta nói <b>play</b> the violin / the cello, nhưng <b>draw / paint</b> a portrait.'},
      {kind:'choice',q:'Từ nào <b>KHÔNG</b> đi với <b>draw</b>?',o:['animals','a picture','the guitar'],a:2,x:'Ta nói <b>draw</b> animals / a picture, nhưng <b>play</b> the guitar.'},
      {kind:'fill',q:'Van Cao was a composer. He ___ many famous songs. (viết / sáng tác, quá khứ, 1 từ)',a:['wrote','composed'],hint:'Quá khứ của <b>write</b> là <b>wrote</b>.',x:'<b>wrote</b> (hoặc <b>composed</b>) many famous songs.'},
      {kind:'fill',q:'Nick wants to go to an art ___ next weekend. (1 từ)',a:['gallery'],hint:'Phòng triển lãm tranh. Bắt đầu bằng “g”.',x:'<b>go to an art gallery</b> = đi đến phòng triển lãm tranh.'},
      {kind:'fill',say:'perform a show',q:'🔊 Nghe và <b>gõ lại</b> cả cụm em nghe được (3 từ).',a:['perform a show'],hint:'Nghĩa: biểu diễn một chương trình. Từ đầu bắt đầu bằng “p”.',x:'<b>perform a show</b> = biểu diễn một chương trình.'}
    ]}
  ]},
  {id:'brain',title:'Mục 4 · 🔴 Brainstorm: giải quyết tình huống (nâng cao)',steps:[
    {id:'v-bs',type:'solve',short:'🔴 Brainstorm',title:'Brainstorm: giải quyết tình huống',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Đọc 3 tình huống. Em nghĩ ra <b>1 cách giải quyết</b> cho mỗi tình huống và viết bằng <b>tiếng Anh</b> (ít nhất 3 từ). Dùng các cụm đã học. Chưa biết nói hay cũng không sao, cứ thử!',
     scenarios:[
      {q:'Your friend wants to go to an art gallery, but you prefer to go to a music festival. What can you do?',vi:'Bạn em muốn đi phòng triển lãm tranh, nhưng em thích đi lễ hội âm nhạc hơn. Em có thể làm gì?',hint:'Dùng <b>We can go…</b> / <b>Let\'s go…</b> (đi cả hai, mỗi ngày một nơi)',model:'We can go to the art gallery on Saturday and the music festival on Sunday.'},
      {q:'Your classmate says, “I can\'t play any musical instruments.” But he wants to join the school music show. What can you do?',vi:'Bạn cùng lớp nói “Mình không chơi được nhạc cụ nào”, nhưng bạn muốn tham gia chương trình ca nhạc của trường. Em có thể làm gì?',hint:'Dùng <b>He can sing…</b> / <b>I can teach him…</b> / <b>He can help…</b>',model:'He can sing in the show, and I can teach him to play an easy instrument.'},
      {q:'Your school is going to have a musical performance to celebrate Teachers\' Day. What can you and your friends do?',vi:'Trường em sắp có chương trình ca nhạc mừng Ngày Nhà giáo. Em và các bạn có thể làm gì?',hint:'Dùng <b>We can perform…</b> / <b>We can sing…</b> / <b>I can play…</b> (hát, biểu diễn, trang trí sân khấu)',model:'We can sing songs and perform a dance, and I can play the guitar for my teachers.'}
     ]}
  ]}
  ]
};
})();
