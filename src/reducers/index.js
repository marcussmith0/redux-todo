import { combineReducers } from 'redux';
import { reduxForm } from 'redux-form';

import todos from './reducers_todo';

const rootReducer = combineReducers({
    todos: todos,
    form: reduxForm
});

export default rootReducer;
