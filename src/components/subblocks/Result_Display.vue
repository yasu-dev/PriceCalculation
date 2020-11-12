<template>
  <div class="page-shipcal-result">
    <OutputInputdata></OutputInputdata><br>
    <OutputPrice></OutputPrice>
  </div>
</template>

<script>
import OutputInputdata from '../parts/Output_Inputdata.vue'
import OutputPrice from '../parts/Output_Price.vue'

export default {
  components: {
    OutputInputdata,
    OutputPrice
  }
}
</script>

<style>
.page-shipcal-result {
  background-color:#ffffff;
}
</style>
