<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/sy">
        <Icon type="ios-menu-outline" />
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/zb">
        <Icon type="ios-film-outline" />
        <p>直播</p>
      </router-link>
     <router-link tag="li" to="/lm">
       <Icon type="ios-football-outline" />
        <p>栏目</p>
      </router-link>
      <router-link tag="li" to="/zt">
        <Icon type="ios-calendar-outline" />
        <p>专题</p>
      </router-link>
      <router-link tag="li" to="/wd">
        <Icon type="ios-contact-outline" />
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dibu",
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 70px;
  background: white;
  left: 0;
  bottom: 0;
  position: fixed;
  border-top: 2px solid #ebe8e3;
}
#footer ul {
  display: flex;
  padding: 0;
  text-align: center;
  margin-top: 10px;
  height: 70px;
}
#footer li {
  flex: 1;
  list-style: none;
  height: 20px;
}
#footer li.active {
  color: #f03d37;
} 
#footer li.router-link-active {
  color: #f03d37;
} 
#footer ul i {
  font-size: 25px;
}
#footer ul p {
  margin-top: 0;
  font-size: 15px;
  margin-top: 5px;
}
</style>