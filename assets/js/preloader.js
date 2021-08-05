setTimeout(function() {
      var loader = document.getElementById("preloader");
      loader.style.WebkitTransition = 'visibility .5s, opacity .5s';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }, 1250);
