import React from 'react';
import ReactDOM from 'react-dom';
import ReUI from '../';

import bootstrapTheme from '../themes/bootstrap';

ReUI.setGlobalTheme(bootstrapTheme);

let page = (
  <div>
    <ReUI.Button title="Test" />
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
)

ReactDOM.render(
  page,
  document.getElementById('app-container')
);
