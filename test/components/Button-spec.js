import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Button from 'components/Button';

describe('Button', () => {
  it('has title', () => {
    let button = TestUtils.renderIntoDocument(
      <Button title="Test Button" />
    );

    let domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button');
  });

  it('renders children after title', () => {
    let button = TestUtils.renderIntoDocument(
      <Button title="Test Button">
        <span>1</span>
        <span>2</span>
      </Button>
    );

    let domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(domButton.textContent).to.equal('Test Button12');
  });

  describe('states', () => {
    it('correctly renders disabled state', () => {
      let button = TestUtils.renderIntoDocument(
        <Button title="Test Button" disabled />
      );
      let domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.disabled).to.be.true;
      expect(domButton.className).to.contain('reui-button--disabled');
    });

    it('correctly renders active state', () => {
      let button = TestUtils.renderIntoDocument(
        <Button title="Test Button" active />
      );
      let domButton = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

      expect(domButton.className).to.contain('reui-button--active');
    });
  });
});
