import React, {Fragment, useContext, useEffect} from "react";
import {Bugs} from "../components/Bugs";
import {ApiContext} from "../context/api/apiContext";
import {Loader} from "../components/Loader";
import {Categories} from "../components/Categories";

export const Home = () => {
    const {loading, bugs, categories, fetchBugs, toggleCategory, handleScroll} = useContext(ApiContext)

    useEffect(() => {
        fetchBugs()
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Fragment>
            <Categories categories={categories} toggleCategory={toggleCategory}/>
            <hr/>
            <Bugs bugs={bugs}/>
            {
                loading
                    ? <Loader/>
                    : ''
            }
        </Fragment>
    )
}