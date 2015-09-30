import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import CheckButtonGroup from 'components/CheckButtonGroup.jsx';

describe('CheckButtonGroup', function() {
  it('renders children', function() {
    var group = TestUtils.renderIntoDocument(
      <CheckButtonGroup>
        <Button id="button-1" title="1" />
        <Button id="button-2" title="2" />
      </CheckButtonGroup>
    );

    var element = TestUtils.findRenderedDOMComponentWithClass(group, 'f-btn-group');
    expect(TestUtils.scryRenderedDOMComponentsWithClass(group, 'f-btn')).to.have.length(2);
  });
});
