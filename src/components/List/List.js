import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextAndForm from './TextAndForm';

class List extends Component {

  // deleteHandler(index) {
  //   this.props.deleteTodo(index)
  // }

  render() {
    return (
      <ul className="list-group">
      {this.props.todos.map((todo, index) => (
        <li key={index} className="list-group-item container">
          <TextAndForm
            todo={todo}
            index={index}
            >
          </TextAndForm>
        </li>
      ))}
    </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // deleteTodo: (index) => dispatch({ type: 'DELETE_TODO', payload: index })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
