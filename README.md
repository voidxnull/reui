# ReUI

## WARNING
**The library is in early stage of development**

## Create and apply themes
ReUI uses react-themeable under the hood so you can use jss, Radium, React Style, plain classes or all together to describe your theme.

### Crate
Theme is just an object of class names 
```javascript
{
  ComponentClass: {
    elementOneTheme: 'class' or jss or Radium
  }
}
```

**Exapmle:**
```javascript
var theme = {
  Button: {
    button: {},
    disabled: {},
    active: {}
  }
}
```

### Apply
Set a global theme
```javascript
ReUI.setGlobalTheme(theme)
```

Set a component theme directly
```javascript
<Button theme={theme.Button} />
```

A theme passed as a `theme` prop will be merged with the global theme.