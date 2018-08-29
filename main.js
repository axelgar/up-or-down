'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main () {
  var splashMain; 
  var game;
  var gameOverMain;


  //---- splash

  function buildSplash() {
    splashMain = buildDom(`
      <main>
        <h1>Up or Down</h1>
        <button>Start</button>
      </main>
    `);
    document.body.appendChild(splashMain);
    var button = splashMain.querySelector('button');
    button.addEventListener('click',startGame);
  };

  function destroySplash() {
    splashMain.remove();
  };


  //---- game

  function startGame() {
    destroySplash();
    destroyGameOver();
    
    game = new Game();
    game.start();
    game.onOver(function() {
      gameOver();
    });
  };

  function destroyGame() {
    game.destroy();
  };


  //---- game over

  function gameOver() {
    destroyGame();
    buildGameOver();
  };

  function buildGameOver() {
    var score = 99;
    gameOverMain = buildDom(`
      <main>
        <h1>Game Over</h1>
        <p>Your Score: `+ score +`</p>
        <button>Restart</button>
      </main>
    `);
    document.body.appendChild(gameOverMain);
    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);
  };

  function destroyGameOver() {
    if(gameOverMain) {
      gameOverMain.remove();
    };
  };


  //---- initialize

  buildSplash();
};


window.addEventListener('load', main);
