const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  //this is the subscribe bit so it needs to look the channel then do something with the incoming information

  PubSub.subscribe('PrimeCheck:ResultCalculated', (event)=>{
    const calculatedResult = event.detail;
    console.log('result as true or false:', calculatedResult);
    this.displayResult(calculatedResult);
  })


};

ResultView.prototype.displayResult = function (result) {
    const resultPosition = document.querySelector('#result')

      if(result === true){resultPosition.textContent = 'This is a prime number'}
      else {resultPosition.textContent = 'This is not a prime number'};
};

module.exports = ResultView;
