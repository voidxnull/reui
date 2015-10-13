import React from 'react';
import ReactDOM from 'react-dom';
import ReUI from '../';

import theme from '../themes/css';

console.log(theme)

ReUI.setGlobalTheme(theme);

let page = (
  <div>
    <ReUI.Panel>
      <ReUI.Button title="Button" />
      <br />
      <ReUI.Button title="Active Button" active />
      <br />
      <ReUI.Button title="Disabled Button" disabled />
    </ReUI.Panel>
    <ReUI.Panel>
      <ReUI.Tabs>
        <ReUI.Tab title="One">
          1
        </ReUI.Tab>
        <ReUI.Tab title="Two">
          2
        </ReUI.Tab>
      </ReUI.Tabs>
    </ReUI.Panel>
    <ReUI.Panel>
      <ReUI.RadioButtonGroup>
        <ReUI.Button title="One" />
        <ReUI.Button title="Two" />
        <ReUI.Button title="Three" />
        <ReUI.Button title="Four" />
      </ReUI.RadioButtonGroup>
    </ReUI.Panel>
    <ReUI.Panel>
      <ReUI.CheckButtonGroup>
        <ReUI.Button title="One" />
        <ReUI.Button title="Two" />
        <ReUI.Button title="Three" />
        <ReUI.Button title="Four" />
      </ReUI.CheckButtonGroup>
    </ReUI.Panel>
  </div>
);

ReactDOM.render(
  page,
  document.getElementById('app-container')
);
