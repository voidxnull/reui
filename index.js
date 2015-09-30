import components from './components';

var ReUI = {};

Object.keys(components).forEach(c => {
  ReUI[c] = components[c]
});

export * from './components';
export default ReUI;
