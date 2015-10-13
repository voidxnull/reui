import React from 'react';
import ReactDOM from 'react-dom';
import ReUI from '../';

import theme from '../themes/css';

console.log(theme)

ReUI.setGlobalTheme(theme);

let page = (
  <div>
    <ReUI.Button title="Button" />
    <ReUI.Button title="Active Button" active />
    <ReUI.Button title="Disabled Button" disabled />
    <ReUI.Tabs>
      <ReUI.Tab title="One">
        1
      </ReUI.Tab>
      <ReUI.Tab title="Two">
        2
      </ReUI.Tab>
    </ReUI.Tabs>
    <ReUI.RadioButtonGroup>
      <ReUI.Button title="One" />
      <ReUI.Button title="Two" />
      <ReUI.Button title="Three" />
      <ReUI.Button title="Four" />
    </ReUI.RadioButtonGroup>
    <ReUI.CheckButtonGroup>
      <ReUI.Button title="One" />
      <ReUI.Button title="Two" />
      <ReUI.Button title="Three" />
      <ReUI.Button title="Four" />
    </ReUI.CheckButtonGroup>
  </div>
);

ReactDOM.render(
  page,
  document.getElementById('app-container')
);
