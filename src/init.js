$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer)
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
      var topBlinky = 30;
      var topSuperHero = 30;
      var topBatman = 30;
      var dancersBlink = window.dancers.filter(function(x) {return x.$node.hasClass('blinky')});
      var dancersHero = window.dancers.filter(function(x) {return x.$node.hasClass('superHero')});
      var dancersBat = window.dancers.filter(function(x) {return x.$node.hasClass('batman')});
      for (var i = 0; i < dancersBlink.length; i++) {
        dancersBlink[i].lineup(topBlinky, 0);
        topBlinky +=100
      }
      for (var i = 0; i < dancersHero.length; i++) {
        dancersHero[i].lineup(topSuperHero, 500)
        topSuperHero += 150
      }
      for (var i = 0; i < dancersBat.length; i++) {
        dancersBat[i].lineup(topBatman, 1000)
        topBatman += 150
      }
  })
  $(document).on('mouseover', 'img', function(event) {
    $(this).toggleClass("newClass");
  })
  $(document).on('mouseleave', 'img', function(event) {
    $(this).toggleClass("newClass");
  })
});
