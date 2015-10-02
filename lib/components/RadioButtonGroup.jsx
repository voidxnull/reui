import React from 'react';
import ReUIComponent from './ReUIComponent';
import Button from './Button';


class RadioButtonGroup extends ReUIComponent {
  static defaultProps = {
    deselectable: false,
    onChange: function () {}
  };

  static classNames = {
    buttonGroup: 'f-btn-group',
    Button: {
      button: 'f-btn',
      active: 'f-btn_active',
      disabled: 'f-btn_disabled'
    }
  };

  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      // The index of an active button
      active: 0
    });
  }

  render() {
    var children = this._prepareChildren();
    return (
      <div className={RadioButtonGroup.classNames.buttonGroup}>
        {this._prepareChildren()}
      </div>
    );
  }

  _onButtonClick(buttonId) {
    var active = (this.props.deselectable && n === this.state.active)
                 ? null
                 : buttonId;

    this.setState({
      active: active
    });
    this.props.onChange(buttonId);
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      console.log(this.state)
      return React.cloneElement(child, {
        active: this.state.active === i,
        onClick: () => this._onButtonClick(i),
        // This allows a user to redefine each button's classNames keeping
        classNames: Object.assign(this.state.classNames.Button, child.props.classNames)
      });
    });
  }
}

export default RadioButtonGroup;
