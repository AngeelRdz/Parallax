$(window).load(function(){
	setBodyClass = function(){

windowWidth = $(window).width();

if (windowWidth >= 1180) {
	$('body').removeClass('phone tablet pc').addClass('pc_large');
}

if ((windowWidth <= 1180) && (windowWidth > 980)) {
	$('body').removeClass('phone tablet pc_large').addClass('pc');
}

if ( (windowWidth <= 980) && (windowWidth >= 720) ){
	$('body').removeClass('phone pc pc_large').addClass('tablet');
}

if (windowWidth < 720){
	$('body').removeClass('tablet pc pc_large').addClass('phone');
}

}

setBodyClass();

});
$(window).resize(function(){
	setBodyClass();
});