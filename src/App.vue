<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  height: 100vh;
  width: 100vw;
}
</style>
