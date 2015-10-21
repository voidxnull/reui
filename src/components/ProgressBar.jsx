import React from 'react';
import themeable from 'react-themeable';
import BaseComponent from './BaseComponent';

export default class ProgressBar extends BaseComponent {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    of: React.PropTypes.number,
    showCaption: React.PropTypes.bool
  };

  static defaultProps = {
    value: 0,
    of: 100,
    showCaption: false
  };

  static defaultTheme = {
    progressBarContainer: 'reui-progress',
    progressBar: 'reui-progress__bar',
    progressBarCaption: 'reui-progress__caption'
  };

  render() {
    const theme = themeable(this._mixTheme());
    const style = {
      width: `${this._calculatePercent()}%`
    };

    return (
      <div {...theme(1, 'progressBarContainer')}>
        {
          (this.props.showCaption)
            ? <div {...theme(2, 'progressBarCaption')}>{this.props.value}/{this.props.of}</div>
            : null
        }
        <div {...theme(3, 'progressBar')} style={style} />
      </div>
    );
  }

  _calculatePercent() {
    return this.props.value / this.props.of * 100;
  }
}
