import React from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends React.Component  {
    markComplete = () => {
        console.log('hello');
    }
    render() {
        return this.props.todos.map((todo)=>(
            <TodoItems key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
        ));
    }
}
//properties types
Todos.propTypes = {
    todos:PropTypes.array.isRequired
}
export default Todos;