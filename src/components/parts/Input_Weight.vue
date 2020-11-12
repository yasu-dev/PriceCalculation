<template>
<div id="app-weight">
  <div>
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
  <div v-if="weightcheck" class="input-weight-message">
    31.75以下を入力してください
  </div>
</div>
</template>

<script>
export default {
  name: 'app-weight',
  mounted () {
    this.$store.dispatch('getWeightdata')
  },
  computed: {
    weightcheck () {
      return this.$store.getters['weightcheck']
    }
  }
}
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

.input-weight-message {
  color: red;
}
</style>
