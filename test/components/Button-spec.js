import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Button from 'components/Button';

describe('Button', () => {
  it('has title', () => {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button" />
    );

    var domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button');
  });

  it('renders children after title', () => {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button">
        <span>1</span>
        <span>2</span>
      </Button>
    );

    var domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button12');
  });

  describe('states', () => {
    before(() => {
      // Set a global theme for Button
      global.oldTheme = Button.defaultTheme;
      Button.defaultTheme = {
        button: 'button',
        disabled: 'buttonDisabled',
        active: 'buttonActive'
      };
    });

    after(() => {
      // Restore the global theme
      Button.defaultTheme = global.oldTheme;
    });

    it('correctly renders disabled state', () => {
      var button = TestUtils.renderIntoDocument(
        <Button title="Test Button" disabled />
      );
      var domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.disabled).to.be.true;
      expect(domButton.className).to.be.contain('buttonDisabled');
    });

    it('correctly renders active state', () => {
      var button = TestUtils.renderIntoDocument(
        <Button title="Test Button" active />
      );
      var domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.className).to.be.contain('buttonActive');
    });
  });
});
