var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky')
  var blinkyImage = $('<img src ="https://media.giphy.com/media/W80Y9y1XwiL84/giphy.gif">')
  $(this.$node).append(blinkyImage)

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
}


/*
MakeBlinkyDancer.prototype.lineup = function() {
	MakeDancer.prototype.setPosition(auto, 0)
}
*/