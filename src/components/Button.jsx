import React from 'react';
import { getTheme } from '../utils';

/**
 * A universal button component.
 * Can be used as a switch (using props.active).
 */
export default class Button extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    title: React.PropTypes.string,
    theme: React.PropTypes.object,
    size: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    color: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
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
    let theme = this._selectTheme(getTheme(this));
    let { title, children, ...otherProps } = this.props;

    return (
      <button {...otherProps} {...theme}>
        {title}
        {children}
      </button>
    );
  }

  _selectTheme(theme) {
    let size = this._selectThemeIdBySize();
    let color = this._selectThemeIdByColor();

    if (this.props.disabled) {
      return theme(1, 'button', 'buttonDisabled', size, color);
    } else if (this.props.active) {
      return theme(1, 'button', 'buttonActive', size, color);
    } else {
      return theme(1, 'button', size, color);
    }
  }

  _selectThemeIdBySize() {
    switch (this.props.size) {
      case 'xs': return 'buttonXs'; break;
      case 'sm': return 'buttonSm'; break;
      case 'lg': return 'buttonLg'; break;
      default: return 'buttonMd';
    }
  }

  _selectThemeIdByColor() {
    switch (this.props.color) {
      case 'primary': return 'buttonPrimary'; break;
      case 'success': return 'buttonSuccess'; break;
      case 'warning': return 'buttonWarning'; break;
      case 'danger': return 'buttonDanger'; break;
      default: return 'buttonDefault';
    }
  }
}
