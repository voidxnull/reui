import assign from 'object-assign';
import themeable from 'react-themeable';

/**
 * Mixes props.theme with the default theme
 * @param component {Object}
 * @returns theme object {Object}
 */
export function getRawTheme(component) {
  return assign(component.constructor.defaultTheme, component.props.theme);
}

/**
 * Wraps getRawTheme with themeable.
 * @param component
 */
export function getTheme(component) {
  return themeable(getRawTheme(component));
}
