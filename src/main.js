import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faSoundcloud, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faFacebookF , faTwitter, faSoundcloud, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  render: h => h(App)
}).$mount('#app');
