import { expect } from 'chai';
import Reui from 'Reui';

describe('Reui', () => {
  describe('.setGlobalTheme', () => {
    before(() => {
      global.oldTheme = Reui.Button.defaultTheme;
    });

    after(() => {
      Reui.Button.defaultTheme = global.oldTheme;
    });

    it('sets specified themes', () => {
      const theme = {
        button: 'testButton',
        buttonActive: 'testButtonActive',
        buttonDisabled: 'testButtonDisabled',
      };

      Reui.setGlobalTheme({
        Button: theme,
      });

      expect(Reui.Button.defaultTheme).to.deep.equal(theme);
    });
  });
});
