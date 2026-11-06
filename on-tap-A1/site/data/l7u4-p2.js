/* Lớp 7 · Unit 4 Music and Arts · Phiên 2 (Trọng âm – Âm vô thanh/hữu thanh – Đọc to). Nội dung do Claude soạn mới. */
(function(){
const stressQ=(w,ipa,o,a,x)=>({kind:'choice',say:w,q:`🔊 Nghe từ <b>${w}</b> <span class="ipa">${ipa}</span>. Âm tiết nào được nhấn mạnh?`,o,a,x});
const pl=(w,a,x)=>({kind:'choice',say:w,q:`Đuôi <b>-s</b> của <b>${w}</b> đọc là gì? (bấm 🔊 nghe rồi chọn)`,o:['/s/ (vô thanh)','/z/ (hữu thanh)','/ɪz/ (thêm một âm tiết)'],a,x});
window.STUDY={
  lesson:'L7 U4 Phien 2',filePrefix:'L7U4P2',
  title:'Tự học Unit 4: Music and Arts · Phiên 2',
  sub:'Lớp 7 · Phiên 2/3 (khoảng 33 phút): Trọng âm · Âm vô thanh – hữu thanh · Đọc to',
  intro:'Em được xem trước các phần sau, nhưng máy sẽ nhắc những phần chưa làm. Ghi âm xong em nghe lại rồi mới bấm gửi. Cuối cùng cô sẽ xem lại bài của em.',
  emoji:'🎶',stampTitle:'Unit 4',stampSub:'Music and Arts',
  gloss:{},glossStep:'none',glossNeed:0,
  vocab:{},rounds:[],
  parts:[
  {id:'stress',title:'Mục 1 · Trọng âm (Word stress)',steps:[
    {id:'t-th',type:'read',short:'Lý thuyết trọng âm',title:'Đọc: quy tắc trọng âm',sub:'Lý thuyết',html:`
      <div class="card ins">⚠️ Trọng âm là âm tiết được đọc <b>to hơn, dài hơn, cao hơn</b>. Dấu <b>ˈ</b> trong phiên âm đứng ngay <b>trước</b> âm tiết được nhấn.</div>
      <div class="tbl"><table><tr><th>Quy tắc</th><th>Ví dụ (CHỮ HOA = âm nhấn)</th></tr>
      <tr><td><b>1.</b> Danh từ và tính từ <b>2 âm tiết</b>: thường nhấn <b>âm 1</b></td><td>MU-sic /ˈmjuːzɪk/ · CON-cert /ˈkɒnsət/ · PAINT-ing /ˈpeɪntɪŋ/ · PRET-ty</td></tr>
      <tr><td><b>2.</b> Động từ <b>2 âm tiết</b>: thường nhấn <b>âm 2</b></td><td>per-FORM /pəˈfɔːm/ · en-JOY /ɪnˈdʒɔɪ/ · cre-ATE /kriˈeɪt/</td></tr>
      <tr><td><b>3.</b> Từ có đuôi <b>-ian, -ic, -tion, -sion</b>: nhấn âm <b>ngay trước đuôi</b></td><td>mu-SI-cian /mjuːˈzɪʃn/ · ar-TIS-tic · per-for-MANCE (đuôi -ance)</td></tr>
      <tr><td><b>4.</b> Từ <b>3 âm tiết</b> hay gặp: thường nhấn <b>âm 1</b></td><td>FES-ti-val /ˈfestɪvl/ · IN-stru-ment /ˈɪnstrəmənt/ · POP-u-lar</td></tr>
      <tr><td><b>5.</b> Ngoại lệ cần nhớ riêng</td><td>gui-TAR /ɡɪˈtɑː/ · cre-A-tive /kriˈeɪtɪv/</td></tr></table></div>
      <p>Nghe thử: <button class="say" data-say="music">MU-sic</button> <button class="say" data-say="perform">per-FORM</button> <button class="say" data-say="musician">mu-SI-cian</button> <button class="say" data-say="guitar">gui-TAR</button></p>
      <div class="card">💡 Mẹo: vỗ tay theo nhịp khi đọc, vỗ <b>mạnh</b> ở âm nhấn: MU-sic (mạnh – nhẹ), per-FORM (nhẹ – mạnh).</div>`},
    {id:'t-q',type:'items',short:'8 câu trọng âm',title:'8 câu nhận biết trọng âm',sub:'Nghe rồi chọn âm tiết được nhấn',items:[
      stressQ('music','/ˈmjuːzɪk/',['MU-sic','mu-SIC'],0,'<b>MU-sic</b>: danh từ 2 âm tiết, nhấn âm 1 (quy tắc 1).'),
      stressQ('perform','/pəˈfɔːm/',['PER-form','per-FORM'],1,'<b>per-FORM</b>: động từ 2 âm tiết, nhấn âm 2 (quy tắc 2).'),
      stressQ('concert','/ˈkɒnsət/',['CON-cert','con-CERT'],0,'<b>CON-cert</b>: danh từ 2 âm tiết, nhấn âm 1.'),
      stressQ('guitar','/ɡɪˈtɑː/',['GUI-tar','gui-TAR'],1,'<b>gui-TAR</b>: đây là từ ngoại lệ, nhấn âm 2. Phiên âm có ˈ ngay trước “tɑː”.'),
      stressQ('musician','/mjuːˈzɪʃn/',['MU-si-cian','mu-SI-cian','mu-si-CIAN'],1,'<b>mu-SI-cian</b>: đuôi <i>-ian</i> → nhấn âm ngay trước đuôi (quy tắc 3).'),
      stressQ('festival','/ˈfestɪvl/',['FES-ti-val','fes-TI-val','fes-ti-VAL'],0,'<b>FES-ti-val</b>: 3 âm tiết, nhấn âm 1.'),
      stressQ('instrument','/ˈɪnstrəmənt/',['IN-stru-ment','in-STRU-ment','in-stru-MENT'],0,'<b>IN-stru-ment</b>: danh từ 3 âm tiết, nhấn âm 1.'),
      stressQ('creative','/kriˈeɪtɪv/',['CRE-a-tive','cre-A-tive','cre-a-TIVE'],1,'<b>cre-A-tive</b>: ngoại lệ, nhấn âm 2 (giống động từ <i>create</i> /kriˈeɪt/).')
    ]}
  ]},
  {id:'sound',title:'Mục 2 · Âm vô thanh và hữu thanh',steps:[
    {id:'s-th',type:'read',short:'Lý thuyết âm',title:'Đọc: đuôi -s đọc thế nào?',sub:'Lý thuyết',html:`
      <p>Đặt tay lên cổ họng. <b>Cổ không rung</b> → âm <b>vô thanh</b> 🤫. <b>Cổ rung</b> → âm <b>hữu thanh</b> 🔔. Đuôi <b>-s</b> của danh từ số nhiều hoặc động từ ngôi thứ ba <b>phụ thuộc vào âm cuối của từ</b>.</p>
      <div class="tbl"><table><tr><th>Âm cuối của từ</th><th>Đuôi -s đọc là</th><th>Ví dụ</th></tr>
      <tr><td>Vô thanh 🤫: /p/ /t/ /k/ /f/ /θ/</td><td><b>/s/</b></td><td>concerts /s/, tickets /s/, cups /s/</td></tr>
      <tr><td>Hữu thanh 🔔: /b/ /d/ /g/ /m/ /n/ /ŋ/ /l/ /r/ và nguyên âm</td><td><b>/z/</b></td><td>songs /z/, bands /z/, clubs /z/, guitars /z/</td></tr>
      <tr><td>Âm gió: /s/ /z/ /ʃ/ /tʃ/ /dʒ/</td><td><b>/ɪz/</b> (thêm một âm tiết)</td><td>dances /ɪz/, stages /ɪz/, watches /ɪz/</td></tr></table></div>
      <div class="card">💡 <b>drums</b> kết thúc bằng /m/ (hữu thanh) nên đuôi -s đọc /z/. Chỉ cần nhìn <b>âm cuối</b>, không nhìn chữ cuối.</div>
      <p>Nghe thử: <button class="say" data-say="concerts">concerts /s/</button> <button class="say" data-say="songs">songs /z/</button> <button class="say" data-say="dances">dances /ɪz/</button></p>`},
    {id:'s-q',type:'items',short:'8 câu âm',title:'8 câu nhận diện âm',sub:'Nghe rồi chọn',items:[
      pl('concerts',0,'<b>concerts</b>: âm cuối /t/ là vô thanh → đuôi đọc <b>/s/</b>.'),
      pl('songs',1,'<b>songs</b>: âm cuối /ŋ/ là hữu thanh → đuôi đọc <b>/z/</b>.'),
      pl('dances',2,'<b>dances</b>: âm cuối /s/ (âm gió) → đuôi đọc <b>/ɪz/</b>, thêm một âm tiết.'),
      pl('bands',1,'<b>bands</b>: âm cuối /d/ là hữu thanh → đuôi đọc <b>/z/</b>.'),
      pl('tickets',0,'<b>tickets</b>: âm cuối /t/ là vô thanh → đuôi đọc <b>/s/</b>.'),
      pl('clubs',1,'<b>clubs</b>: âm cuối /b/ là hữu thanh → đuôi đọc <b>/z/</b>.'),
      {kind:'choice',say:'price',sayAfter:'price. prize.',q:'🔊 Nghe và chọn từ em nghe được.',o:['price /praɪs/ (âm cuối vô thanh)','prize /praɪz/ (âm cuối hữu thanh)'],a:0,x:'<b>price</b> kết thúc bằng /s/ (vô thanh), <b>prize</b> bằng /z/ (hữu thanh). Đặt tay lên cổ để thử.'},
      {kind:'choice',say:'cab',sayAfter:'cap. cab.',q:'🔊 Nghe và chọn từ em nghe được.',o:['cap /kæp/ (âm cuối vô thanh)','cab /kæb/ (âm cuối hữu thanh)'],a:1,x:'<b>cab</b> kết thúc bằng /b/ (hữu thanh), <b>cap</b> bằng /p/ (vô thanh).'}
    ]}
  ]},
  {id:'say',title:'Mục 3 · Nghe và đọc to (ghi âm)',steps:[
    {id:'a-read',type:'speak',short:'Đọc to 3 câu',title:'Đọc to 3 câu trả lời (ngắn → dài)',sub:'Nghe mẫu, ghi âm, xem % đọc đúng, gửi',
     intro:'Mỗi mục có 1 <b>câu hỏi</b> và 1 <b>câu trả lời mẫu</b>. Em bấm <b>🔊 Nghe mẫu</b>, chú ý <b>trọng âm</b> và đuôi <b>-s</b>, rồi <b>ghi âm</b>. Máy cho em <b>% từ đọc đúng</b> và chỉ ra từ chưa đúng (bấm 🔊 để nghe lại từ đó). Hài lòng thì bấm <b>📤 Gửi</b>.',
     check:['Em đã nghe mẫu trước khi ghi âm mỗi câu.'],
     prompts:[
      {ask:'What kind of music do you like?',text:'<b>I like pop music and rock music.</b>',vi:'Em thích loại nhạc nào? → Em thích nhạc pop và nhạc rock.',say:'I like pop music and rock music.',maxSec:30},
      {ask:'What can you play or sing?',text:'<b>I can play the guitar, and I practise every day after school.</b>',vi:'Em có thể chơi hoặc hát gì? → Em chơi được đàn ghi-ta, và em luyện tập mỗi ngày sau giờ học.',say:'I can play the guitar, and I practise every day after school.',maxSec:40},
      {ask:'What will you do at the school festival?',text:'<b>Next month, our school will take part in a festival, and I will sing in a choir with my friends.</b>',vi:'Em sẽ làm gì ở lễ hội của trường? → Tháng sau trường em sẽ tham gia một lễ hội, và em sẽ hát trong dàn đồng ca cùng các bạn.',say:'Next month, our school will take part in a festival, and I will sing in a choir with my friends.',maxSec:60}
     ]}
  ]}
  ]
};
})();
