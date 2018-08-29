'use strict';

function Game() {
  var self = this;

  self.onGameOverCallback = null;
  self.score= 0;
  self.timeleft = null;
  self.cards = [1,2,3,4,4,5,14,22,10,9,11,12];
  self.step = null;

};

Game.prototype.start = function() {
  var self = this;
  self.gameMain = buildDom(`
    <main>
      <header id="site-header">
        <div class="score container">
          <span class="label">Score</span>
          <span class="value">200</span>
        </div>
        <div class="container timer">
          <span class="label">Timer</span>
          <span class="value"></span>
        </div>
      </header>
      <div id="site-main" class="deck">
        <div class="current card">5</div>
        <div class="actions">
          <button class="up button">up</button>
          <button class="down button">down</button>
        </div>
        <div class="next card">?</div>
      </div>
      <footer id="site-footer" class="container">
        <p>
          <span class="label">Step:</span>
          <span class="step-no">1</span> / <span class="total-steps">52</span>
        </p>
      </footer>
    </main>
`);

  self.currentCardElement = self.gameMain.querySelector('.current.card');
  self.timeLeftElement = self.gameMain.querySelector('.timer .value');

  self.currentCardElement = self.gameMain.querySelector('.current.card');
  self.nextCardElement = self.gameMain.querySelector('.next.card');

  self.buttonUpElement = self.gameMain.querySelector('.button.up');
  self.buttonDownElement = self.gameMain.querySelector('.button.down');

  self.stepNoElement = self.gameMain.querySelector('.step-no');
  self.totalStepsElement = self.gameMain.querySelector('.total-steps');

  self.scoreElement = self.gameMain.querySelector('.score');

  document.body.appendChild(self.gameMain);

  self.showFirstCard();
};

Game.prototype.showFirstCard = function() {
  var self = this;
  self.step = 0;
  self.showCard();
  self.startTimer();
};

Game.prototype.triggerTimeout = function() {
  var self = this;
  self.score--;
  self.scoreElement.innerText = self.score;
  self.nextCard();
};

Game.prototype.nextCard = function() {
  var self = this;
  self.step++;
  if (self.step === self.cards.length - 1){
      self.onGameOverCallback();
  } else {
    self.showCard();
    self.startTimer();
  };
};



Game.prototype.showCard = function() {
  var self = this;
  var currentCard = self.cards[self.step];
  self.currentCardElement.innerText = currentCard;
  self.nextCardElement.innerText = '?';

  self.handleClickUp = function () {
    self.revealNumber(true);
  };

  self.handleClickDown = function () {
    self.revelNumber(false);
  }

  self.buttonUp.addEventListener('click', function(){
    self.revelNumber(true);
  });

  self.buttonDown.addEventListener('click', function(){
    self.revelNumber(false);
  });
};

Game.prototype.startTimer = function() {
  var self = this;
  self.timeleft = 3;
  self.timeLeftElement.innerText = self.timeleft;
  self.intervalId = window.setInterval(function(){
    self.timeleft--;
    self.timeLeftElement.innerText = self.timeleft;
    if (self.timeleft === 0){
      clearInterval(self.intervalId);
      self.triggerTimeout();
    }
  }, 100);
}

Game.prototype.revelNumber = function(answerUp) {
  var self = this;
  var nextCard = self.card[self.step + 1];
  var currentCard = self.currentCard;
  if (answerUp && nextCard > currentCard){
    self.score++;
  } else if (answerUp && nextCard > currentCard){
    self.score--;
  } else if (!answerUp && nextCard > currentCard){
    elf.score++;
  } else if (!answerUp && nextCard > currentCard){

  }
};



Game.prototype.onOver = function(callback) {
  var self = this;
  self.onGameOverCallback = callback;
};

Game.prototype.destroy = function() {
  var self = this;
  self.gameMain.remove();
};




