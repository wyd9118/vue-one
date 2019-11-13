<template>
  <div id="app">
    <ContentList/>
  </div>
</template>
<script>
// import Login from './components/Login'
import ContentList from './components/ContentList'
export default {
  name: 'app',
  components: {
    ContentList
  }
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
}
</style>
