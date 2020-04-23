import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';


Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
