<template>
<div id="app-weight">
  <span class="weight-top">
    <p>重さ</p>
  </span>
  <span class="input-suffix-weight">
    <el-input
      style="margin:0px"
      placeholder="20"
      v-model="$store.state.weight">
    </el-input>
  </span>
  kg
</div>
</template>

<script>
export default {
  name: 'app-weight',
  mounted () {
    this.$store.dispatch('getWeightdata');
  }
};
</script>

<style>
.weight-top {
  font-size: 15px;
  line-height: 10%;
}
.input-suffix-weight {
  display: inline-block;
  width: 60px;
}
</style>
