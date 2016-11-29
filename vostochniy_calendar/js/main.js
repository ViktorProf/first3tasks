"use strict"

var startNumYear = 1905;

outer: for (var i = 0; ; i++){
	
	var numYear = prompt("Введите год", "");
	if(prompt == null) {break outer};	
		
		var remainderDevision = (+numYear - startNumYear)%12;
		
		switch (remainderDevision){
			 case 0 : alert("Змея");
			 break;
			 case 1 : alert("Лошадь");
			 break;
			 case 2 : alert("Коза");
			 break;
			 case 3 : alert("Обезьяна");
			 break;
			 case 4 : alert("Петух");
			 break;
			 case 5 : alert("Собака");
			 break;
			 case 6 : alert("Кабан (Свинья)");
			 break;
			  case 7 : alert("Крыса (Мышь)");
			 break;
			  case 8 : alert("Бык (Корова)");
			 break;
			  case 9 : alert("Тигр");
			 break;
			  case 10 : alert("Кот (Заяц, Кролик)");
			 break;
			  case 11 : alert("Дракон");
			 break;
			 default : alert("Введены неверные данные");
			 break outer;
		 }
		 
		 
	}