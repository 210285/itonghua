<template>
  <div class="wd">
    <div class="hong"></div>
      <dibu></dibu>
  </div>
</template>

<script>
import dibu from "../components/dibu";
export default {
  name: "wd",
      components:{
     dibu,
    
     }
};

</script>
// scoped 属性现实了私有的样式
<style scoped>
.hong{
  width: 100%;
  background-color: #f84e4e;
  height: 250px;
}
</style>