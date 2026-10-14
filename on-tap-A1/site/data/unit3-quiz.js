window.QUIZ = {
  lesson: 'CU A1 U3 Quiz',
  filePrefix: 'Quiz',
  title: 'Quiz Unit 3 · My Home Town',
  sub: 'Close-up A1+ · 60 phút · 5 phần: Từ vựng & Phát âm, Ngữ pháp, Viết lại, Nói, Viết thư.',
  emoji: '⏱️', stampTitle: 'Quiz', stampSub: 'Unit 3',
  minutes: 60,
  parts: [
    {id:'p1',tab:'① Từ vựng',title:'Phần 1 · Từ vựng và Phát âm',intro:'Chọn đáp án đúng. Phần B có câu cần nghe: bấm 🔊 để nghe máy đọc.',
     sections:[
      {title:'A. Nhận biết từ vựng',hint:'5 câu đầu: chọn nghĩa. 5 câu sau: chọn từ điền vào chỗ trống.',items:[
        {kind:'choice',q:'<b>stadium</b> nghĩa là gì?',o:['sân vận động','bệnh viện','nhà hát'],a:0,x:'stadium = sân vận động, nơi xem bóng đá.'},
        {kind:'choice',q:'<b>library</b> nghĩa là gì?',o:['siêu thị','thư viện','nhà hàng'],a:1,x:'library = thư viện, nơi mượn sách.'},
        {kind:'choice',q:'<b>firefighter</b> nghĩa là gì?',o:['cảnh sát','bồi bàn','lính cứu hỏa'],a:2,x:'firefighter = lính cứu hỏa (fire = lửa).'},
        {kind:'choice',q:'<b>village</b> nghĩa là gì?',o:['thành phố','siêu thị','làng'],a:2,x:'village = làng. Thành phố là city.'},
        {kind:'choice',q:'<b>get off</b> nghĩa là gì?',o:['lên xe','xuống xe','lỡ xe'],a:1,x:'get on = lên xe, get off = xuống xe.'},
        {kind:'choice',q:'My uncle is sick, so he is in the ___.',o:['library','theatre','hospital'],a:2,x:'Người bệnh nằm ở hospital (bệnh viện).'},
        {kind:'choice',q:'The ___ brings our food to the table.',o:['librarian','waiter','actor'],a:1,x:'waiter làm ở nhà hàng, mang đồ ăn cho khách.'},
        {kind:'choice',q:'Run! We want to ___ the bus.',o:['arrive','get off','catch'],a:2,x:'catch the bus = bắt kịp xe buýt.'},
        {kind:'choice',q:'I ___ my bike to school every day.',o:['ride','drive','miss'],a:0,x:'Xe đạp thì nói ride a bike. Drive dùng cho ô tô.'},
        {kind:'choice',q:'Mum buys rice and milk at the ___.',o:['stadium','hospital','supermarket'],a:2,x:'supermarket = siêu thị, nơi mua gạo, sữa.'}
      ]},
      {title:'B. Phát âm',hint:'4 câu về trọng âm (âm tiết nhấn mạnh, viết hoa) và 3 câu nghe rồi chọn từ.',items:[
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>hospital</b>?',o:['HOS-pi-tal','hos-PI-tal'],a:0,x:'hospital nhấn âm đầu: HOS-pi-tal.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>restaurant</b>?',o:['RES-tront','res-TAU-rant'],a:0,x:'restaurant nhấn âm đầu: RES-tront.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>police</b>?',o:['PO-lice','po-LICE'],a:1,x:'police nhấn âm sau: po-LICE.'},
        {kind:'choice',q:'Âm nào được nhấn trong từ <b>arrive</b>?',o:['AR-rive','ar-RIVE'],a:1,x:'arrive nhấn âm sau: ar-RIVE.'},
        {kind:'choice',say:'theatre',q:'Nghe và chọn từ em nghe được:',o:['three','theatre','tray'],a:1,x:'theatre đọc là THEE-uh-ter, bắt đầu bằng âm /th/.'},
        {kind:'choice',say:'library',q:'Nghe và chọn từ em nghe được:',o:['liberty','lively','library'],a:2,x:'library đọc là LY-bruh-ry.'},
        {kind:'choice',say:'village',q:'Nghe và chọn từ em nghe được:',o:['village','vintage','visit'],a:0,x:'village đọc là VIL-ij.'}
      ]}
     ]},
    {id:'p2',tab:'② Ngữ pháp',title:'Phần 2 · Ngữ pháp',intro:'There is / There are, giới từ chỉ nơi chốn và present continuous.',
     sections:[
      {title:'A. Chọn đáp án đúng',items:[
        {kind:'choice',q:'There ___ a bank near here.',o:['is','are'],a:0,x:'“a bank” là 1 cái nên dùng <b>is</b>.'},
        {kind:'choice',q:'There ___ two parks in my town.',o:['is','are'],a:1,x:'“two parks” là nhiều nên dùng <b>are</b>.'},
        {kind:'choice',q:'___ there any shops in your village?',o:['Is','Are'],a:1,x:'“shops” là số nhiều nên dùng <b>Are there</b>.'},
        {kind:'choice',q:'There ___ any taxis outside.',o:["isn't","aren't"],a:1,x:'“taxis” là nhiều nên dùng <b>aren\'t</b>.'},
        {kind:'choice',q:'The library is ___ the bakery and the chemist.',o:['between','opposite','under'],a:0,x:'Đứng ở giữa hai nơi: <b>between</b>.'},
        {kind:'choice',q:'The school is ___ the park, on the other side of the road.',o:['next to','opposite','behind'],a:1,x:'Bên kia đường: <b>opposite</b>.'},
        {kind:'choice',q:'My cat is hiding ___ the bed.',o:['under','between','opposite'],a:0,x:'Ở dưới gầm giường: <b>under</b>.'},
        {kind:'choice',q:"I can't talk now. We ___ an exam.",o:['have','are having'],a:1,x:'“now” = đang xảy ra, dùng <b>are having</b>.'},
        {kind:'choice',q:'My dad usually ___ to work by bus.',o:['goes','is going'],a:0,x:'“usually” = thói quen, dùng <b>goes</b>.'},
        {kind:'choice',q:'Look! The firefighters ___ on the fire engine.',o:['get','are getting'],a:1,x:'“Look!” = đang xảy ra, dùng <b>are getting</b>.'}
      ]},
      {title:'B. Tự gõ đáp án',hint:'Gõ đáp án vào ô trống.',items:[
        {kind:'fill',q:'Gõ <b>is</b> hoặc <b>are</b>: There ___ three chemist\'s shops here.',a:['are'],x:'“three” là nhiều nên dùng <b>are</b>.'},
        {kind:'fill',q:'Gõ <b>Is</b> hoặc <b>Are</b>: ___ there a cinema near your house?',a:['is'],x:'“a cinema” là 1 cái nên dùng <b>Is there</b>.'},
        {kind:'fill',q:'Gõ <b>am / is / are</b>: What ___ you doing now?',a:['are'],x:'Chủ ngữ “you” đi với <b>are</b>.'},
        {kind:'fill',q:'Thêm -ing: <b>sit</b> → ?',a:['sitting'],x:'sit gấp đôi chữ t rồi thêm -ing: <b>sitting</b>.'},
        {kind:'fill',q:'Gõ dạng đúng: She ___ (make) lunch now.',a:['is making'],x:'am/is/are + V-ing. make bỏ e: <b>is making</b>.'},
        {kind:'fill',q:'Gõ dạng phủ định: They ___ (not play) football at the moment.',a:["aren't playing","are not playing"],x:'They + <b>aren\'t playing</b>.'}
      ]}
     ]},
    {id:'p3',tab:'③ Viết lại',title:'Phần 3 · Viết lại, từ dễ đến khó',intro:'Em đi từ <b>từ</b> → <b>cụm từ</b> → <b>câu</b>. Câu đúng có thể có nhiều cách viết; em viết cách em biết.',
     sections:[
      {title:'Level 1 · Viết từ',hint:'Xếp chữ cái hoặc gõ từ tiếng Anh.',items:[
        {kind:'fill',q:'Sắp xếp chữ cái thành từ (nơi mượn sách): <b>r y a b i l r</b>',a:['library'],x:'Từ đúng là <b>library</b>.'},
        {kind:'fill',q:'Sắp xếp chữ cái thành từ (nơi chữa bệnh): <b>p l o h t a s i</b>',a:['hospital'],x:'Từ đúng là <b>hospital</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>nhà hát</b>',a:['theatre','theater'],x:'nhà hát = <b>theatre</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>lính cứu hỏa</b>',a:['firefighter','fire fighter'],x:'lính cứu hỏa = <b>firefighter</b>.'},
        {kind:'fill',q:'Gõ từ tiếng Anh: <b>siêu thị</b>',a:['supermarket'],x:'siêu thị = <b>supermarket</b>.'}
      ]},
      {title:'Level 2 · Viết cụm từ',hint:'Xếp từ thành cụm, hoặc gõ cụm từ.',items:[
        {kind:'order',q:'Xếp thành cụm từ (bên cạnh tiệm bánh):',w:['next','to','the','bakery'],a:'next to the bakery',x:'next to + danh từ = bên cạnh.'},
        {kind:'order',q:'Xếp thành cụm từ (phía trước sân vận động):',w:['in','front','of','the','stadium'],a:'in front of the stadium',x:'in front of = phía trước.'},
        {kind:'order',q:'Xếp thành cụm từ (xuống xe buýt):',w:['get','off','the','bus'],a:'get off the bus',x:'get off the bus = xuống xe buýt.'},
        {kind:'fill',q:'Gõ cụm từ tiếng Anh: <b>đối diện nhà hát</b> (opposite …)',a:['opposite the theatre','opposite the theater'],x:'opposite + the theatre.'},
        {kind:'fill',q:'Gõ cụm từ tiếng Anh: <b>đến trường lúc 7 giờ</b> (arrive …)',a:['arrive at school at 7',"arrive at school at 7 o'clock",'arrive at school at 7 a.m.','arrive at school at seven'],x:'arrive at school at 7. (đến trường: arrive <b>at</b> school)'}
      ]},
      {title:'Level 3 · Viết câu',hint:'Xếp từ thành câu hoặc viết lại câu theo yêu cầu.',items:[
        {kind:'order',q:'Xếp thành câu đúng:',w:['There','are','two','supermarkets','in','my','city'],a:'There are two supermarkets in my city',x:'There are + số nhiều + nơi chốn.'},
        {kind:'order',q:'Xếp thành câu hỏi đúng:',w:['Is','there','a','library','near','your','house'],a:'Is there a library near your house',x:'Câu hỏi: Is there + a + danh từ …?'},
        {kind:'fill',q:'Viết lại thành câu <b>phủ định</b>: <i>There is a cinema in my village.</i>',a:["There isn't a cinema in my village","There is not a cinema in my village","There isn't any cinema in my village"],x:'Phủ định: There <b>isn\'t</b> a cinema …'},
        {kind:'fill',q:'Viết lại thành <b>câu hỏi</b>: <i>There are two parks in your town.</i>',a:['Are there two parks in your town','Are there any parks in your town'],x:'Câu hỏi: <b>Are there</b> …?'},
        {kind:'fill',q:'Dùng gợi ý viết thành câu hoàn chỉnh: <i>my mum / cook / dinner / now</i>',a:['My mum is cooking dinner now','My mum is cooking dinner','My mum is cooking the dinner now','My mum is cooking dinner right now'],x:'My mum <b>is cooking</b> dinner now.'}
      ]}
     ]},
    {id:'p4',type:'speaking',tab:'④ Nói',title:'Phần 4 · Nói (Speaking)',intro:'Mỗi câu: <b>viết</b> câu trả lời bằng tiếng Anh, rồi <b>ghi âm</b> em đọc câu đó. Nghe lại; bản ghi sẽ tự gửi cho thầy/cô khi em nộp bài.',
     partA:{title:'Phần A · Trả lời 3 câu hỏi',hint:'Trả lời bằng câu đầy đủ.',items:[
        {q:'Where do you live?',vi:'Em sống ở đâu?',starter:'I live in …',check:[{label:'Có “I live in …”',re:'\\bI live\\b|\\bI\\\'m from\\b'},{label:'Có tên nơi (village, town, city, street…)',re:'(village|town|city|street|district|house|ward)'}],model:'I live in a small town near Da Nang.'},
        {q:'Is there a supermarket near your house?',vi:'Gần nhà em có siêu thị không?',starter:"Yes, there is. It's … / No, there isn't, but …",check:[{label:"Có there is / there isn't",re:"there (is|isn't|'s|are|aren't)"},{label:'Câu trả lời đủ ý (ít nhất 5 từ)',min:5}],model:"Yes, there is. It's opposite my school."},
        {q:'What is your favourite place in your town? Why?',vi:'Nơi em thích nhất trong khu phố là đâu? Vì sao?',starter:'My favourite place is … because …',check:[{label:'Có “favourite place”',re:'favou?rite'},{label:'Có “because” (nói lý do)',re:'because'}],model:'My favourite place is the library because it is quiet.'}
     ]},
     partB:{title:'Phần B · Trả lời, rồi dịch câu trả lời sang tiếng Việt',hint:'Viết câu trả lời tiếng Anh, dịch sang tiếng Việt, rồi ghi âm câu tiếng Anh.',translate:true,items:[
        {q:'What are you doing now?',vi:'Bây giờ em đang làm gì?',starter:'I am …ing …',check:[{label:'Có am / is / are + V-ing',re:"\\b(am|'m|is|are) \\w+ing\\b"}],model:'I am answering a speaking question.'},
        {q:'How do you go to school?',vi:'Em đến trường bằng cách nào?',starter:'I ride / take / go by …',check:[{label:'Có cách đi (ride, take, go by, walk)',re:'(ride|take|go by|walk|get on|by bus|by bike)'},{label:'Câu đủ ý (ít nhất 4 từ)',min:4}],model:'I ride my bike to school.'},
        {q:'Where is your school? Use next to, opposite or near.',vi:'Trường em ở đâu? Dùng next to, opposite hoặc near.',starter:'My school is next to / opposite / near …',check:[{label:'Có giới từ chỉ vị trí',re:'\\b(next to|opposite|near|between|behind|in front of)\\b'}],model:'My school is opposite a small park.'}
     ]}},
    {id:'p5',type:'letter',tab:'⑤ Viết thư',title:'Phần 5 · Viết thư (Email)',intro:'Viết một lá thư ngắn cho bạn. Em có khung 4 phần và các mẫu câu để bấm vào dùng.',
     letter:{task:'Write an email to your friend Sam. Invite Sam to go to a place in your town (for example the stadium, the theatre or the library).',
       vi:'Viết email mời bạn Sam đi một nơi trong khu phố của em (ví dụ sân vận động, nhà hát hoặc thư viện).',
       points:[
         {label:'Mời bạn đi (Do you want to go…?)',re:'(want to go|would you like|let\'s|invite|come with)',tip:'Do you want to go to the stadium with me?'},
         {label:'Nói nơi đó ở đâu (near, opposite, next to…)',re:'\\b(near|opposite|next to|between|behind|in front of)\\b',tip:'It is next to my school.'},
         {label:'Nói gặp nhau lúc nào, ở đâu (meet, giờ, ngày)',re:'(meet|\\d|o\'clock|morning|afternoon|saturday|sunday)',tip:"Let's meet at the bus stop at 2 p.m. on Saturday."},
         {label:'Nói đi bằng gì (bus, bike, walk)',re:'(bus|bike|walk|ride|get on|by )',tip:'We can ride our bikes there.'}],
       need:['because'],min:40,max:70,
       helperTitles:{greet:'1. Lời chào',open:'2. Câu mở đầu',body:'3. Nội dung chính',close:'4. Lời kết và tên'},
       helpers:{
         greet:['Hi Sam,','Dear Sam,'],
         open:['Thanks for your email.','How are you?','I hope you are well.'],
         body:['Do you want to go to the ___ with me?',"It is next to / opposite / near ___.","Let's meet at ___ at ___ on ___.",'We can ride our bikes there.','We can get on the bus at ___.','I like it because ___.'],
         close:['Write back soon,','See you on Saturday!','Bye for now,','[Your name]']},
       model:"Hi Sam,\nThanks for your email. Do you want to go to the stadium with me on Saturday? It is next to my school, and there is a big football match at 4 p.m. Let's meet at the bus stop at 2 p.m. We can get on the bus number 12. I like football because it is exciting.\nSee you on Saturday!\nMai"}}
  ]
};
