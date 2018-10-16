// tried to remove callback into it's own function.  thought that, as this was logic rather than what is returned it should have been in models.  Got that very wrong! this file is rubbish, ignore it.


const PubSub = require('../helpers/pub_sub.js')

const ExtraLogic = function(){

};

ExtraLogic.prototype.inputDetails = function (number){


  event.preventDefault()

  const numberInput = number
  debugger;
  console.log('the number input was:', numberInput);
  PubSub.publish('FormView:textInputSubmitted', numberInput)
};


module.exports = ExtraLogic;
