import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

/**
 * A universal button component.
 * Can be used as a switch.
 */
export default class Button extends BaseComponent {
  static defaultProps = {
    disabled: false,
    active: false,
    title: '',
    theme: null,
    onActive: function () {}
  };

  static defaultTheme = {
    button: 'reui-button',
    disabled: 'reui-button reui-button--disabled',
    active: 'reui-button reui-button--active'
  };

  render() {
    const theme = this._getButtonTheme(themeable(this._mixTheme()));
    const { title, children, ...otherProps } = this.props;

    return (
      <button {...otherProps} {...theme}>
        {title}
        {children}
      </button>
    );
  }

  _getButtonTheme(theme) {
    if (this.props.disabled) {
      return theme(2, 'disabled');
    } else if (this.props.active) {
      return theme(3, 'active');
    } else {
      return theme(1, 'button');
    }
  }
}
