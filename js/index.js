function validate(){
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let title = document.getElementById("title").value;
	let message = document.getElementById("message").value;
	let errorMessage = document.getElementById("errorMessage");
	let text;

	errorMessage.style.padding ="10px";

	if(name.length < 4 ){
		text = "Please enter a valid name";
		errorMessage.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1 || email.length < 5){
		text = "Please enter a valid email";
		errorMessage.innerHTML = text;
		return false;
	}

	if(title.length < 1){
		text = "Please enter a valid title";
		errorMessage.innerHTML = text;
		return false;
	}

	if(message.length < 20){
		text = "Please enter more than 20 characters for message";
		errorMessage.innerHTML = text;
		return false;

	}
	alert("Form Submitted Successfully");
	return true
}