import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from "./about/About";
import TableWrapper from "./table/TableWrapper";

const Main = () => (

    <main>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/table' component={TableWrapper}/>
        </Switch>
    </main>
);
export default Main;