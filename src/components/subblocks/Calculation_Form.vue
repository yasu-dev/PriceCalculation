<template>
<div class="cal-form">
  <p><InputZipcode></InputZipcode></p>
  <p><InputLength></InputLength></p>
  <p><InputWeight></InputWeight></p>
  <ButtonCalculation></ButtonCalculation>
</div>
</template>

<script>
import InputZipcode from '../parts/Input_Zipcode.vue'
import InputLength from '../parts/Input_Length.vue'
import InputWeight from '../parts/Input_Weight.vue'
import ButtonCalculation from '../parts/Button_Calculation.vue'

export default {
  components: {
    InputZipcode,
    InputLength,
    InputWeight,
    ButtonCalculation
  }
}
</script>

<style>
.cal-form {
  line-height: 250%;
}
</style>
