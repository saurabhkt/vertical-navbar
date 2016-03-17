var navbar = document.getElementById("navbar-main");
var body = document.getElementsByTagName("body")[0];
var navToggleBtn = navbar.getElementsByClassName("nav-toggle-btn")[0];
var navCloseBtn = navbar.getElementsByClassName("nav-close-btn")[0];

navToggleBtn.addEventListener("click", function(e) {
	body.classList.toggle("active-nav");
	e.preventDefault();
});

navCloseBtn.addEventListener("click", function(e) {
	body.classList.remove("active-nav");
	e.preventDefault();
});

var toggleNavbar = function () {
	if(window.innerWidth < 992) {
		body.classList.remove("active-nav");
	}
	else if(window.innerWidth >= 992) {
		body.classList.add("active-nav");
	}	
};

window.addEventListener("resize", toggleNavbar);