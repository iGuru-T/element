const Badge = require('./src/main');

Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};

module.exports = Badge;
