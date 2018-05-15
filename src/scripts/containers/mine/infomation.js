import React,{Component} from "react";
import photo from "../../../assets/images/phone.png"
import Head from "../../components/head"

export default class Info extends Component {
    render(){
         const {match,history,location,List} = this.props;
        return(
            <div className="section">
                <Head title="个人信息" show={true} history={history}/>
                <div style={{width: '100%',textAlign:'center'}}>
                      <img src={photo} alt="" style={{margin: 'auto',marginTop:'30px'}}/>
                      <p style={{paddingTop:'20px',fontSize:'18px',color:'gold'}}>欢迎：{sessionStorage.getItem("username")?sessionStorage.getItem("username"):'请登录'}</p>
                </div>  
            </div>
        )
    }
}