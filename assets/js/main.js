/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

(function () {
	//===== Prealoder

	window.onload = function () {
		window.setTimeout(fadeout, 500);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}


	/*=====================================
	Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		// show or hide the back-top-top button
		var backToTo = document.querySelector(".scroll-top");
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};

	//===== mobile-menu-btn
	let navbarToggler = document.querySelector(".mobile-menu-btn");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	});

})();


document.addEventListener('DOMContentLoaded', () => {
	"use strict";
	/**
* Sticky header on scroll
*/
const selectHeader = document.querySelector('.header-middle');
const selectHeader2 = document.querySelector('.mega-category-menu');
const selectHeader3 = document.querySelector('.navbar-nav');
const selectHeader4 = document.querySelector('.scrolled-header');
if (selectHeader) {
	document.addEventListener('scroll', () => {
		window.scrollY > 10 ? selectHeader.classList.add('ming') : selectHeader.classList.remove('ming');
		window.scrollY > 10 ? selectHeader2.classList.add('ming') : selectHeader2.classList.remove('ming');
		window.scrollY > 10 ? selectHeader3.classList.add('ming') : selectHeader3.classList.remove('ming');
		window.scrollY > 0 ? selectHeader4.classList.add('ming') : selectHeader4.classList.remove('ming');
	});
}
});

$(document).ready(function () {
	$(".showdetail_btn").click(function () {

		if ($('.option_select_form').hasClass('active') == false) {
			$(".option_select_form").addClass("active");
		} else {
			$(".option_select_form").removeClass("active");
		}
	});

}