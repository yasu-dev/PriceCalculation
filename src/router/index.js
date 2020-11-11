import Vue from 'vue';
import Router from 'vue-router';

import pageCalculation from '../components/pages/Page_Calculation.vue';
import pageResult from '../components/pages/Page_Result.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageCalculation',
      component: pageCalculation
    },
    {
      path: '/pageresult',
      name: 'pageResult',
      component: pageResult
    }
  ]
});
