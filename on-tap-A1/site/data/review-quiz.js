window.QUIZ = {
  lesson: 'CU A1 U1-3 Quiz tong hop',
  filePrefix: 'QuizTH',
  title: 'Quiz tổng hợp · Units 1–3',
  sub: 'Close-up A1+ · This Is Me! · Friends & Fun · My Home Town · 60 phút · 5 phần.',
  emoji: '⏱️', stampTitle: 'Quiz', stampSub: 'Units 1–3',
  minutes: 60,
  parts: [
    {id:'p1',tab:'① Từ vựng',title:'Phần 1 · Từ vựng và Phát âm',intro:'Chọn đáp án đúng. Phần B có câu cần nghe: bấm 🔊 để nghe máy đọc.',
     sections:[
      {title:'A. Nhận biết từ vựng',hint:'5 câu đầu: chọn nghĩa. 5 câu sau: chọn từ điền vào chỗ trống.',items:[
        {kind:'choice',q:'<b>cousin</b> nghĩa là gì?',o:['anh chị em họ','bố mẹ','bà'],a:0,x:'cousin = anh, chị, em họ.'},
        {kind:'choice',q:'<b>trainers</b> nghĩa là gì?',o:['áo khoác','giày thể thao','váy'],a:1,x:'trainers = giày thể thao.'},
        {kind:'choice',q:'<b>sociable</b> nghĩa là gì?',o:['sáng tạo','năng động','hòa đồng'],a:2,x:'sociable = hòa đồng, dễ làm quen bạn.'},
        {kind:'choice',q:'<b>stadium</b> nghĩa là gì?',o:['sân vận động','bệnh viện','thư viện'],a:0,x:'stadium = sân vận động.'},
        {kind:'choice',q:'<b>firefighter</b> nghĩa là gì?',o:['bồi bàn','cảnh sát','lính cứu hỏa'],a:2,x:'firefighter = lính cứu hỏa (fire = lửa).'},
        {kind:'choice',q:'My mum and dad are my ___.',o:['parents','cousins','uncles'],a:0,x:'Bố và mẹ gọi chung là parents.'},
        {kind:'choice',q:'It is cold, so I wear a warm ___ with a hood.',o:['skirt','hoodie','trainers'],a:1,x:'hoodie là áo có mũ, mặc cho ấm.'},
        {kind:'choice',q:'He paints and writes stories. He is very ___.',o:['creative','sociable','energetic'],a:0,x:'creative = sáng tạo (vẽ, viết truyện).'},
        {kind:'choice',q:'Mum buys rice and milk at the ___.',o:['stadium','hospital','supermarket'],a:2,x:'supermarket = siêu thị.'},
        {kind:'choice',q:'My uncle is sick, so he is in the ___.',o:['library','hospital','theatre'],a:1,x:'Người bệnh nằm ở hospital.'}
      ]},
      {title:'B. Phát âm',hint:'4 câu về trọng âm (âm nhấn viết hoa) và 3 câu nghe rồi chọn từ.',items:[
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>teenager</b>?',o:['TEEN-a-ger','teen-A-ger'],a:0,x:'teenager nhấn âm đầu: TEEN-a-ger.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>creative</b>?',o:['CREE-a-tive','cre-A-tive'],a:1,x:'creative nhấn âm thứ hai: cre-A-tive.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>hospital</b>?',o:['HOS-pi-tal','hos-PI-tal'],a:0,x:'hospital nhấn âm đầu: HOS-pi-tal.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>arrive</b>?',o:['AR-rive','ar-RIVE'],a:1,x:'arrive nhấn âm sau: ar-RIVE.'},
        {kind:'choice',say:'cousin',q:'Nghe và chọn từ em nghe được:',o:['cousin','cushion','cozy'],a:0,x:'cousin đọc là KUZ-n, chữ “ou” đọc là /ʌ/.'},
        {kind:'choice',say:'library',q:'Nghe và chọn từ em nghe được:',o:['liberty','lively','library'],a:2,x:'library đọc là LY-bruh-ry.'},
        {kind:'choice',say:'trainers',q:'Nghe và chọn từ em nghe được:',o:['trainers','drivers','tractors'],a:0,x:'trainers đọc là TRAY-nerz.'}
      ]}
     ]},
    {id:'p2',tab:'② Ngữ pháp',title:'Phần 2 · Ngữ pháp',intro:'be, have got, present simple, there is / there are, giới từ chỉ nơi chốn và present continuous.',
     sections:[
      {title:'A. Chọn đáp án đúng',items:[
        {kind:'choice',q:'My brother ___ fifteen years old.',o:['is','are'],a:0,x:'“My brother” là 1 người nên dùng <b>is</b>.'},
        {kind:'choice',q:'She ___ got a new smartphone.',o:['have','has'],a:1,x:'She → <b>has got</b>.'},
        {kind:'choice',q:'___ these your trainers? — Yes, they are.',o:['Is','Are'],a:1,x:'“these” là nhiều nên dùng <b>Are</b>.'},
        {kind:'choice',q:'Tom ___ football on Saturdays.',o:['play','plays'],a:1,x:'Tom là 1 người, present simple thêm <b>-s</b>: plays.'},
        {kind:'choice',q:'I ___ watch TV in the morning.',o:['never','nevers'],a:0,x:'Trạng từ never đứng trước động từ, không thêm s.'},
        {kind:'choice',q:'There ___ two parks in my town.',o:['is','are'],a:1,x:'“two parks” là nhiều nên dùng <b>are</b>.'},
        {kind:'choice',q:'The library is ___ the bakery and the chemist.',o:['between','under','opposite'],a:0,x:'Đứng ở giữa hai nơi: <b>between</b>.'},
        {kind:'choice',q:'The school is ___ the park, on the other side of the road.',o:['next to','opposite','behind'],a:1,x:'Bên kia đường: <b>opposite</b>.'},
        {kind:'choice',q:"I can't talk now. We ___ an exam.",o:['have','are having'],a:1,x:'“now” = đang xảy ra, dùng <b>are having</b>.'},
        {kind:'choice',q:'My dad usually ___ to work by bus.',o:['goes','is going'],a:0,x:'“usually” = thói quen, dùng <b>goes</b>.'}
      ]},
      {title:'B. Tự gõ đáp án',hint:'Gõ đáp án vào ô trống.',items:[
        {kind:'fill',q:'Gõ <b>am / is / are</b>: I ___ a student.',a:['am'],x:'Chủ ngữ “I” đi với <b>am</b>.'},
        {kind:'fill',q:'Gõ <b>has</b> hoặc <b>have</b>: My sister ___ got a cat.',a:['has'],x:'My sister = she → <b>has got</b>.'},
        {kind:'fill',q:'Gõ dạng đúng: He ___ (like) pizza.',a:['likes'],x:'He + động từ thêm <b>-s</b>: likes.'},
        {kind:'fill',q:'Gõ <b>Is</b> hoặc <b>Are</b>: ___ there a cinema near your house?',a:['is'],x:'“a cinema” là 1 cái nên dùng <b>Is there</b>.'},
        {kind:'fill',q:'Thêm -ing: <b>sit</b> → ?',a:['sitting'],x:'sit gấp đôi chữ t rồi thêm -ing: <b>sitting</b>.'},
        {kind:'fill',q:'Gõ dạng phủ định: They ___ (not play) football at the moment.',a:["aren't playing","are not playing"],x:'They + <b>aren\'t playing</b>.'}
      ]}
     ]},
    {id:'p3',tab:'③ Viết lại',title:'Phần 3 · Viết lại, từ dễ đến khó',intro:'Em đi từ <b>từ</b> → <b>cụm từ</b> → <b>câu</b>. Câu đúng có thể có nhiều cách viết; em viết cách em biết.',
     sections:[
      {title:'Level 1 · Viết từ',hint:'Xếp chữ cái hoặc gõ từ tiếng Anh.',items:[
        {kind:'fill',q:'Sắp xếp chữ cái thành từ (anh chị em họ): <b>u s i n c o</b>',a:['cousin'],x:'Từ đúng là <b>cousin</b>.'},
        {kind:'fill',q:'Sắp xếp chữ cái thành từ (nơi mượn sách): <b>r y a b i l r</b>',a:['library'],x:'Từ đúng là <b>library</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>giày thể thao</b>',a:['trainers','sneakers'],x:'giày thể thao = <b>trainers</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>hòa đồng</b>',a:['sociable'],x:'hòa đồng = <b>sociable</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>siêu thị</b>',a:['supermarket'],x:'siêu thị = <b>supermarket</b>.'}
      ]},
      {title:'Level 2 · Viết cụm từ',hint:'Xếp từ thành cụm, hoặc gõ cụm từ.',items:[
        {kind:'order',q:'Xếp thành cụm từ (bên cạnh tiệm bánh):',w:['next','to','the','bakery'],a:'next to the bakery',x:'next to + danh từ = bên cạnh.'},
        {kind:'order',q:'Xếp thành cụm từ (mặc áo hoodie mới):',w:['wearing','a','new','hoodie'],a:'wearing a new hoodie',x:'wear + a + tính từ + danh từ.'},
        {kind:'order',q:'Xếp thành cụm từ (thường đi học bằng xe đạp):',w:['usually','ride','my','bike'],a:'usually ride my bike',x:'usually đứng trước động từ.'},
        {kind:'fill',q:'Gõ cụm từ tiếng Anh: <b>đối diện nhà hát</b> (opposite …)',a:['opposite the theatre','opposite the theater'],x:'opposite + the theatre.'},
        {kind:'fill',q:'Gõ cụm từ tiếng Anh: <b>hai người anh em họ</b> (two …)',a:['two cousins'],x:'Nhiều hơn 1 thì thêm s: <b>two cousins</b>.'}
      ]},
      {title:'Level 3 · Viết câu',hint:'Xếp từ thành câu hoặc viết lại câu theo yêu cầu.',items:[
        {kind:'order',q:'Xếp thành câu đúng:',w:['She','has','got','two','brothers'],a:'She has got two brothers',x:'She + <b>has got</b> + số lượng + danh từ.'},
        {kind:'order',q:'Xếp thành câu hỏi đúng:',w:['Is','there','a','library','near','your','house'],a:'Is there a library near your house',x:'Câu hỏi: Is there + a + danh từ …?'},
        {kind:'fill',q:'Viết lại thành câu <b>phủ định</b>: <i>There is a cinema in my village.</i>',a:["There isn't a cinema in my village","There is not a cinema in my village","There isn't any cinema in my village"],x:'Phủ định: There <b>isn\'t</b> a cinema …'},
        {kind:'fill',q:'Viết lại thành câu <b>phủ định</b>: <i>I have got a brother.</i>',a:["I haven't got a brother","I have not got a brother","I haven't got any brothers","I have not got any brothers"],x:'Phủ định: I <b>haven\'t got</b> a brother.'},
        {kind:'fill',q:'Dùng gợi ý viết thành câu hoàn chỉnh: <i>my mum / cook / dinner / now</i>',a:['My mum is cooking dinner now','My mum is cooking dinner','My mum is cooking the dinner now','My mum is cooking dinner right now'],x:'My mum <b>is cooking</b> dinner now.'}
      ]}
     ]},
    {id:'p4',type:'speaking',tab:'④ Nói',title:'Phần 4 · Nói (Speaking)',intro:'Mỗi câu: <b>viết</b> câu trả lời bằng tiếng Anh, rồi <b>ghi âm</b> em đọc câu đó. Nghe lại; bản ghi sẽ tự gửi cho thầy/cô khi em nộp bài.',
     partA:{title:'Phần A · Trả lời 3 câu hỏi',hint:'Trả lời bằng câu đầy đủ.',items:[
        {q:'Who is in your family?',vi:'Gia đình em có những ai?',starter:'There are … people in my family. I have got …',check:[{label:'Có “have got” hoặc “my … is”',re:'(have got|has got|my \\w+ is|there are)'},{label:'Câu đủ ý (ít nhất 6 từ)',min:6}],model:'There are four people in my family. I have got a brother.'},
        {q:'What do you usually do after school?',vi:'Em thường làm gì sau giờ học?',starter:'After school I usually …',check:[{label:'Có trạng từ tần suất (usually, often, always…)',re:'\\b(usually|often|always|sometimes|never|every day)\\b'},{label:'Câu đủ ý (ít nhất 5 từ)',min:5}],model:'After school I usually play badminton with my friends.'},
        {q:'Is there a park near your house?',vi:'Gần nhà em có công viên không?',starter:"Yes, there is. It's … / No, there isn't, but …",check:[{label:'Có there is / there isn\'t',re:"there (is|isn't|'s|are|aren't)"},{label:'Câu đủ ý (ít nhất 5 từ)',min:5}],model:"Yes, there is. It's next to my school."}
     ]},
     partB:{title:'Phần B · Trả lời, rồi dịch câu trả lời sang tiếng Việt',hint:'Viết câu trả lời tiếng Anh, dịch sang tiếng Việt, rồi ghi âm câu tiếng Anh.',translate:true,items:[
        {q:'What is your best friend like?',vi:'Bạn thân của em là người thế nào?',starter:'My best friend is … and …',check:[{label:'Có tính từ tả người (sociable, creative, funny…)',re:'\\b(sociable|creative|energetic|funny|kind|friendly|clever|shy|quiet)\\b'},{label:'Câu đủ ý (ít nhất 5 từ)',min:5}],model:'My best friend is sociable and creative.'},
        {q:'What are you doing now?',vi:'Bây giờ em đang làm gì?',starter:'I am …ing …',check:[{label:'Có am / is / are + V-ing',re:"\\b(am|'m|is|are) \\w+ing\\b"}],model:'I am answering a speaking question.'},
        {q:'Where is your school? Use next to, opposite or near.',vi:'Trường em ở đâu? Dùng next to, opposite hoặc near.',starter:'My school is next to / opposite / near …',check:[{label:'Có giới từ chỉ vị trí',re:'\\b(next to|opposite|near|between|behind|in front of)\\b'}],model:'My school is opposite a small park.'}
     ]}},
    {id:'p5',type:'letter',tab:'⑤ Viết thư',title:'Phần 5 · Viết thư (Email)',intro:'Viết một lá thư ngắn cho bạn mới. Em có khung 4 phần và các mẫu câu để bấm vào dùng.',
     letter:{task:'Write an email to your new friend Alex. Tell Alex about yourself, your family and your town.',
       vi:'Viết email cho bạn mới tên Alex: giới thiệu bản thân, gia đình và khu phố của em.',
       points:[
         {label:'Giới thiệu em (I am… / My name is…)',re:"(my name is|i am|i'm)",tip:"I'm Mai and I'm 12."},
         {label:'Nói về gia đình (have got, my … is)',re:'(have got|has got|my (mum|dad|brother|sister|grandma|family|parents))',tip:'I have got a brother. My mum is a teacher.'},
         {label:'Nói em thường làm gì (usually, often)',re:'\\b(usually|often|always|sometimes|every)\\b',tip:'I usually play badminton after school.'},
         {label:'Nói về khu phố (There is / There are)',re:'there (is|are|\'s)',tip:'There is a big park near my house.'}],
       need:['because'],min:40,max:70,
       helperTitles:{greet:'1. Lời chào',open:'2. Câu mở đầu',body:'3. Nội dung chính',close:'4. Lời kết và tên'},
       helpers:{
         greet:['Hi Alex,','Dear Alex,'],
         open:['Thanks for your email.','How are you?',"I'm happy to be your friend."],
         body:["I'm ___ and I'm ___ years old.",'I have got ___.','My ___ is ___.','I usually ___ after school.','There is a ___ near my house.',"It is next to / opposite ___.",'I like it because ___.'],
         close:['Write back soon,','Bye for now,','[Your name]']},
       model:"Hi Alex,\nThanks for your email. I'm Mai and I'm 12. I have got one brother, and my mum is a teacher. I usually play badminton after school because it is fun. There is a big park near my house, and it is opposite my school.\nWrite back soon,\nMai"}}
  ]
};
