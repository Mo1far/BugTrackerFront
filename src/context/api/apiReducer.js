import {ADD_BUGS, FETCH_BUGS, HIDE_LOADER, SHOW_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [ADD_BUGS]: (state, {payload}) => ({
        ...state,
        bugs: [...state.bugs, ...payload],
        loading: false
    }),
    [FETCH_BUGS]: (state, {payload}) => ({...state, bugs: payload, loading:false}),
    DEFAULT: state => state
}

export const apiReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
