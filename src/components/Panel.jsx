import React, { PropTypes } from 'react';
import { getTheme } from '../utils';

export default class Panel extends React.Component {
  static propTypes = {
    propTypes: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  static defaultTheme = {
    panel: 'reui-panel',
    panelHeading: 'reui-panel__heading',
    panelBody: 'reui-panel__body',
  };

  render() {
    const theme = getTheme(this);
    const heading = (this.props.title.length)
                    ? <div {...theme(2, 'panelHeading')}>{this.props.title}</div>
                    : null;
    return (
      <div {...theme(1, 'panel')}>
        {heading}
        <div {...theme(3, 'panelBody')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
