function ajax(method,url,callback,data,flag){
    //data 是参数 
    //flag 是否异步加载
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status = 200){
                callback(xhr.responseText)
            }else{
                console.log('error')
            }
        }
    }

    method = method.toUpperCase();
    if(method == 'GET'){
        xhr.open(method,url + '?' + data, flag)
        xhr.send()
    }
    if(method == 'POST'){
        xhr.open(method,url,flag)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(data)
    }


}