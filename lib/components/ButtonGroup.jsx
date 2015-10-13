import React from 'react';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';
import Button from './Button';

export default class ButtonGroup extends BaseComponent {
  static defaultProps = {
    activeButtons: []
  };

  static defaultTheme = {
    buttonGroup: 'reui-button-group',
    button: Button.defaultTheme
  };

  render() {
    const theme = themeable(this._mixTheme());

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
        theme: this._mixTheme().button
      });
    });
  }

  _isButtonActive(buttonId) {
    return this.props.activeButtons.indexOf(buttonId) > -1;
  }
}