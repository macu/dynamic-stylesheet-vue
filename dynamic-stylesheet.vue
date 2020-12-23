<template>
	<span class="dynamic-stylesheet" style="display:none;"></span>
</template>

<script>
import {addStylesheetRules, buildStylesheetCSS} from './dynamic-stylesheet.js';

export default {
	props: {
		rules: Object,
		innerMarkupOutput: Boolean,
	},
	watch: {
		rules: {
			deep: true,
			handler() {
				this.recreateSheet();
			},
		},
	},
	mounted() {
		this.recreateSheet();
	},
	beforeDestroy() {
		this.removeSheet();
	},
	methods: {
		recreateSheet() {
			// use stylesheet API if available,
			// otherwise create a new sheet using innerHTML

			if (this.$stylesheet) {
				this.$el.removeChild(this.$stylesheet);
				this.$stylesheet = null;
			}

			if (!this.rules) {
				return;
			}

			let style = document.createElement('style');
			style.type = 'text/css';

			this.$el.appendChild(style);
			this.$stylesheet = style;

			if ((style.styleSheet || style.sheet) && !this.innerMarkupOutput) {
				addStylesheetRules(style, this.rules);
			} else {
				style.innerHTML = buildStylesheetCSS(this.rules);
			}
		},
		removeSheet() {
			if (this.$stylesheet) {
				this.$el.removeChild(this.$stylesheet);
				this.$stylesheet = null;
			}
		},
	},
};
</script>
