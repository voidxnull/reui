import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import Input from 'components/Input';

describe('Input', () => {
  it('renders textarea when props.type = "textarea"', () => {
    var input = TestUtils.renderIntoDocument(
      <Input type="textarea" />
    );

    var element = TestUtils.findRenderedDOMComponentWithClass(input, 'reui-input');
    expect(element.tagName).to.be.eq('TEXTAREA');
  });
});
