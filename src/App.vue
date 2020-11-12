<template>
  <div id="app" class="cal-app">
  <span class="cal-header">
    <Header></Header>
  </span>
  <span class="cal-body">
    <router-view/>
  </span>
  <span class="cal-footer">
    <Footer></Footer>
  </span>
  </div>
</template>

<script>
import Header from './components/mainblocks/Header.vue'
import Footer from './components/mainblocks/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.cal-app {
  background-color: #ffffff;
}
.cal-header {
  line-height: 100%;
}
.cal-body {
  line-height: 500%;
}
.cal-footer {
  line-height: 300%;
}
</style>
