'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}


function main () {
  var splashMain; 
  var gameMain;
  var gameOverMain;

  //---- splash

  function buildSplash() {
    splashMain = buildDom(`
      <main>
        <h1>Up or Down</h1>
        <button>Start</button>
      </main>
    `)
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
    
    // TEMPORARY

    gameMain = buildDom(`
      <main>
        <h1>This is the Game</h1>
      </main>
    `);
    document.body.appendChild(gameMain);
    window.setTimeout(function() {
      gameOver();
    }, 3000);
  };


  function destroyGame() {
    gameMain.remove();
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
