/* Lớp 7 · Unit 4 Music and Arts · Phiên 3 (Viết thư). Nội dung do Claude soạn mới. */
(function(){
const GL={
 free:{w:'free time',m:'free time',ipa:'/friː taɪm/',pos:'cụm danh từ',vi:'thời gian rảnh'},
 listen:{w:'listen to music',m:'listen to music',ipa:'/ˈlɪsn tə ˈmjuːzɪk/',pos:'cụm động từ',vi:'nghe nhạc'},
 guitar:{w:'play the guitar',m:'play the guitar',ipa:'/pleɪ ðə ɡɪˈtɑː/',pos:'cụm động từ',vi:'chơi đàn ghi-ta'},
 concert:{w:'go to a concert',m:'went to a concert',ipa:'/ɡəʊ tə ə ˈkɒnsət/',pos:'cụm động từ',vi:'đi xem hòa nhạc'},
 gallery:{w:'art gallery',m:'art gallery',ipa:'/ɑːt ˈɡæləri/',pos:'cụm danh từ',vi:'phòng triển lãm tranh'},
 festival:{w:'take part in a festival',m:'take part in a festival',ipa:'/teɪk pɑːt ɪn ə ˈfestɪvl/',pos:'cụm động từ',vi:'tham gia một lễ hội'},
 choir:{w:'sing in a choir',m:'sing in a choir',ipa:'/sɪŋ ɪn ə ˈkwaɪə/',pos:'cụm động từ',vi:'hát trong dàn đồng ca'},
 writeback:{w:'write back',m:'write back',ipa:'/raɪt bæk/',pos:'cụm động từ',vi:'viết thư trả lời'},
 hope:{w:'I hope you are well',m:'I hope you are well',ipa:'/aɪ həʊp juː ə wel/',pos:'câu mở thư',vi:'Mình hy vọng bạn khỏe'}
};
const EX={
 thank:['thank you for your letter','/θæŋk juː fə jɔː ˈletə/','câu mở thư','cảm ơn thư của bạn'],
 soon:['soon','/suːn/','adv.','sớm'],ask:['asked','/ɑːskt/','v. (quá khứ)','đã hỏi'],tell:['tell','/tel/','v.','kể, nói cho biết'],
 sister:['sister','/ˈsɪstə/','n.','chị / em gái'],often:['often','/ˈɒfn/','adv.','thường xuyên'],month:['next month','/nekst mʌnθ/','n.','tháng sau'],
 love:['love','/lʌv/','v.','rất thích, yêu'],wishes:['best wishes','/best ˈwɪʃɪz/','cụm kết thư','thân ái, chúc bạn mọi điều tốt đẹp'],
 school:['school','/skuːl/','n.','trường học'],music:['music','/ˈmjuːzɪk/','n.','âm nhạc'],art:['art','/ɑːt/','n.','nghệ thuật']
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const LETTER=['Dear Mai,',
 'How are you? <span class="__hope">I hope you are well</span>. Thank you for your letter. You asked about my free time, so I will tell you.',
 'I love music and art. I often listen to music on my way to school, and I play the guitar every day. Last Sunday I went to a concert with my sister, and then we visited an art gallery. Next month, my school will take part in a festival, and I will sing in a choir. What do you like doing in your free time?',
 'Please write back soon.',
 'Best wishes,<br>Lan'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const re=new RegExp('(?:\\b|^)('+keys.map(k=>GL[k].m.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')\\b','gi');
const byM={};keys.forEach(k=>byM[GL[k].m.toLowerCase()]=k);
const wrap=t=>t.replace(/<span class="__hope">(.*?)<\/span>/,'$1').replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const plain=LETTER.map(t=>t.replace(/<br>/g,' ').replace(/<[^>]+>/g,'')).join(' ');
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào từ hoặc cụm có gạch chấm để nghe, xem phiên âm và nghĩa. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">Một lá thư mẫu</h3><div class="card">`+LETTER.map(p=>'<p>'+wrap(p)+'</p>').join('')+`</div><p><button class="say" data-say="${plain}">🔊 Nghe cả lá thư</button></p>`;

window.STUDY={
  lesson:'L7 U4 Phien 3',filePrefix:'L7U4P3',
  title:'Tự học Unit 4: Music and Arts · Phiên 3',
  sub:'Lớp 7 · Phiên 3/3 (khoảng 35 phút): Viết thư cho bạn về âm nhạc và mỹ thuật',
  intro:'Em được xem trước các phần sau, nhưng máy sẽ nhắc những phần chưa làm. Lá thư của em do <b>cô chấm</b>; máy chỉ giúp em kiểm tra các phần cần có.',
  emoji:'✉️',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:GL,glossStep:'l-read',glossNeed:5,
  act:'\\b(pick|clean|help|ask|tell|invite|join|share|use|start|call|take|practise|practice|borrow|teach|sing|play|show|perform|learn|draw|paint|listen|watch|give|make|bring|find|record|love|like|enjoy|go|went|will|want|do|can|write|visit)\\b',
  vocab:{},rounds:[],
  parts:[
  {id:'model',title:'Mục 1 · Đọc thư mẫu',steps:[
    {id:'l-read',type:'read',short:'Đọc thư mẫu',title:'Đọc thư mẫu của Lan gửi Mai',sub:'Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'l-parts',type:'read',short:'Các phần của thư',title:'Đọc: một lá thư gồm 5 phần',sub:'Lý thuyết',html:`
      <div class="card ins">⚠️ Một lá thư thân mật cho bạn có <b>5 phần</b>. Viết đủ 5 phần thì thư mới hoàn chỉnh!</div>
      <div class="tbl"><table><tr><th>Phần</th><th>Việc cần làm</th><th>Câu mẫu</th></tr>
      <tr><td><b>① Lời chào</b></td><td>Dear + tên bạn + dấu phẩy</td><td>Dear Mai,</td></tr>
      <tr><td><b>② Mở thư</b></td><td>Hỏi thăm, cảm ơn thư của bạn</td><td>How are you? / I hope you are well. / Thank you for your letter.</td></tr>
      <tr><td><b>③ Nội dung</b></td><td>Kể về âm nhạc, mỹ thuật; dùng <b>cụm từ</b> đã học; nối ý bằng <b>and, but, so, because</b></td><td>I love music and art. I often listen to music… I went to a concert last Sunday…</td></tr>
      <tr><td><b>④ Kết thư</b></td><td>Hỏi lại bạn, nhờ bạn viết thư trả lời</td><td>What do you like doing in your free time? / Please write back soon.</td></tr>
      <tr><td><b>⑤ Ký tên</b></td><td>Lời chúc + tên em</td><td>Best wishes,<br>Lan</td></tr></table></div>
      <div class="card">💡 Nhớ: viết hoa chữ đầu câu, viết hoa tên người, mỗi câu kết thúc bằng dấu chấm (.) hoặc dấu hỏi (?). Dùng <b>quá khứ</b> khi kể chuyện đã xảy ra (went, visited) và <b>will</b> khi nói kế hoạch.</div>`}
  ]},
  {id:'prep',title:'Mục 2 · Chuẩn bị ý và cấu trúc thư',steps:[
    {id:'l-bs',type:'solve',short:'Lập ý',title:'Brainstorm: tìm ý cho lá thư của em',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Trước khi viết thư, em tìm ý. Trả lời 3 câu hỏi bằng <b>tiếng Anh</b> (ít nhất 3 từ mỗi câu). Em sẽ dùng các ý này trong thư.',
     scenarios:[
      {q:'Your pen friend asks: “What do you do in your free time?” What can you tell her?',vi:'Bạn qua thư hỏi: “Bạn làm gì khi rảnh?” Em có thể kể gì?',hint:'Dùng <b>I often…</b> + cụm đã học (listen to music, play the guitar, paint pictures)',model:'I often listen to music and play the guitar.'},
      {q:'You want to tell your friend about a music or art event last month. What did you do?',vi:'Em muốn kể về một sự kiện âm nhạc hoặc mỹ thuật tháng trước. Em đã làm gì?',hint:'Dùng quá khứ: <b>I went to…</b> / <b>I visited…</b> / <b>I watched…</b>',model:'I went to a concert with my sister and we watched a performance.'},
      {q:'You want to invite your friend to do something together. What can you ask or say?',vi:'Em muốn rủ bạn cùng làm gì đó. Em có thể hỏi hoặc nói gì?',hint:'Dùng <b>Do you want to…?</b> / <b>Why don\'t we…?</b> / <b>Please write back…</b>',model:'Do you want to join a music club with me?'}
     ]}
  ]},
  {id:'check',title:'Mục 3 · Luyện cấu trúc thư',steps:[
    {id:'l-q',type:'items',short:'6 câu cấu trúc',title:'6 câu luyện cấu trúc thư',sub:'Xếp câu, chọn phần của thư, điền cụm',items:[
      {kind:'order',q:'Xếp các từ thành <b>lời chào</b> đúng.',w:['Dear','Mai,'],a:'Dear Mai,',x:'Lời chào: <b>Dear + tên,</b> (có dấu phẩy).'},
      {kind:'order',q:'Xếp các từ thành câu <b>mở thư</b> đúng.',w:['Thank','you','for','your','letter.'],a:'Thank you for your letter.',x:'<b>Thank you for your letter.</b> = Cảm ơn thư của bạn.'},
      {kind:'choice',q:'Câu <i>“Please write back soon.”</i> thuộc phần nào của thư?',o:['① Lời chào','④ Kết thư','② Mở thư'],a:1,x:'Nhờ bạn viết thư trả lời là phần <b>kết thư</b>.'},
      {kind:'choice',q:'Chọn lời chúc đúng để <b>kết thư</b> trước khi ký tên.',o:['Hello,','Best wishes,','Dear Lan,'],a:1,x:'Lời chúc cuối thư: <b>Best wishes,</b> rồi tới tên em.'},
      {kind:'choice',q:'“Tháng trước, em đã đi xem một buổi hòa nhạc.”<br>→ Last month, I ___ a concert.',o:['go to','went to','will go to'],a:1,x:'Kể chuyện đã xảy ra → quá khứ: <b>went to</b>.'},
      {kind:'choice',q:'“Tháng sau, em sẽ hát trong dàn đồng ca.”<br>→ Next month, I ___ in a choir.',o:['will sing','sang','am singing to'],a:0,x:'Kế hoạch tương lai → <b>will sing</b>.'}
    ]}
  ]},
  {id:'write',title:'Mục 4 · Viết thư',steps:[
    {id:'l-write',type:'write',short:'Viết thư',title:'Viết thư cho bạn (khoảng 60–80 từ)',sub:'Viết đủ 5 phần, rồi chốt bài để cô chấm',
     prompt:'<b>Đề:</b> Mai là bạn qua thư của em. Mai hỏi em thích gì khi rảnh. Hãy viết thư trả lời cho Mai (60–80 từ): kể em thích <b>âm nhạc hoặc mỹ thuật</b> như thế nào, em đã làm gì gần đây, sắp tới em sẽ làm gì, và hỏi lại Mai. Bắt đầu bằng <b>Dear Mai,</b> và ký tên của em.',
     tips:'<b>Gợi ý cụm từ:</b> listen to music · play the guitar · go to a concert · visit an art gallery · paint pictures · join a music club · take part in a festival · sing in a choir · practise every day',
     min:55,
     checks:[
      {label:'Lời chào: Dear Mai,',re:'dear\\s+mai'},
      {label:'Mở thư: How are you? / I hope you are well / Thank you for your letter',re:'how are you|i hope you|thank you for your letter|thanks for your letter'},
      {label:'Có ít nhất 2 cụm từ Unit 4 (listen to music, play the guitar, go to a concert…)',re:'(listen to music|play the guitar|(went|go) to a concert|art gallery|paint pictures|music club|take part in|sing in a choir|practise|practice|watch a performance)[\\s\\S]*(listen to music|play the guitar|(went|go) to a concert|art gallery|paint pictures|music club|take part in|sing in a choir|practise|practice|watch a performance)'},
      {label:'Có từ nối: and / but / so / because',re:'\\b(and|but|so|because)\\b'},
      {label:'Kết thư: Please write back / What do you like…?',re:'write back|what do you|do you like|do you want'},
      {label:'Lời chúc và tên: Best wishes / Love / Your friend',re:'best wishes|love,|your friend|yours'}
     ],
     model:'Dear Mai,<br>How are you? Thank you for your letter. I love music and art. I often listen to music on my way to school, and I play the guitar every day. Last month I went to a concert with my brother, and we watched a great performance. Next month, my school will take part in a festival, so I practise with my friends. What do you like doing in your free time? Please write back soon.<br>Best wishes,<br>Lan'}
  ]}
  ]
};
})();
