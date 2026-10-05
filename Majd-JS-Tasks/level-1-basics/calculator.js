$('#go').onclick=function(){var a=parseFloat($('#a').value),b=parseFloat($('#b').value),op=$('#op').value,r;if(isNaN(a)||isNaN(b))return show('#out','Enter two valid numbers.',false);
switch(op){case '+':r=a+b;break;case '-':r=a-b;break;case '*':r=a*b;break;case '/':if(b===0)return show('#out','Cannot divide by zero.',false);r=a/b;break;}
show('#out',a+' '+op+' '+b+' = '+r);};