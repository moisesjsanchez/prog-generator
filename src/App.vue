<template>
  <div id="app">
    <ProgGenerator />
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
body{
  background-color: #00adb5;
}


#app {
   font-family: 'Roboto', arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
