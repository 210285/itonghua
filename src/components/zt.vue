<template>
  <div class="zt">
      <div>专题</div>
      <dibu></dibu>
  </div>
</template>

<script>
import dibu from "../components/dibu";
export default {
name: "zt",
      components:{
     dibu,
    
     }
}
</script>
<style scoped>
.zt{
    background-color: #f9f9f9;
}
.zt>div:nth-of-type(1){
    border-bottom:1px solid #eeeeee;
}
</style>