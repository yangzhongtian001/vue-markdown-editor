// This file is auto generated by build/build-entry.js
import Component from './base-editor.vue';

const version = '1.2.11-beta.0';

const install = (Vue) => {
  Vue.component(Component.name, Component);
};

Component.version = version;
Component.install = install;
Component.use = function (optionsOrInstall) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(Component);
  } else {
    optionsOrInstall.install(Component);
  }

  return Component;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Component;
