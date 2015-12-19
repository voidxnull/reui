import React from 'react';
import Reui from '../src/Reui';

export default (props) => {
  let listOfStrings = [
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
  
  let listOfObjects = [
    {id: 1, text: 'One'},
    {id: 2, text: 'Two'},
    {id: 3, text: 'Three'},
  ];

  function onSelect(item) {
    console.log(item);
  }

  function fetchStrings(query, callback) {
    console.log('Requesting ' + query);

    setTimeout(function () {
      callback(listOfStrings);
    }, Math.random() * (600 - 200) + 200);
  }

  function filterStrings(items, query) {
    return items.filter(function (item) {
      if (item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
  }

  function fetchObjects(query, callback) {
    console.log('Requesting ' + query);

    setTimeout(function () {
      callback(listOfObjects);
    }, Math.random() * (600 - 200) + 200);
  }

  function filterObjects(items, query) {
    return items.filter(function (item) {
      if (item.text.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        return true;
      }
    });
  }

  return (
    <div>
      <Reui.SuggestBox fetch={fetchStrings}
                       filter={filterStrings}
                       maxResults={5}
                       activateOnFocus={true}
                       onSelect={onSelect} />
      <Reui.SuggestBox fetch={fetchObjects}
                       filter={filterObjects}
                       maxResults={5}
                       activateOnFocus={true}
                       renderItem={item => `${item.id}: ${item.text}`}
                       onSelect={onSelect} />
    </div>
  );
}
