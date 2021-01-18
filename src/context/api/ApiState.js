import React, { useReducer } from "react";
import axios from "axios";
import { ApiContext } from "./apiContext";
import { apiReducer } from "./apiReducer";
import { ADD_BUGS, FETCH_BUGS, HIDE_LOADER, SHOW_LOADER } from "../types";
import { useContext } from "react/cjs/react.production.min";

const url = process.env.REACT_APP_API_HOST;

export const ApiState = ({ children }) => {
  const initialState = {
    bugs: [],
    categories: ["pending", "registered", "fixed"],
    loading: false,
    page: 1,
    hasNext: true,
  };
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const fetchBugs = async () => {
    showLoader();
    let categories = JSON.stringify(state.categories);
    const res = await axios.get(
      `${url}/bugs?categories=${categories}&page=${state.page}&per_page=8`
    );
    const payload = res.data.data;

    dispatch({ type: FETCH_BUGS, payload });
  };

  // const handleScroll = async (categories) => {
  //   if (state.hasNext !== true) return;
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop <=
  //     document.documentElement.offsetHeight - 3
  //   )
  //     return;
  //   console.log("Fetch more list items!");
  //   state.page++;
  //   showLoader();
  //   let categoriesJ = JSON.stringify(state.categories);
  //   const res = await axios.get(
  //     `${url}/bugs?categories=${categoriesJ}&page=${state.page}&per_page=4`
  //   );
  //   const payload = state.bugs.concat(res.data.data);
  //   if (payload.length === 0) {
  //     state.hasNext = false;
  //     hideLoader();
  //   } else {
  //     dispatch({ type: ADD_BUGS, payload });
  //   }
  // };

  const toggleCategory = async (category) => {
    if (state.categories.includes(category)) {
      state.categories = state.categories.filter((c) => category !== c);
    } else {
      state.categories.push(category);
    }
    state.hasNext = true;
    await fetchBugs();
  };

  return (
    <ApiContext.Provider
      value={{
        showLoader,
        fetchBugs,
        toggleCategory,
        // handleScroll,
        loading: state.loading,
        bugs: state.bugs,
        categories: state.categories,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
