import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

// TODO: Implement theming
export default class CheckButtonGroup extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    onChange: function () {}
  };

  constructor(props) {
    super(props);

    this.state = {
      // A set of active buttons
      activeButtons: []
    };
  }

  render() {
    return <ButtonGroup children={this._prepareChildren()}
                        activeButtons={this.state.activeButtons}
                        theme={this.props.theme} />;
  }

  _onButtonClick(buttonId) {
    var activeButtons = this.state.activeButtons;

    if (activeButtons.indexOf(buttonId) > -1) {
      activeButtons.splice(activeButtons.indexOf(buttonId), 1)
    } else {
      activeButtons.push(buttonId)
    }

    this.setState({
      activeButtons: activeButtons
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
