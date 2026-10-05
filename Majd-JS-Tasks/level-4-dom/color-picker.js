function set(c){$('#sw').style.background=c;$('#pick').value=c;show('#out','Current color: '+c);}
$('#pick').oninput=function(e){set(e.target.value);};
$('#go').onclick=function(){var c='#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');set(c);};set('#4f46e5');