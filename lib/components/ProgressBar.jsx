import React from 'react';
import BaseComponent from './BaseComponent';

class ProgressBar extends BaseComponent {
  static displayName = 'ProgressBar';

  static defaultProps = {
    value: 0,
    of: 100
  };

  render() {
    var style = {
      width: `${this._calculatePercent()}%`
    };

    return (
      <div className={this.state.classNames.progressBar}>
        <div className={this.state.classNames.caption}>{this.props.value}/{this.props.of}</div>
        <div className={this.state.classNames.bar} style={style} />
      </div>
    );
  }

  _calculatePercent() {
    return this.props.value / this.props.of * 100;
  }
}

export default ProgressBar;
