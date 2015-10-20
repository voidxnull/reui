import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

/**
 * A universal button component.
 * Can be used as a switch (using props.active).
 */
export default class Button extends BaseComponent {
  static propTypes = {
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    title: React.PropTypes.string,
    theme: React.PropTypes.object,
    size: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
  };

  static defaultProps = {
    disabled: false,
    active: false,
    title: '',
    theme: null,
    size: 'md'
  };

  static defaultTheme = {
    button: 'reui-button',
    buttonXs: 'reui-button--xs',
    buttonSm: 'reui-button--sm',
    buttonMd: 'reui-button--md',
    buttonLg: 'reui-button--lg',
    buttonDisabled: 'reui-button--disabled',
    buttonActive: 'reui-button--active'
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
      return theme(1, 'button', 'buttonDisabled', size);
    } else if (this.props.active) {
      return theme(1, 'button', 'buttonActive', size);
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
