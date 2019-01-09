import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from './actions/todoActions'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodoText: '',
    }
  }

  requestTodo = () => {
    this.props.requestTodoList(this.state.newTodoText)
    this.setState({ newTodoText: '' })
  }

  render() {
    console.log(this.props)
    const {todos} = this.props
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          {/* <input 
          name="todo"  
          type="text"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
           /> */}
          <button  onClick={this.requestTodo}>
            Adicionar
         </button>
        </div>
        <ul>
        {/* { this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          )) } */}
           { todos.data.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
