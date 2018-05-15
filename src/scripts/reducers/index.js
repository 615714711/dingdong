

const defaultState = {
    username:"",
    password:"",
    lunbo:[],
    navbar:[],
    productList:[],
    menuList:[],
    anxinshucai:[],
    list:[],
    car:[]

}


export default (state=defaultState,action) => {
    console.log(action)
    switch(action.type){
       case "gologin":
       return
       break;

       case "getusername":
       return {...state,...{username:action.username}}
       break;
       
       case "getuserpwd":
       return {...state,...{password:action.password}}
       break;

       case "getRegPwd":
       return {...state,...{password:action.password}}
       break;

       case "register":
       return {...state,...{username:action.username},...{password:action.username}}
       break;

       case "login":
       return {...state,...{username:action.username},...{password:action.username}}
       break;

       case "get_carousel_top":
       return {...state,...{lunbo:action.data}}
       break;
       case "get_nav_img":
       return {...state,...{navbar:action.data}}
       break;
       case "get_product_list":
       return {...state,...{productList:action.data}}
       break;
       case "get_menu_list":
       return {...state,...{menuList:action.data}}
       break;
       case "get_anxin_list":
       return {...state,...{anxinshucai:action.data}}
       break;
       case "get_total_list":
       return {...state,...{list:action.data}}
       break;

        case "car":
       return  {...state,...{car:action.data}}
       break;

       case "get_cart":
       return  {...state,...{car:action.data}}
       break;

       case "deleteOne":
       return  {...state,...{car:action.data}}
       break;

       case "add":
       return  {...state,...{car:action.data}}
       break;

        default:
        return state;
        break;
    }
}