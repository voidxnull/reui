import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup.jsx';

describe('ButtonGroup', () => {
  it('renders children', () => {
    const group = TestUtils.renderIntoDocument(
      <ButtonGroup>
        <Button id="button-1" title="1" />
        <Button id="button-2" title="2" />
      </ButtonGroup>
    );

    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(group, 'button');

    expect(buttons).to.have.length(2);
  });
});
