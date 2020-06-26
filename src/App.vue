<template>
  <div>
  <div id="app">
    <div style="width:1080px; margin:0 auto">
      <Header />
    </div>
  <div class="container"></div>
    <!--该组件会根据不同的访问路径渲染不同的组件-->
    <router-view></router-view>
  </div>
  </div>
</template>
<script>
import Home from "./views/Home";
import Header from "./components/news/Header"
export default {
   components: {
    Header,
   },
}
</script>
<style scoped>
  .container {
    margin: 30px auto ;
  }
</style>


