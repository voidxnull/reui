import React from 'react';
import Immutable from 'immutable';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';
import Button from './Button';

export default class CheckButtonGroup extends BaseComponent {
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
      active: Immutable.Set()
    };
  }

  render() {
    const theme = themeable(this._mixTheme());

    return (
      <div {...theme(1, 'buttonGroup')}>
        {this._prepareChildren()}
      </div>
    );
  }

  _onButtonClick(buttonId) {
    const active = (this.state.active.has(buttonId))
                   ? this.state.active.delete(buttonId)
                   : this.state.active.add(buttonId);

    this.setState({
      active: active
    });
    this.props.onChange(buttonId);
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      const buttonTheme = this._getButtonTheme(i);

      // TODO(Dmitry): There may be a performance issue.
      return React.cloneElement(child, {
        active: this.state.active.has(i),
        onClick: () => this._onButtonClick(i),
        // This allows a user to redefine each button's theme
        theme: buttonTheme
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
}
