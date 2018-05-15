


import React,{Component} from "react";
import {connect} from "react-redux"
import Head from "../../components/head"
import {Card,WingBlank,WhiteSpace,Button,Modal} from "antd-mobile";
import url from "url";
import {car} from "../../actions"



@connect(
    state=>(
       {
            cart:state.car
        }
    )
)
export default class Detail extends Component {
    componentWillMount(){
        const {dispatch,cart} = this.props;
        console.log(dispatch)
       
    }
    goLogin=()=>{
        const {history}  = this.props;
        history.push("/find/car/")
    }
    render(){
        const {match,history,location,dispatch} = this.props;
        console.log(match)
        return(
            <div className="section">
                <Head title="商品详情"  show={true} history={history}/>
                <WingBlank>
                <div>
                     <img style={{width:"100%",height:"200px",marginTop:"10px"}} src={url.parse(location.search,true).query.src} alt=""/>
                     <p style={{marginTop:"20px",marginLeft:"10px",color:'green'}} >商品名称：{match.params.name}</p>
                     <p style={{marginTop:"20px",marginLeft:"10px",color:'orange'}} >商品描述：{match.params.spec}</p>
                     <p style={{marginTop:"20px",marginLeft:"10px",color:"red"}}>商品价格：￥{match.params.price}</p>
                     <div style={{marginTop:"50px",textAlign:'center'}}>
                     <Button type="primary" inline size="large" onClick={()=>dispatch(car(match.params.id,match.params.name,match.params.price,url.parse(location.search,true).query.src,history))}>加入购物车</Button>
                     <Button type="primary" inline size="large" style={{width:"120px" ,marginLeft:"20px"}} onClick={this.goLogin}>立即购买</Button>
                     </div>
                    
                </div>
                </WingBlank>
            </div>
        )
    }
}