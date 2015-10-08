import React from 'react';

class Panel extends React.Component {
  render() {
    return (
      <div className={this.state.classNames.panel}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
