/* Lớp 7 · Unit 5 Food and Drink (Global Success 7, tr.52, 56–57) · Link 3: Âm /ɒ/ – /ɔː/, nói, viết đoạn thói quen ăn uống (15 phút). Nội dung do Claude soạn mới. */
(function(){
const snd=(w,a,x)=>({kind:'choice',say:w,q:`🔊 Nghe từ <b>${w}</b>. Em nghe thấy âm nào?`,o:['/ɒ/ (ngắn, miệng tròn)','/ɔː/ (dài, môi chu tròn)'],a,x});
window.STUDY={
  lesson:'L7 U5 Phien 3',filePrefix:'L7U5P3',
  title:'Tự học Unit 5: Food and Drink · Link 3',
  sub:'Lớp 7 · Link 3/3 · khoảng 15 phút · Bám SGK tr.52, 56–57 · Nghe, nói, viết về bữa ăn của em 🍚',
  intro:'Chào em! 🍚 Đây là chặng cuối của Unit 5. Mình nghe cho tai quen hai âm mới, nói to vài câu về món em thích, rồi tự viết một đoạn nhỏ về thói quen ăn uống. <b>Không cần hoàn hảo</b>, chỉ cần là lời của chính em. Cô sẽ đọc và nhận xét. Xong mỗi mục, bấm <b>Tiếp theo</b>.',
  emoji:'🍚',stampTitle:'Unit 5',stampSub:'Food and Drink',
  gloss:{},glossStep:'none',glossNeed:0,
  vocab:{},rounds:[],
  parts:[
  {id:'ear',title:'Mục 1 · 🟢 Tai nghe: âm /ɒ/ và /ɔː/ (SGK tr.52)',steps:[
    {id:'p-th',type:'read',short:'🟢 Hai âm mới',title:'Làm quen với /ɒ/ và /ɔː/',sub:'Đọc và nghe thử',html:`
      <div class="card ins">⚠️ Hai âm này đều tròn môi, nhưng <b>/ɒ/ ngắn và gọn</b>, còn <b>/ɔː/ kéo dài hơn</b> (có dấu <b>ː</b>). Em thử kéo dài âm “o” trong <i>pork</i> nhé!</div>
      <div class="tbl"><table><tr><th>/ɒ/ (ngắn) 🔹</th><th>/ɔː/ (dài) 🔸</th></tr>
      <tr><td>h<b>o</b>t /hɒt/</td><td>p<b>or</b>k /pɔːk/</td></tr>
      <tr><td>p<b>o</b>t /pɒt/</td><td>f<b>or</b>k /fɔːk/</td></tr>
      <tr><td>l<b>o</b>t /lɒt/</td><td>c<b>a</b>ll /kɔːl/</td></tr>
      <tr><td>f<b>o</b>nd /fɒnd/</td><td>w<b>a</b>ter /ˈwɔːtə/</td></tr>
      <tr><td>n<b>o</b>t /nɒt/</td><td>s<b>au</b>ce /sɔːs/</td></tr></table></div>
      <div class="card">💡 Mẹo nhỏ: thấy chữ <b>or, al, au, aw</b> thường là /ɔː/ (pork, call, sauce, saw). Thấy <b>o</b> đứng giữa hai phụ âm ngắn (hot, pot, lot) thường là /ɒ/.</div>
      <p>Nghe thử: <button class="say" data-say="hot, pot, lot, not">🔹 /ɒ/</button> <button class="say" data-say="pork, fork, call, sauce">🔸 /ɔː/</button></p>`},
    {id:'p-q',type:'items',short:'🟢 6 câu nghe âm',title:'6 câu: tai em nghe được âm nào?',sub:'Nghe kỹ rồi chọn',items:[
      snd('pot',0,'<b>pot</b> /pɒt/ có âm ngắn /ɒ/.'),
      snd('pork',1,'<b>pork</b> /pɔːk/ có âm dài /ɔː/.'),
      snd('hot',0,'<b>hot</b> /hɒt/ có âm ngắn /ɒ/.'),
      snd('fork',1,'<b>fork</b> /fɔːk/ có âm dài /ɔː/.'),
      snd('lot',0,'<b>lot</b> /lɒt/ có âm ngắn /ɒ/.'),
      snd('sauce',1,'<b>sauce</b> /sɔːs/ có âm dài /ɔː/. Em nghe tinh lắm!')
    ]}
  ]},
  {id:'mouth',title:'Mục 2 · 🟡 Mở miệng nói: ba câu từ ngắn đến dài',steps:[
    {id:'a-read',type:'speak',short:'🟡 Nói 3 câu',title:'Nói to 3 câu về đồ ăn thức uống của em',sub:'Nghe mẫu, ghi âm, xem % đọc đúng, gửi',
     intro:'Mỗi mục có 1 <b>câu hỏi</b> và 1 <b>câu trả lời mẫu</b>. Em bấm <b>🔊 Nghe mẫu</b>, thử nói theo, rồi <b>ghi âm</b>. Máy sẽ cho em biết <b>% từ đọc đúng</b> và chỉ ra từ chưa đúng (bấm 🔊 để nghe lại). Em hài lòng thì bấm <b>📤 Gửi</b> cho cô nhé. Nói sai cũng không sao, cô thích nghe giọng của em lắm!',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi câu.'],
     prompts:[
      {ask:'What do you drink every day?',text:'<b>I drink a lot of water.</b>',vi:'Em uống gì mỗi ngày? → Em uống rất nhiều nước.',say:'I drink a lot of water.',maxSec:30},
      {ask:'What does your mother cook?',text:'<b>My mother cooks pork with some fish sauce.</b>',vi:'Mẹ em nấu món gì? → Mẹ em nấu thịt heo với một ít nước mắm.',say:'My mother cooks pork with some fish sauce.',maxSec:40},
      {ask:'What is your favourite food, and when do you have it?',text:'<b>My favourite food is pho. I often have it in the morning, and it has a lot of beef.</b>',vi:'Món em thích nhất là gì, và em ăn khi nào? → Món em thích là phở. Em thường ăn buổi sáng, và phở có rất nhiều thịt bò.',say:'My favourite food is pho. I often have it in the morning, and it has a lot of beef.',maxSec:60}
     ]}
  ]},
  {id:'idea',title:'Mục 3 · 🔴 Gom ý: brainstorm trước khi viết',steps:[
    {id:'b-bs',type:'solve',short:'🔴 Gom ý',title:'Brainstorm: nghĩ ý cho đoạn viết',sub:'Viết ý của em bằng tiếng Anh, không chấm điểm',
     intro:'Trước khi viết, mình gom ý một chút nhé. Em trả lời <b>2 câu</b> bằng <b>tiếng Anh</b> (ít nhất 3 từ). Những ý này sẽ là nguyên liệu cho đoạn văn của em. Chưa nghĩ ra thì cứ nhìn gợi ý, cô ở đây mà!',
     scenarios:[
      {q:'A foreign friend is coming to your home for dinner. What food and drink can you offer?',vi:'Một người bạn nước ngoài sắp đến nhà em ăn tối. Em có thể mời món gì, uống gì?',hint:'Dùng <b>I can offer…</b> / <b>We can have…</b> + một món em biết (spring rolls, rice, green tea)',model:'We can have rice with fried tofu, and some green tea.'},
      {q:'What do people in your area often have for breakfast, lunch, and dinner?',vi:'Người ở nơi em sống thường ăn gì vào bữa sáng, trưa, tối?',hint:'Dùng <b>People often have…</b> / <b>For breakfast, they have…</b>',model:'For breakfast, people often have pho, and for dinner they have rice with fish and vegetables.'}
     ]}
  ]},
  {id:'write',title:'Mục 4 · 🔴 Đoạn văn của em (SGK tr.57)',steps:[
    {id:'w-write',type:'write',short:'🔴 Viết đoạn văn',title:'Viết 4–6 câu về thói quen ăn uống của em',sub:'Viết xong thì chốt bài, cô sẽ đọc và nhận xét',
     prompt:'<b>Đề:</b> Viết một đoạn <b>khoảng 40–50 từ</b> kể về thói quen ăn uống của em hoặc của người trong khu em sống. Em có thể kể: em ăn gì vào bữa sáng, trưa, tối; em thích đồ uống nào; và <b>bao nhiêu</b> (some, a lot of). Viết bằng giọng của em, không cần câu quá dài!',
     tips:'<b>Gợi ý câu:</b> For breakfast, I often have… · At noon, I usually have… · I drink a lot of… · My family has some… for dinner. · My favourite food is… because it is…',
     min:35,
     checks:[
      {label:'Có kể về bữa ăn (breakfast / lunch / dinner)',re:'breakfast|lunch|dinner'},
      {label:'Có đồ ăn hoặc thức uống cụ thể (rice, pho, water, tea…)',re:'rice|pho|noodle|bread|egg|pork|beef|chicken|fish|soup|tofu|fruit|vegetable|water|tea|milk|juice|coffee'},
      {label:'Có từ chỉ lượng: some / a lot of / lots of',re:'\\bsome\\b|a lot of|lots of'},
      {label:'Có từ chỉ thói quen: often / usually / always / sometimes',re:'often|usually|always|sometimes|every day'},
      {label:'Có nói về đồ uống em thích hoặc em hay uống',re:'drink|tea|water|juice|milk|coffee|lemonade'}
     ],
     model:'In my family, we have breakfast at 6:30. I often have pho or bread with some eggs. At noon, I usually eat rice with fish and a lot of vegetables. I drink a lot of water every day, and sometimes I drink some orange juice. My favourite food is spring rolls because they are crispy and tasty.'}
  ]}
  ]
};
})();
