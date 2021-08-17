import Vue from 'vue';
import Vuex from 'vuex';
import actions from './modules/actions';
import count from './modules/count';
import getters from './modules/getters';
import mutations from './modules/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    message:""
  },
  actions,
  getters,
  mutations,
  modules: {
    count
  }
});