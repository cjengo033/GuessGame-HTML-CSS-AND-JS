function gameFunction(){
	var a = parseInt(document.getElementById("value").value);
	console.log(a)
	var secretNumber = 5;
	if (a === 5){
		return document.getElementById("resultGame").innerHTML = "You won! :)";
	}else if (a >= 11){
		return document.getElementById("resultGame").innerHTML = "1-10 only!"
	}
	else{
		return document.getElementById("resultGame").innerHTML = "You lost! :("
	}

}

