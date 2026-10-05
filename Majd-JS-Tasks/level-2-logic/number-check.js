$('#go').onclick=function(){var raw=$('#n').value,n=Number(raw);if(raw===''||!Number.isInteger(n))return show('#out','Enter a whole number.',false);
var sign=n>0?'positive':n<0?'negative':'zero',par=n%2===0?'even':'odd',prime=n>1;for(var i=2;i*i<=n&&prime;i++){if(n%i===0)prime=false;}
show('#out',n+' is '+sign+', '+par+(prime?' and prime':'')+'.');};