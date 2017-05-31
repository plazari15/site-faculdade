(function($){
  $(function(){
      var items = Array('Overwatch', 'lol');

      var item = items[Math.floor(Math.random()*items.length)];

      if(item == 'Overwatch'){
          $('#video').attr('src', 'assts/Overwatch.mp4');
          $('#custom').attr('href', 'css/Overwatch.css');
      }

      if(item == 'lol') {
          $('#video').attr('src', 'assts/lol.mp4');
          $('#custom').attr('href', 'css/lol.css');
      }


    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name spa ce


