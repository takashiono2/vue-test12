import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL=
  "https://firestore.googleapis.com/v1/projects/vuejs-http-46f28/databases/(default)/documents"

  const interceptorRequest = axios.interceptors.request.use(
    config => {
      console.log('interceptors request',config);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  const interceptorResponse = axios.interceptors.response.use(
    response => {
      console.log('interceptors response',response);
      return response;
    },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorRequest);
axios.interceptors.request.eject(interceptorResponse);


new Vue({
  render: h => h(App),
}).$mount('#app')
