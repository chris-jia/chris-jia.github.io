
window.onload = function(){
    imgLocation("container","box");
    window.onscroll = function(){
       if(checkFlag("container","box")){
            var data = {"data":[{"num":randomn(1,23)},{"num":randomn(1,23)},{"num":randomn(1,23)},{"num":randomn(1,23)},{"num":randomn(1,23)},{"num":randomn(1,23)}]};
            addPhoto(data);
       }
        imgLocation("container","box");

    }

}

function checkFlag(parent,content){
    var cparent =  document.getElementById(parent);
    var ccontent =  getChildElement(cparent,content);
    var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
    var scrollTop =document.documentElement.scrollTop||document.body.scrollTop;
    var pageTop = document.documentElement.clientHeight||document.body.clientHeight;
    if((scrollTop+pageTop)>lastContentHeight){
        return true;
    }

}

function addPhoto(data){
    var cparent =  document.getElementById("container");
    
    for(var i=0;i<data.data.length;i++){
        
        var ccontent = document.createElement("div");
        ccontent.className = "box";
        cparent.appendChild(ccontent);
        var box_img = document.createElement("div");
        box_img.className = "box_img";
        ccontent.appendChild(box_img);
        var img = document.createElement("img");
        img.src = "img/img ("+data.data[i].num+").jpg";
        box_img.appendChild(img);            
    }
    
}



function imgLocation(parent,content){
    var cparent =  document.getElementById(parent);
    var ccontent =  getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth; 
    var clientWidth = document.documentElement.clientWidth;
    var cols = Math.floor(clientWidth/imgWidth);
    cparent.style.cssText = "width:"+cols*imgWidth+"px;margin:auto;";

    var boxHeight = [];

    for(var i=0;i<ccontent.length;i++){
        if(i<cols){
            boxHeight[i]=ccontent[i].offsetHeight;
        }else{
            var num = minn(boxHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = boxHeight[num]+"px";
            ccontent[i].style.left = ccontent[num].offsetLeft+"px";

            boxHeight[num] = boxHeight[num]+ccontent[i].offsetHeight; 
        }
    }
}

function getChildElement(cparent,content){
    var contentArr = [];
    var allContent = cparent.getElementsByTagName("*");
    for(var i=0;i<allContent.length;i++){
        if(allContent[i].className==content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

function minn(arr){
    max = Math.min.apply(null,arr);
    for(var i=0;i<arr.length;i++){
        if(arr[i]==max){
            return i;
        }
    }

}


function randomn(m,n){
    return Math.floor(Math.random()*(n-m+1)+m);
}