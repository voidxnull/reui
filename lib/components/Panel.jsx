import React from 'react';

class Panel extends React.Component {
  static classNames = {
    panel: 'f-panel',
    panelHeading: 'f-panel__heading',
    panelBody: 'f-panel__body'
  };

  render() {
    return (
      <div className={Panel.classNames.panel}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
