import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

import '../components/js/bootstrap-select.js';

import '../components/js/jquery-ui-1.10.4.custom.min.js';

import '../components/js/counties.js';

import '../components/js/phonecode.js';

$(function(){
    $('#phone').phonecode({
        preferCo: 'ua'
    });
});

import 'slick-carousel';

var slickBanner = $('.slick-banner');
var slickSize = $('.slick-size');
var slickRecomend = $('.slick-recomend');
var slickCategoryRecomend = $('.category-recomend');
var slickViewed = $('.slick-viewed');
var slickCategoryViewed = $('.category-viewed');
var slickProductNav = $('.slick-productNav');
var slickProductFor = $('.slick-productFor');

slickBanner.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

slickSize.slick({
	infinite: true,
	slidesToShow: 3,
	centerMode: true,
	centerPadding: '40px',
	slidesToScroll: 1
});

slickRecomend.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}

	]
});

slickViewed.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}

	]
});

slickCategoryRecomend.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}

	]
});

slickCategoryViewed.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}

	]
});

slickProductNav.slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true,
	asNavFor: '.slick-productFor'

});

slickProductFor.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slick-productNav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				swipe: true,
				arrows: true
			}
		}
	]
});

$(function(){
	$('.input').mousedown(function(event){
	    event.stopPropagation();
	});

	$('.minus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});

	$('.plus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});
	
	$('.plus').on('click', function(){
		
		var _this = $(this);
		var input = _this.next();
		var value = input.val();
		input.val(+value+1);

	});
	$('.minus').on('click', function(){
		var _this = $(this);
		var input = _this.prev();
		var value = input.val()
		if(value>1) {
			input.val(+value-1);
		}
	});
});

import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

require('webpack-jquery-ui');

var sliderRecomend,
sliderViewed;

sliderRecomend = $( ".slideruiRecomend" ).slider({
    min : 0,
    max : 12,
    slide: function(event, ui) {
		var slick = slickRecomend.slick( "getSlick" );
		var goTo = ui.value * (slick.slideCount-1) / 12;
		slickRecomend.slick( "goTo", goTo );

		var slick2 = slickCategoryRecomend.slick( "getSlick" );
		var goTo2 = ui.value * (slick2.slideCount-1) / 12;
		slickCategoryRecomend.slick( "goTo", goTo2 );
    }
});

sliderViewed = $( ".slideruiViewed" ).slider({
    min : 0,
    max : 6,
    slide: function(event, ui) {
		var slick = slickViewed.slick( "getSlick" );
		var goTo = ui.value * (slick.slideCount-1) / 6;
		slickViewed.slick( "goTo", goTo );

		var slick2 = slickCategoryViewed.slick( "getSlick" );
		var goTo2 = ui.value * (slick2.slideCount-1) / 6;
		slickCategoryViewed.slick( "goTo", goTo2 );
    }
});

$(function() {
	var h = $('.header'),
	top = $(this);
	$(window).scroll(function() {
		if(top.scrollTop() > 0) {
			h.addClass('fixed');
		}
		else {
			h.removeClass('fixed');
		}
	});
});

$('#searchInput').click(function() {
	$(this).addClass('open');
})

$('.popular__star').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('added');
})

function ShowMenu() {
	$('#hamburger, #close').click(function() {
		$('#headerMenu').toggleClass('opened');
	});
}
ShowMenu();

function changeMobile() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 768px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		var list = '.header__main-right > ul > li';
		var listMob = '.header__main-mobile > ul > li';
		var search = '.header__search';
		var searchMob = '.header__search-mobile';
		if(screen.matches) {
			$('.header__main-left').prependTo('.header__main-mobile');
			$(list + ':first-child' + ',' + list + ':nth-child(2)').appendTo('.header__main-mobile > ul');
			$(search).appendTo(searchMob);
			$('.sub-menu__category').append($('.show-all'))
		}
		else {
			$('.header__main-left').prependTo('.header__main-top');
			$(listMob + ':first-child' + ',' + listMob + ':nth-child(2)').prependTo('.header__main-right > ul');
			$(search).appendTo('.header__bottom-content');
			$('.sub-menu__brand').append($('.show-all'))
		}
	};
};
changeMobile();

// -------DESIGNERS--------

$('.designers__top > ul > li').on('click', 'a', function(event) {
	event.preventDefault();
	var id = $(this).attr('href'),
	top = $(id).offset().top - 165;
	$('body, html').animate({scrollTop: top}, 500);
});

function chooseDesigners(elem) {
	var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for (var i = 0; i < abc.length; i++) {
		$("#word" + abc[i]).data('target', $('#' + abc[i]));
		$("#word" + abc[i]).click(function(){
		  $('.designers__names').removeClass('active')
		  $(this).data("target").addClass('active');
		})
	}
}chooseDesigners();

// --------CART---------
var total = 0;

$(document).ready(function(){
	$('.cart-window__box').find('.cart-window__price span').each(function () {
	    total += parseInt($(this).text());
	});
	$('#total').html('£ ' + total);

	$(".count").html('(' + $(".cart-window__img").length + ')');
});

$('.cart-window__del-box').click(function(){
	event.preventDefault();
	$(this).parent('.cart-window__box').hide(this).empty(this);
	$(".count").empty().html('(' + $(".cart-window__img").length + ')');
	$('#total').html('£ ' + total);
})

// ------FAVOR------
$('.del').click(function() {
	event.preventDefault();
	$(this).parent('.cart-pg__info').parent('.cart-pg__right').parent('.cart-pg__box-inner').parent('.cart-pg__box').empty(this);
});

$('.close').click(function() {
	event.preventDefault();
	$(this).parent('.cart-pg__left').parent('.cart-pg__box-inner').parent('.cart-pg__box').empty(this);
});

// -------YEAR NOW--------
function YearNow() {
	var date = new Date();
	var today = date.getFullYear();
	var year = document.getElementById('year');
	year.innerHTML = (' ' + today + ' ')
}YearNow();

// --------ADAPTIVE-----------
function changeTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('.blog__nav > ul > li > a').click(function(event) {
				event.preventDefault();
				var id = $('#tab-content'),
				top = $(id).offset().top - 165;
				$('body, html').animate({scrollTop: top}, 500);
			});
		}	
	}
}
changeTablet();

// -----PROMO SHOW------
$('#promoClick').click(function(event) {
	event.preventDefault();
	$(this).hide(0);
	$('#promoInput').addClass('open');
});


// $("html,body").animate({scrollTop: $(".anchor").offset().top}, 500);
// var x = document.getElementsByClassName('price');
// var sum = 0;
// for (var i = 0; i < x.length; i++) {
// 	sum += x[i].innerHTML;
// 	var y = sum
// }
// console.log(+y)
// document.getElementById('total').innerHTML = '£ ' + sum;