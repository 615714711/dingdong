

import React,{Component} from "react";
import {Link} from "react-router-dom"
import Head from "../../components/head"
import {connect} from "react-redux"
import { get_carousel } from "../../actions"
import { get_menu } from "../../actions"
import {get_product} from "../../actions"
import {WingBlank,WhiteSpace,Button,Modal,Carousel} from "antd-mobile";
import img from "../../../assets/image/peisong.png"
@connect(
    state => (
        {
            carousel : state.lunbo,
            menulist:state.menuList,
            product:state.productList,
        }
    )
)
export default class Home extends Component {
    componentWillMount() {
    const { dispatch,cart } = this.props;
    dispatch(get_carousel("/carousel"))
    dispatch(get_menu("/menu"))
    dispatch(get_product("/product"))
   }
    render(){
       const {carousel,menulist,product,goDetail} = this.props
        return (
            <div className="section">
                 <Carousel
                    autoplay={true}
                    infinite={true}
                    dots={true}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                 >
                     {
                        carousel.map((item, index) => (
                            <a href="" key={index}
                                style={{ display: 'inline-block', width: '100%' }}
                            >
                                <img
                                    src={item.icon_url} alt=""
                                    style={{ width: '100%',height:200}}
                                    onLoad={
                                        () => {
                                            window.dispatchEvent(new Event('resize'));
                                        }
                                    }
                                />
                            </a>
                        ))
                    }
                 </Carousel>
                <div >
                    <img style={{width:'100%'}} src={img} alt=""/>
                </div>
                <div className="navbar clearfix">
                    <ul>
                    {
                        menulist.map((menu,idx)=>(
                            <Link to={{ pathname:"/fenlei/list/"+menu.name,
                             search:"?id="+menu.id
                            }} key={idx}>
                                <li style={{width:'20%',float:'left',textAlign:'center',fontSize:14}}>
                                    <img src={menu.icon_url} style={{maxWidth:'80%'}}/>
                                    <span>{menu.name}</span>
                                </li>
                            </Link>
                        ))
                    }
                   </ul>
                </div>
                <div className="content">
                    <h1 className="title">猜你喜欢</h1>
                    <WingBlank>
                    <ul className="like clearfix">
                        {
                            product.map((pro,index)=>(
                                 <li key={index} style={{width:'50%',float:'left',marginBottom:'20px'}}>
                                       <Link to={{
                                        pathname:"/detail/"+pro.id+"/"+pro.name+"/"+pro.price+"/"+pro.spec,
                                        search:"?src="+pro.small_image
                                    }} >
                                     <img src={pro.small_image} style={{maxWidth:'100%'}}/>
                                     <p style={{marginBottom:'10px'}}>{pro.name}</p>
                                     <span style={{color:'red',marginRight:'50px'}}>￥{pro.price}</span>
                                     <i className="iconfont icon-gouwuche" style={{color:'green'}}></i>
                                       </Link>
                                 </li>
                            ))
                        }
                    </ul>
                    </WingBlank>
                </div>
            </div>
        )
    }
    
}