import React from 'react';
import { getRawTheme, getTheme } from '../utils';

/**
 *  Tabs
 */
export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  static defaultTheme = {
    tabs: 'reui-tabs',
    tab: 'reui-tabs__tab',
    menu: 'reui-tabs__menu',
    menuItem: 'reui-tabs__menu__item',
    menuItemActive: 'reui-tabs__menu__item--active'
  };

  render() {
    const rawTheme = getRawTheme(this);
    const theme = getTheme(this);
    const menuItems = React.Children.map(this.props.children, c => c.props.title);

    return (
      <div {...theme(1, 'tabs')}>
        <Menu items={menuItems}
              onClick={this._onClick.bind(this)}
              activeItem={this.state.activeTab}
              theme={rawTheme} />
        {this._renderTabs(rawTheme)}
      </div>
    );
  }

  _onClick(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  _renderTabs(rawTheme) {
    return React.Children.map(this.props.children, (tab, i) => {
      const display = (this.state.activeTab === i)
                      ? 'block'
                      : 'none';
      const newTab = React.cloneElement(tab, {
        theme: rawTheme
      });

      return <div style={{display}} key={i}>{newTab}</div>
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

  static defaultTheme = {
    tab: Tabs.defaultTheme.tab
  };

  render() {
    const theme = getTheme(this);

    return (
      <div {...theme(1, 'tab')}>
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

  static defaultTheme = {
    menu: Tabs.defaultTheme.menu
  };

  render() {
    const theme = getTheme(this);
    const items = this.props.items.map((item, i) => {
      return <MenuItem id={i}
                       title={item}
                       active={this.props.activeItem === i}
                       onClick={this.props.onClick}
                       key={i}
                       theme={this.props.theme} />;
    });

    return (
      <div {...theme(1, 'menu')}>
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

  static defaultTheme = {
    menuItem: Tabs.defaultTheme.menuItem,
    menuItemActive: Tabs.defaultTheme.menuItemActive
  };

  render() {
    const theme = getTheme(this);
    const itemTheme = theme(1, 'menuItem', this.props.active && 'menuItemActive');

    return (
      <div {...itemTheme} onClick={this._onClick.bind(this)}>
        {this.props.title}
      </div>
    );
  }

  _onClick() {
    this.props.onClick(this.props.id);
  }
}
