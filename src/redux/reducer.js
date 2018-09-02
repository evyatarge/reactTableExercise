import {SAVE_DATA} from './actions';

const initialState = {
    data: []
};

function myApp(state=initialState, action) {
    return {
        data: data(state.data, action)
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
