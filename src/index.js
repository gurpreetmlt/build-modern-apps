import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from "react-router-dom";


//COMPONETS
import FHeader from './components/Funcationalheaderc';
import CHeader from './components/CHeaderwithStyle';
import SyntheticEvents from './components/SyntheticEvents';
import States from './components/States';
import News from './News';
import NewsItem from './components/NewsItem';

const App = () => {
    return (
        <div>
            <FHeader />
            <CHeader />
            <SyntheticEvents />
            <States />
            <CHeader />
        </div>
    )

}

ReactDOM.render(
<div>
<BrowserRouter>
    <header>
        <NavLink to="/" activeClassName="ActiveNav"> Home </NavLink><br/>
        <NavLink to="/News" activeClassName="ActiveNav"> News </NavLink>
    </header>
    <switch>
    <Route exact path="/" component={App} />
    <Route path="/News" component={News} />
    <Route path="/News/:id" component={NewsItem} />
    </switch>
   

   </BrowserRouter>
</div>
   

    , document.querySelector('#root'));
