import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
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
      Button.classNames.button,
      active && Button.classNames.active,
      disabled && Button.classNames.disabled,
    );

    return (
      <div {...otherProps} className={className}>
        {title}
        {children}
      </div>);
  }
}

export default Button;
