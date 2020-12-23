export {addStylesheetRules, buildStylesheetCSS} from './dynamic-stylesheet.js';;

import DynamicStylesheet from './dynamic-stylesheet.vue';
export default DynamicStylesheet;

if (window.Vue) {
	// Register global component
	Vue.component('dynamic-stylesheet', DynamicStylesheet);
}
