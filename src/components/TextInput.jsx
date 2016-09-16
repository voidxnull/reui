import React, { PropTypes } from 'react';
import { getTheme } from '../utils';

export default class TextInput extends React.Component {
  static propTypes = {
    block: PropTypes.bool,
    textarea: PropTypes.bool,
    type: PropTypes.oneOf([
      'email',
      'password',
      'search',
      'tel',
      'text',
      'url',
    ]),
  };

  static defaultProps = {
    block: false,
    type: 'text',
  };

  static defaultTheme = {
    input: 'reui-input',
  };

  getInputTheme() {
    const theme = getTheme(this);

    return theme(1, 'textInput', this.props.block && 'textInputBlock');
  }

  render() {
    const theme = this.getInputTheme();

    if (this.props.textarea) {
      return <textarea {...this.props} {...theme} />;
    }

    return <input {...this.props} {...theme} />;
  }
}
