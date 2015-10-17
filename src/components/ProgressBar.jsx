import React from 'react';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';

export default class ProgressBar extends BaseComponent {
  static defaultProps = {
    value: 0,
    of: 100
  };

  static defaultTheme = {
    progressBar: 'reui-progress',
    bar: 'reui-progress__bar',
    caption: 'reui-progress__caption'
  };

  render() {
    const theme = themeable(this._mixTheme());
    const style = {
      width: `${this._calculatePercent()}%`
    };

    return (
      <div {...theme(1, 'progressBar')}>
        <div {...theme(2, 'caption')}>{this.props.value}/{this.props.of}</div>
        <div {...theme(3, 'bar')} style={style} />
      </div>
    );
  }

  _calculatePercent() {
    return this.props.value / this.props.of * 100;
  }
}
