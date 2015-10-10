import * as components from './components';

var ReUI = {
  setGlobalTheme: function (theme) {
    Object.keys(components).forEach(c => {
      if (theme.hasOwnProperty(c)) {
        components[c].defaultTheme = theme[c];
      }
    });
  }
};

// Reexport components as ReUI[component]
Object.keys(components).forEach(c => {
  ReUI[c] = components[c];
});

export * from './components';
export default ReUI;
