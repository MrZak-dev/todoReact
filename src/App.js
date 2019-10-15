import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends React.Component  {
  state = {
    todos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(res => this.setState({todos:res.data}));
  }
  //complete uncomplete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo ;
    })});
  }

  //delete
  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo=>todo.id !== id)]});
  }

  //Add to do 
  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      isCompleted : false
    }
    this.setState({todos : [...this.state.todos,newTodo]});
  }
  render(){
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render = {props => (
          <React.Fragment>
            <AddTodo addTodo = {this.addTodo }/>
            <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component = {About}/>

      </div>
    </Router>
  );
}
}

export default App;
