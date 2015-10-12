import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import CheckButtonGroup from 'components/CheckButtonGroup.jsx';

describe('CheckButtonGroup', () => {
  it('renders children', () => {
    var group = TestUtils.renderIntoDocument(
      <CheckButtonGroup>
        <Button id="button-1" title="1" />
        <Button id="button-2" title="2" />
      </CheckButtonGroup>
    );

    var element = TestUtils.findRenderedDOMComponentWithClass(group, 'reui-button-group');
    expect(TestUtils.scryRenderedDOMComponentsWithClass(group, 'reui-button')).to.have.length(2);
  });
});
