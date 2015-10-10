import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Button from 'components/Button';

describe('Button', () => {
  it('has title', () => {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button" />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(div.textContent).to.equal('Test Button');
  });

  it('renders children after title', () => {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button">
        <span>1</span>
        <span>2</span>
      </Button>
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(div.textContent).to.equal('Test Button12');
  });
});
