<template>
<div>
  <div class="inputdata-body">
    <p></p>
    配送元: {{ $store.state.zipcode1 }} 配送先: {{ $store.state.zipcode2 }}<br>
    3辺の長さ: {{ totalLength }}cm ({{ $store.state.length1 }}cm×{{ $store.state.length2 }}cm×{{ $store.state.length3 }}cm)<br>
    重さ: {{ $store.state.weight }}kg
  </div>
  <div class="inputdata-bottom">
    <el-link type="warning" href="/">戻る</el-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'output-inputdata',
  computed: {
    totalLength () {
      return this.$store.getters['totalLength']
    }
  }
}
</script>

<style>
.inputdata-body {
  line-height: 150%;
}
.inputdata-bottom {
  line-height: 200%;
}
</style>
