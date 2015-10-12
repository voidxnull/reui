import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

export default class Panel extends BaseComponent {
  render() {
    const theme = themeable(this._mixTheme());

    return (
      <div {...theme(1, 'panel')}>
        {this.props.children}
      </div>
    );
  }
}
