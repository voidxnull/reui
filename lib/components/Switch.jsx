import React from 'react';
import BaseComponent from './BaseComponent';
import classNames from 'classnames';

export default class Switch extends BaseComponent {
  static displayName = 'Switch';

  static defaultProps = {
    caption: '',
    checked: false,
    onChange: function () {}
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
