
const qoutArray=[ ' كن أنت التغيير الذي تتمنى أن تراه في العالم',
' لا تخشى ارتكاب الأخطاء طريق النجاح دوما محفوف بالصعاب إذا أردت أن تغير من شيء فذاتك هي الأجدر بذلك',
' علينا أن نحب أنفسنا أولا بكل ايجابياتنا و عيوبنا، إن لم نحب أنفسنا فكيف لنا أن نحب الآخرين',
'  الصداقة تحفة تزداد قيمتها كلما مضى عليها الزمن',
'  الانسان بدون هدف كسفينة بدون دفّه كلاهما سوف ينتهي به الأمر على الصخور'
];

const bg = [ "url('images/bg3.jpg')"
, "url('images/bg5.jpg')"
, "url('images/bg6.jpg')"
, "url('images/bg8.jpg')"
];

let text = document.getElementById("qoute");
let b = document.getElementById("main")
setInterval(function(){ 
        text.innerText = qoutArray[Math.floor(Math.random()*qoutArray.length)];
        b.style.backgroundImage = bg[Math.floor(Math.random()*bg.length)];
}, 5000);