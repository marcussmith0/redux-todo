import React, { Component } from 'react';
import { connect } from 'react-redux';


import Input from '../components/Input';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Todo List App</h1>

                <Input />
                <hr/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return  { todos: state.todos }
}

export default connect(mapStateToProps)(App);