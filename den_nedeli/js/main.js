"use strict"



outer: for (var i = 0; ; i++){
	
	var numDay = +prompt("Введите порядковый номер недели", "");
	
		 switch (numDay){
			 case 1 : alert("Понедельник");
			 break;
			 case 2 : alert("Вторник");
			 break;
			 case 3 : alert("Среда");
			 break;
			 case 4 : alert("Четверг");
			 break;
			 case 5 : alert("Пятница");
			 break;
			 case 6 : alert("Суббота");
			 break;
			 case 7: alert("Воскресенье");
			 break;
			 default: alert("Неправильно введенные данные");
			 break outer;
		 }
	}