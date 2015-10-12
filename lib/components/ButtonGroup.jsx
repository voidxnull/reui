import React from 'react';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';
import Button from './Button';

export default class ButtonGroup extends BaseComponent {
  static defaultProps = {
    activeButtons: []
  };

  static defaultTheme = {
    buttonGroup: 'reui-button-group',
    buttonLeft: Button.defaultTheme,
    buttonMid: Button.defaultTheme,
    buttonRight: Button.defaultTheme
  };

  render() {
    const theme = themeable(this._mixTheme());

    return (
      <div {...theme(1, 'buttonGroup')}>
        {this._prepareChildren()}
      </div>
    );
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      const buttonTheme = this._getButtonTheme(i);

      return React.cloneElement(child, {
        active: this._isButtonActive(i),
        theme: Object.assign({}, child.props.theme, buttonTheme)
      });
    });
  }

  _getButtonTheme(n) {
    const numChildren = React.Children.count(this.props.children);
    const themes = this._mixTheme();

    if (n === 1) {
      return themes.buttonLeft;
    } else if (n === numChildren - 1) {
      return themes.buttonRight;
    } else {
      return themes.buttonMid;
    }
  }

  _isButtonActive(buttonId) {
    return this.props.activeButtons.indexOf(buttonId) > -1;
  }
}