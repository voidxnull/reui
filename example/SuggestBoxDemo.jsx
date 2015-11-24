import React from 'react';
import Reui from '../src/Reui';

export default (props) => {
  var list = [
    'Kristopher Hopkins',
    'Dale Love',
    'Jessie Craig',
    'Lola Park',
    'Mable Mcbride',
    'Gustavo Cooper',
    'Ray Smith',
    'Delores Shelton',
    'Doug Perkins',
    'Amelia Sherman'
  ];

  function onSelect(item) {
    console.log(item);
  }

  function fetch(query, callback) {
    console.log('Requesting ' + query);

    setTimeout(function () {
      callback(list);
    }, Math.random() * (600 - 200) + 200);
  }

  function filter(items, query) {
    return items.filter(function (item) {
      if (item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
  }

  return (
      <Reui.SuggestBox fetch={fetch}
                       filter={filter}
                       maxResults={5}
                       activateOnFocus={true}
                       onSelect={onSelect} />
  );
}