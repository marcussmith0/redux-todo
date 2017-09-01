import _ from "lodash";

import { CREATE_TODO } from '../actions/index';


let id = 0;

export default function (state= {}, action) {
    switch(action.payload) {

        case CREATE_TODO:
            action.payload.id = id++;
            const keysMapped = _.mapKeys(action.payload, "id");

            return { ...state, ...keysMapped }

        default:
            return state
    }
}