import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    zipcode1: 92111,
    zipcode2: null,
    length1: null,
    length2: null,
    length3: null,
    weight: null,
    typesetcount: 0,
    price: [],
    expprice: []
  },

  mutations: {
    setZipcode: function(state) {
      state.zipcode1 = window.localStorage.getItem('zip1');
      state.zipcode2 = window.localStorage.getItem('zip2');
    },

    setLength: function(state) {
      state.length1 = window.localStorage.getItem('len1');
      state.length2 = window.localStorage.getItem('len2');
      state.length3 = window.localStorage.getItem('len3');
    },

    setWeight: function(state) {
      state.weight = window.localStorage.getItem('wei');
    },

    setPrice: function(state, {data}) {
      var DOMParser = require('xmldom').DOMParser;
      let xml = data;
      let parser = new DOMParser();
      let doc = parser.parseFromString(xml, "text/xml");
      var elm = doc.getElementsByTagName("Rate")[0];
      if(state.typesetcount === 0) {
        state.price = elm.textContent;
        ++state.typesetcount;
      } else {
        state.expprice = elm.textContent;
        state.typesetcount = 0;
      }
    }
  },

  actions: {
    getPricedata: function({commit}, {Xmldata}) {
      return axios.get('https://secure.shippingapis.com/ShippingAPI.dll', {
                params: {
                  API: 'RateV4',
                  XML: Xmldata,
                }
              })
          .then(response => {
            commit('setPrice', {data: response.data});
          });
    },

    getZipcodedata: function({commit}) {
      commit('setZipcode');
    },

    getLengthdata: function({commit}) {
      commit('setLength');
    },

    getWeightdata: function({commit}) {
      commit('setWeight');
    }
  },

  getters: {
    totalLength: function(state) {
      return Number(state.length1)
              + Number(state.length2)
              + Number(state.length3);
    },
  }
});
