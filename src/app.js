function Game(){

}

Game.prototype.dice = Math.floor(Math.random() * 6) + 1;
Game.prototype.scores = [0,0];

