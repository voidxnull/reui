import React from 'react';
import { getTheme } from '../utils';

export default class PageWrapper extends React.Component {
  static defaultTheme = {
    pageWrapper: 'reui-page-wrapper'
  };

  render() {
    const theme = getTheme(this);

    return (
      <div {...theme(1, 'pageWrapper')}>
        {this.props.children}
      </div>
    );
  }
}
