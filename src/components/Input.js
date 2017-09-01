import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createTodo } from '../actions/index';

class Input extends Component {

    renderInput() {

        return (
            <div>
                <input 
                className="form-control" 
                type="text"
                placeholder="Enter you to-do"
                />
            </div>
        )
    }
    
    onSubmit() {

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                name="input"
                component={this.renderInput}
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}


export default reduxForm ({ 
    form: "Input"}
)(
    connect(null, { createTodo })(Input)
)