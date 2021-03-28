var reader = new FileReader();

reader.onload = function (event) {
	var testo = event.target.result;
	document.getElementById("contenuto").innerHTML = testo;
};

new File(new ArrayList(), "Header.html");
async function loadFile(file) {
	let text = await new Response(file).text();
	document.getElementById("contenuto").innerHTML = text;
}
