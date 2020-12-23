# @macu/dynamic-stylesheet-vue

Dynamically render a document stylesheet through a Vue component.

The component is rendered as a `<style>` element within a hidden `<span>` and re-rendered whenever the rules change.

Make sure you sanitize all user-supplied input that is included in stylesheet output.

## Props

| Prop | Description |
| --- | --- |
| rules | Object containing hierarchical CSS with selectors as keys to objects, and rules represented as `'propertyName': 'value'` entries. If a nested selector does not begin with a combinator (`>`, `+`, or `~`) or pseudo class/element syntax (`:`, `::`), it is rendered with a descendent combinator (` `). Selectors cam also begin with the optional `&` cursor to append to the current selector target component (example below). |
| inner-markup-output | Whether to render using `styleElement.innerHTML` instead of stylesheet API. |

## Usage

```vue
<template>
  <div class="app">
    <header>
      <h1>Demo</h1>
    </header>
    <p>App</p>
    <dynamic-stylesheet :rules="styleRules" :inner-markup-output="true"/>
  </div>
</template>

<script>
import DynamicStylesheet from './dynamic-stylesheet.vue';

export default {
  components: {
    DynamicStylesheet,
  },
  computed: {
    styleRules() {
      return {
        '.app': {
          '>header': {
            'padding': '10px 0',
            'background-color': 'pink',
            '>h1': {
              'color': 'red',
            },
          },
          'p.demo': [
            'color: blue',
            '&': ['font-weight: bold'],
          ],
        },
      };
    },
  },
};
</script>

<style lang="scss">
.app {
  >header {
    margin-bottom: 20px;
  }
}
</style>
```

Rendered stylesheet:

```css
<style type="text/css">
.app>header {
	padding: 10px 0;
	background-color: pink;
}
.app>header>h1 {
	color: red;
}
.app p.demo {
	color: blue;
}
.app p.demo {
	font-weight: bold;
}
</style>
```

## Testing

Build, start server, and access
[http://localhost:8080/demo.html](http://localhost:8080/demo.html)

```bash
npm run prod
python -m http.server 8080
```
