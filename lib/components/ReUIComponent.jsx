import React from 'react';

/**
 * Base ReUI component
 * Calculates and contains state.classNames
 */
export default class ReUIComponent extends React.Component {
  static classNames = {};

  constructor(props) {
    super(props);

    this.state = {
      classNames: this._combineClassNames(props.classNames)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      classNames: this._combineClassNames(props.classNames)
    });
  }

  /**
   * Combines static classNames with parameter classNames
   * @param classNames
   * @returns {*}
   * @protected
   */
  _combineClassNames(classNames) {
    return Object.assign(this.constructor.classNames, classNames);
  }
}
