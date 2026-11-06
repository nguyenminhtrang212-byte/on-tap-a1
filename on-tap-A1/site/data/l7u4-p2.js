/* Lớp 7 · Unit 4 Music and Arts (Global Success 7, tr.42 Pronunciation) · Phiên 2: Âm /ʃ/ – /ʒ/ (vô thanh – hữu thanh), trọng âm, đọc to. Nội dung do Claude soạn mới, bám từ vựng của sách. */
(function(){
const snd=(w,a,x)=>({kind:'choice',say:w,q:`🔊 Nghe từ <b>${w}</b>. Từ này có âm nào?`,o:['/ʃ/ (vô thanh, cổ không rung)','/ʒ/ (hữu thanh, cổ rung)'],a,x});
const stressQ=(w,ipa,o,a,x)=>({kind:'choice',say:w,q:`🔊 Nghe từ <b>${w}</b> <span class="ipa">${ipa}</span>. Âm tiết nào được nhấn mạnh?`,o,a,x});
window.STUDY={
  lesson:'L7 U4 Phien 2',filePrefix:'L7U4P2',
  title:'Tự học Unit 4: Music and Arts · Phiên 2',
  sub:'Lớp 7 · Phiên 2/3 (khoảng 35 phút) · Bám sách Global Success 7, Unit 4 · Phát âm /ʃ/ – /ʒ/, trọng âm, đọc to: 🟢 cơ bản → 🟡 trung bình → 🔴 nâng cao',
  intro:'Các mục nằm ở <b>thanh phía trên</b>. Em làm từ 🟢 cơ bản đến 🔴 nâng cao. Em được xem trước các mục sau, nhưng máy sẽ nhắc những phần chưa làm. Xong mỗi mục, bấm <b>Tiếp theo</b>. Cuối cùng cô sẽ xem lại bài của em.',
  emoji:'🎶',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:{},glossStep:'none',glossNeed:0,
  vocab:{},rounds:[],
  parts:[
  {id:'sound',title:'Mục 1 · Âm vô thanh /ʃ/ và hữu thanh /ʒ/ (SGK tr.42)',steps:[
    {id:'s-th',type:'read',short:'🟢 Lý thuyết /ʃ/ – /ʒ/',title:'Đọc: /ʃ/ và /ʒ/ khác nhau thế nào?',sub:'Lý thuyết',html:`
      <div class="card ins">⚠️ Hai âm này đặt <b>môi và lưỡi giống hệt nhau</b>. Chỉ khác ở <b>cổ họng</b>: /ʃ/ <b>vô thanh</b> 🤫 (cổ không rung), /ʒ/ <b>hữu thanh</b> 🔔 (cổ rung). Đặt tay lên cổ để thử!</div>
      <div class="tbl"><table><tr><th>/ʃ/ (vô thanh) 🤫</th><th>/ʒ/ (hữu thanh) 🔔</th></tr>
      <tr><td>mu<b>si</b>cian /mjuˈzɪʃn/</td><td>tele<b>vi</b>sion /ˈtelɪvɪʒn/</td></tr>
      <tr><td><b>sh</b>ow /ʃəʊ/</td><td><b>vi</b>sual /ˈvɪʒuəl/</td></tr>
      <tr><td><b>sh</b>are /ʃeə/</td><td>un<b>u</b>sual /ʌnˈjuːʒuəl/</td></tr>
      <tr><td>na<b>ti</b>on /ˈneɪʃn/</td><td>de<b>ci</b>sion /dɪˈsɪʒn/</td></tr></table></div>
      <div class="card">💡 Mẹo nhận biết: <b>sh</b>, <b>-tion</b>, <b>-cian</b> thường đọc /ʃ/. Chữ <b>s</b> trong <b>-sion</b>, <b>-sual</b> (sau nguyên âm) thường đọc /ʒ/.</div>
      <p>Nghe thử: <button class="say" data-say="show, share, nation, musician">/ʃ/ show…</button> <button class="say" data-say="television, visual, unusual, decision">/ʒ/ television…</button></p>`},
    {id:'s-q',type:'items',short:'🟢 8 câu nhận diện âm',title:'8 câu nhận diện âm /ʃ/ và /ʒ/',sub:'Nghe rồi chọn',items:[
      snd('show',0,'<b>show</b> /ʃəʊ/ có âm /ʃ/ (vô thanh).'),
      snd('television',1,'<b>television</b> /ˈtelɪvɪʒn/ có âm /ʒ/ (hữu thanh) ở giữa từ.'),
      snd('nation',0,'<b>nation</b> /ˈneɪʃn/ có âm /ʃ/ (chữ <i>ti</i> đọc /ʃ/).'),
      snd('decision',1,'<b>decision</b> /dɪˈsɪʒn/ có âm /ʒ/ (chữ <i>s</i> đọc /ʒ/).'),
      snd('share',0,'<b>share</b> /ʃeə/ có âm /ʃ/ ở đầu từ.'),
      snd('visual',1,'<b>visual</b> /ˈvɪʒuəl/ có âm /ʒ/.'),
      snd('musician',0,'<b>musician</b> /mjuˈzɪʃn/ có âm /ʃ/ (đuôi <i>-cian</i>).'),
      snd('unusual',1,'<b>unusual</b> /ʌnˈjuːʒuəl/ có âm /ʒ/.')
    ]},
    {id:'s-q2',type:'items',short:'🟡 6 câu trong câu',title:'6 câu: tìm từ có âm /ʃ/ hoặc /ʒ/ trong câu',sub:'Đọc câu, nghe, chọn từ',items:[
      {kind:'choice',say:'We finally came to a decision.',q:'Trong câu <i>“We finally came to a decision.”</i> từ nào có âm <b>/ʒ/</b>?',o:['finally','decision','came'],a:1,x:'<b>decision</b> /dɪˈsɪʒn/ có /ʒ/.'},
      {kind:'choice',say:'Did you watch the talent show on TV last night?',q:'Trong câu <i>“Did you watch the talent show on TV last night?”</i> từ nào có âm <b>/ʃ/</b>?',o:['talent','show','watch'],a:1,x:'<b>show</b> /ʃəʊ/ có /ʃ/. (<i>watch</i> có /tʃ/, là âm khác.)'},
      {kind:'choice',say:'Let\'s share the pictures we took last week.',q:'Trong câu <i>“Let’s share the pictures we took last week.”</i> từ nào có âm <b>/ʃ/</b>?',o:['share','took','week'],a:0,x:'<b>share</b> /ʃeə/ có /ʃ/ ở đầu từ.'},
      {kind:'choice',say:'It was a pleasure to listen to the musicians performing yesterday.',q:'Trong câu <i>“It was a pleasure to listen to the musicians performing yesterday.”</i> từ nào có âm <b>/ʒ/</b>?',o:['musicians','pleasure','performing'],a:1,x:'<b>pleasure</b> /ˈpleʒə/ có /ʒ/ (chữ <i>s</i> đọc /ʒ/). <i>musicians</i> có /ʃ/.'},
      {kind:'choice',say:'musician',sayAfter:'television. musician.',q:'🔊 Nghe và chọn từ em nghe được.',o:['television /ˈtelɪvɪʒn/','musician /mjuˈzɪʃn/'],a:1,x:'<b>musician</b> kết thúc bằng /ʃn/ (vô thanh), <b>television</b> kết thúc bằng /ʒn/ (hữu thanh).'},
      {kind:'fill',say:'television',q:'🔊 Nghe và <b>gõ lại</b> từ em nghe được (1 từ). Từ này có âm /ʒ/.',a:['television'],hint:'Nghĩa: tivi. Bắt đầu bằng “t”, có 10 chữ cái.',x:'<b>television</b> /ˈtelɪvɪʒn/ = tivi.'}
    ]}
  ]},
  {id:'stress',title:'Mục 2 · Trọng âm (Word stress) với từ vựng Unit 4',steps:[
    {id:'t-th',type:'read',short:'🟡 Lý thuyết trọng âm',title:'Đọc: quy tắc trọng âm',sub:'Lý thuyết',html:`
      <div class="card ins">⚠️ Trọng âm là âm tiết đọc <b>to hơn, dài hơn, cao hơn</b>. Dấu <b>ˈ</b> trong phiên âm đứng ngay <b>trước</b> âm tiết được nhấn. (Phần này cô bổ sung để luyện thêm với từ vựng của Unit 4.)</div>
      <div class="tbl"><table><tr><th>Quy tắc</th><th>Ví dụ (CHỮ HOA = âm nhấn)</th></tr>
      <tr><td><b>1.</b> Danh từ <b>2 âm tiết</b>: thường nhấn <b>âm 1</b></td><td>AR-tist /ˈɑːtɪst/ · PAIN-ter /ˈpeɪntə/</td></tr>
      <tr><td><b>2.</b> Động từ <b>2 âm tiết</b>: thường nhấn <b>âm 2</b></td><td>per-FORM /pəˈfɔːm/ · com-POSE /kəmˈpəʊz/ · pre-FER /prɪˈfɜː/</td></tr>
      <tr><td><b>3.</b> Từ có đuôi <b>-ian, -ic, -tion, -sion, -eum</b>: nhấn âm <b>ngay trước đuôi</b></td><td>mu-SI-cian /mjuˈzɪʃn/ · de-CI-sion /dɪˈsɪʒn/ · mu-SE-um /mjuˈziːəm/ · ex-hi-BI-tion /ˌeksɪˈbɪʃn/</td></tr>
      <tr><td><b>4.</b> Ngoại lệ cần nhớ riêng</td><td>gui-TAR /ɡɪˈtɑː/ · com-PO-ser /kəmˈpəʊzə/ (nhấn âm 2 vì gốc từ <i>compose</i>)</td></tr></table></div>
      <p>Nghe thử: <button class="say" data-say="artist">AR-tist</button> <button class="say" data-say="perform">per-FORM</button> <button class="say" data-say="musician">mu-SI-cian</button> <button class="say" data-say="composer">com-PO-ser</button></p>
      <div class="card">💡 Mẹo: vỗ tay theo nhịp khi đọc, vỗ <b>mạnh</b> ở âm nhấn: AR-tist (mạnh – nhẹ), per-FORM (nhẹ – mạnh).</div>`},
    {id:'t-q',type:'items',short:'🟡 8 câu trọng âm',title:'8 câu nhận biết trọng âm (dễ → khó)',sub:'Nghe rồi chọn âm tiết được nhấn',items:[
      stressQ('artist','/ˈɑːtɪst/',['AR-tist','ar-TIST'],0,'<b>AR-tist</b>: danh từ 2 âm tiết, nhấn âm 1 (quy tắc 1).'),
      stressQ('painter','/ˈpeɪntə/',['PAIN-ter','pain-TER'],0,'<b>PAIN-ter</b>: danh từ 2 âm tiết, nhấn âm 1.'),
      stressQ('perform','/pəˈfɔːm/',['PER-form','per-FORM'],1,'<b>per-FORM</b>: động từ 2 âm tiết, nhấn âm 2 (quy tắc 2).'),
      stressQ('prefer','/prɪˈfɜː/',['PRE-fer','pre-FER'],1,'<b>pre-FER</b>: động từ 2 âm tiết, nhấn âm 2.'),
      stressQ('composer','/kəmˈpəʊzə/',['COM-po-ser','com-PO-ser'],1,'<b>com-PO-ser</b>: nhấn âm 2, giống động từ <i>com-POSE</i>.'),
      stressQ('musician','/mjuˈzɪʃn/',['MU-si-cian','mu-SI-cian','mu-si-CIAN'],1,'<b>mu-SI-cian</b>: đuôi <i>-cian</i> → nhấn âm ngay trước đuôi (quy tắc 3).'),
      stressQ('museum','/mjuˈziːəm/',['MU-se-um','mu-SE-um','mu-se-UM'],1,'<b>mu-SE-um</b>: đuôi <i>-eum</i> → nhấn âm ngay trước đuôi.'),
      stressQ('exhibition','/ˌeksɪˈbɪʃn/',['EX-hi-bi-tion','ex-HI-bi-tion','ex-hi-BI-tion'],2,'<b>ex-hi-BI-tion</b>: đuôi <i>-tion</i> → nhấn âm ngay trước đuôi (âm 3).')
    ]}
  ]},
  {id:'say',title:'Mục 3 · 🔴 Nghe và đọc to (ghi âm)',steps:[
    {id:'a-read',type:'speak',short:'🔴 Đọc to 3 câu',title:'Đọc to 3 câu trả lời (ngắn → dài)',sub:'Nghe mẫu, ghi âm, xem % đọc đúng, gửi',
     intro:'Mỗi mục có 1 <b>câu hỏi</b> và 1 <b>câu trả lời mẫu</b>. Em bấm <b>🔊 Nghe mẫu</b>, chú ý âm <b>/ʃ/</b>, <b>/ʒ/</b> và <b>trọng âm</b>, rồi <b>ghi âm</b>. Máy cho em <b>% từ đọc đúng</b> và chỉ ra từ chưa đúng (bấm 🔊 để nghe lại từ đó). Hài lòng thì bấm <b>📤 Gửi</b>.',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi câu.'],
     prompts:[
      {ask:'What do you watch on television?',text:'<b>I watch a talent show on television.</b>',vi:'Em xem gì trên tivi? → Em xem một chương trình tìm kiếm tài năng trên tivi.',say:'I watch a talent show on television.',maxSec:30},
      {ask:'What do you want to share with your friends?',text:'<b>I want to share my pictures and an unusual song with my friends.</b>',vi:'Em muốn chia sẻ gì với bạn bè? → Em muốn chia sẻ những bức tranh và một bài hát khác lạ với bạn bè.',say:'I want to share my pictures and an unusual song with my friends.',maxSec:40},
      {ask:'What decision did you make about the school festival?',text:'<b>We made a decision to invite a musician to perform at our school festival.</b>',vi:'Em và các bạn đã quyết định gì về lễ hội của trường? → Chúng em quyết định mời một nhạc sĩ biểu diễn ở lễ hội của trường.',say:'We made a decision to invite a musician to perform at our school festival.',maxSec:60}
     ]}
  ]}
  ]
};
})();
