



import React,{Component} from "react";
import {NavBar,Icon} from "antd-mobile";


export default class Head extends Component{
    goback=()=>{
        // 
        console.log('返回')
        const {history } = this.props;
        console.log(history);
        history.goBack();
    }
    render(){
        const {title,show} = this.props;
        return (
            <NavBar
            mode="dark"
            icon={show?<Icon type="left" />:""}
            leftContent={show?"返回":""}
            onLeftClick={show?this.goback:console.log()}
            rightContent={show?[
              <Icon key="1" type="ellipsis" />,
            ]:""}
          >{title}</NavBar>
        )
    }
}