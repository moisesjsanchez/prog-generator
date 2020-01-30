<template>
  <v-app>
    <ProgGenerator />
    <Footer />
  </v-app>
</template>

<script>
import ProgGenerator from './components/ProgGenerator';
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    ProgGenerator,
    Footer
  }
};
</script>
