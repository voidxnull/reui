# ReUI
A collection of themeable components.

### WARNING
**The library is in early stage of development**

## Getting started

### Install via NPM
```
npm install --save reui
```

### Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReUI from 'reui';
import defaultTheme from 'reui/themes/css';

ReUI.setGlobalTheme(defaultTheme);

ReactDOM.render(
  <ReUI.Panel>
    <ReUI.Button title="Hello World" />
  </ReUI.Panel>,
  document.body
);

```

## Create and apply themes
ReUI uses react-themeable under the hood so you can use jss, Radium, React Style, css-modules or plain classes to describe your theme.

### Create
Theme is just an object that associates components with its themes
```javascript
{
  ComponentClass: {
    componentElement: {theme}
  }
}
```

**Exapmle:**
```javascript
var theme = {
  Button: {
    button: 'button',
    buttonDisabled: 'button disabled',
    buttonActive: 'button active'
  },
  ...
}
```
See more in `themes/`

### Apply
You can apply a theme globally:
```javascript
ReUI.setGlobalTheme(theme)
```

or directly to a component:
```javascript
<Button theme={theme.Button} />
```

A theme passed as a `theme` prop will be merged with the global theme.