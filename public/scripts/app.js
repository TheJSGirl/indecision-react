'use strict';

//JSX - javascript xml
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: []
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

var removeAll = function removeAll(e) {
  e.preventDefault();
  app.options = [];
  renderForm();
};

var appRoot = document.getElementById('app');
var renderForm = function renderForm() {
  var template = React.createElement(
    'div',
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
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
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
  );

  ReactDOM.render(template, appRoot);
};

renderForm();
