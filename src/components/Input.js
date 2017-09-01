import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

class Input extends Component {

    render() {
        return (
            <form>
                <input type="text" />
                <button>Add</button>
            </form>
        )
    }
}


export default Input