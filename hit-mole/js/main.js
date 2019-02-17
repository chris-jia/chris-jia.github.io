
function gameStart(){
    var timer = setInterval(function(){
        if(!check()){
            clearInterval(timer);
            alert("GAME OVER");
            refresh();
            return;
        }
        var index = diffRandom();
        Vue.set(app.each_status,index,true);
    },500);
}

//生成1-9内不同的随机数
function diffRandom(){
    do 
    {
        var num =(Math.floor(Math.random()*9))+1;
    }
    while(app.each_status[num]!=false);
    return num;
}

//检查是否超过四个
function check(){
    var count = 0;
    for(var i=0;i<app.each_status.length;i++){
        if(app.each_status[i]==true){
            count++;
        }
    }
    if(count>3){
        return false;
    }else{
        return true;
    }
}

function hitMole(i){
    if (app.each_status[i]==true){
        Vue.set(app.each_status,i,false);
        app.score++;
        return;        
    }
}


//刷新游戏
function refresh(){
    for(var i=0;i<app.each_status.length;i++){
        Vue.set(app.each_status,i,false);   
    }
    app.score = 0;

}
var app = new Vue({
    el: "#container",
    data: {
        score: 0,
        each_status: [false,false,false,false,false,false,false,false,false,false],
        intro: false,     
    },
    methods: {
        start: function(){
            gameStart();         
        },
        hit: function(i){
            hitMole(i);
        },
        isIntro: function(){
            if(this.intro==false){
                this.intro=true;
            }else{
                this.intro=false;
            }
        }
    }

})
