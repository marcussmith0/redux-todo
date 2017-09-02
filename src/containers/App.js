import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


import Input from '../components/Input';

class App extends Component {

    renderTodoList() {
        return _.map(this.props.todos, todo => {
            return (
                <li key={todo.id}>
                    {todo.todo}
                </li>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Todo List App</h1>
                

                <Input />
                <hr/>
                <ul>
                    {this.renderTodoList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return  { todos: state.todos }
}

export default connect(mapStateToProps)(App);