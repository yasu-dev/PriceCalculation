<template>
  <div class="page-shipcal-result">
    <Output_Inputdata></Output_Inputdata><br>
    <Output_Price></Output_Price>
  </div>
</template>

<script>
import Output_Inputdata from '../parts/Output_Inputdata.vue';
import Output_Price from '../parts/Output_Price.vue';

export default {
  components: {
    Output_Inputdata,
    Output_Price
  }
};
</script>

<style>
.page-shipcal-result {
  background-color:#ffffff;
}
</style>
