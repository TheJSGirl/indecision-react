'use strict';

//JSX - javascript xml
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: [],
  decision: null,
  color: null
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (!option) {
    return;
  }

  app.options.push(option);
  e.target.elements.option.value = ' ';
  renderForm();
};

var removeAll = function removeAll() {
  app.options = [];
  renderForm();
};

var onMakeDecision = function onMakeDecision() {
  var color = ['red', 'green', 'yellow', 'pink'];
  var randomColor = Math.floor(Math.random() * color.length);
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNumber];
  app.decision = option;
  app.color = color[randomColor];
  renderForm();
};

var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'center',
      null,
      React.createElement(
        'h1',
        null,
        app.title
      ),
      app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
      ),
      React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are options' : 'No options'
      ),
      React.createElement(
        'p',
        null,
        app.options.length
      ),
      React.createElement(
        'button',
        { onClick: removeAll },
        'Remove All'
      ),
      '\xA0\xA0',
      React.createElement(
        'button',
        { onClick: onMakeDecision },
        'what should i do? '
      ),
      React.createElement(
        'ol',
        { style: { listStyleType: 'none' } },
        app.options.map(function (option) {
          return React.createElement(
            'li',
            { key: option, style: { color: 'red' } },
            option
          );
        })
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'h1',
          { style: { color: app.color } },
          app.decision
        )
      ),
      React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add options'
        )
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderForm();
