import React from 'react';
import BaseComponent from './BaseComponent';

export default class Link extends BaseComponent {
  static defaultProps = {
    className: '',
    title: '',
    to: 'javascript:;'
  };

  render() {
    return (
      <a  href={this.props.to}>
        {this.props.title}
        {this.props.children}
      </a>
    );
  }
}
