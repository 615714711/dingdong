

import React,{Component} from "react";

import Head from "../../components/head"
import {Switch,Route,Redirect} from "react-router-dom";

import Home from "../home"
import fenlei from "../fenlei"
import Cart from "../cart"
import Mine from "../mine"

import Foot from "../../components/foot"
export default class App extends Component {
    render(){
        return (
            <div className="box">
                <Switch>
                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/fenlei" component={fenlei}/>
                    <Route path="/app/cart" component={Cart}/>
                    <Route path="/app/mine" component={Mine}/>
                    <Route render={
                        ()=>{
                            return (<Redirect to="/app/home"/>)
                        }
                    } />
                </Switch>
                
                <Foot/>
                
            </div>
        )
    }

}