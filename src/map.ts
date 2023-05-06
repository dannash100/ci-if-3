export const mapTemplate = [
  ['█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█'],
  ['│', '╲', '│', '╱', '│', '╲', '│', '╱', '│', '╲', '│', '╱', '│'],
  ['█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█'],
  ['│', '╲', '│', '╱', '│', '╲', '│', '╱', '│', '╲', '│', '╱', '│'],
  ['█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█'],
  ['│', '╲', '│', '╱', '│', '╲', '│', '╱', '│', '╲', '│', '╱', '│'],
  ['█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█'],
  ['│', '╲', '│', '╱', '│', '╲', '│', '╱', '│', '╲', '│', '╱', '│'],
  ['█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█', '-', '█'],
]

/**
 * @function generateMapString
 * @description Generate a string representation of the map from map template matrix
 * @param map {string[][]} - Map template matrix
 * @example
 *     _______________________
 *    / \                      \
 *   |   |    █-█-█-█-█-█-█    |
 *    \_ |    │╲│╱│╲│╱│╲│╱│    |
 *       |    █-█-█-█-█-█-█    |
 *       |    │╲│╱│╲│╱│╲│╱│    |
 *       |    █-█-█-█-█-█-█    |
 *       |    │╲│╱│╲│╱│╲│╱│    |
 *       |    █-█-█-█-█-█-█    |
 *       |    │╲│╱│╲│╱│╲│╱│    |
 *       |    █-█-█-█-█-█-█    |
 *       |  ___________________|__
 *       \_/_____________________/
 */
export function generateMapString(map: string[][]): string {
  return `  _______________________\n / \\                      \\\n${map.reduce(
    (acc, row, i) =>
      `${acc}${
        !i ? '|   |    ' : i === 1 ? ' \\_ |    ' : '    |    '
      }${row.join('')}    |\n`,
    ''
  )}    |  ___________________|__\n    \\_/_____________________/`
}

export function generateMapString2(map: string[][]): string {
  return ` _______________________
(__    ___      __     _)
 |                     |
 |          N          |
${map.reduce(
  (acc, row, i) =>
    `${acc} |  ${i === Math.floor(map.length / 2) ? 'W' : ' '} ${row.join(
      ''
    )} ${i === Math.floor(map.length / 2) ? 'E' : ' '}  | \n`,
  ''
)} |          S          |
 |                     |
 |__    ___   __    ___|
(_______________________)`
}
/**
     _______________________
    (__    ___      __     _)
     |                     |
     |    █-█-█-█-█-█-█    |
     |    │╲│╱│╲│╱│╲│╱│    |
     |    █-█-█-█-█-█-█    |
     |    │╲│╱│╲│╱│╲│╱│    |
     |    █-█-█-█-█-█-█    |
     |    │╲│╱│╲│╱│╲│╱│    |
     |    █-█-█-█-█-█-█    |
     |    │╲│╱│╲│╱│╲│╱│    |
     |    █-█-█-█-█-█-█    |
     |__    ___   __    ___|
    (_______________________)
 */