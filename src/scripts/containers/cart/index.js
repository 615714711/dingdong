

import React,{Component} from "react";
import Head from "../../components/head"
import {connect} from "react-redux";
import { get_car } from "../../actions"
import { get_delete } from "../../actions"
import { get_add } from "../../actions"
import { List, Toast } from "antd-mobile";
import { Link } from "react-router-dom"
import {Card,WingBlank,WhiteSpace,Button,Modal} from "antd-mobile";
const Item = List.Item;
@connect(
    state => (
        {
            cart: state.car,      
        }
    )
)
export default class Cart extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(get_car("/cart"));
        // dispatch(get_delete("/delete"))
    }
    getTotal = () => {
        const { cart } = this.props;
        var total = 0;
        cart.forEach(element => {
            total += Math.ceil(element.price * element.num);
        });
        return total;
    }
   render(){
       const {id,dispatch, cart, history,num,data } = this.props;
       return(
            <div className="section">
                <Head title="购物车"  show={true} history={history}/>
                <WingBlank>
                   <div>
                    {   
                        cart.map((item, idx) => (
                            <ul key={idx}>
                                <li style={{width:'100%',borderBottom:'1px solid #ddd',height:'200px'}}>
                                    <img src={item.img} alt="" style={{width:'30%',display:'block'}}/>
                                    <span className="goodsname">商品名称：{item.name}</span>
                                    <p className="goodsprice">商品价格：￥{item.price}</p>
                                     <p>
                                         购买数量：
                                        <span className="reduce" onClick={()=>dispatch(get_add(item.id,item.num<2?item.num:--item.num))}>-</span>
                                        <span>{item.num}</span>
                                        <span className="add" onClick={()=>dispatch(get_add(item.id,++item.num))}>+</span>
                                    </p>
                                        <button className="btn" onClick={()=>dispatch(get_delete(item.id,history))}>删除</button>
                                </li>
                            </ul>
                        ))
                     }
                    <div className="buy">
                        <span className="total">总金额:
                        <span>￥<span style={{color:'red'}}>{this.getTotal()}.00</span></span>
                        </span>
                        <button type="primary" className="button" style={{border:'0',width:'50px',height:'30px',background:'#6495ED',borderRadius:'5px',color:'#fff',float:'right'}}>结算</button>
                    </div>
                </div>
                </WingBlank>
            </div>
       )
   }
}