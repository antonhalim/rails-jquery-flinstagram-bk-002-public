// Add your JavaScript here


$(function(){
  $('.bottom-content').on('click', '.like-btn', function(e){
    e.preventDefault();
    e.stopPropagation();
    
    // get the picture id, the method, the url
    // var pictureID = $(this).attr("picture_id");
    var url = $(this).parent().attr('href');
    var method = $(this).parent().data('method');

    $.ajax({
      method: method,
      url: url,
      dataType: "script"
    });

  })
})


