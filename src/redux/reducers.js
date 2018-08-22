import { combineReducers } from 'redux';
import {MOVE_PAGE, Pages, SAVE_DATA} from './actions';

// const initialState = {
//     page: Pages.MAIN_PAGE,
//     data: []
// };

function myApp(state=initialState, action) {
    return {
        page: page(state.page, action),
        data: data(state.data, action)
    }
}

// const myApp = combineReducers({
//     page,
//     data
// });

function page(state=Pages.MAIN_PAGE, action) {
    switch (action.type){
        case MOVE_PAGE:
            return action.index;
        default:
            return state;
    } 
}

function data(state=[], action) {
    switch (action.type){
        case SAVE_DATA:
            return action.data;
        default:
            return state;
    }
}

export default myApp;




// function myApp(state=initialState, action) {
//     switch (action.type) {
//         case MOVE_PAGE:
//             return Object.assign({}, state, {
//                 page: action.index
//             });
//         case SAVE_DATA:
//             return Object.assign({},state, {
//                 data: action.data
//             });
//         default:
//             return state
//     }
//
//     return state;
// }
