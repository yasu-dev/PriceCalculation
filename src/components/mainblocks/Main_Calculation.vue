<template>
<div>
  <p><CalculationDisplay></CalculationDisplay></p>
  <p><CalculationForm></CalculationForm></p>
</div>
</template>

<script>
import CalculationDisplay from '../subblocks/Calculation_Display.vue'
import CalculationForm from '../subblocks/Calculation_Form.vue'

export default {
  components: {
    CalculationDisplay,
    CalculationForm
  }
}
</script>
