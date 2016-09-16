import React, { PropTypes } from 'react';
import { getTheme } from '../utils';

export default class Header extends React.Component {
  static propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node,
  };

  static defaultProps = {
    level: 1,
  };

  static defaultTheme = {
    header: 'reui-header',
    header1: 'reui-header--level-1',
    header2: 'reui-header--level-2',
    header3: 'reui-header--level-3',
    header4: 'reui-header--level-4',
    header5: 'reui-header--level-5',
    header6: 'reui-header--level-6',
  };

  render() {
    const theme = getTheme(this);

    switch (this.props.level) {
      case 1: return <h1 {...this.props} {...theme(1, 'header', 'header1')}>{this.props.children}</h1>;
      case 2: return <h2 {...this.props} {...theme(1, 'header', 'header2')}>{this.props.children}</h2>;
      case 3: return <h3 {...this.props} {...theme(1, 'header', 'header3')}>{this.props.children}</h3>;
      case 4: return <h4 {...this.props} {...theme(1, 'header', 'header4')}>{this.props.children}</h4>;
      case 5: return <h5 {...this.props} {...theme(1, 'header', 'header5')}>{this.props.children}</h5>;
      case 6: return <h6 {...this.props} {...theme(1, 'header', 'header6')}>{this.props.children}</h6>;
      default: return null;
    }
  }
}
