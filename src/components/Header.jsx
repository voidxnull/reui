import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

export default class Header extends BaseComponent {
  static defaultProps = {
    level: 1
  };

  static defaultTheme = {
    header1: 'reui-header reui-header--level-1',
    header2: 'reui-header reui-header--level-2',
    header3: 'reui-header reui-header--level-3',
    header4: 'reui-header reui-header--level-4',
    header5: 'reui-header reui-header--level-5',
    header6: 'reui-header reui-header--level-6'
  };

  render() {
    const theme = themeable(this._mixTheme());
    let header;

    switch (this.props.level) {
      case 1: header = <h1 {...theme(1, 'header1')}>{this.props.children}</h1>; break;
      case 2: header = <h2 {...theme(2, 'header2')}>{this.props.children}</h2>; break;
      case 3: header = <h3 {...theme(3, 'header3')}>{this.props.children}</h3>; break;
      case 4: header = <h4 {...theme(4, 'header4')}>{this.props.children}</h4>; break;
      case 5: header = <h5 {...theme(5, 'header5')}>{this.props.children}</h5>; break;
      case 6: header = <h6 {...theme(6, 'header6')}>{this.props.children}</h6>; break;
    }

    return header;
  }
}
