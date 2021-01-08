<template >
  <div id="app">
    <div style="clear:both;text-align:center;margin-bottom:10px;">
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/create">Add New</router-link>&nbsp;
      <router-link v-if="!this.$store.getters.get_is_logged_in" to="/login">Login</router-link>
      <router-link v-else to="">Logout {{this.$store.getters.get_credentials.full_name}}</router-link>
      <router-link to="/person-info">Person Info</router-link>
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
