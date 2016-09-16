# Theming


### Creating and applying themes
Reui uses react-themeable under the hood so you can use jss, Radium, React Style, css-modules or plain classes to describe your theme.

#### Creating

The global theme is just an object that associates components with its themes
```js
{
  ComponentClass: {
    componentElement: {theme}
  }
}
```

#####Example
```js
var theme = {
  Button: {
    button: 'button',
    buttonDisabled: 'disabled',
    buttonActive: 'active'
  },
  ...
}
```
Then ```<Button disabled />``` will be rendered as
```html
<button class="button disabled" disabled></button>
```

#### Applying

You can apply a theme globally:
##### Using webpack
```js
import primaryButton from 'reui/theme/scss'

Reui.setGlobalTheme(theme)
```
##### Using plain classes
```js
import primaryButton from 'reui/theme/classes'

Reui.setGlobalTheme(theme)
```

Or directly to a component:
##### Using webpack
```js
import primaryButton from 'reui/theme/scss/ButtonPrimary.scss'

<Button theme={primaryButton}><Button>
```

##### Using plain classes
```js
import primaryButton from 'reui/theme/classes/ButtonPrimary.js'

<Button theme={primaryButton}><Button>
```

A theme passed as the `theme` prop will be merged with the global theme using `Object.assign`.

