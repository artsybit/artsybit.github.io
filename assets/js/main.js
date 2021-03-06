---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
	$('a.menu-button').click(function (e) {
		if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
			return
		}
		currentWidth = $('.panel-cover').width()
		if (currentWidth < 960) {
			$('.panel-cover').addClass('panel-cover--collapsed')
			$('.content-wrapper').addClass('animated slideInRight')
		} else {
			$('.panel-cover').css('max-width', currentWidth)
			$('.panel-cover').animate({'max-width': '400px', 'width': '40%'}, 400, swing = 'swing', function () {})
		}
	})

	if (window.location.hash && window.location.hash == '#view') {
		$('.panel-cover').addClass('panel-cover--collapsed')
	}

	if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
		$('.panel-cover').addClass('panel-cover--collapsed')
	}

	$('.btn-mobile-menu').click(function () {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown')
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
	})

	$('.navigation-wrapper .menu-button').click(function () {
		$('.navigation-wrapper').toggleClass('visible')
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
	})
	
	
	// This piece of code is for detecting mobile browser and displaying the footer differently
	if (jQuery.browser.mobile) {
		document.getElementById('#desktop-footer').innerHTML = "";
	} else {
		document.getElementById('#mobile-footer').innerHTML = "";
	}
})
