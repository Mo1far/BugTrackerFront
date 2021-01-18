import React, { Fragment, useContext, useEffect } from "react";
import { Bugs } from "../components/Bugs";
import { ApiContext } from "../context/api/apiContext";
import { Loader } from "../components/Loader";
import { Categories } from "../components/Categories";
import axios from "axios";
import { ADD_BUGS } from "../context/types";
import { apiReducer } from "../context/api/apiReducer";

const url = process.env.REACT_APP_API_HOST;


export const Home = () => {
  const { loading, bugs, categories, fetchBugs, toggleCategory, handleScroll } = useContext(
    ApiContext
  );

  useEffect(() => {
    fetchBugs();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <Fragment>
      <Categories categories={categories} toggleCategory={toggleCategory} />
      <Bugs bugs={bugs} />
      {loading ? <Loader /> : null}
    </Fragment>
  );
}
