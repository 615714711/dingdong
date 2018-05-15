

import React ,{Component  }from "react";
import {NavLink} from "react-router-dom";

export default class Foot extends Component{

    state={
        footList:[
            {path:"/app/home",txt:"首页",icon:"icon-ai-home"},
            {path:"/app/fenlei",txt:"分类",icon:"icon-iconfl"},
            {path:"/app/cart",txt:"购物车",icon:"icon-gouwuche"},            
            {path:"/app/mine",txt:"我的",icon:"icon-wode"}
        ]
    }

    render(){
       
        return (
            <footer>
            {
                this.state.footList.map((foot,index)=>{
                    return (
                       <div key={index}>
                           <NavLink to={foot.path} activeClassName="ft-active-1">
                               <i className={"iconfont "+foot.icon}></i>
                               <span>{foot.txt}</span>
                           </NavLink>
                       </div>
                    )
                })
            }
            </footer>
        )
    }
}