import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import CheckButtonGroup from 'components/CheckButtonGroup.jsx';

describe('CheckButtonGroup', () => {
  it('activates buttons on click', () => {
    let group = TestUtils.renderIntoDocument(
      <CheckButtonGroup>
        <Button title="1" />
        <Button title="2" />
      </CheckButtonGroup>
    );

    let buttons = ReactDOM.findDOMNode(group).children;

    TestUtils.Simulate.click(buttons[0]);
    TestUtils.Simulate.click(buttons[1]);

    expect(buttons[0].classList.contains('reui-button--active')).to.be.true;
    expect(buttons[1].classList.contains('reui-button--active')).to.be.true;
  });
});
