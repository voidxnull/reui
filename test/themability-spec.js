import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import * as components from 'components';

describe('themability', () => {
  Object.keys(components).forEach((key) => {
    let componentClass = components[key];

    describe(key, () => {
      describe('_mixTheme', () => {
        it('returns an object with combined themes', () => {
          componentClass.defaultTheme = {
            one: 'one',
            three: {
              test: 'three'
            }
          };

          let component = TestUtils.renderIntoDocument(React.createElement(componentClass, {theme: {two: 'two'}}));
          expect(component._mixTheme()).to.deep.equal({
            one: 'one',
            two: 'two',
            three: {
              test: 'three'
            }
          });
        });
      });
    });
  });
});