import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

// TODO: Implement theming
export default class RadioButtonGroup extends React.Component {
  static propTypes = {
    deselectable: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    deselectable: false,
    onChange: function () {}
  };

  constructor(props) {
    super(props);

    this.state = {
      activeButton: 0
    };
  }

  render() {
    return <ButtonGroup children={this._prepareChildren()}
                        activeButtons={[this.state.activeButton]}
                        theme={this.props.theme} />;
  }

  _onButtonClick(buttonId) {
    this.setState({
      activeButton: (this.props.deselectable && n === this.state.active)
                    ? null
                    : buttonId
    });
    this.props.onChange(buttonId);
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        onClick: () => this._onButtonClick(i)
      });
    });
  }
}
