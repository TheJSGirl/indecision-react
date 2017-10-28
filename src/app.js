//JSX - javascript xml
const app ={
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: [ ]
}

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

const removeAll= () => {
  app.options = [];
  renderForm(); 
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    
}



const appRoot = document.getElementById('app');

const renderForm = () => {
  const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <p>{app.options.length}</p>
        {/* //create "Remove All" button above list
        // on click -> wipe the array -> rerender  */}
     
        <button onClick = {removeAll}>Remove All</button>
        <button onClick = {onMakeDecision} >what should i do? </button>
        <ol>
          {/*map over app.options and set key prop*/}
          {/* <li>Item one</li>
          <li>Item two</li> */}
          {
            app.options.map((option) => {
              return <li key={option} style={{color: 'red'}}>{option}</li>;
               
            })
          }
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
  