const app ={
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: [ ]
}

//JSX - javascript xml
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(!option){
    return;
  }

  app.options.push(option);
  e.target.elements.option.value = ' ';
  renderForm();
  
  
}


const appRoot = document.getElementById('app');
const renderForm = () => {
  const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit = {onFormSubmit}>
          <input type= "text" name = "option" />
          <button>Add options</button>
        </form>
    </div>  
  );
  
  ReactDOM.render(template, appRoot); 
}

renderForm();
  