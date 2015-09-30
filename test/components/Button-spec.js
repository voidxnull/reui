import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Button from 'components/Button';
import { expect } from 'chai';

describe('Button', function() {
  it('has title', function() {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button" />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(button, 'div');
    expect(div.textContent).to.equal('Test Button');
  });

  // TODO: Find a better way to test children
  it('renders children after title', function() {
    var button = TestUtils.renderIntoDocument(
      <Button title="Test Button">
        <span>1</span>
        <span>2</span>
      </Button>
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(button, 'div');
    expect(div.textContent).to.equal('Test Button12');
  });
});
