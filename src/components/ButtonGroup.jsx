import React, { PropTypes } from 'react';
import { getRawTheme, getTheme } from '../utils';
import Button from './Button';

export default class ButtonGroup extends React.Component {
  static propTypes = {
    activeButtons: PropTypes.arrayOf(React.PropTypes.number),
    children: PropTypes.node,
  };

  static defaultProps = {
    activeButtons: [],
  };

  static defaultTheme = assign(Button.defaultTheme, {
    buttonGroup: 'reui-button-group',
    //button: '',
    //buttonDisabled: '',
    //buttonActive: ''
  });

  prepareChildren() {
    return React.Children.map(this.props.children, (child, i) =>
      React.cloneElement(child, {
        active: this.isButtonActive(i),
        theme: getRawTheme(this),
      })
    );
  }

  isButtonActive(buttonId) {
    return this.props.activeButtons.indexOf(buttonId) > -1;
  }

  render() {
    const theme = getTheme(this);

    return (
      <div {...theme(1, 'buttonGroup')}>
        {this.prepareChildren()}
      </div>
    );
  }
}
