
function rand(min, max){
	return (max-min)*Math.random()+min; //Высчитываем рандомную задержку от 0 до 1с
}

function f(a){
  for (var i = 0 ; i < 10 ; i++){
    console.log(a*i);
  }
}

setInterval(f(2) , rand(0 , 1000)); // Выставляем интервал
