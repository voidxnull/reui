import React from 'react';
import ReUIComponent from './ReUIComponent';
import classNames from 'classnames';

export default class Switch extends ReUIComponent {
  static defaultProps = {
    caption: '',
    checked: false,
    onChange: function () {}
  };

  static classNames = {
    switch: 'f-switch',
    handle: 'f-switch__handle',
    handleChecked: 'f-switch__handle_checked',
    handleWrapper: 'f-switch__handle-wrapper'
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
  }

  render() {
    var switchClass = classNames(
      this.state.classNames.handle,
      this.state.checked && this.state.classNames.handleChecked
    );

    return (
      <div className={this.state.classNames.switch} onClick={this._onClick.bind(this)}>
        <div className={this.state.classNames.handleWrapper}>
          <div className={switchClass} />
        </div>
      </div>
    );
  }

  _onClick(e) {
    this.setState({
      checked: !this.state.checked
    });
    this.props.onChange(this.state.checked);
    e.stopPropagation();
  }
}