/*  George Ng
	INFO 343 C
	Challenge 2 Extra Credit File

	This is an extra js file that applies the blur effect to the main page's cofeee 
	background image.*/

"use strict";

// This function lets the window react to the user scrolling
window.onload = function() {
	window.addEventListener("scroll", setBlur);
};

/* This method applies CSS filters to the coffee background image on the 
main website. It works by reducing the brightness and increasing the blur
amount of the image depending on how many pixels the user has scrolled
down.*/
function setBlur() {   
	var elem = document.getElementById("header");               
	var bright = null;
	var blr = window.pageYOffset;

	// This if statement limits the brightness reduction to 50%
	if ((100 - window.pageYOffset/elem.clientHeight * 100) > 50) {
		bright = 100 - window.pageYOffset/elem.clientHeight * 100;
	} else {
		bright = 50
	}
	var filter = 'brightness(' + bright + '%) blur(' + (blr/55) + 'px)';
	elem.style.webkitFilter = filter;
	elem.style.filter = filter;
}