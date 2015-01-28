/**
 * Creates a neat little back to top button
 * that only shows if the user has scrolled
 * a certain amount.
 */

(function($){
	'use strict';

	$.extend({
		edBackToTop: function(options){

			var settings = $.extend({
				'fromTop': 50
			}, options);

			var $button = $('<a/>', {
				'class': 'ed-backToTop',
				'href': '#'
			}).appendTo($('body'));

			$button.on('click', function(e){
				e.preventDefault();
				$('html, body').animate({ scrollTop: '0px' });
			});

			$(window).scroll(function(){
				var distance = $(window).scrollTop();

				if(distance >= settings.fromTop && !$button.is(':visible')){
					$button.stop().fadeIn();
				}else if(distance < settings.fromTop && $button.is(':visible')){
					$button.stop().fadeOut();
				}
			});
		}
	});
})(jQuery);
