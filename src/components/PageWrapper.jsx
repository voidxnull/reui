import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

export default class PageWrapper extends BaseComponent {
  static defaultTheme = {
    pageWrapper: 'reui-page-wrapper'
  };

  render() {
    const theme = themeable(this._mixTheme());

    return (
      <div {...theme(1, 'pageWrapper')}>
        {this.props.children}
      </div>
    );
  }
}
