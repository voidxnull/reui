import React from 'react';
import BaseComponent from './BaseComponent';
import themeable from 'react-themeable';

export default class Header extends BaseComponent {
  static propTypes = {
    level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6])
  };

  static defaultProps = {
    level: 1
  };

  static defaultTheme = {
    header: 'reui-header',
    header1: 'reui-header--level-1',
    header2: 'reui-header--level-2',
    header3: 'reui-header--level-3',
    header4: 'reui-header--level-4',
    header5: 'reui-header--level-5',
    header6: 'reui-header--level-6'
  };

  render() {
    const theme = themeable(this._mixTheme());
    let header;

    switch (this.props.level) {
      case 1: header = <h1 {...theme(1, 'header', 'header1')}>{this.props.children}</h1>; break;
      case 2: header = <h2 {...theme(1, 'header', 'header2')}>{this.props.children}</h2>; break;
      case 3: header = <h3 {...theme(1, 'header', 'header3')}>{this.props.children}</h3>; break;
      case 4: header = <h4 {...theme(1, 'header', 'header4')}>{this.props.children}</h4>; break;
      case 5: header = <h5 {...theme(1, 'header', 'header5')}>{this.props.children}</h5>; break;
      case 6: header = <h6 {...theme(1, 'header', 'header6')}>{this.props.children}</h6>; break;
    }

    return header;
  }
}
