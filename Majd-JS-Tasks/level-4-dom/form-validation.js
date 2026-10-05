$('#f').onsubmit=function(e){e.preventDefault();var n=$('#name').value.trim(),m=$('#email').value.trim(),p=$('#pw').value,bad=false;
$('#e1').textContent=n.length<2?(bad=true,'Name must be at least 2 characters.'):'';
$('#e2').textContent=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)?(bad=true,'Enter a valid email.'):'';
$('#e3').textContent=p.length<6?(bad=true,'Password must be at least 6 characters.'):'';
if(bad)show('#out','Please fix the errors above.',false);else show('#out','Welcome, '+n+'! Form is valid ✅');};