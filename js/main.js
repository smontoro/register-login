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

		} else if (username != user[i].username && password != user[i].password){
			alert("You shall not pass! Please create a User Name and Password")
			document.getElementById('main').innerHTML = '';
			var main = document.getElementById("main")
			var h1Reg = document.createElement("h1")
			h1Reg.className = "my-5"
			var h1RegText = document.createTextNode("Please Register")
			var regForm = document.createElement("form")
			var regUserInput = document.createElement("input")
			regUserInput.setAttribute("id", "regUserInput")
			var regPassInput = document.createElement("input")
			regPassInput.setAttribute("id", "regPassInput")
			var buttonReg = document.createElement("button")
			var buttonRegText = document.createTextNode("Register")
			buttonReg.className = "btn button-orange mb-2 ml-3"
			buttonReg.setAttribute("type", "button")
			buttonReg.setAttribute("onclick", "register()")
			h1Reg.appendChild(h1RegText)
			main.appendChild(h1Reg)
			main.appendChild(regForm)
			regForm.appendChild(regUserInput)
			regForm.appendChild(regPassInput)
			buttonReg.appendChild(buttonRegText)
			regForm.appendChild(buttonReg)
			return
		}
	}
};

function register() {
	var usernameReg = document.getElementById("regUserInput").value
	var passwordReg = document.getElementById("regPassInput").value
	var newUser = {
		username: usernameReg,
		password: passwordReg
	}

	for(i=0; i<user.length; i++) {
		if (usernameReg == user[i].username) {
			console.log("alreayd used")
			return
		} else if (passwordReg.length<8) {
			console.log("too short")
			return
		}
		
	}

	user.push(newUser)
	console.log(user)

  	

	
};















