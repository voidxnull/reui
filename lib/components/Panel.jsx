import React from 'react';
import ReUIComponent from './ReUIComponent';

class Panel extends ReUIComponent {
  static classNames = {
    panel: 'f-panel',
    panelHeading: 'f-panel__heading',
    panelBody: 'f-panel__body'
  };

  render() {
    return (
      <div className={this.state.classNames.panel}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
