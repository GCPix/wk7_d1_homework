const PubSub = require('../helpers/pub_sub.js');
const ExtraLogic = require('../models/extra_logic.js');

const FormView = function(){


};
//extraLogic.inputDetails(event.detail)
FormView.prototype.bindEvents = ()=> {
  const form = document.querySelector('#prime-checker-form');
  const extraLogic = new ExtraLogic();
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const numberInput = event.target.number.value
    console.log('the number input was:', numberInput);
    PubSub.publish('FormView:textInputSubmitted', numberInput)
  })
};

module.exports = FormView;
