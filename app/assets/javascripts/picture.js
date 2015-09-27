$(document).ready(function(){
	$( ".like-btn" ).click(function( event ) {
		var tag = this;
		var id = $(this).attr('picture_id');
		$.ajax({
			url: 'picture/' + id + '/like',
			method: 'POST',
			context: document.body
		}).done(function(data) {
			$(tag).children().toggleClass("red-heart", "grey-heart");
			$(tag).next().html(data.message);
		});
	});
})
