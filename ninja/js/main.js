Vue.component('my-card', {
  data: function () {
    return {

    }
  },
  props: ['role'],
  template:`
  <div class="mycard">
    <img :src="role.img" alt="">
    <div class="attri">
      <div class="offend">
        <img src="material/feibiao.png" alt="">
        <span>{{role.offend}}</span>
      </div>
      <div class="defend">
        <img src="material/hudun.png" alt="">
        <span>{{role.defend}}</span>
      </div>
    </div>
  </div>      
  `
})

//初始化加载 不会mounted传参
function init(){
  var timer = setInterval(function(){
    app.dollar +=2;
  },1000);
}
var app = new Vue({
  el: '#ninja',
  data: {
    ninja: [
      {img:'material/ninja (9).gif', offend:100, defend:100},
    ],
    dollar:200,
  },
  computed: {

  },
  methods:{
    add: function(){
      var num = Math.floor(Math.random()*9)+1;
      var img = 'material/ninja ('+num.toString()+').gif'
      var offend = Math.floor(Math.random()*41)+10;//10-50
      var defend = Math.floor(Math.random()*41)+10;//10-50
      var role = {
        img:img,
        offend:offend,
        defend:defend
      }
      if(this.dollar<100){
        alert("你没有足够的钱啦，快去膜大佬吧！");
        return;
      } else {
        this.dollar -= 100;
        this.ninja.push(role); 
      }
             
    },
    addMoney: function(){
      this.dollar += 10;
    },
    init: function(){
      init();
    }
  },
  mounted: function() {
    this.init();
  }

})



