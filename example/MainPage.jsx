import React from 'react';
import Logo from './Logo.svg';
import Reui from '../src/Reui';

export default (props) => {
  return (
    <Reui.PageWrapper>
      <header>
        <img src={Logo} alt="Reui"/>
      </header>
      <Reui.Panel title="Button">
        <Reui.Section level={3} title="Button Sizes">
          <Reui.Button title="Button xs" size="xs" />
          <Reui.Button title="Button sm" size="sm" />
          <Reui.Button title="Button md (default)" />
          <Reui.Button title="Button lg" size="lg" />
        </Reui.Section>

        <Reui.Section level={3} title="Button States">
          <Reui.Button title="Active Button" active />
          <Reui.Button title="Disabled Button" disabled />
        </Reui.Section>

        <Reui.Section level={3} title="Button Colors">
          <Reui.Button title="Primary" color="primary" />
          <Reui.Button title="Success" color="success" />
          <Reui.Button title="Warning" color="warning" />
          <Reui.Button title="Danger" color="danger" />
        </Reui.Section>
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
      <Reui.Panel title="ProgressBar">
        <Reui.ProgressBar value={20} />
        <Reui.ProgressBar value={80} showCaption />
      </Reui.Panel>
    </Reui.PageWrapper>
  );
}