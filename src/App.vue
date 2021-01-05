<template>
  <div id="app">
    <div style="clear:both;text-align:center;margin-bottom:10px;">
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/create">Add New</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
