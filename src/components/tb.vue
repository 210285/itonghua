<template>
  <header id="header">
     <ul>
         <router-link tag="li" to="">
      <Icon type="ios-partly-sunny-outline" class="yi"/>
     
      </router-link>
       <router-link tag="li" to="">
          
    <h2>i通化</h2>
      
      </router-link>
    
     
      <router-link tag="li" to="">
    <van-icon name="search" class="san"/>
      
      </router-link>
     </ul>
    

    
  </header>
</template>

<script>
export default {
    name:"tb"
    
}
</script>
// scoped 属性现实了私有的样式
<style scoped>
#header{
    width: 100%;
    height: 60px;
    color: #fff;
    background: #ff0101;
    position: relative;
    border-bottom: 1px solid #ff0101;
}
#header ul{
  height: 60px;
     display: flex;
     /* justify-items: ; */
}
#header li{
     flex: 1;
     height: 60px;
     line-height: 60px;
}
.yi{
  font-size: 30px;
  margin-top: 15px;
  color: #000;
}
.san{
  font-size: 25px;
  margin-top: 20px;
}
/* #header ul{
    margin-left: 12px;
     display: flex;
  padding: 0;
  text-align: center;
}
#header li {
  display: flex;
 margin-top: 8px;
  list-style: none;
  
}
#header li:nth-of-type(2) {
  width: 220px;
}
#header ul i {
  font-size: 28px;
  
}
#header ul li:nth-of-type(1) {
  
  color: black;
}
#header ul li:nth-of-type(3) {
  font-size: 40px;
  margin-left: 30px;
 
}
#header ul li:nth-of-type(3) i{
  font-size: 35px;
 
}
h2{
    margin-top: 5px;
} */
</style>