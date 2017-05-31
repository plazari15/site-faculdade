(function($){
  $(function(){
      var items = Array('Overwatch', 'lol');

      var item = items[Math.floor(Math.random()*items.length)];

      if(item == 'Overwatch'){
          $('#video').attr('src', 'assts/videos/Overwatch.mp4');
          $('#custom').attr('href', 'css/Overwatch.css');
          $('#game-logo').attr('src', 'assts/img/overwatch.png');
      }

      if(item == 'lol') {
          $('#video').attr('src', 'assts/videos/lol.mp4');
          $('#custom').attr('href', 'css/lol.css');
          $('#game-logo').attr('src', 'assts/img/lol.png');
      }


    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name spa ce


