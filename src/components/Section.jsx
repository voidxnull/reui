import React, { PropTypes } from 'react';
import { getTheme, getRawTheme } from '../utils';
import Header from './Header';

export default class Section extends React.Component {
  static propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    title: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    level: 1,
    title: null,
  };

  static defaultTheme = {
    section: 'reui-section',
    header: 'reui-section__header',
  };

  render() {
    const theme = getTheme(this);

    return (
      <section {...this.props} {...theme(1, 'section')}>
        {
          (this.props.title)
            ? <Header level={this.props.level} theme={getRawTheme(this)}>{this.props.title}</Header>
            : null
        }
        {this.props.children}
      </section>
    );
  }
}
