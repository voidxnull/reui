import React, { PropTypes } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

// TODO: Implement theming
export default class RadioButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    deselectable: PropTypes.bool,
    theme: Button.theme,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    deselectable: false,
    onChange: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      activeButton: 0,
    };
  }

  handleButtonClick(buttonId) {
    const activeButton = (this.props.deselectable && buttonId === this.state.activeButton)
                         ? null
                         : buttonId;

    this.setState({ activeButton });
    this.props.onChange(buttonId);
  }

  prepareChildren() {
    return React.Children.map(this.props.children, (child, i) =>
      React.cloneElement(child, {
        onClick: this.handleButtonClick.bind(this, i),
      })
    );
  }

  render() {
    return (
      <ButtonGroup
        children={this.prepareChildren()}
        activeButtons={[this.state.activeButton]}
        theme={this.props.theme}
      />
    );
  }
}
