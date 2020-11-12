<template>
<div id="app-length">
  <span class="length-top">
    <p>3辺の長さ</p>
  </span>
  <span class="input-suffix-length">
    <el-input
      style="margin: 0px;"
      placeholder="30"
      v-model="$store.state.length1">
    </el-input>
  </span>
  cm ×
  <span class="input-suffix-length">
    <el-input
      placeholder="40"
      v-model="$store.state.length2">
    </el-input>
  </span>
  cm ×
  <span class="input-suffix-length">
    <el-input
      placeholder="50"
      v-model="$store.state.length3">
    </el-input>
  </span>
  cm
  <div v-if="weightcheck" class="input-weight-message">
    31.75以下を入力してください
  </div>
</div>
</template>

<script>
export default {
  name: 'app-length',
  mounted () {
    this.$store.dispatch('getLengthdata')
  },
  computed: {
    lengthcheck () {
      return this.$store.getters['lengthcheck']
    }
  }

}
</script>

<style>
.length-top {
  font-size: 15px;
  line-height: 10%;
}
.input-suffix-length {
  display: inline-block;
  width: 60px;
}
</style>
