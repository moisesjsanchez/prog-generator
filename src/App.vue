<template>
  <div id="app">
    <ProgGenerator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProgGenerator from './components/ProgGenerator.vue'

export default {
  name: 'app',
  components: {
    ProgGenerator
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
