<template>
<div>
  <p><Calculation_Display></Calculation_Display></p>
  <p><Calculation_Form></Calculation_Form></p>
</div>
</template>

<script>
import Calculation_Display from '../subblocks/Calculation_Display.vue';
import Calculation_Form from '../subblocks/Calculation_Form.vue';

export default {
  components: {
    Calculation_Display,
    Calculation_Form
  }
};
</script>
