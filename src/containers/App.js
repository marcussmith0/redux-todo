import React, { Component } from 'react';


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

export default App;