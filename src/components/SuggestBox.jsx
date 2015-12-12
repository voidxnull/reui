import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import { getTheme, getRawTheme } from '../utils';

class SuggestBoxWindow extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    hidden: PropTypes.bool,
    selectedIndex: PropTypes.number,
    theme: PropTypes.object,
    onClick: PropTypes.func
  };

  static defaultProps = {
    items: [],
    hidden: true,
    selectedIndex: 0,
    onClick: function () {}
  };

  static defaultTheme = {
    suggestBoxWindow: 'reui-suggestbox__window',
    suggestBoxWindowLine: 'reui-suggestbox__window__line',
    suggestBoxWindowLineActive: 'reui-suggestbox__window__line--active'
  };

  render() {
    let theme = getTheme(this);
    let style = {
      display: (this.props.hidden) ? 'none' : 'block'
    };

    return (
      <div {...theme(2, 'suggestBoxWindow')}
           style={style}>
        {this._renderList()}
      </div>
    );
  }

  _renderList() {
    let theme = getTheme(this);
    return this.props.items.map(function (item, index) {
      let selected = index === this.props.selectedIndex;

      return (
        <div onMouseDown={this.props.onClick.bind(this)}
             key={index}
             data-item={JSON.stringify(item)}
             {...theme(index, 'suggestBoxWindowLine', selected && 'suggestBoxWindowLineActive')} >
          {item}
        </div>
      );
    }, this);
  }
}


/**
 * SuggestBox fetches data from a server
 * filters the recieved data,
 * transfers the data to its child SuggestBoxWindow
 */
export default class SuggestBox extends React.Component {
  static propTypes = {
    delay: PropTypes.number,
    maxResults: PropTypes.number,
    activateOnFocus: PropTypes.bool,
    fetch: PropTypes.func,
    filter: PropTypes.func,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    delay: 300,
    maxResults: 10,
    activateOnFocus: true,
    fetch: () => [],
    filter: () => [],
    onSelect: () => {}
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
                   theme={rawTheme} />
        <SuggestBoxWindow items={this.state.filteredItems}
                          hidden={this.state.windowHidden}
                          selectedIndex={this.state.selectedIndex}
                          onClick={this._handleClickOnItem.bind(this)}
                          theme={rawTheme} />
      </div>
    );
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
   * Gets the clicked item's data and selects it.
   */
  _handleClickOnItem(event) {
    let item = JSON.parse(event.target.getAttribute('data-item'));
    this._select(item);
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
    this.input.value = item;
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
}
