import * as components from './components';

var Reui = {
  setGlobalTheme: function (theme) {
    Object.keys(components).forEach(c => {
      if (theme.hasOwnProperty(c)) {
        components[c].defaultTheme = theme[c];
      }
    });
  }
};

// Reexport components as Reui[component]
Object.keys(components).forEach(c => {
  Reui[c] = components[c];
});

export * from './components';
export default Reui;
