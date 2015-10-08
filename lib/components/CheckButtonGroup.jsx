import React from 'react';
import Button from './Button';
import Immutable from 'immutable';

class CheckButtonGroup extends React.Component {
  static defaultProps = {
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
      // A set of active buttons
      active: Immutable.Set()
    });
  }

  render() {
    var children = this._prepareChildren();
    return (
      <div className={CheckButtonGroup.classNames.buttonGroup}>
        {this._prepareChildren()}
      </div>
    );
  }

  _onButtonClick(buttonId) {
    var active = (this.state.active.has(buttonId))
                 ? this.state.active.delete(buttonId)
                 : this.state.active.add(buttonId);

    this.setState({
      active: active
    });
    this.props.onChange(buttonId);
  }

  _prepareChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.active.has(i),
        onClick: () => this._onButtonClick(i),
        // This allows a user to redefine each button's classNames keeping
        classNames: Object.assign(this.state.classNames.Button, child.props.classNames)
      });
    });
  }
}

export default CheckButtonGroup;
