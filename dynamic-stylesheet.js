// TODO handle media queries

export function addStylesheetRules(style, rules, selectors = [], index = 0) {
	if (!rules || typeof rules !== 'object') {
		return 0;
	}

	let added = 0;

	let stringRules = [];
	const addStringRules = () => {
		for (let i = 0; i < stringRules.length; i++) {
			let rule = stringRules[i].trim();
			if (!rule) {
				continue;
			}
			if (rule.charAt(rule.length - 1) !== ';') {
				stringRules[i] = rule + ';';
			}
		}
		stringRules = stringRules.join('');
		if (stringRules) {
			let selector = selectors.join('').trim();
			// Thanks https://stackoverflow.com/a/22697964/1597274
			if (!(style.sheet||{}).insertRule) {
				(style.styleSheet || style.sheet).addRule(selector, stringRules, index + added);
			} else {
				style.sheet.insertRule(selector + '{' + stringRules + '}', index + added);
			}
			added++;
		}
		stringRules = [];
	};

	if (Array.isArray(rules)) {
		for (let i = 0; i < rules.length; i++) {
			let rule = rules[i];
			if (typeof rule === 'string') { // take as literal name:value rule
				stringRules.push(rule);
			} else if (typeof rule === 'object') { // object or array
				addStringRules();
				added += addStylesheetRules(style, rule, selectors, index + added);
			}
		}
	} else {
		for (let key in rules) {
			if (rules.hasOwnProperty(key)) {
				let rule = rules[key];
				if (typeof rule === 'string') {
					stringRules.push(key + ':' + rule + ';');
				} else if (typeof rule === 'object') { // object or string
					addStringRules();
					if (key.charAt(0) === '&') {
						key = key.substr(1);
					} else if (['>', ':', '+', '~', ' '].indexOf(key.charAt(0)) < 0) {
						key = ' ' + key; // descendent selector
					}
					added += addStylesheetRules(style, rule, selectors.concat([key]), index + added);
				}
			}
		}
	}

	addStringRules();

	return added;
}

export function buildStylesheetCSS(rules, selectors = []) {
	if (!rules || typeof rules !== 'object') {
		return 0;
	}

	let added = '';

	let stringRules = [];
	const addStringRules = () => {
		let compiledStringRules = [];
		for (let i = 0; i < stringRules.length; i++) {
			let rule = stringRules[i].trim();
			if (!rule) {
				// Remove blank rules from output
				continue;
			}
			if (rule.charAt(rule.length - 1) === ';') {
				compiledStringRules.push(rule);
			} else {
				compiledStringRules.push(rule + ';');
			}
		}
		if (compiledStringRules.length) {
			compiledStringRules = compiledStringRules.join('\n\t');
			let selector = selectors.join('').trim();
			added += '\n' + selector + ' {\n\t' + compiledStringRules + '\n}';
		}
		stringRules = [];
	};

	if (Array.isArray(rules)) {
		for (let i = 0; i < rules.length; i++) {
			let rule = rules[i];
			if (typeof rule === 'string') { // take as literal name:value rule
				stringRules.push(rule);
			} else if (typeof rule === 'object') { // object or array
				addStringRules();
				added += buildStylesheetCSS(rule, selectors);
			}
		}
	} else {
		for (let key in rules) {
			if (rules.hasOwnProperty(key)) {
				let rule = rules[key];
				if (typeof rule === 'string') {
					stringRules.push(key + ': ' + rule + ';');
				} else if (typeof rule === 'object') { // object or string
					addStringRules();
					if (key.charAt(0) === '&') {
						key = key.substr(1);
					} else if (['>', ':', '+', '~', ' '].indexOf(key.charAt(0)) < 0) {
						key = ' ' + key; // descendent selector
					}
					added += buildStylesheetCSS(rule, selectors.concat([key]));
				}
			}
		}
	}

	addStringRules();

	return added + (selectors.length ? '' : '\n');
}
