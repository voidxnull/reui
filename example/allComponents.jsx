import React from 'react';
import ReactDOM from 'react-dom';
import ReUI from '../';

import theme from '../themes/css';

ReUI.setGlobalTheme(theme);

let page = (
  <ReUI.PageWrapper>
    <ReUI.Panel title="Button">
      <p>
        <ReUI.Button title="Button xs" size="xs" />
      </p>
      <p>
        <ReUI.Button title="Button sm" size="sm" />
      </p>
      <p>
        <ReUI.Button title="Button md" size="md" />
      </p>
      <p>
        <ReUI.Button title="Button lg" size="lg" />
      </p>
      <p>
        <ReUI.Button title="Active Button" active />
      </p>
      <p>
        <ReUI.Button title="Disabled Button" disabled />
      </p>
    </ReUI.Panel>
    <ReUI.Panel title="RadioButtonGroup">
      <ReUI.RadioButtonGroup>
        <ReUI.Button title="One" />
        <ReUI.Button title="Two" />
        <ReUI.Button title="Three" />
        <ReUI.Button title="Four" />
      </ReUI.RadioButtonGroup>
    </ReUI.Panel>
    <ReUI.Panel title="CheckButtonGroup">
      <ReUI.CheckButtonGroup>
        <ReUI.Button title="One" />
        <ReUI.Button title="Two" />
        <ReUI.Button title="Three" />
        <ReUI.Button title="Four" />
      </ReUI.CheckButtonGroup>
    </ReUI.Panel>
    <ReUI.Panel title="Tabs">
      <ReUI.Tabs>
        <ReUI.Tab title="One">
          1
        </ReUI.Tab>
        <ReUI.Tab title="Two">
          2
        </ReUI.Tab>
      </ReUI.Tabs>
    </ReUI.Panel>
  </ReUI.PageWrapper>
);

ReactDOM.render(
  page,
  document.getElementById('app-container')
);
