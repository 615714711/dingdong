


import  {Route,Switch,Redirect} from "react-router-dom";

import React,{Component} from "react";

import App from "./app";
import Login  from "./login"
import Register  from "./register"
import Detail  from "./detail"
import List from "./list"
import Info from "./mine/infomation"
import Order from "./mine/order"
import Address from "./mine/address"
export default class Layout extends Component {
    render(){
        return (
            <Route
                render={
                    ({match,location,history})=>(
                        <Switch location={location} >
                            <Route path="/" exact  component={App}/>
                            <Route path="/app/:tab?" component={App}/>
                            <Route path="/login"  component={Login}/>
                            <Route path="/info"  component={Info}/>
                            <Route path="/address"  component={Address}/>
                            <Route path="/order"  component={Order}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path="/fenlei/list/:name/:id?" component={List}/>
                            <Route path="/detail/:id/:name/:price/:spec?" component={Detail}/>
                            <Route render={
                                    ()=>{
                                        return (<Redirect to="/app/home"/>)
                                    }
                                } />
                        </Switch>
                    )
                }
            />
        )
    }
}
