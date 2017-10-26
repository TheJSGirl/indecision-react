'use strict';

console.log('app is running');

//JSX - javascript xml
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Put your life in the hands of computer'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'andrew',
  age: 12
};

var count = 0;
var addOne = function addOne() {
  count++;

  renderApp();
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne.bind(undefined) },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-2'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  // ReactDOM.render(template, appRoot);  
  ReactDOM.render(templateOne, appRoot);
};

renderApp();
