var students=[{name:'Sara',score:92},{name:'Omar',score:68},{name:'Lina',score:85},{name:'Yusuf',score:74},{name:'Maya',score:55}];
$('#go').onclick=function(){var m=parseFloat($('#min').value);if(isNaN(m))return show('#out','Enter a minimum score.',false);
var r=students.filter(function(s){return s.score>=m;}).sort(function(a,b){return b.score-a.score;});
if(!r.length)return show('#out','No students reached '+m+'.',false);show('#out',r.map(function(s,i){return (i+1)+'. '+s.name+' — '+s.score;}).join('\n')+'\n\nTop student: '+r[0].name);};