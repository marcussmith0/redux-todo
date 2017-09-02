import _ from "lodash";

import { CREATE_TODO } from '../actions/index';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {

        case CREATE_TODO:

            return { ...state, [action.payload.id]: action.payload }

        default:
            return state
    }
}