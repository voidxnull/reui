import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import * as components from 'components';

describe('themability', () => {
  Object.keys(components).forEach((key) => {
    let componentClass = components[key];

    describe(key, () => {
      describe('_mixTheme', () => {
        before(() => {
          global.oldTheme = componentClass.defaultTheme;
          componentClass.defaultTheme = {
            one: 'one',
            three: {
              test: 'three'
            }
          };
        });

        after(() => {
          componentClass.defaultTheme = global.oldTheme;
        });

        it('returns an object with combined themes', () => {
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