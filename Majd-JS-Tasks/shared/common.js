function $(s,r){return (r||document).querySelector(s);}
function show(sel,msg,ok){if(ok===undefined)ok=true;var el=$(sel);el.textContent=msg;el.className='output '+(ok?'ok':'err');}
