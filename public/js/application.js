$(document).ready(function() {
  $('#submit').on('click', function(e){
    e.preventDefault();
    var submission = $('form input').val() + '/';

    $('#long a').each(function(index, value){

      if (submission == value.href) {
        any_repeats = []
        any_repeats.push(index)

        // animation
        $(this).parents('#dbcmark').animate({
          backgroundColor: "rgba(120,0,0, .5)" }, "slow");
        $(this).parents('#dbcmark').toggle('explode');
        $(this).parents('#dbcmark').toggle('unexplode');
        // effect('shake', 'left',200,10);
        $(this).parents('#dbcmark').delay(500).animate({
          backgroundColor: "rgba(175, 238,238, .5)" }, "slow");
      };

      // CODE IS SLIGHTLY BROKEN..... Tried to move if out of if.
      if (any_repeats.length < 1){
        $.post('/shorten', {long: submission}).done(function()
          { 
            setTimeout(function() { location.reload();}, 100);  
          }
        );
      };
    });
  });
});


