import React from 'react';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';

export default class Switch extends BaseComponent {
  static propTypes = {
    caption: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    caption: '',
    checked: false,
    onChange: function () {}
  };

  static defaultTheme = {
    switch: 'reui-switch',
    handleWrapper: 'reui-switch__handle-wrapper',
    handle: 'reui-switch__handle',
    handleChecked: 'reui-switch__handle reui-switch__handle--checked'
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
  }

  render() {
    const theme = themeable(this._mixTheme());

    var handleTheme = (this.state.checked)
                      ? theme(2, 'handleChecked')
                      : theme(3, 'handle');

    return (
      <div {...theme(1, 'switch')} onClick={this._onClick.bind(this)}>
        <div {...theme(1, 'handleWrapper')}>
          <div {...handleTheme} />
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
