import React, { PropTypes } from 'react';
import { getTheme } from '../utils';

export default class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    title: PropTypes.string,
    theme: PropTypes.shape({
      button: PropTypes.string,
      buttonActive: PropTypes.string,
      buttonDisabled: PropTypes.string,
    }),
    children: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    active: false,
    title: '',
    theme: null,
    size: 'md',
  };

  static defaultTheme = {
    button: 'reui-button',
    buttonActive: 'reui-button--active',
    buttonDisabled: 'reui-button--disabled',
  };

  selectTheme(theme) {
    const size = this.selectThemeIdBySize();
    const color = this.selectThemeIdByColor();

    if (this.props.disabled) {
      return theme(1, 'button', 'buttonDisabled', size, color);
    } else if (this.props.active) {
      return theme(1, 'button', 'buttonActive', size, color);
    }

    return theme(1, 'button', size, color);
  }

  render() {
    const theme = this.selectTheme(getTheme(this));
    const { title, children, ...otherProps } = this.props;

    return (
      <button {...otherProps} {...theme}>
        {title}
        {children}
      </button>
    );
  }
}
