import React, { PropTypes } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

// TODO: Implement theming
export default class CheckButtonGroup extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
    theme: Button.propTypes.theme,
  };

  static defaultProps = {
    onChange: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      activeButtons: [],
    };
  }

  handleButtonClick(buttonId) {
    const activeButtons = this.state.activeButtons;

    if (activeButtons.indexOf(buttonId) > -1) {
      activeButtons.splice(activeButtons.indexOf(buttonId), 1);
    } else {
      activeButtons.push(buttonId);
    }

    this.setState({ activeButtons });
    this.props.onChange(buttonId);
  }

  prepareChildren() {
    return React.Children.map(this.props.children, (child, i) =>
      React.cloneElement(child, {
        onClick: () => this.handleButtonClick(i),
      })
    );
  }

  render() {
    return (
      <ButtonGroup
        children={this.prepareChildren()}
        activeButtons={this.state.activeButtons}
        theme={this.props.theme}
      />
    );
  }
}
