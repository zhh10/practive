

//获取数据
var lock = false;
function getData(){
    if(lock == false){
        lock = true;
        ajax('get','./data.json',function(res){
            if(res){
                console.log(res)
                data = JSON.parse(res);
                renderDom(data);
                lock = false;
            }
        },true)
    }
}

//渲染数据
function renderDom(data){
    data.forEach(function(ele,index){
        var oDiv = document.createElement('div');
        var oP = document.createElement('p');
        var oLi = document.getElementsByTagName('li');
        var img = new Image(); 
        img.src = ele.img
        var oldWidth = img.width;
        var oldHeight = img.height; 
        var newWidth = 225;
        var newHeight = (225 * oldHeight)/oldWidth;
        oDiv.style.width = '225px';
        oDiv.style.height = newHeight + 20 + 'px';
        oP.innerText = ele.desc;
        oDiv.appendChild(img);
        oDiv.appendChild(oP);
        var minIndex = getMin();
        oLi[minIndex].appendChild(oDiv)
        console.log(minIndex)
    })
}

//获取最小距离
function getMin(){
    minIndex = 0;
    var oLi = document.getElementsByTagName('li');
    for(var i = 0;i<oLi.length;i++){
        if(oLi[i].offsetHeight < oLi[minIndex].offsetHeight){
            minIndex = i;
        }
    }
    return minIndex;
}

//监听滚轮事件 
window.onscroll = function(){
    var clientHeight = document.documentElement.clientHeight ;
    var scrollHeiht = this.document.documentElement.scrollTop;
    var minIndex = getMin();
    var oLi = document.getElementsByTagName('li');
    var minHeight = oLi[minIndex].offsetHeight;
    if((clientHeight+scrollHeiht)>minHeight){
        getData()
    }
    
}

getData()