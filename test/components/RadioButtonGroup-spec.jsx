import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Button from 'components/Button';
import RadioButtonGroup from 'components/RadioButtonGroup.jsx';

function isButtonActive(button) {
  return button.classList.contains('reui-button--active');
}

describe('RadioButtonGroup', () => {
  it('activates a button on click and resets other buttons', () => {
    const group = TestUtils.renderIntoDocument(
      <RadioButtonGroup>
        <Button title="1" />
        <Button title="2" />
      </RadioButtonGroup>
    );

    const buttons = ReactDOM.findDOMNode(group).children;

    TestUtils.Simulate.click(buttons[0]);

    expect(isButtonActive(buttons[0])).to.be.true;
    expect(isButtonActive(buttons[1])).to.be.false;

    TestUtils.Simulate.click(buttons[1]);

    expect(isButtonActive(buttons[0])).to.be.false;
    expect(isButtonActive(buttons[1])).to.be.true;
  });
});
