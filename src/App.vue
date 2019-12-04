<template>
  <div id="app">
    <div class="nav-list" v-if="$route.meta.keepAlive">
      <router-link to="/content-list" class="nav-item">内容管理</router-link>
    </div>
    <div class="view-section">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left:200px;
}
.nav-list{
  width:200px;
  margin-left:-200px;
  float:left;
}
.nav-item{
  display:block;
  height:30px;
}
.view-section{
  float:left;
  width:100%;
  overflow:auto;
}
</style>
