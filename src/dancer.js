// Creates and returns a new dancer object that can step
var MakeDancer = function (top, left, timeBetweenSteps) { 
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.left = left;
  this.top = top;
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};


////////////////////////////
MakeDancer.prototype.lineup = function(top, left) {
  MakeDancer.prototype.setPosition.call(this, top, left);
}