/*-------------------popup init-------------------*/
function InitPopup(popup){
	popup = $(popup);
	var cls = popup.attr('data-popup');
	$('.custom-popup.'+cls).fadeIn('300');
	$('.custom-popup.'+cls).prev('.custom-overlay').fadeIn('300');										   																   
		
}
/*-------------------end popup init-------------------*/
/*----------------------------------ALIGN POPUPS-------------------------*/
function AlignPopup(){
	$('.custom-popup').each(function(){
		if($(this).outerWidth() > $(window).width() && $(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 40 + "px",
				'left': '0px'
			});
		}
		
		else if($(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 40 + "px",
				'left': ($(window).width()-$(this).outerWidth())/ 2 + 'px'
			});
		}
		
		else if($(this).outerWidth() > $(window).width()-80) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 40 + "px",
				'left': '40px'
			});
		}
		
		else {
			$(this).css('top',($(window).height()-$(this).outerHeight())/ 2 + 'px');
			$(this).css('left',($(window).width()-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'fixed');	
		}
	});
}
/*----------------------------------END ALIGN POPUPS-------------------------*/

/*ream more content*/
function showMoreContent() {
	$('.js_read_more').click(function(e){
		e.preventDefault();	
		/*var h = $('.js_content_block .inner').height();
		
		$('.js_read_more').css('display',"none");
		$('.js_content_block').animate({height:h},200);*/
		$(this).parent().find($('.read_more_content')).slideToggle();
		$(this).toggleClass('active');
	});
}
/*end ream more content*/

$( window ).resize(function() {
	AlignPopup();			
});	

$(document).ready(function(){
$( window ).resize();
showMoreContent();


/*-----------------------------POPUP-------------------------*/
    $('[data-popup]').on('click', function(e){
        e.preventDefault();
		AlignPopup();
		InitPopup($(this));
   });
    $('.custom-overlay, .custom-popup .close, .js_close_popup').on('click',function(e){
		e.preventDefault();	
		$('.custom-overlay').delay(200).fadeOut('300');																		  
		$('.custom-popup').fadeOut('300', function(){
										   
		});	
		
	

    });
/*-----------------------END POPUP----------------------------*/



$('.js_scroll').click(function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$('body').scrollTo(href, {duration:'slow'});						  
})	


$(".js_phone_mask").mask("+7 (999) 999-99-99");

$('.js_show_hide').click(function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	var parent = $(this).parent().parent().parent().parent();
	$('.comments_block', parent).slideToggle();
})



$('.input_validation').on('focus', function(){
    $(this).next('span').css('display', 'none');
  });

  $('.input_text').on('click', function(){
    $(this).css('display', 'none');
    $(this).prev('.input_validation').focus();
  });

  $('.input_row.required').on('click', function(){
    $(this).children('.form-error').css('display', 'none');
    $(this).children('.input_validation').focus();
  });
  
  


/*-------------------validation-------------------*/
	$.validate({
	  form : '.js_validation',
	  /*onError : function() {
            alert('Validation failed');
        },*/
		onSuccess : function() {
          
             // Will stop the submission of the form
        }
		/*,
        onValidate : function() {
            return {
                element : $('#some-input'),
                message : 'This input has an invalid value for some reason'
            }
        }*/
	});
/*-------------------validation-------------------*/	
});