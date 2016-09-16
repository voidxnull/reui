import themeable from 'react-themeable';

// TODO: Implement the theme system via decorators.
/**
 * Mixes props.theme with the default theme
 * @param component {Object}
 * @returns theme object {Object}
 */
export function getRawTheme(component) {
  return Object.assign(component.constructor.defaultTheme, component.props.theme);
}

/**
 * Wraps getRawTheme with themeable.
 * @param component
 */
export function getTheme(component) {
  return themeable(getRawTheme(component));
}
