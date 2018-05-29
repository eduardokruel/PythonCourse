window.onload = function () {
  var h = window.innerHeight - 50 + "px";
	document.getElementById("interpreter").height = h;
};

window.sr = ScrollReveal();
sr.reveal("p");
sr.reveal("h3");
sr.reveal(".example");
sr.reveal("ul");
