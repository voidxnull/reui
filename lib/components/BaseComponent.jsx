import React from 'react';

export default class BaseComponent extends React.Component {

  static defaultTheme = {};

  /**
   * Mixes props.theme with the default theme
   * @returns {Object}
   * @protected
   */
  _mixTheme() {
    return Object.assign({}, this.constructor.defaultTheme, this.props.theme);
  }
}