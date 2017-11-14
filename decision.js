
function rand(min, max){
	return (max-min)*Math.random()+min; 
}

function f(a){
  for (var i = 0 ; i < 10 ; i++){
    console.log(a*i);
  }
  setTimeout(()=>{
    f(2);
  }, rand(1000 , 5000))
}
f(2);
