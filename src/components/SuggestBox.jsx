import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import { getTheme, getRawTheme } from '../utils';

class SuggestBoxWindow extends React.Component {
  static propTypes = {
    hidden: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.any),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    renderItem: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
    theme: PropTypes.shape({
      suggestBoxWindow: PropTypes.string,
      suggestBoxWindowLine: PropTypes.string,
      suggestBoxWindowLineActive: PropTypes.string,
    }),
  };

  static defaultProps = {
    items: [],
    hidden: true,
    selectedIndex: 0,
    onClick: () => {},
    onMouseEnter: () => {},
  };

  static defaultTheme = {
    suggestBoxWindow: 'reui-suggestbox__window',
    suggestBoxWindowLine: 'reui-suggestbox__window__line',
    suggestBoxWindowLineActive: 'reui-suggestbox__window__line--active',
  };

  handleClick(item) {
    this.props.onClick(item);
  }

  handleMouseEnter(item, index) {
    this.props.onMouseEnter(item, index);
  }

  renderList() {
    const theme = getTheme(this);

    return this.props.items.map((item, index) => {
      const selected = index === this.props.selectedIndex;
      const handleClick = this.handleClick.bind(this, item);
      const handleMouseEnter = this.handleMouseEnter.bind(this, item, index);

      return (
        <div
          onMouseDown={handleClick}
          onMouseEnter={handleMouseEnter}
          key={index}
          {...theme(index, 'suggestBoxWindowLine', selected && 'suggestBoxWindowLineActive')}
        >
          {this.props.renderItem(item)}
        </div>
      );
    }, this);
  }

  render() {
    const theme = getTheme(this);

    if (this.props.hidden) {
      return null;
    }

    return (
      <div {...theme(2, 'suggestBoxWindow')}>
        {this.renderList()}
      </div>
    );
  }
}


/**
 * SuggestBox fetches data from a server
 * filters the recieved data,
 * transfers the data to its child SuggestBoxWindow
 */
export default class SuggestBox extends React.Component {
  static propTypes = {
    activateOnFocus: PropTypes.bool,
    delay: PropTypes.number,
    fetch: PropTypes.func,
    filter: PropTypes.func,
    maxResults: PropTypes.number,
    onSelect: PropTypes.func,
    renderItem: PropTypes.func,
  };

  static defaultProps = {
    activateOnFocus: true,
    delay: 300,
    fetch: () => [],
    filter: () => [],
    maxResults: 10,
    onSelect: () => {},
    renderItem: item => item,
  };

  static defaultTheme = {
    suggestBoxWrapper: 'reui-suggestbox',
    suggestBoxWindow: 'reui-suggestbox__window',
    suggestBoxWindowLine: 'reui-suggestbox__window__line',
    suggestBoxWindowLineActive: 'reui-suggestbox__window__line--active'
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      items: [],
      filteredItems: [],
      selectedIndex: 0,
      windowHidden: true,
    };
  }

  filterItems(items, query) {
    return this.props.filter(items, query)
      .slice(0, this.props.maxResults);
  }

  /**
   * Called on focus and change of the input
   */
  activate() {
    const query = this.input.value;
    const items = this.state.items;

    if (items && items.length) {
      // Set query and filteredItems;
      // reset the item selection;
      this.setState({
        filteredItems: this.filterItems(items, query),
        selectedIndex: 0,
        query,
      });
    }

    this.props.fetch(query, this.handleFetchCallback);
  }



  /**
   * Shows the window and sends a request
   */
  handleFocus = (event) => {
    if (this.props.activateOnFocus) {
      this.setState({ windowHidden: false });
      this.activate(event);
    }
  }

  handleBlur = () => {
    this.setState({ windowHidden: true });
  }

  /**
   * Handle a press on up, down and enter
   */
  handleKeyPress = (event) => {
    const code = event.keyCode;
    let selectedIndex = this.state.selectedIndex;

    if (code === 38) {
      // Move the selection up
      if (selectedIndex > 0) {
        selectedIndex -= 1;
      }

      this.setState({ selectedIndex });
    } else if (code === 40) {
      // Move the selection down
      if (selectedIndex < this.state.filteredItems.length - 1) {
        selectedIndex += 1;
      }

      this.setState({ selectedIndex });
    } else if (code === 13) {
      // Apply (_select) the selection
      this.handleSelect(this.state.filteredItems[this.state.selectedIndex]);
    }
  }

  /**
   * Call 'activate' after delay
   */
  handleChange = () => {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }

    const timer = setTimeout(this.activate.bind(this), this.props.delay);

    this.setState({
      timer,
      windowHidden: false,
    });
  }

  /**
   * Applies the item, calls the onSelect callback and hides the window
   */
  handleSelect = (item) => {
    this.input.value = this.props.renderItem(item);
    this.props.onSelect(item);
    this.setState({ windowHidden: true });
  }

  handleFetchCallback = (data) => {
    const filteredItems = this.filterItems(data, this.state.query);

    this.setState({ items: data, filteredItems });
  }

  handleMouseEnter = (item, index) => {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const rawTheme = getRawTheme(this);
    const theme = getTheme(this);

    return (
      <div {...theme(1, 'suggestBoxWrapper')}>
        <TextInput
          ref={node => (this.input = node)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          aria-expanded={!this.state.windowHidden}
          theme={rawTheme}
        />
        <SuggestBoxWindow
          items={this.state.filteredItems}
          hidden={this.state.windowHidden}
          selectedIndex={this.state.selectedIndex}
          onClick={this.handleSelect}
          onMouseEnter={this.handleMouseEnter}
          renderItem={this.props.renderItem}
          theme={rawTheme}
        />
      </div>
    );
  }
}
