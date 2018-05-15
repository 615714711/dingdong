





import React,{Component} from "react";

import Head from "../../components/head"

import {WingBlank,WhiteSpace,Button,Modal} from "antd-mobile";
import photo from "../../../assets/images/phone.png"

/*export default class Mine extends Component {
     goLogin=()=>{
        const {history}  = this.props;
        history.push("/login")
    }

    render(){
        return(
            <div className="section">
                <Head title="个人中心"/>
                <WingBlank>
                    <WhiteSpace size="lg" />
                        <img src={photo} alt=""/>
                        <Button type="primary" size="large" onClick={this.goLogin} >前往登录</Button>
                    <WhiteSpace/> 
                </WingBlank>
            </div>
        )
    }
}*/
export default class Mine extends Component {
    goLogin=()=>{
        const {history}  = this.props;
        history.push("/login")
    }
     goInfo=()=>{
        const {history}  = this.props;
        history.push("/info")
    }
     goOrder=()=>{
        const {history}  = this.props;
        history.push("/order")
    }
     goAddress=()=>{
        const {history}  = this.props;
        history.push("/address")
    }
    render(){
        return(
            <div className="section">
            	<div className="container"  style={{background: 'rgb(245, 245, 245)'}}>
                    <div className="floor floor_one">
                        <img src={photo} alt="" />
                        <p>提莫队长正在待命！</p>
                        <span onClick={this.goLogin}>{sessionStorage.getItem("username")?sessionStorage.getItem("username"):'登录'}</span>
                    </div>
                    <div className="floor floor_item floor_two  flex-align-center flex-between">
                        <p onClick={this.goInfo}>个人信息</p>
                    </div>
                    <div className="floor floor_item floor_two  flex-align-center flex-between" >
                        <p onClick={this.goOrder}>我的订单</p>
                    </div>
                    <div className="floor floor_item floor_two  flex-align-center flex-between ">
                        <p onClick={this.goAddress}>我的地址</p>
                    </div>
			    </div>
            </div> 
        )
    }
}