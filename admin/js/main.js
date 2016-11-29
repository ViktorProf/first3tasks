
    
var name = prompt("Кто пришел", "");

if (name == "Admin") {
	var pass = prompt("Введите пароль: ", "")
	if (pass == "Черный Властелин") {
		alert ("Добро пожаловать!")
	} else if (pass == null){
		alert ("Вход отменен") }
	else {alert("Пароль неверен!")}
} 

else if (name == null){
	alert ("Вход отменен!");}
	
	
else {alert ("Я Вас не знаю");} 





