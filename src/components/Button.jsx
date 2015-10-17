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
    size: 'md',
    onActive: function () {}
  };

  static defaultTheme = {
    button: 'reui-button',
    buttonXs: 'reui-button--xs',
    buttonSm: 'reui-button--sm',
    buttonMd: 'reui-button--md',
    buttonLg: 'reui-button--lg',
    buttonDisabled: 'reui-button reui-button--disabled',
    buttonActive: 'reui-button reui-button--active'
  };

  render() {
    const theme = this._getTheme(themeable(this._mixTheme()));
    const { title, children, ...otherProps } = this.props;

    return (
      <button {...otherProps} {...theme}>
        {title}
        {children}
      </button>
    );
  }

  _getTheme(theme) {
    let size = this._getThemeIdBySize();

    if (this.props.disabled) {
      return theme(5, 'buttonDisabled', size);
    } else if (this.props.active) {
      return theme(6, 'buttonActive', size);
    } else {
      return theme(1, 'button', size);
    }
  }

  _getThemeIdBySize() {
    if (this.props.size === 'xs') {
      return 'buttonXs';
    } else if (this.props.size === 'sm') {
      return 'buttonSm';
    } else if (this.props.size === 'lg') {
      return 'buttonLg';
    } else {
      return 'buttonMd';
    }
  }
}
