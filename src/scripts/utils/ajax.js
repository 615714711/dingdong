


const  $$ = (function(){
    var ajax = function(url,type,callback){
        var xhr = new XMLHttpRequest();    //1. 新建请求头
        xhr.open(type,url,true)  // 2. 打开请求头
        xhr.send()    // 3. 发送请求
        xhr.onreadystatechange = function(){  // 监听请求返回的数据
            if(xhr.readyState==4&&xhr.status==200){
                callback(JSON.parse(xhr.responseText));
            }
        }
    }

    return {
        http:ajax
    }
})();

export default $$;

// $$==> {http:ajax}