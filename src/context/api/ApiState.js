import React, {useReducer} from "react";
import axios from "axios";
import {ApiContext} from "./apiContext";
import {apiReducer} from "./apiReducer";
import {ADD_BUGS, FETCH_BUGS, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_API_HOST

export const ApiState = ({children}) => {
    const initialState = {
        bugs: [],
        categories: ['pending', 'registered', 'fixed'],
        loading: false,
        page: 1
    }
    const [state, dispatch] = useReducer(apiReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchBugs = async () => {
        showLoader()
        let categories = JSON.stringify(state.categories)
        const res = await axios.get(`${url}/bugs?categories=${categories}&page=${state.page}&per_page=10`)
        const payload = res.data.data

        dispatch({type: FETCH_BUGS, payload})
    }

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
        state.page++;
        showLoader()
        let categories = JSON.stringify(state.categories)
        const res = await axios.get(`${url}/bugs?categories=${categories}&page=${state.page}&per_page=10`)
        const payload = state.bugs.concat(res.data.data)

        dispatch({type: ADD_BUGS, payload})
    }

    const toggleCategory = async (category) => {
        if (state.categories.includes(category)) {
            state.categories = state.categories.filter(c => category !== c)
        } else {
            state.categories.push(category)
        }
        await fetchBugs()
    }

    return (
        <ApiContext.Provider value={{
            showLoader, fetchBugs, toggleCategory, handleScroll,
            loading: state.loading,
            bugs: state.bugs,
            categories: state.categories,
        }}>
            {children}
        </ApiContext.Provider>
    )
}
