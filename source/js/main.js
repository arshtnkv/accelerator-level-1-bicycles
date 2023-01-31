import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initMenu} from './modules/init-menu';
import {initVideo} from './modules/video';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initMenu();
  initVideo();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
