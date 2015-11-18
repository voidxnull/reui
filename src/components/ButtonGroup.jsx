import React from 'react';
import assign from 'object-assign';
import { getRawTheme, getTheme } from '../utils';
import Button from './Button';

export default class ButtonGroup extends React.Component {
  static propTypes = {
    activeButtons: React.PropTypes.arrayOf(React.PropTypes.number)
  };

  static defaultProps = {
    activeButtons: []
  };

  static defaultTheme = assign(Button.defaultTheme, {
    buttonGroup: 'reui-button-group'
    //button: '',
    //buttonDisabled: '',
    //buttonActive: ''
  });

  render() {
    const theme = getTheme(this);

    return (
      <div {...theme(1, 'buttonGroup')}>
        {this._prepareChildren()}
      </div>
    );
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this._isButtonActive(i),
        theme: getRawTheme(this)
      });
    });
  }

  _isButtonActive(buttonId) {
    return this.props.activeButtons.indexOf(buttonId) > -1;
  }
}