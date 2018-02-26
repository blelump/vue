// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import injector from 'vue-inject';

Vue.config.productionTip = false;

var req = require.context('./components/', true, /\.(js|vue)$/);
req.keys().forEach(function (key) {
  var component = req(key);
  injector.service(
    key.replace(/\.\/(.*)\..*/, '$1'),
    () => component.default
  );
});

Vue.use(
  injector,
  { depnedencies: true, mixins: true, directives: true, components: true }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
