import React from 'react';
import Immutable from 'immutable';
import themeable from 'react-themeable';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

export default class CheckButtonGroup extends ButtonGroup {
  static displayName = 'CheckButtonGroup';

  static defaultProps = {
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
      // A set of active buttons
      activeButtons: Immutable.Set()
    };
  }

  _onButtonClick(buttonId) {
    this.setState({
      activeButtons: (this.state.activeButtons.has(buttonId))
                     ? this.state.activeButtons.delete(buttonId)
                     : this.state.activeButtons.add(buttonId)
    });
    this.props.onChange(buttonId);
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      const buttonTheme = this._getButtonTheme(i);

      return React.cloneElement(child, {
        active: this.state.activeButtons.has(i),
        onClick: () => this._onButtonClick(i),
        theme: buttonTheme
      });
    });
  }
}
