// JavaScript Document
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura){
			$('.menu').addClass('menu-f');
		} else {
			$('.menu').removeClass('menu-f');
		}
	});
});