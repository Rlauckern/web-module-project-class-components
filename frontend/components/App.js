import React from 'react'

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
            todos.map(todos => {
              return (<li>{todos.task} { todos.completed?<span>- completed</span> : <span></span></li>)
            })
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
