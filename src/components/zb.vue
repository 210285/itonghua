<template>
  <div>
    <van-tabs type="card" class="tap">
      <van-tab title="广播直播">
        <div class="nr">
          <ul>
            <li class="l1"><img src="img/6.png" alt=""><span>广播频道</span></li>
            <li class="l2">
              <img src="img/4.png" alt="" class="img1">
              <div class="div"><p>综合广播</p>
              <p class="p"><img src="img/5.png" alt="" class="img2"><span>精彩节目</span></p>
              <p class="p1">10:00-11:00</p>
              </div>
            </li>
             <li class="l2">
              <img src="img/4.png" alt="" class="img1">
              <div class="div"><p>综合广播</p>
              <p class="p"><img src="img/5.png" alt="" class="img2"><span>精彩节目</span></p>
               <p class="p1">10:00-11:00</p>
              </div>
            </li>
            <li class="l2">
              <img src="img/4.png" alt="" class="img1">
              <div class="div"><p>综合广播</p>
              <p class="p"><img src="img/5.png" alt="" class="img2"><span>精彩节目</span></p>
               <p class="p1">10:00-11:00</p>
              </div>
            </li>
            <li class="l2">
              <img src="img/4.png" alt="" class="img1">
              <div class="div"><p>综合广播</p>
              <p class="p"><img src="img/5.png" alt="" class="img2"><span>精彩节目</span></p>
               <p class="p1">10:00-11:00</p>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="电视直播">
       <div class="nr">
          <ul>
           
            <li class="l2">
              <img src="img/img/1.png" alt="" class="img3">
              <div class="div"><p>新闻频道</p>
              <p class="p"><span>当前：精彩节目</span></p>
              <p class="p11">时间:10:00-11:00</p>
              </div>
              <div class="div2"> <img src="img/img/2.png" alt="" class="img4"></div>
            </li>
            
          </ul>
        </div>
      </van-tab>
      <van-tab title="现场直播">
        <div class="nr">
       <div class="bj">
         <div class="bai">
        <img src="img/img/3.png" alt="" class="img5">
        <p class="pr">热血青春&nbsp;参军报国</p>
        <div class="i">
         <p> <van-icon name="friends-o" class="prs"/><span class="psj">1.5万人参与</span></p>
        <p>  <van-icon name="clock-o" class="prs"/> <span class="psj">2020-08-08&nbsp;18:00</span> </p>
        </div>
        </div>
        <div class="bai">
        <img src="img/img/3.png" alt="" class="img5">
        <p class="pr">白衣持甲&nbsp;今朝凯旋</p>
        <div class="i">
         <p> <van-icon name="friends-o" class="prs"/><span class="psj">1.5万人参与</span></p>
        <p>  <van-icon name="clock-o" class="prs"/> <span class="psj">2020-05-08&nbsp;18:00</span> </p>
        </div>
        </div>

       </div>
        </div>
      </van-tab>
    </van-tabs>

    <dibu></dibu>
  </div>
</template>

<script>
import dibu from "../components/dibu";
export default {
  name: "zb",
  components: {
    dibu,
  },
};
</script>

<style scoped>
.i p{
  height: 20px;
  line-height: 15px;
}
.pr{
  margin: 8px 0 8px 25px;
  font-size: 14px;
  text-align: left;
  color: black;
}
.i{
  height: 30px;
  display: flex;
  
 justify-content: space-around;
}
.psj{
 
font-size: 14px;
color: #999;
}
.prs{
 
  color: #999;
  font-size: 14px;

}
.bj{
  margin-top: 12px;
  background-color: white;
}
.img5{
  width: 100%;
}
.div2{
  margin-top: 35px;
  margin-left: 30px;
}
.div>p:nth-of-type(1){
  color: black;
  font-size: 15px;
}
.p1{
  margin-top: 30px;
  font-size: 12px;
  color: #999;
}
.p11{
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}
.tap {
  margin-top: 20px;
}
.p{
  height: 30px;
  line-height: 30px;
}
.nr {
  background-color: #f9f9f9;
  height: 650px;
  border-top: 1px solid #cccccc;
  margin-top: 12px;
}
 ul li{
     padding: 10px;
     border-bottom:1px solid #eeeeee;
  }
  li{
   text-align: left;
  }
  .l1 img{
    height: 13px;
    margin-right: 10px;
  }
  .l2 span{
    color: #999;
    font-size: 13px;
  }
  .img1{
   width: 50%;
   height: 100%;
  }
   .img2{
     vertical-align: middle;
margin-right: 10px;
width: 20%;
  }
   .img3{
   width: 35%;
   height: 30%;
  }
  .img4{
   width: 50%;
   height: 40%;
  }
  .div{
    margin-left: 20px;
    width: 200px;
  }
  .l2{
    display: flex;
  }
  p{
    letter-spacing: 3px;
  }
  
  .nr ul{
     height: 650px;

  margin-top: 12px;
    background-color: white;
  }
  .l1 span{
    font-size: 14px;
      letter-spacing: 3px;
  }
</style>