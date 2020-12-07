export default (number: number): string | number =>
  [{ key: 3, value: 'Fizz' }, { key: 5, value: 'Buzz' }]
    .map(elt => number % elt.key === 0 ? elt.value : '')
    .join('') || number