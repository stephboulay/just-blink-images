$(document).ready( function() {
  



  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
    	columnWidth:'.grid-sizer ',
    	gutter: 10
  	}
  });
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


$('.baby-btn').click(function () {
	$grid.isotope({ filter: '.baby' });	
});

$('.boudoir-btn').click(function () {
	$grid.isotope({ filter: '.boudoir' });	
});

$('.family-btn').click(function () {
	$grid.isotope({ filter: '.family' });	
});

$('.single-btn').click(function () {
	$grid.isotope({ filter: '.single' });	
});

$('.all-btn').click(function () {
	$grid.isotope({ filter: '*' });	
});
});