import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Button from 'components/Button';

describe('Button', () => {
  it('has title', () => {
    const button = TestUtils.renderIntoDocument(
      <Button title="Test Button" />
    );

    const domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button');
  });

  it('renders children after title', () => {
    const button = TestUtils.renderIntoDocument(
      <Button title="Test Button">
        <span>1</span>
        <span>2</span>
      </Button>
    );

    const domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button12');
  });

  describe('states', () => {
    it('correctly renders disabled state', () => {
      const button = TestUtils.renderIntoDocument(
        <Button title="Test Button" disabled />
      );
      const domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.disabled).to.be.true;
      expect(domButton.className).to.contain('reui-button--disabled');
    });

    it('correctly renders active state', () => {
      const button = TestUtils.renderIntoDocument(
        <Button title="Test Button" active />
      );
      const domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.className).to.contain('reui-button--active');
    });
  });
});
