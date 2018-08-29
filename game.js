'use strict';

function Game() {

};

Game.prototype.start = function() {
  this.gameMain = buildDom(`
  <main>
    <h1>This is the Game</h1>
  </main>
`);
document.body.appendChild(this.gameMain);
};

Game.prototype.destroy = function() {
  this.gameMain.remove();
};


