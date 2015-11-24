import React from 'react';
import TextInput from './TextInput';

class SuggestBoxWindow extends React.Component {
  static propTypes = {
    items: React.PropTypes.array,
    hidden: React.PropTypes.bool,
    hoveredIndex: React.PropTypes.number,
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    items: [],
    hidden: true,
    hoveredIndex: 0,
    onClick: function () {}
  };

  render() {
    var style = {
      display: (this.props.hidden) ? 'none' : 'block'
    };

    return (
      <div className="suggestbox-window"
           style={style}>
        {this._renderList()}
      </div>
    );
  }

  _renderList() {
    return this.props.items.map(function (item, index) {
      var className = "suggestbox-window-line";

      if (index === this.props.hoveredIndex) {
        className += ' active';
      }

      return (
        <div onMouseDown={this.props.onClick.bind(this)}
             className={className}
             key={index}
             data-item={JSON.stringify(item)}>
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
    delay: React.PropTypes.number,
    maxResults: React.PropTypes.number,
    activateOnFocus: React.PropTypes.bool,
    fetch: React.PropTypes.func,
    filter: React.PropTypes.func,
    onSelect: React.PropTypes.func
  };

  static defaultProps = {
    delay: 300,
    maxResults: 10,
    activateOnFocus: true,
    fetch: function () { return []; },
    filter: function () { return []; },
    onSelect: function () { }
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      items: [],
      filteredItems: [],
      hoveredIndex: 0,
      windowHidden: true
    };
  }

  render() {
    return (
      <div className="suggestbox-wrapper">
        <input ref="input"
               className="suggestbox-input"
               onFocus={this._onFocus.bind(this)}
               onBlur={this._onBlur.bind(this)}
               onChange={this._onChange.bind(this)}
               onKeyDown={this._onKeyPress.bind(this)}/>
        <SuggestBoxWindow items={this.state.filteredItems}
                          hidden={this.state.windowHidden}
                          hoveredIndex={this.state.hoveredIndex}
                          onClick={this._onClickOnItem.bind(this)} />
      </div>
    );
  }

  /**
   * Called on focus and change of the input
   */
  _activate() {
    let query = this.refs.input.value;
    let items = this.state.items;

    if (items && items.length) {
      // Set query and filteredItems;
      // reset the item selection;
      this.setState({
        query: query,
        filteredItems: this._filter(items, query),
        hoveredIndex: 0
      });
    }

    this.props.fetch(query, this._onFetchCallback.bind(this));
  }

  /**
   * Shows the window and sends a request
   */
  _onFocus(event) {
    if (this.props.activateOnFocus) {
      this.setState({windowHidden: false});
      this._activate(event)
    }
  }

  _onBlur(event) {
    this.setState({windowHidden: true});
  }

  /**
   * Gets the clicked item's data and selects it.
   */
  _onClickOnItem(event) {
    var item = JSON.parse(event.target.getAttribute('data-item'));
    this._select(item);
  }

  /**
   * Handle a press on up, down and enter
   */
  _onKeyPress(event) {
    var code = event.keyCode;
    var hoveredIndex = this.state.hoveredIndex;

    if (code === 38) {

      // Move the selection up
      if (hoveredIndex > 0) {
        --hoveredIndex;
      }
      this.setState({hoveredIndex: hoveredIndex});

    } else if (code === 40) {

      // Move the selection down
      if (hoveredIndex < this.state.filteredItems.length - 1) {
        ++hoveredIndex;
      }
      this.setState({hoveredIndex: hoveredIndex});

    } else if (code === 13) {

      // Apply (_select) the selection
      this._select(this.state.filteredItems[this.state.hoveredIndex]);
    }
  }

  /**
   * Call _activate after delay
   */
  _onChange(event) {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    var timer = setTimeout(this._activate.bind(this), this.props.delay);
    this.setState({
      timer: timer,
      windowHidden: false
    });
  }

  /**
   * Applies the item, calls the onSelect callback and hides the window
   */
  _select(item) {
    this.refs.input.value = item;
    this.props.onSelect(item);
    this.setState({windowHidden: true});
  }

  _onFetchCallback(data) {
    var filtered = this._filter(data, this.state.query);

    this.setState({items: data, filteredItems: filtered});
  }

  _filter(items, query) {
    return this.props.filter(items, query)
      .slice(0, this.props.maxResults);
  }
}