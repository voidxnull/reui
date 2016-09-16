# Reui
[![Build Status](https://travis-ci.org/voidxnull/reui.svg?branch=master)](https://travis-ci.org/voidxnull/reui)

A collection of themeable React components.

### WARNING
**The library is in early stage of development**

## Getting started

### Install via NPM
```
npm install --save reui
```

### Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Reui from 'reui';

// Webpack
import defaultTheme from 'reui/theme/scss/';
// Plain classes
import defaultThemeClasses from 'reui/theme/classes/';

Reui.setGlobalTheme(defaultTheme);

ReactDOM.render(
  <Reui.Panel>
    <Reui.Button title="Hello World" />
  </Reui.Panel>,
  document.body
);

```
