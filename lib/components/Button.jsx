import React from 'react';

export default class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    active: false,
    title: '',
    onActive: function () {}
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
