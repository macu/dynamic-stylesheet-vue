<template>
	<span class="dynamic-stylesheet" style="display:none;"></span>
</template>

<script>
import {appendStylesheet} from '@macu/dynamic-stylesheet-js/index.js';

export default {
	props: {
		rules: [Object, Array],
		innerMarkupOutput: Boolean,
	},
	watch: {
		rules: {
			deep: true,
			handler() {
				this.recreateSheet();
			},
		},
		innerMarkupOutput() {
			this.recreateSheet();
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
			this.removeSheet();

			if (!this.rules) {
				return;
			}

			this.$stylesheet = appendStylesheet(this.$el, this.rules, this.innerMarkupOutput);
		},
		removeSheet() {
			if (this.$stylesheet) {
				this.$stylesheet.parentNode.removeChild(this.$stylesheet);
				this.$stylesheet = null;
			}
		},
	},
};
</script>
