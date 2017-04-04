var BatmanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('batman')
  var batmanImage = $('<img src = "https://media.giphy.com/media/ITnn2IenMv7SE/giphy.gif">')
  $(this.$node).append(batmanImage)
}

BatmanDancer.prototype = Object.create(MakeDancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer


BatmanDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this)
  this.$node.toggle();
}
