import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './asyncActions';

const initialState = {
    items: [],
    rows:[],
    loading: false,
    error: null
};

export default function asyncReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BEGIN:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case FETCH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                items: action.payload.data
            });

        case FETCH_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error,
                items: []
            });

        default:
            return state;
    }
}