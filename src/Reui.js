import * as components from './components';

var Reui = {
  /**
   * Sets default theme for each component.
   * @param theme {Object}
   */
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
