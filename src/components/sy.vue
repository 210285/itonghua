<template>
 <div id="sy">
    <tb></tb>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" class="img"/>
  </van-swipe-item>
</van-swipe>
<ul>
   <li class="li"><div><img src="img/1.png" alt=""></div>
   <div class="clear"><p class="p1">联播+谋篇”习近平“ 
      <br>
       这样部署</p>
   <br>
   <p class="l">1小时前</p> 
  <p class="l ll">置顶</p>
   </div>
   </li>
   <li class="li"><div><img src="img/1.png" alt=""></div>
   <div class="clear"><p class="p1">联播+谋篇”习近平“ 
      <br>
       这样部署</p>
   <br>
   <p class="l">1小时前</p> 
   <p class="l ll">置顶</p>
   </div>
   </li>
   <li>
       <div class="div">通化关注<span>更多></span></div>
       </li>
   <li class="li"><div><img src="img/1.png" alt=""></div>
  
   <div class="clear"><p class="p1">联播+谋篇”习近平“ 
      <br>
       这样部署</p>
   <br>
   <p class="l">1小时前</p> 
   <p class="l ll">置顶</p>
   </div>
   </li>
   <li class="li"><div><img src="img/1.png" alt=""></div>
   <div class="clear"><p class="p1">联播+谋篇”习近平“ 
      <br>
       这样部署</p>
   <br>
   <p class="l">1小时前</p> 
  
   </div>
   </li>
   <li class="li"><div><img src="img/1.png" alt=""></div>
   <div class="clear"><p class="p1">联播+谋篇”习近平“ 
      <br>
       这样部署</p>
   <br>
   <p class="l">1小时前</p> 
  
   </div>
   </li>
</ul>
<dibu></dibu>
 </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

import dibu from "../components/dibu";
import tb from "../components/tb";
export default {
     name: "sy",
      components:{
     dibu,
     tb
 },
  data() {
    return {
      images: [
        'img/lb.png',
        'img/lb2.png',
        'img/lb3.png',
      ],
    };
  },
};
</script>

<style scoped>
*{
   margin: 0;
   padding: 0;
}
#sy{
   height: 1050px;
}
.clear:after{
    content: '';
    display: block;
    clear: both;
}
.l{
    float: left;
}

.r{
    float: right;
}
  .my-swipe img{
    color: #fff;
  
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  
  }
.img{
     width: 100%;
     height: 200px;
  }
  .van-swipe__indicator--active{
     background-color: none;
    opacity: 1;
  }

  .li{
      display: flex;
 justify-content: space-around;

  }
  ul li{
     padding: 10px;
     border-bottom:1px solid #eeeeee;
  }
  ul li:nth-of-type(3){
     border: none;
  }
  .li img{
    
     height: 100px;
  }
  .li .p1{
     text-align: left;
     font-size: 16px;
     color: black;
  }
  .ll{
     border-radius: 13px;
     background-color: #ff0000;
     margin-left: 50px;
     width: 45px;
     color: #fff;
     font-size: 12px;
     height: 25px;
     line-height: 25px;
     text-align: center;
  }
  .div{
       font-size: 16px;
  }
  .div span{
     margin-left: 200px;
     font-size: 12px;
     color: #999;
  }
</stylescoped>