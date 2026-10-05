var todos=[];try{todos=JSON.parse(localStorage.getItem('majd-todos'))||[];}catch(e){}var filter='all';
function save(){try{localStorage.setItem('majd-todos',JSON.stringify(todos));}catch(e){}}
function render(){var list=$('#list');list.innerHTML='';var v=todos.filter(function(t){return filter==='all'||(filter==='done'?t.done:!t.done);});
if(!v.length){var e=document.createElement('li');e.className='empty';e.textContent='Nothing here yet ✨';list.appendChild(e);}
v.forEach(function(t){var li=document.createElement('li');li.className='item'+(t.done?' done':'');
var cb=document.createElement('input');cb.type='checkbox';cb.checked=t.done;cb.onchange=function(){t.done=cb.checked;save();render();};
var sp=document.createElement('span');sp.textContent=t.text;
var d=document.createElement('button');d.className='icon-btn';d.textContent='✕';d.setAttribute('aria-label','Delete task');d.onclick=function(){todos=todos.filter(function(x){return x.id!==t.id;});save();render();};
li.appendChild(cb);li.appendChild(sp);li.appendChild(d);list.appendChild(li);});
var done=todos.filter(function(t){return t.done;}).length;$('#count').textContent=(todos.length-done)+' left · '+done+' done';
$('#bar').style.width=(todos.length?done/todos.length*100:0)+'%';
document.querySelectorAll('#tabs button').forEach(function(b){b.classList.toggle('active',b.dataset.f===filter);});}
$('#f').onsubmit=function(e){e.preventDefault();var x=$('#t').value.trim();if(!x)return;todos.push({id:Date.now(),text:x,done:false});$('#t').value='';save();render();};
$('#tabs').onclick=function(e){if(e.target.dataset.f){filter=e.target.dataset.f;render();}};
$('#clear').onclick=function(){todos=todos.filter(function(t){return !t.done;});save();render();};render();