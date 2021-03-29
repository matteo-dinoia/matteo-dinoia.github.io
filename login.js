function onClickLogin() {
	var nome = document.querySelector("#nameInput").value;
	var password = document.querySelector("#passwordInput").value;
	console.log(nome + " " + password);

	var mysql = require("mysql");

	var con = mysql.createConnection({
		host: "localhost",
		user: "yourusername",
		password: "yourpassword",
	});

	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
	});
}
