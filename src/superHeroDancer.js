var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)

  this.$node.addClass('superHero')
  var superHeroImage = $('<img src = "https://media.giphy.com/media/DkatpDCxPfdxS/giphy.gif">')
  $(this.$node).append(superHeroImage)


}

SuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
}
