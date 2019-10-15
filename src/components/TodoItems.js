import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItems extends Component {
    getStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding : '10px',
            borderBottom: '1px #ccc dotted' ,
            textDecoration : this.props.todo.completed ? 'line-through' :
            'none'
        }
    }
    
    render() {
        const {id , title} = this.props.todo;
        return(
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '} 
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        );
    }
}
//properties types
TodoItems.propTypes = {
    todo:PropTypes.object.isRequired
}

//custom styles
const btnStyle = {
    backgroundColor:'#ff0000',
    color:'#fff',
    padding : '5px 10px',
    borderRadius:'50%',
    border : 'none',
    float:'right'
}
export default TodoItems
