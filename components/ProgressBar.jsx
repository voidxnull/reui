import React from 'react';

class ProgressBar extends React.Component {
  static defaultProps = {
    value: 0,
    of: 100
  };

  render() {
    var style = {
      width: `${this._calculatePercent()}%`
    };

    return (
      <div className="f-progress">
        <div className="f-progress__caption">{this.props.value}/{this.props.of}</div>
        <div className="f-progress__bar" style={style} />
      </div>
    );
  }

  _calculatePercent() {
    return this.props.value / this.props.of * 100;
  }
}

export default ProgressBar;