import React, { Fragment, useContext, useEffect } from "react";
import { Bugs } from "../components/Bugs";
import { ApiContext } from "../context/api/apiContext";
import { Loader } from "../components/Loader";
import { Categories } from "../components/Categories";
import axios from "axios";
import { ADD_BUGS } from "../context/types";
import { apiReducer } from "../context/api/apiReducer";

const url = process.env.REACT_APP_API_HOST;


const HandleScroll = async () => {
  const { state, dispatch, showLoader, categories, hideLoader } = useContext(
    ApiContext
  );

  if (state.hasNext !== true) return;
  if (
    window.innerHeight + document.documentElement.scrollTop <=
    document.documentElement.offsetHeight - 3
  )
    return;
  console.log("Fetch more list items!");
  state.page++;
  showLoader();
  let categoriesJ = JSON.stringify(categories);
  const res = await axios.get(
    `${url}/bugs?categories=${categoriesJ}&page=${state.page}&per_page=4`
  );
  const payload = state.bugs.concat(res.data.data);
  if (payload.length === 0) {
    state.hasNext = false;
    hideLoader();
  } else {
    dispatch({ type: ADD_BUGS, payload });
  }
};

export const Home = () => {
  const { loading, bugs, categories, fetchBugs, toggleCategory } = useContext(
    ApiContext
  );

  useEffect(() => {
    fetchBugs();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);

  return (
    <Fragment>
      <Categories categories={categories} toggleCategory={toggleCategory} />
      <Bugs bugs={bugs} />
      {loading ? <Loader /> : null}
    </Fragment>
  );
};
