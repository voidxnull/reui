import React, { PropTypes } from 'react';
import { getRawTheme, getTheme } from '../utils';

/**
 *  Tabs
 */
export class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultTheme = {
    tabs: 'reui-tabs',
    tab: 'reui-tabs__tab',
    menu: 'reui-tabs__menu',
    menuItem: 'reui-tabs__menu__item',
    menuItemActive: 'reui-tabs__menu__item--active',
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  handleClick = (tabId) => {
    this.setState({
      activeTab: tabId,
    });
  }

  renderTabs(rawTheme) {
    return React.Children.map(this.props.children, (tab, i) => {
      const display = (this.state.activeTab === i)
                      ? 'block'
                      : 'none';
      const newTab = React.cloneElement(tab, {
        theme: rawTheme,
      });

      return <div style={{ display }} key={i}>{newTab}</div>;
    });
  }


  render() {
    const rawTheme = getRawTheme(this);
    const theme = getTheme(this);
    const menuItems = React.Children.map(this.props.children, c => c.props.title);

    return (
      <div {...theme(1, 'tabs')}>
        <Menu
          items={menuItems}
          onClick={this.handleClick}
          activeItem={this.state.activeTab}
          theme={rawTheme}
        />
        {this.renderTabs(rawTheme)}
      </div>
    );
  }
}

/**
 *  Tab
 */
export class Tab extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    title: 'No Title',
    classNames: Tabs.classNames,
  };

  static defaultTheme = {
    tab: Tabs.defaultTheme.tab,
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
  static propTypes = {
    activeItem: PropTypes.number,
    children: PropTypes.node,
    onClick: PropTypes.func,
    theme: PropTypes.shape(),
    items: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    items: [],
    activeItem: 0,
    classNames: Tabs.classNames,
    onClick: () => {},
  };

  static defaultTheme = {
    menu: Tabs.defaultTheme.menu,
  };

  render() {
    const theme = getTheme(this);
    const items = this.props.items.map((item, i) => (
      <MenuItem
        id={i}
        title={item}
        active={this.props.activeItem === i}
        onClick={this.props.onClick}
        key={i}
        theme={this.props.theme}
      />
    ));

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
  static propTypes = {
    active: PropTypes.bool,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    classNames: Tabs.classNames,
    id: 0,
    title: '',
    onClick: () => {},
  };

  static defaultTheme = {
    menuItem: Tabs.defaultTheme.menuItem,
    menuItemActive: Tabs.defaultTheme.menuItemActive,
  };

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    const theme = getTheme(this);
    const itemTheme = theme(1, 'menuItem', this.props.active && 'menuItemActive');

    return (
      <button type="button" {...itemTheme} onClick={this.handleClick}>
        {this.props.title}
      </button>
    );
  }
}
