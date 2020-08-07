<template>
<div class="lm">
   <van-tabs type="card" class="tap">
  <van-tab title="电视栏目">
      <div class="d1"><img src="img/7.png" alt=""></div>
      <div class="d2">
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
      </div>
  </van-tab>
 
  <van-tab title="电台栏目">
      <div class="d1"><img src="img/9.png" alt=""></div>
      <div class="d2">
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
          <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
           <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
           <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
              </div>
          </div>
           <div>
              <div><img src="img/8.png" alt="">
              <p>通化新闻联播</p>
              <p>更新至2020-08-08</p>
              </div>
               <div><img src="img/8.png" alt="">
              <p>聚焦民生</p>
              <p>更新至2020-08-08</p>
              </div>
                <div><img src="img/8.png" alt="">
              <p>百姓说事</p>
              <p>更新至2020-08-08</p>
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
  name: "lm",
  components: {
    dibu,
  },
};
</script>

<style scoped>
.lm{
    height: 1100px;
}
.d2 p:nth-of-type(1){
    font-size: 14px;
    color: black;
}
.d2 p:nth-of-type(2){
    font-size: 12px;
    color: #999;
}
.d2{
    width: 96%;
    margin: 0 auto;
}
.d2 img{
    width: 92%;
}
.d2>div{
    display: flex;
    justify-content: space-around;
}
.d1{
    margin: 10px 0 10px 0;
}
.d1>img{
    width: 100%;
}
.tap{
    margin-top: 20px;
}
</style>