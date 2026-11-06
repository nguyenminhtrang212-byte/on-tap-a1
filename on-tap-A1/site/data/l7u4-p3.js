/* Lớp 7 · Unit 4 Music and Arts (Global Success 7, tr.46–47 Skills 1–2, Writing: thư mời thân mật) · Phiên 3. Nội dung do Claude soạn mới, bám cấu trúc và chủ đề của sách. */
(function(){
const GL={
 lets:{w:"Let's",m:"let's go",ipa:'/lets ɡəʊ/',pos:'cấu trúc rủ rê',vi:'Chúng ta hãy đi…'},
 traditional:{w:'traditional',m:'traditional',ipa:'/trəˈdɪʃənl/',pos:'adj.',vi:'truyền thống'},
 folk:{w:'folk songs',m:'folk songs',ipa:'/fəʊk sɒŋz/',pos:'cụm danh từ',vi:'dân ca'},
 hall:{w:'school hall',m:'school hall',ipa:'/skuːl hɔːl/',pos:'cụm danh từ',vi:'hội trường trường học'},
 howabout:{w:'How about meeting',m:'how about meeting',ipa:'/haʊ əˈbaʊt ˈmiːtɪŋ/',pos:'cấu trúc gợi ý',vi:'Hay là gặp nhau nhé?'},
 letmeknow:{w:'Let me know',m:'let me know',ipa:'/let miː nəʊ/',pos:'cụm câu',vi:'Hãy cho mình biết'},
 canmake:{w:'make it',m:'make it',ipa:'/meɪk ɪt/',pos:'cụm động từ',vi:'có thể đến được'},
 looking:{w:'Looking forward to seeing you',m:'looking forward to seeing you there',ipa:'/ˈlʊkɪŋ ˈfɔːwəd tə ˈsiːɪŋ juː ðeə/',pos:'câu kết thư',vi:'Mong được gặp bạn ở đó'},
 sure:{w:"I'm sure you'll like it",m:"i'm sure you'll like it",ipa:'/aɪm ʃɔː juːl laɪk ɪt/',pos:'câu nói',vi:'Mình chắc bạn sẽ thích'}
};
const EX={
 hi:['Hi','/haɪ/','interj.','xin chào (thân mật)'],dance:['dances','/ˈdɑːnsɪz/','n.','những điệu múa'],friday:['Friday','/ˈfraɪdeɪ/','n.','thứ Sáu'],
 outside:['outside','/ˌaʊtˈsaɪd/','prep.','bên ngoài'],gate:['gate','/ɡeɪt/','n.','cổng'],best:['Best','/best/','n.','Thân mến (kết thư)'],
 listen:['listen to','/ˈlɪsn tə/','phr. v.','nghe'],watch:['watch','/wɒtʃ/','v.','xem'],school:['school','/skuːl/','n.','trường học']
};
Object.keys(GL).forEach(k=>GL[k].t=1);
Object.keys(EX).forEach(k=>{const e=EX[k];GL[k]={w:e[0],m:e[0].toLowerCase(),ipa:e[1],pos:e[2],vi:e[3]};});
const LETTER=['Oct 20, 20…','Hi Lan,',
 "Let's go to the traditional music night at our school this Friday at 7 p.m. You can listen to folk songs and watch dances. I'm sure you'll like it. It's in the school hall.",
 'How about meeting at 6:45 outside the school gate? Let me know if you can make it.',
 'Looking forward to seeing you there.',
 'Best,<br>Nam'];
const keys=Object.keys(GL).sort((a,b)=>GL[b].m.length-GL[a].m.length);
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const re=new RegExp('(?<![A-Za-z])('+keys.map(k=>esc(GL[k].m)).join('|')+')(?![A-Za-z])','gi');
const byM={};keys.forEach(k=>byM[GL[k].m.toLowerCase()]=k);
const wrap=t=>t.replace(re,m=>`<span class="gl${GL[byM[m.toLowerCase()]].t?' t':''}" data-k="${byM[m.toLowerCase()]}">${m}</span>`);
const plain=LETTER.map(t=>t.replace(/<br>/g,' ').replace(/<[^>]+>/g,'')).join(' ').replace(/"/g,'');
const READ=`<p class="hint">👆 Bấm <b>1 lần</b> vào từ hoặc cụm có gạch chấm để nghe, xem phiên âm và nghĩa. Em cần tra ít nhất <b>5 từ</b>.</p><h3 style="margin:6px 0">Một thư mời thân mật (mẫu)</h3><div class="card">`+LETTER.map(p=>'<p>'+wrap(p)+'</p>').join('')+`</div><p><button class="say" data-say="${plain}">🔊 Nghe cả lá thư</button></p>`;
const chk=(label,re)=>({label,re});

window.STUDY={
  lesson:'L7 U4 Phien 3',filePrefix:'L7U4P3',
  title:'Tự học Unit 4: Music and Arts · Phiên 3',
  sub:'Lớp 7 · Phiên 3/3 (khoảng 35 phút) · Bám sách Global Success 7, Unit 4 (Writing, tr.46–47) · Viết thư mời: 🟢 cơ bản → 🟡 trung bình → 🔴 nâng cao',
  intro:'Các mục nằm ở <b>thanh phía trên</b>. Em làm từ 🟢 cơ bản đến 🔴 nâng cao. Em được xem trước các mục sau, nhưng máy sẽ nhắc những phần chưa làm. Xong mỗi mục, bấm <b>Tiếp theo</b>. Lá thư của em do <b>cô chấm</b>; máy chỉ giúp em kiểm tra các phần cần có.',
  emoji:'✉️',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:GL,glossStep:'l-read',glossNeed:5,
  act:'\\b(pick|clean|help|ask|tell|invite|join|share|use|start|call|take|practise|practice|borrow|teach|sing|play|show|perform|learn|draw|paint|listen|watch|give|make|bring|find|record|love|like|enjoy|go|will|want|do|can|write|visit|let|meet|see|come|buy)\\b',
  vocab:{},rounds:[],
  parts:[
  {id:'model',title:'Mục 1 · 🟢 Đọc thư mời mẫu',steps:[
    {id:'l-read',type:'read',short:'🟢 Đọc thư mẫu',title:'Đọc thư mời mẫu của Nam gửi Lan',sub:'Bấm từ để tra (cần tra ít nhất 5 từ)',html:`<div class="rd" data-gloss="1">${READ}</div>`},
    {id:'l-parts',type:'read',short:'🟢 Cấu trúc thư mời',title:'Đọc: thư mời thân mật gồm những phần nào?',sub:'Lý thuyết',html:`
      <div class="card ins">⚠️ Một <b>thư mời thân mật</b> cho bạn thường có 6 phần. Viết đủ các phần thì thư mới hoàn chỉnh!</div>
      <div class="tbl"><table><tr><th>Phần</th><th>Việc cần làm</th><th>Câu mẫu</th></tr>
      <tr><td><b>① Ngày viết</b></td><td>Ghi ngày ở trên cùng</td><td>Oct 20, 20…</td></tr>
      <tr><td><b>② Lời chào</b></td><td>Hi / Hey + tên bạn + dấu phẩy</td><td>Hi Lan,</td></tr>
      <tr><td><b>③ Lời mời</b></td><td><b>Let's + động từ</b> + sự kiện, thời gian</td><td>Let's go to the traditional music night this Friday at 7 p.m.</td></tr>
      <tr><td><b>④ Chi tiết</b></td><td>Nơi chốn, hoạt động; thêm ý thuyết phục</td><td>You can listen to folk songs. It's in the school hall. I'm sure you'll like it.</td></tr>
      <tr><td><b>⑤ Hẹn gặp</b></td><td><b>How about + V-ing?</b> và hỏi bạn có đến được không</td><td>How about meeting at 6:45 outside the gate? Let me know if you can make it.</td></tr>
      <tr><td><b>⑥ Kết thư</b></td><td>Mong gặp + lời chúc + tên em</td><td>Looking forward to seeing you there.<br>Best,<br>Nam</td></tr></table></div>
      <div class="card">💡 Mẹo trong sách (Writing tip): dùng <b>Let's …</b> và <b>How about + V-ing?</b> trong thư mời thân mật.</div>`}
  ]},
  {id:'check1',title:'Mục 2 · 🟢 Hiểu thư mẫu',steps:[
    {id:'l-q1',type:'items',short:'🟢 5 câu hiểu thư',title:'5 câu hỏi hiểu thư mẫu',sub:'Trả lời dựa vào thư của Nam',items:[
      {kind:'choice',q:'Nam viết thư này cho ai?',o:['một người bạn','một giáo viên','một người lạ'],a:0,x:'Thư mở đầu bằng “Hi Lan,” và giọng thân mật → viết cho <b>một người bạn</b>.'},
      {kind:'choice',q:'Nam viết thư để làm gì?',o:['xin lỗi bạn','mời bạn đi xem chương trình','hỏi bài tập'],a:1,x:'Nam viết: “Let’s go to the traditional music night…” → <b>mời bạn</b>.'},
      {kind:'choice',q:'Chương trình bắt đầu lúc mấy giờ?',o:['6:45','7 p.m.','8 p.m.'],a:1,x:'“this Friday at <b>7 p.m.</b>” (6:45 là giờ hẹn gặp).'},
      {kind:'choice',q:'Nam muốn gặp Lan ở đâu?',o:['trong hội trường','ở nhà Lan','bên ngoài cổng trường'],a:2,x:'“meeting at 6:45 <b>outside the school gate</b>”.'},
      {kind:'choice',q:'Câu <i>“Looking forward to seeing you there.”</i> thuộc phần nào?',o:['② Lời chào','⑥ Kết thư','③ Lời mời'],a:1,x:'Đây là câu <b>kết thư</b>, trước lời chúc và tên.'}
    ]}
  ]},
  {id:'check2',title:'Mục 3 · 🟡 Luyện câu dùng trong thư mời',steps:[
    {id:'l-q2',type:'items',short:'🟡 8 câu luyện',title:'8 câu luyện cấu trúc thư mời (dễ → khó)',sub:'Chọn, xếp câu, điền từ',items:[
      {kind:'choice',q:'Chọn <b>lời chào</b> đúng cho thư gửi bạn tên Mai.',o:['Hi Mai,','Mai Hi','Dear teacher'],a:0,x:'Lời chào thân mật: <b>Hi + tên,</b> (có dấu phẩy).'},
      {kind:'choice',q:'Chọn câu <b>mời</b> bạn đi xem múa rối nước.',o:['Let\'s go to see the water puppet show.','I go see water puppet show.','Let\'s going to the show.'],a:0,x:'<b>Let\'s + động từ nguyên mẫu</b>: Let\'s go to see…'},
      {kind:'choice',q:'Chọn câu <b>hẹn gặp</b> đúng.',o:['How about meet at 7:45?','How about meeting at 7:45?','How about to meet at 7:45?'],a:1,x:'<b>How about + V-ing?</b> → How about meeting at 7:45?'},
      {kind:'choice',q:'Chọn câu <b>hỏi bạn có đến được không</b>.',o:['Let me know if you can make it.','Make me know you can.','Tell if come you.'],a:0,x:'<b>Let me know if you can make it.</b> = Cho mình biết nếu bạn đến được nhé.'},
      {kind:'order',q:'Xếp các từ thành câu <b>mời</b> đúng.',w:['Let\'s','go','to','the','music','festival.'],a:'Let\'s go to the music festival.',x:'<b>Let\'s go to the music festival.</b>'},
      {kind:'order',q:'Xếp các từ thành câu <b>hẹn gặp</b> đúng.',w:['How','about','meeting','outside','the','theatre?'],a:'How about meeting outside the theatre?',x:'<b>How about meeting outside the theatre?</b>'},
      {kind:'fill',q:'Looking forward to ___ you there. (see → dạng đúng, 1 từ)',a:['seeing'],hint:'Sau <b>to</b> trong cụm <i>look forward to</i> dùng V-ing.',x:'<b>Looking forward to seeing you there.</b>'},
      {kind:'fill',q:'You can ___ folk songs and watch dances. (nghe; 2 từ: ___ to)',a:['listen to'],hint:'Nghe = <b>listen to</b>.',x:'You can <b>listen to</b> folk songs and watch dances.'}
    ]}
  ]},
  {id:'plan',title:'Mục 4 · 🔴 Lập ý cho thư của em',steps:[
    {id:'l-bs',type:'solve',short:'🔴 Brainstorm',title:'Brainstorm: tìm ý cho thư mời của em',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Em sẽ mời bạn đi <b>lễ hội vẽ tranh đường phố (Street Painting Festival)</b> như trong sách. Trả lời 3 câu hỏi bằng <b>tiếng Anh</b> (ít nhất 3 từ mỗi câu). Em sẽ dùng các ý này trong thư.',
     scenarios:[
      {q:'Your friend does not know about the Street Painting Festival. How can you invite him or her?',vi:'Bạn em chưa biết về Lễ hội vẽ tranh đường phố. Em có thể rủ bạn thế nào?',hint:'Dùng <b>Let\'s go to…</b> / <b>Why don\'t we…</b> + thời gian (Sunday morning, 9 o\'clock)',model:"Let's go to the Street Painting Festival on Sunday morning at 9 o'clock."},
      {q:'Your friend asks: “What can we do at the festival?” What can you tell your friend?',vi:'Bạn hỏi: “Mình làm được gì ở lễ hội?” Em có thể nói gì?',hint:'Dùng <b>You can meet…</b> / <b>You can watch…</b> / <b>We can draw…</b>',model:'You can meet street artists and we can draw pictures on the street.'},
      {q:'You want to meet your friend before the festival. What time and where can you suggest?',vi:'Em muốn gặp bạn trước lễ hội. Em có thể gợi ý giờ và nơi nào?',hint:'Dùng <b>How about meeting at…?</b> (8:45, Central Road)',model:'How about meeting at 8:45 on Central Road?'}
     ]}
  ]},
  {id:'write',title:'Mục 5 · 🔴 Viết thư mời',steps:[
    {id:'l-write',type:'write',short:'🔴 Viết thư mời',title:'Viết thư mời bạn đi lễ hội vẽ tranh đường phố (khoảng 50–70 từ)',sub:'Viết đủ các phần, rồi chốt bài để cô chấm',
     prompt:'<b>Đề (theo gợi ý của sách):</b> Viết thư mời bạn đi <b>Street Painting Festival</b>. Thông tin: <b>Sự kiện:</b> Street Painting Festival · <b>Giờ bắt đầu:</b> 9 giờ sáng Chủ nhật · <b>Địa điểm:</b> Central Road · <b>Hoạt động:</b> gặp các nghệ sĩ đường phố, vẽ tranh trên đường · <b>Giờ gặp:</b> 8:45. Bắt đầu bằng ngày và <b>Hi + tên bạn,</b> rồi ký tên của em.',
     tips:'<b>Gợi ý câu:</b> Let\'s go to… · You can meet… and draw… · I\'m sure you\'ll like it. · How about meeting at 8:45…? · Let me know if you can make it. · Looking forward to seeing you there. · Best,',
     min:45,
     checks:[
      chk('Lời chào: Hi + tên bạn,','\\b(hi|hey)\\s+\\w+'),
      chk("Lời mời: Let's …",'let\\W?s\\s+\\w+'),
      chk('Có thời gian (9 o\'clock / Sunday) và nơi chốn (Central Road)','(sunday|9\\s*(o.?clock|a\\.?m|:00))[\\s\\S]*central|central[\\s\\S]*(sunday|9\\s*(o.?clock|a\\.?m|:00))'),
      chk('Có hoạt động: street artists / draw / meet / watch','street artist|draw|meet|watch|paint'),
      chk('Hẹn gặp: How about + V-ing (…8:45…)','how about\\s+\\w+ing'),
      chk('Hỏi bạn có đến được không: Let me know…','let me know'),
      chk('Kết thư: Looking forward to seeing you','looking forward to seeing you'),
      chk('Lời chúc và tên: Best, / Love, / Your friend','best,|best wishes|love,|your friend|yours')
     ],
     model:"Nov 12, 20…<br>Hi Mai,<br>Let's go to the Street Painting Festival this Sunday. It starts at 9 o'clock in the morning on Central Road. You can meet street artists and draw pictures on the street. I'm sure you'll like it. How about meeting at 8:45? Let me know if you can make it. Looking forward to seeing you there.<br>Best,<br>Lan"}
  ]}
  ]
};
})();
