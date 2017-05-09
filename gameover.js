var gameOver = function(game){}
 
gameOver.prototype = {
    
  	create: function() {
        var finalScore = this.game.state.states["TheGame"].score;
  		this.game.add.sprite(0, 0, 'sky');
  		this.game.add.sprite(70, 50, 'gameover');
        this.game.add.text(170, 200, 'You scored: ' + this.finalScore, { fontSize: '40px', fill: '#000' });
		var playButton = this.game.add.button(315,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
    
	playTheGame: function() {
		this.game.state.start("TheGame");
	}
}