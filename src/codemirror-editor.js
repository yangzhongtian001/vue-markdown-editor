// This file is auto generated by build/build-entry.js
import Component from './codemirror-editor.vue';

const version = '1.0.13';

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
};

if (typeof window !== 'undefined' && window.Vue && window.VMdTheme) {
  Component.use(window.VMdTheme);

  install(window.Vue);
}

export default Component;
