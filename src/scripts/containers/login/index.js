


import React,{Component} from "react";

import Head from "../../components/head"

import {List ,InputItem,WingBlank,WhiteSpace,Button} from "antd-mobile";
import {connect} from "react-redux";
import {getusername,getuserpwd,login} from "../../actions"
import { createForm } from 'rc-form';
@connect(
    state=>(
        {
            username:state.username,
            password:state.password,
        }
    )
)

export default class Login extends Component {
    goReg=()=>{
        const {history}  = this.props;
        history.push("/register")
    }

    render(){
        const {username,dispatch,register1,password,history}=this.props
        return (
            <div className="section">
                <Head title="登录" show={true} history={this.props.history}/>
                <List>
                 <WingBlank>
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                        ref="username"
                        onBlur={()=>dispatch(getusername(this.refs.username.state.value))}
                    >手机号</InputItem>

                    <InputItem
                    type="password"
                    clear
                    placeholder="请输入密码"
                    ref="password"
                    onBlur={()=>dispatch(getuserpwd(this.refs.password.state.value))}
                >密码</InputItem>
                    <WhiteSpace size="lg" />
                    <Button type="primary" size="large" style={{marginBottom:10}}  onClick={()=>dispatch(login(this.refs.username.state.value,
                    this.refs.password.state.value,history))} >登录</Button>
                     <span style={{fontSize:16}}>如没有帐号请<span style={{color:"red"}} onClick={this.goReg}>注册</span>!</span>
                </WingBlank>
                </List>
            </div>
        )
    }
}