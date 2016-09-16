import React from 'react';
import { getTheme } from '../utils';

export default class ProgressBar extends React.Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    of: React.PropTypes.number,
    showCaption: React.PropTypes.bool,
  };

  static defaultProps = {
    value: 0,
    of: 100,
    showCaption: false,
  };

  static defaultTheme = {
    progressBarContainer: 'reui-progress',
    progressBar: 'reui-progress__bar',
    progressBarCaption: 'reui-progress__caption',
  };


  calculatePercent() {
    return (this.props.value / this.props.of) * 100;
  }

  render() {
    const theme = getTheme(this);
    const style = {
      width: `${this.calculatePercent()}%`,
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
}
