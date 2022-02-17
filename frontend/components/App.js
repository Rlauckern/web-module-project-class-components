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
    return (
      <div>
        <h1>Todos</h1>

        <ul>
          <li>Walk the dog </li>
          <li>Take out the trash</li>
          <li>Workout</li>
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
