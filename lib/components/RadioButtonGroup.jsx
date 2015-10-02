import React from 'react';
import Button from './Button';


class RadioButtonGroup extends React.Component {
  static defaultProps = {
    deselectable: false,
    onChange: function () {}
  };

  static classNames = {
    buttonGroup: 'f-btn-group'
  };

  constructor(props) {
    super(props);

    this.state = {
      // The index of an active button
      active: 0
    };
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
      return React.cloneElement(child, {
        active: this.state.active === i,
        onClick: () => this._onButtonClick(i)
      });
    });
  }
}

export default RadioButtonGroup;
