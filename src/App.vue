<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Verdana);
#app {
  width: 100%;
  height: 100%;
  font-family: 'Verdana';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #bdbdbd;
}
</style>
