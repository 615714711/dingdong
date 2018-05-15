

/*
import {connect} from "react-redux"
import React,{Component} from "react";
import {get_menu} from "../../actions"
import {get_anxinshucai} from "../../actions"
import Head from "../../components/head"
import {Button,WingBlank,WhiteSpace,List,Modal,InputItem,Popover,Carousel,SearchBar,NoticeBar,ListView  } from "antd-mobile";
@connect(
    state => (
        {
           menulist:state.menuList,
           anxinshucai:state.anxinshucai
        }
    )
)
export default class Fenlei extends Component {
     componentWillMount() {
    const { dispatch } = this.props;
    dispatch(get_menu("/menu"))
     dispatch(get_anxinshucai("/anxinshucai"))
    }
    render(){
        const {menulist,anxinshucai} = this.props
        return (
            <div className="section">
                {<Head title="商品分类" />}
                 <SearchBar
                placeholder="输入商品名称"
               ></SearchBar>
                    <div className="leftbar">
                        {
                            menulist.map((item,index)=>(
                                <div className="barItem" key={index}>
                                    <p className="menu-text" >{item.name}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="rightContent">
                        {
                            anxinshucai.map((anxin,index)=>(
                                <div className="rightItem" key={index}>
                                    <div className="category-item flex">
                                        <div className="item flex detail-item">
                                            <div className="goods-img">
                                                <img src={anxin.small_image}/>
                                                <span className="goods-name">{anxin.name}</span>
                                            </div>
                                            <div className="goods-textBox">
                                                
                                                <p className="goods-coach"></p>
                                                <div className="goods-cartBox">
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>  
            </div>
        )
    }
    
}
*/





import React,{Component} from "react";
import Head from "../../components/head"
import {List,Toast,SearchBar} from "antd-mobile"
const Item = List.Item;
import  axios from "axios";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {get_menu} from "../../actions"
@connect(
    state=>(
        {
          menulist:state.menuList
        }
    )
)
export default class Fenlei extends Component {
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_menu("/menu"))
    }
    goDetail=(item)=>{
    }
    render(){
        const {menulist} = this.props;
        return (
            <div className="section">
                <Head title="分类" />
                 <SearchBar
                placeholder="输入商品名称"
               ></SearchBar>
                <List className="my-list">
                    {
                        menulist.map((item,idx)=>(
                            <Item 
                            key={idx}
                            thumb={item.icon_url}
                            extra={<Link to={{
                                pathname:"/fenlei/list/"+item.name,
                                search:"?price="+item.price
                            }}>{item.name}...</Link> }
                            arrow="horizontal"

                            ></Item>
                        ))
                    }
                </List>
            </div>
        )
    }
    
}
