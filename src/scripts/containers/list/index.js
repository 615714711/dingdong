



import React,{Component} from "react";
import {Link} from "react-router-dom"
import Head from "../../components/head";
import {get_list} from "../../actions"
import {Card,WingBlank,WhiteSpace} from "antd-mobile";
import {connect} from "react-redux"
import url from "url";
@connect(
    state => (
        {
           List:state.list
        }
    )
)
export default class List extends Component {
   componentWillMount() {
        const { dispatch } = this.props;
        dispatch(get_list("/list"))
    }
    render(){
         const {match,history,location,List} = this.props;
        return(
            <div className="section">
               <Head title={match.params.name}  show={true} history={history}/>
                 <div className="content">
                    <WingBlank>
                    <ul className="like clearfix">
                        {
                            List.map((item,index)=>(
                                 <li key={index} style={{width:'50%',float:'left',marginBottom:'20px'}}>
                                    <Link to={{
                                        pathname:"/detail/"+item.id+"/"+item.name+"/"+item.price+"/"+item.spec,
                                        search:"?src="+item.small_image
                                    }} >
                                        <img src={item.small_image} style={{maxWidth:'100%'}}/>
                                        <p style={{marginBottom:'10px'}}>{item.name}</p>
                                        <span style={{color:'red',marginRight:'50px'}}>￥{item.price}</span>
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