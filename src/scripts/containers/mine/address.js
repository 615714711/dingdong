import React,{Component} from "react";
import Head from "../../components/head"

export default class Address extends Component {
    render(){
         const {match,history,location,List} = this.props;
        return(
            <div className="section">
                <Head title="收货地址" show={true} history={history}/>
                <div>
                      <h1>正在开发中...</h1>
                </div>  
            </div>
        )
    }
}