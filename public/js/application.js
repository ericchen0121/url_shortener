$(document).ready(function() {
  $('#submit').on('click', function(e){
    e.preventDefault();
    var submission = $('form input').val() + '/';

    $('#long a').each(function(index, value){
      array = []
      if (submission == value.href) {
        array.push(index)
        $(this).parents('#dbcmark').animate({backgroundColor: "rgba(120,0,0, .5)" }, 0.3);
        // $(this).parents('#dbcmark').toggle('shake', 200);
        $(this).parents('#dbcmark').toggle('explode');
        $(this).parents('#dbcmark').toggle('unexplode');
        $(this).parents('#dbcmark').animate({backgroundColor: "rgba(127,255,255, .5)" }, 0.5);
        // .css('background-color', 'red');
      }
    });
    
    // If submission didn't match any url already on the page  
    if (array.length < 1) {
      $.post('/shorten', {long: submission}).done(function()
        { setTimeout(function() { location.reload();}, 2000);
        });
    }

  });
  
});
