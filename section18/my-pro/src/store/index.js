import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from '../router';
import axiosRefresh from '../axios-refresh'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    idToken: null
  },
  getters:{
    idToken: state=>state.idToken
  },
  mutations:{
    updateIdToken(state,idToken){
      state.idToken = idToken;
    }
  },
  actions:{
    login({commit,dispatch},authData){
      axios
      .post(
        '/accounts:signInWithPassword?key=AIzaSyD_MIW0u5iXeAzxB5d1QJPQqLcio8gPhJs',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    ).then(response =>{
      commit('updateIdToken',response.data.idToken);
      setTimeout(()=>{
        dispatch('refreshIdToken',response.data.idToken);
      },
      response.data.expiresIn * 1000);
      router.push('/');
    });
  },
  refreshIdToken({commit,dipatch},refreshToken){
    axiosRefresh
      .post('/token?key=AIzaSyD_MIW0u5iXeAzxB5d1QJPQqLcio8gPhJs',
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
    .then(response=>{
      commit('updateIdToken',response.data.id_token);
      setTimeout(()=>{
        dipatch('refreshIdToken',response.data.refresh_token);
      },response.data.expires_in * 1000);
    });
  },
    register({commit},authData){
      axios.post(
        '/accounts:signUp?key=AIzaSyD_MIW0u5iXeAzxB5d1QJPQqLcio8gPhJs',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    ).then(response =>{
      commit('updateIdToken',response.data.idToken);
      router.push('/');
    });
  }
  }
});