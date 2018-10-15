const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function(){

};

//this is where the initial input goes so that it can do the logic before going to result
PrimeChecker.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:textInputSubmitted', (event)=>{
    const numberInput = event.detail
    const result = this.numberIsPrime(numberInput);
    console.log('this is the result:', result)
    //think I need to publish this for it to be available to result.  this is the only place that makes sense
    PubSub.publish('PrimeCheck:ResultCalculated', result)
  });
};



PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
