var user = [

	{
		username: "smontoro",
		password: "glynda1"
	},
	{
		username: "pmontoro",
		password: "sampson1"
	},
	{
		username: "fmontoro",
		password: "franky1"
	},
	{
		username: "mmontoro",
		password: "sunny1"
	}

]

//This  creates the login elements & allows you to fire the checkInput() when the button is clicked to see if the person is a user or needs to register. 
function login() {
	var main = document.getElementById("main")
	var h1Login = document.createElement("h1")
	var h1LoginText = document.createTextNode("Log in for a fun surprise!")
	var formLogin = document.createElement("form")
	var inputUserLogin = document.createElement("input")
		inputUserLogin.setAttribute("id", "username")
		inputUserLogin.setAttribute("placeholder", "username")
	var inputPassLogin = document.createElement("input")
		inputPassLogin.setAttribute("id", "password")
		inputPassLogin.setAttribute("placeholder", "password")
	var buttonDivLog = document.createElement("div")
	var buttonLogin = document.createElement("button")
	var buttonLoginText = document.createTextNode("Log In")
		buttonLogin.className = "btn button-orange"
		buttonLogin.setAttribute("type", "button")
		buttonLogin.setAttribute("onclick", "checkInput()")

	h1Login.appendChild(h1LoginText)
	main.appendChild(h1Login)
	main.appendChild(formLogin)
	formLogin.appendChild(inputUserLogin)
	formLogin.appendChild(inputPassLogin)
	formLogin.appendChild(buttonDivLog)
	buttonLogin.appendChild(buttonLoginText)
	buttonDivLog.appendChild(buttonLogin)

};

//This checks the username & password & matches them against the objects by running them through a for loop. If they match an object, it will show the picture of a cat. If they don't, the for loop will end and it will run through the rest of the function, which replaces the login form with a register form. 
function checkInput() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

		for (var i = 0; i < user.length; i++) {	

			if (username == user[i].username && password == user[i].password) {
				alert("Hi, " + username + "! You are now logged in.")
				document.getElementById('main').innerHTML = '';
				var main = document.getElementById("main")
				var surprise = document.createElement("img")
				surprise.setAttribute("id", "surpriseImg")
				main.appendChild(surprise)
				document.getElementById("surpriseImg").src="cat.jpg"

				return
			}
		}

// else { -- This was giving it something else to do if it didn't match up the very first time it ran though the loop. 

		 alert("You shall not pass! Please create a User Name and Password")
			
				document.getElementById('main').innerHTML = '';
				var main = document.getElementById("main")
				var h1Reg = document.createElement("h1")
				var h1RegText = document.createTextNode("Please Register")
				var regForm = document.createElement("form")
				var regUserInput = document.createElement("input")
					regUserInput.setAttribute("id", "regUserInput")
					regUserInput.setAttribute("placeholder", "username")
				var regPassInput = document.createElement("input")
					regPassInput.setAttribute("id", "regPassInput")
					regPassInput.setAttribute("placeholder", "password")
				var buttonDivReg = document.createElement("div")
				var buttonReg = document.createElement("button")
				var buttonRegText = document.createTextNode("Register")
					buttonReg.className = "btn button-orange"
					buttonReg.setAttribute("type", "button")
					buttonReg.setAttribute("onclick", "register()")

				h1Reg.appendChild(h1RegText)
				main.appendChild(h1Reg)
				main.appendChild(regForm)
				regForm.appendChild(regUserInput)
				regForm.appendChild(regPassInput)
				regForm.appendChild(buttonDivReg)
				buttonReg.appendChild(buttonRegText)
				buttonDivReg.appendChild(buttonReg)		
}; //end checkInput()

//This checks the registered username to make sure it isn't taken and makes sure the password is at least 8 characters long. If they are not, an alert pops up. If meet the criteria, they are pushed into the user array and the login() is called again. 
function register() {
	var usernameReg = document.getElementById("regUserInput").value
	var passwordReg = document.getElementById("regPassInput").value
	var newUser = {
		username: usernameReg,
		password: passwordReg
	}

	for(i=0; i<user.length; i++) {
		if (usernameReg == user[i].username) {
			alert("This username is already taken. Please choose another one.")
			return
		} else if (passwordReg.length<8) {
			alert("Please choose a password that is at least 8 characters long.")
			return
		}
		
	}

	user.push(newUser)
	alert("You are now registered. Please log in.")
	document.getElementById('main').innerHTML = '';
	login()

};















