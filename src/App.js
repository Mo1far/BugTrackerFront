import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";
import {ApiState} from "./context/api/ApiState";

function App() {
    return (
        <ApiState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </ApiState>

    );
}

export default App;
