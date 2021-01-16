export {
	addStylesheetRules,
	buildStylesheetCSS,
	appendStylesheet,
} from '@macu/dynamic-stylesheet-js/index.js';

import DynamicStylesheet from './dynamic-stylesheet.vue';
export default DynamicStylesheet;

if (window.Vue) {
	// Register global component
	Vue.component('dynamic-stylesheet', DynamicStylesheet);
}
