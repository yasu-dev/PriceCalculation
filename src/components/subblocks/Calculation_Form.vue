<template>
<div class="cal-form">
  <p><Input_Zipcode></Input_Zipcode></p>
  <p><Input_Length></Input_Length></p>
  <p><Input_Weight></Input_Weight></p>
  <Button_Calculation></Button_Calculation>
</div>
</template>

<script>
import Input_Zipcode from '../parts/Input_Zipcode.vue';
import Input_Length from '../parts/Input_Length.vue';
import Input_Weight from '../parts/Input_Weight.vue';
import Button_Calculation from '../parts/Button_Calculation.vue';

export default {
  components: {
    Input_Zipcode,
    Input_Length,
    Input_Weight,
    Button_Calculation
  }
};
</script>

<style>
.cal-form {
  line-height: 250%;
}
</style>
