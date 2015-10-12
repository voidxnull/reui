import React from 'react';
import BaseComponent from './BaseComponent';
import ButtonGroup from './ButtonGroup';
import Button from './Button';


export default class RadioButtonGroup extends BaseComponent {
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
                        activeButtons={[this.state.activeButton]} />;
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
