import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { createTodo } from '../actions/index';

class Input extends Component {

    renderInput(field) {

        return (
            <div>
                <input 
                className="form-control" 
                type="text"
                placeholder="Enter you to-do"
                { ...field.input }
                />
            </div>
        )
    }
    
    onSubmit(value) {
        console.log(value);
        this.props.createTodo(value);

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                name="todo"
                component={this.renderInput}
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}

const afterSumbit = (results, dispatch) =>
            dispatch(reset("Input"));

export default reduxForm ({ 
    form: "Input",
    onSubmitSuccess: afterSumbit
})(
    connect(null, { createTodo })(Input)
)