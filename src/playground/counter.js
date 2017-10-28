console.log('app is running');

//JSX - javascript xml
const template = 
<div>
  <h1>Indecision App</h1> 
  <p>Put your life in the hands of computer</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>  

const user = {
  name: 'andrew',
  age: 12
}

let count = 0;
const addOne = () => {
  count++;
 
  renderApp();
}

const minusOne = () => {
  count--;
  renderApp();
}

const reset = () => {
  count = 0;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const templateOne = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne.bind(this)}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

// ReactDOM.render(template, appRoot);  
ReactDOM.render(templateOne, appRoot);
  
}

renderApp();