export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const URL = 'http://localhost:3000/employees?_sort=id&_order=asc';

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    payload: { data }
});

export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});


export function fetchData() {
    return dispatch => {
        dispatch(fetchBegin());
        return fetch(URL)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}