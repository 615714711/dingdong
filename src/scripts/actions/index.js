


import axios from "axios";
import { List, InputItem, WingBlank, WhiteSpace, Button, FormItem, Toast } from "antd-mobile";
axios.defaults.baseURL = "http://47.98.133.224:4000/react"

export const get_carousel =url=>(
    (dispatch)=>{
        return axios.get("/carousel")
            .then(res=>dispatch({
                type:"get_carousel_top",
                data:res.data
            }))
    }
)
export const get_nav =url=>(
    (dispatch)=>{
        return axios.get("/nav")
            .then(res=>dispatch({
                type:"get_nav_img",
                data:res.data
            }))
    }
)
export const get_product =url=>(
    (dispatch)=>{
        return axios.get("/product")
            .then(res=>dispatch({
                type:"get_product_list",
                data:res.data
            }))
    }
)
export const get_menu =url=>(
    (dispatch)=>{
        return axios.get("/menu")
            .then(res=>dispatch({
                type:"get_menu_list",
                data:res.data
            }))
    }
)
export const get_anxinshucai =url=>(
    (dispatch)=>{
        return axios.get("/anxinshucai")
            .then(res=>dispatch({
                type:"get_anxin_list",
                data:res.data
            }))
    }
)
export const get_list =url=>(
    (dispatch)=>{
        return axios.get("/list")
            .then(res=>dispatch({
                type:"get_total_list",
                data:res.data
            }))
    }
)


export const car = (id, name, price, img, history) => (
    (dispatch, action) => {
        console.log(img, name, price, id, history)
        var username=window.sessionStorage.getItem("username");
        if(username){
            return axios.get("cart", {
                params: {
                    id: id,
                    name: name,
                    price: price,
                    img: img,
                    username:username
                }
            })
                .then(res => {
                    console.log(res.data)
                    if (res.data == "加入成功") {
                        Toast.info('成功加入购物车',1);
                    }
                })
        }else{
            Toast.info('请先登录',1);
            return history.push("/login")
        }
       
    }

)


export const get_car = url => (
    (dispatch) => {
        return axios.get("/findcar")
            .then(res => dispatch({
                type: "get_cart",
                data: res.data

            }))

    }
)
export const get_delete = (id, history) => (
    (dispatch, action) => {
        console.log(id)

        return axios.get("/delete", {
            params: {
                type: "deleteOne",
                id: id,
            }
        }).then(res => 
            dispatch({
                type: "deleteOne",
                data: res.data

            })
        )
           
    }
)
export const get_add=(id,num)=>(
    (dispatch,action)=>{
        console.log(id,num)
        return axios.get("/changenum",{
            params:{
                type:"add",
                id:id,
                num:num
            }
        }).then(res=>{
            // console.log(res.data)
            dispatch({
                type:"add",
                data:res.data
            })
           
        })
    }
)

export const register = (username, password, history) => (
    (dispatch, action) => {
        console.log(username, password, history)
        if (username && password) {
            //if(flag){
            return axios.get("register", {
                params: {
                    username: username,
                    password: password
                }
            })
                .then(res => {
                    if (res.data == "注册成功") {
                        // history.push("/login")
                        // var obj = {username,password}
                        // var objStr = JSON.stringify(obj);
                        sessionStorage.setItem("username",username);
                        return history.push("/login")
                    } else {
                        Toast.info('手机号已经注册，请前往登录');
                        return history.push("/login")
                    }
                })
            // }else{
            //     Toast.info('手机号或密码有错误', 1);

            // }   
        } else {
            Toast.info('用户名或密码不能为空');
            //flag = false
        }
    }

)

export const getusername = (username) => (
    (dispatch) => {
        if (username) {
            var reg = /^1(3|5|7|8|9)\d{9}$/;
            if (reg.test(username)) {
                return dispatch({
                    type: "getusername",
                    username
                })
            } else {
                Toast.info('请输入正确的手机号');
                // flag = false;
            }
        } else {
            Toast.info('手机号不能为空');
            // flag = false
        }
    }
)


export const getuserpwd = (password) => (
    (dispatch) => {
        if (password) {
            var reg = /^\w{6,12}$/;
            if (reg.test(password)) {
                return dispatch({
                    type: "getuserpwd",
                    password
                })
            } else {
                Toast.info("密码错误请重新输入！")
                //flag=false;
            }
        } else {
            Toast.info("密码输入不能空!!!")
        }
    }
)


export const login = (username, password, history) => (
    (dispatch, action) => {
        console.log(username, password, history)   
        if (username && password) {
            return axios.get("login", {
                params: {
                    username: username,
                    password: password
                }
            })
                .then(res => {
                    if (res.data == "登录成功") {
                        // history.push("/login")
                        return history.push("/app/home")
                    } else {
                        Toast.info('手机号或密码不正确！', 1);

                    }
                })
        } else {
            Toast.info('用户名或密码不能为空');
            //flag = false
        }
    }
)
export const getRegPwd = (password) => (
    (dispatch) => {
        if (password) {
            var reg = /^\w{6,12}$/;
            if (reg.test(password)) {
                return dispatch({
                    type: "getuserpwd",
                    password
                })
            } else {
                Toast.info("请输入正确格式的密码！")
                //flag=false;
            }
        } else {
            Toast.info("密码输入不能空!!!")
        }
    }
)