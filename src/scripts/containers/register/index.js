import React,{Component} from "react";
import { createForm } from 'rc-form';
import Head from "../../components/head"
import {List ,InputItem,WingBlank,WhiteSpace,Button,Toast} from "antd-mobile";
import {getusername,getuserpwd,register,getRegPwd} from "../../actions"
import {connect} from "react-redux";
@connect(
    state=>(
        {
            username:state.username,
            password:state.password,
        }
    )
)
export default class Register extends Component {
    componentDidMount() {
        
    }
    handleChange=()=>{
       console.log(this.state)
       console.log(this.refs.username.state.value)
    }
     goLogin=()=>{
        const {history}  = this.props;
        history.push("/login")
    }
    render(){
        console.log(this.props)
        const {username,dispatch,register1,password,history}=this.props
        console.log(history)

        return (
            <div className="section">
                <Head title="注册" show={true} history={this.props.history}/>
                <List>
                 <WingBlank>
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                        ref="username"
                        name="username"
                        onBlur={()=>dispatch(getusername(this.refs.username.state.value))}
                    >手机号</InputItem>
                    <InputItem
                    clear
                    type="password"
                    placeholder="请输入密码（6-12位）"
                    ref="password"
                    onBlur={()=>dispatch(getRegPwd(this.refs.password.state.value))}
                >密码</InputItem> 
                    <WhiteSpace size="lg" />
                    <Button type="primary" size="large" style={{marginBottom:10}} onClick={()=>dispatch(register(this.refs.username.state.value,
                    this.refs.password.state.value,history))}>注册</Button>
                    <span style={{fontSize:16}}>已有帐号请前往<span style={{color:"red"}} onClick={this.goLogin}>登录</span>！</span>
                    <p>
                        <input type="checkbox"/>
                        <span style={{fontSize:16}}>我已阅读并同意</span>
                        <span style={{textDecoration:"underline"}}>《用户注册协议》</span>
                    </p>
                </WingBlank>
                </List>
                

            </div>
        )
    }
    
}

