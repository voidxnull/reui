import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import CheckButtonGroup from 'components/CheckButtonGroup.jsx';

function isButtonActive(button) {
  return button.classList.contains('reui-button--active');
}

describe('CheckButtonGroup', () => {
  it('activates buttons on click', () => {
    const group = TestUtils.renderIntoDocument(
      <CheckButtonGroup>
        <Button title="1" />
        <Button title="2" />
      </CheckButtonGroup>
    );

    const buttons = ReactDOM.findDOMNode(group).children;

    TestUtils.Simulate.click(buttons[0]);
    TestUtils.Simulate.click(buttons[1]);

    expect(isButtonActive(buttons[0])).to.be.true;
    expect(isButtonActive(buttons[1])).to.be.true;
  });
});
