import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

export default class Panel extends BaseComponent {
  static defaultProps = {
    title: ''
  };

  static defaultTheme = {
    panel: 'reui-panel',
    panelHeading: 'reui-panel__heading',
    panelBody: 'reui-panel__body'
  };

  render() {
    const theme = themeable(this._mixTheme());
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
