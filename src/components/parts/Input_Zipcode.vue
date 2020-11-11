<template>
<div id="app-zipcode">
  <span class="input-suffix-title">
    配送元ZipCode
    <el-input class="input-suffix-zipcode"
      placeholder="92111"
      v-model="$store.state.zipcode1">
    </el-input>
  </span>
  <span class="input-suffix-title">
    配送先ZipCode
    <el-input class="input-suffix-zipcode"
      placeholder="98101"
      v-model="$store.state.zipcode2">
    </el-input>
  </span>
  <el-link a href="https://tools.usps.com/zip-code-lookup.htm?byaddress"
    target="_blank"
    type="warning">ZipCode不明はこちら
  </el-link>
</div>
</template>

<script>
export default {
  name: 'app-zipcode',
  mounted () {
    this.$store.dispatch('getZipcodedata');
  }
};
</script>

<style>
.input-suffix-title {
  display: inline-block;
  line-height: 200%;
  width: 120px;
}
.input-suffix-zipcode {
  display: inline-block;
  line-height: 200%;
  width: 80px;
}
</style>
