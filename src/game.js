'use strict';

function Game() {
  this.currentScore = 0;
  this.rolls = [];
};

Game.prototype = {

roll: function(pins) {
  this.rolls.push(pins);
},

getCurrentScore: function() {
    var rollIndex = 0;
    var game = this;
  
    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    };
  
    function isStrike() {
      return game.rolls[rollIndex] == 10;
    };
  
    function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    };
  
    function getStrikeScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    };
  
    function getNormalScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    };
  
    for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
        if (isStrike()) {
          this.currentScore += getStrikeScore();
          rollIndex++;
        } else if (isSpare()) {
          this.currentScore += getSpareScore();
          rollIndex += 2;
        } else {
        this.currentScore += getNormalScore();
        rollIndex += 2;
        }
    }
    return this.currentScore;
  }
}

