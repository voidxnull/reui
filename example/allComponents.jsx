import React from 'react';
import ReactDOM from 'react-dom';
import Reui from '../src/Reui';

import theme from '../themes/css';

import './global.css';

Reui.setGlobalTheme(theme);

let page = (
  <Reui.PageWrapper>
    <Reui.Panel title="Button">
      <p>
        <Reui.Button title="Button xs" size="xs" />
      </p>
      <p>
        <Reui.Button title="Button sm" size="sm" />
      </p>
      <p>
        <Reui.Button title="Button md" size="md" />
      </p>
      <p>
        <Reui.Button title="Button lg" size="lg" />
      </p>
      <p>
        <Reui.Button title="Active Button" active />
      </p>
      <p>
        <Reui.Button title="Disabled Button" disabled />
      </p>
    </Reui.Panel>
    <Reui.Panel title="RadioButtonGroup">
      <Reui.RadioButtonGroup>
        <Reui.Button title="One" />
        <Reui.Button title="Two" />
        <Reui.Button title="Three" />
        <Reui.Button title="Four" />
      </Reui.RadioButtonGroup>
    </Reui.Panel>
    <Reui.Panel title="CheckButtonGroup">
      <Reui.CheckButtonGroup>
        <Reui.Button title="One" />
        <Reui.Button title="Two" />
        <Reui.Button title="Three" />
        <Reui.Button title="Four" />
      </Reui.CheckButtonGroup>
    </Reui.Panel>
    <Reui.Panel title="Tabs">
      <Reui.Tabs>
        <Reui.Tab title="One">
          1
        </Reui.Tab>
        <Reui.Tab title="Two">
          2
        </Reui.Tab>
      </Reui.Tabs>
    </Reui.Panel>
    <Reui.Panel title="Tabs">
      <Reui.Tabs>
        <Reui.Tab title="One">
          1
        </Reui.Tab>
        <Reui.Tab title="Two">
          2
        </Reui.Tab>
      </Reui.Tabs>
    </Reui.Panel>
  </Reui.PageWrapper>
);

ReactDOM.render(
  page,
  document.getElementById('app-container')
);
