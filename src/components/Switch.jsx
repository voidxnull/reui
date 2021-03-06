import React from 'react';
import { getTheme } from '../utils';

export default class Switch extends React.Component {
  static propTypes = {
    caption: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  };

  static defaultProps = {
    caption: '',
    checked: false,
    onChange: () => {},
  };

  static defaultTheme = {
    switch: 'reui-switch',
    handleWrapper: 'reui-switch__handle-wrapper',
    handle: 'reui-switch__handle',
    handleChecked: 'reui-switch__handle--checked',
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }

  handleClick = (e) => {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(this.state.checked);
    e.stopPropagation();
  }

  render() {
    const theme = getTheme(this);

    return (
      <button type="button" {...theme(1, 'switch')} onClick={this.handleClick}>
        <div {...theme(1, 'handleWrapper')}>
          <div {...theme(3, 'handle', this.props.checked && 'handleChecked')} />
        </div>
      </button>
    );
  }
}
