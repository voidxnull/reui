import React from 'react';
import ReUIComponent from './ReUIComponent';
import classNames from 'classnames';

export default class Button extends ReUIComponent {
  static defaultProps = {
    disabled: false,
    active: false,
    title: '',
    onActive: function () {}
  };

  static classNames = {
    button: 'f-btn',
    active: 'f-btn_active',
    disabled: 'f-btn_disabled'
  };

  render() {
    var { disabled, active, title, children, ...otherProps } = this.props;
    var className = classNames(
      this.state.classNames.button,
      active && this.state.classNames.active,
      disabled && this.state.classNames.disabled
    );

    return (
      <button {...otherProps} className={className} disabled={disabled}>
        {title}
        {children}
      </button>
    );
  }
}
