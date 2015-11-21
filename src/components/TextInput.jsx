import React from 'react';
import { getTheme } from '../utils';

export default class TextInput extends React.Component {
  static defaultProps = {
    block: false
  };

  static defaultTheme = {
    input: 'reui-input'
  };

  render() {
    if (this.props.type == 'textarea') {
      return <textarea {...this.props} {...this._getInputTheme()} />;
    } else {
      return <input {...this.props} {...this._getInputTheme()} />;
    }
  }

  _getInputTheme() {
    let theme = getTheme(this);

    return theme(1,
                 'textInput',
                 this.props.block && 'textInputBlock');
  }
}
