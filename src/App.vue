<template>
  <div id="app">
    <header-box></header-box>
    <router-view/>
    <footer-box></footer-box>
  </div>
</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
export default {
  name: 'app',
  components: {
    HeaderBox,
    FooterBox
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
