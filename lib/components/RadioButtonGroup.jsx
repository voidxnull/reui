import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';


export default class RadioButtonGroup extends ButtonGroup {
  static displayName = 'RadioButtonGroup';

  static defaultProps = {
    deselectable: false,
    onChange: function () {}
  };

  static defaultTheme = {
    buttonGroup: 'reui-button-group',
    buttonLeft: Button.defaultTheme,
    buttonMid: Button.defaultTheme,
    buttonRight: Button.defaultTheme
  };

  constructor(props) {
    super(props);

    this.state = {
      activeButton: 0
    };
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
      const buttonTheme = this._getButtonTheme(i);

      return React.cloneElement(child, {
        active: this.state.activeButton === i,
        onClick: () => this._onButtonClick(i),
        theme: buttonTheme
      });
    });
  }
}
