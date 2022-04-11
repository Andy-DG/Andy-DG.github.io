const nav = document.querySelector(".nav");
let topOfNav = nav.offsetTop;

window.addEventListener("resize", function () {
	topOfNav = nav.offsetTop;
});

function fixNav() {
	if (window.scrollY >= 70) {
		document.body.classList.add("fixed-nav");
	} else {
		document.body.classList.remove("fixed-nav");
	}
}

window.addEventListener("scroll", fixNav);

let links = document.querySelectorAll(".nav-tab");
let menuCheckBox = document.getElementById("menu-btn");

for (var i = 0; i < links.length; ++i) {
	links[i].addEventListener("click", function(){
		menuCheckBox.checked = false;
	})
}

