





//  主路由模块 



import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";

import  {HashRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("app");

import Layout from "./containers";

import {Provider} from "react-redux";

import store from "./store";

const hotRender = (Component)=>(
    render(
        <Provider store={store}>
            <Router>
                <Component/>
            </Router>
        </Provider>,
        rootElement
    )
)


hotRender(Layout);



// import "./flux"
// import "./redux"
// import "./react-redux"

// import "./react-redux2"





