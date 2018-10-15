const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){


};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const numberInput = event.target.number.value
    console.log('the number input was:', numberInput);
    PubSub.publish('FormView:textInputSubmitted', numberInput)
  })
};

module.exports = FormView;
