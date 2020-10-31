/**
 * apply eyeshadow
 * @param {string} x right offset for positive values | 2px default
 * @param {string} y bottom offset for positive values | 4px default
 * @param {string} blur level blur | 6x default
 * @param {string} color applied color | black with opacity of 30%
 */
export const shadow = (x = 2, y = 4, blur = 6, color = "rgba(0,0,0,0.3)") => {
  return `box-shadow: ${x}px  ${y}px ${blur}px ${color};`
}

/**
 * convert px to em
 * as the calculation base, I will use the 16px base as a standard
 * 1px = 0,0625em
 * @param {string} valorPx default 1em
 */
export const pxToEm = (valorPx = "1em") => {
  return `${valorPx * 0.0625}em`
}

/**
 * apply gradient with two colors
 * @param {string} direction 'to right' | 'to left' | 'to top' | 'to bottom' |
 * @param {string} color1 first color
 * @param {string} color2 second color
 */
export const gradient = (direction, color1, color2) => {
  return `background-image: linear-gradient(${direction}, ${color1}, ${color2});`
}
