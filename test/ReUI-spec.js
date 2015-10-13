import { expect } from 'chai';
import ReUI from 'ReUI';

describe('ReUI', () => {
  describe('.setGlobalTheme', () => {
    before(() => {
      global.oldTheme = Button.defaultTheme;
    });

    after(() => {
      Button.defaultTheme = global.oldTheme;
    });

    it('sets specified themes', () => {
      let theme = {
        button: 'testButton',
        buttonActive: 'testButtonActive',
        buttonDisabled: 'testButtonDisabled'
      };

      ReUI.setGlobalTheme({
        Button: theme
      });

      expect(ReUI.Button.defaultTheme).to.deep.equal(theme);
    });
  });
});
