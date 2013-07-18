$(document).ready(function() {
  $('#submit').on('click', function(e){
    e.preventDefault();
    var submission = $('form input').val() + '/';

    $('#long a').each(function(index, value){
      array = []
      if (submission == value.href) {
        array.push(index)
        $(this).parents('#dbcmark').css('background-color', 'red');
      }
    });
    
    // If submission didn't match any url already on the page  
    if (array.length < 1) {
      $.post('/shorten', {long: submission}).done(function()
        { setTimeout(function() { location.reload();}, 1000);
        });
    }

  });
  
});
