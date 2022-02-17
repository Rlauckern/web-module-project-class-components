import React from 'react'

class Todo extends React.Component;

class Todo extends React.Component {
  render(){
    return(<li>{todo.task} { todo.completed?<span>- coimpleted</span> : <span></span> }</li>);
  };
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      this.state = {
        todos: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
      }
    }
  }
}
export default class App extends React.Component {
  render() {
    const { todos } = this.state;
    console.log(todos);
    console.log(this.state);
    return (
      <div>
        <h1>Todos</h1>

        <ul>
          {
            todos.map(todo=> {
              return (<Todo todo={todo} />)
            })
           <Todo />
          }
          
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}
