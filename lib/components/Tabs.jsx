import React from 'react';
import classNames from 'classnames';

/**
 *  Tabs
 */
export class Tabs extends React.Component {
  static classNames = {
    tabs: 'f-tabs',
    menu: 'f-tabs__menu',
    menuItem: 'f-tabs__menu__item',
    menuItemActive: 'f-tabs__menu__item_active',
    tab: 'f-tabs__tab'
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  render() {
    var tabs = (Array.isArray(this.props.children))
               ? this.props.children
               : [this.props.children];
    var menuItems = tabs.map(c => c.props.title);

    return (
      <div className={Tabs.classNames.tabs}>
        <Menu items={menuItems}
              onClick={this._onClick.bind(this)}
              activeItem={this.state.activeTab} />
        {this._renderTabs(tabs)}
      </div>
    );
  }

  _onClick(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  _renderTabs(tabs) {
    return tabs.map((tab, i) => {
      var display = (this.state.activeTab === i)
                    ? 'block'
                    : 'none';

      return <div style={{display}} key={i}>{tab}</div>
    })
  }
}

/**
 *  Tab
 */
export class Tab extends React.Component {
  static defaultProps = {
    title: 'No Title',
    classNames: Tabs.classNames
  };

  render() {
    return (
      <div className={Tabs.classNames.tab}>
        {this.props.children}
      </div>
    );
  }
}

/**
 *  Menu
 */
class Menu extends React.Component {
  static defaultProps = {
    items: [],
    activeItem: 0,
    classNames: Tabs.classNames,
    onClick: function () {}
  };

  render() {
    var items = this.props.items.map((item, i) => {
      return <MenuItem id={i}
                       title={item}
                       active={this.props.activeItem === i}
                       onClick={this.props.onClick}
                       key={i} />;
    });

    return (
      <div className={Tabs.classNames.menu}>
        {items}
      </div>
    );
  }
}

/**
 *  Menu Item
 */
class MenuItem extends React.Component {
  static defaultProps = {
    id: 0,
    title: '',
    active: false,
    classNames: Tabs.classNames,
    onClick: function () {}
  };

  render() {
    var className = classNames(Tabs.classNames.menuItem,
                               this.props.active && Tabs.classNames.menuItemActive);

    return (
      <div className={className} onClick={this._onClick.bind(this)}>
        {this.props.title}
      </div>
    );
  }

  _onClick() {
    this.props.onClick(this.props.id);
  }
}
