import React from 'react';
import classNames from 'classnames';

class Switch extends React.Component {
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
      Switch.classNames.handle,
      this.state.checked && Switch.classNames.handleChecked
    );

    return (
      <div className={Switch.classNames.switch} onClick={this._onClick.bind(this)}>
        <div className={Switch.classNames.handleWrapper}>
          <div className={switchClass} />
        </div>
      </div>
    );
  }

  _onClick(e) {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(this.state.checked);
    e.stopPropagation();
  }
}

export default Switch;
