import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import TextInput from 'components/TextInput';

describe('TextInput', () => {
  it('renders textarea when props.type = "textarea"', () => {
    var input = TestUtils.renderIntoDocument(
      <TextInput type="textarea" />
    );

    var element = ReactDOM.findDOMNode(input);
    expect(element.tagName).to.be.eq('TEXTAREA');
  });
});
