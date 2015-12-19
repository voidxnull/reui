import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import { getTheme, getRawTheme } from '../utils';

class SuggestBoxWindow extends React.Component {
  static propTypes = {
    hidden: PropTypes.bool,
    items: PropTypes.array,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    renderItem: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
    theme: PropTypes.object
  };

  static defaultProps = {
    items: [],
    hidden: true,
    selectedIndex: 0,
    onClick: (item) => {},
    onMouseEnter: (item) => {}
  };

  static defaultTheme = {
    suggestBoxWindow: 'reui-suggestbox__window',
    suggestBoxWindowLine: 'reui-suggestbox__window__line',
    suggestBoxWindowLineActive: 'reui-suggestbox__window__line--active'
  };

  _handleClick(item) {
    this.props.onClick(item);
  }

  _handleMouseEnter(item, index) {
    this.props.onMouseEnter(item, index);
  }

  _renderList() {
    let theme = getTheme(this);
    return this.props.items.map(function (item, index) {
      let selected = index === this.props.selectedIndex;

      return (
        <div onMouseDown={this._handleClick.bind(this, item)}
             onMouseEnter={this._handleMouseEnter.bind(this, item, index)}
             key={index}
             {...theme(index, 'suggestBoxWindowLine', selected && 'suggestBoxWindowLineActive')} >
          {this.props.renderItem(item)}
        </div>
      );
    }, this);
  }

  render() {
    let theme = getTheme(this);

    if (this.props.hidden) {
      return null;
    }

    return (
      <div {...theme(2, 'suggestBoxWindow')}>
        {this._renderList()}
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
    renderItem: PropTypes.func
  };

  static defaultProps = {
    activateOnFocus: true,
    delay: 300,
    fetch: () => [],
    filter: () => [],
    maxResults: 10,
    onSelect: () => {},
    renderItem: (item) => item
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
      windowHidden: true
    };
  }

  /**
   * Called on focus and change of the input
   */
  _activate() {
    let query = this.input.value;
    let items = this.state.items;

    if (items && items.length) {
      // Set query and filteredItems;
      // reset the item selection;
      this.setState({
        query: query,
        filteredItems: this._filter(items, query),
        selectedIndex: 0
      });
    }

    this.props.fetch(query, this._handleFetchCallback.bind(this));
  }

  /**
   * Shows the window and sends a request
   */
  _handleFocus(event) {
    if (this.props.activateOnFocus) {
      this.setState({windowHidden: false});
      this._activate(event)
    }
  }

  _handleBlur(event) {
    this.setState({windowHidden: true});
  }

  /**
   * Handle a press on up, down and enter
   */
  _handleKeyPress(event) {
    let code = event.keyCode;
    let selectedIndex = this.state.selectedIndex;

    if (code === 38) {

      // Move the selection up
      if (selectedIndex > 0) {
        --selectedIndex;
      }
      this.setState({selectedIndex: selectedIndex});

    } else if (code === 40) {

      // Move the selection down
      if (selectedIndex < this.state.filteredItems.length - 1) {
        ++selectedIndex;
      }
      this.setState({selectedIndex: selectedIndex});

    } else if (code === 13) {

      // Apply (_select) the selection
      this._select(this.state.filteredItems[this.state.selectedIndex]);
    }
  }

  /**
   * Call _activate after delay
   */
  _handleChange(event) {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    let timer = setTimeout(this._activate.bind(this), this.props.delay);
    this.setState({
      timer: timer,
      windowHidden: false
    });
  }

  /**
   * Applies the item, calls the onSelect callback and hides the window
   */
  _select(item) {
    this.input.value = this.props.renderItem(item);
    this.props.onSelect(item);
    this.setState({windowHidden: true});
  }

  _handleFetchCallback(data) {
    let filtered = this._filter(data, this.state.query);

    this.setState({items: data, filteredItems: filtered});
  }

  _filter(items, query) {
    return this.props.filter(items, query)
      .slice(0, this.props.maxResults);
  }

  _handleMouseEnter(item, index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    let rawTheme = getRawTheme(this);
    let theme = getTheme(this);

    return (
      <div {...theme(1, 'suggestBoxWrapper')}>
        <TextInput ref={(c) => this.input = ReactDOM.findDOMNode(c)}
                   onFocus={this._handleFocus.bind(this)}
                   onBlur={this._handleBlur.bind(this)}
                   onChange={this._handleChange.bind(this)}
                   onKeyDown={this._handleKeyPress.bind(this)}
                   aria-expanded={!this.state.windowHidden}
                   theme={rawTheme} />
        <SuggestBoxWindow items={this.state.filteredItems}
                          hidden={this.state.windowHidden}
                          selectedIndex={this.state.selectedIndex}
                          onClick={this._select.bind(this)}
                          onMouseEnter={this._handleMouseEnter.bind(this)}
                          renderItem={this.props.renderItem}
                          theme={rawTheme} />
      </div>
    );
  }
}
