import { map, mapValues, filter } from 'lodash-es';

// https://github.com/lodash/lodash/issues/3298#issuecomment-341685354
const chainableFunctions = { map, filter };
const chain = input => {
  let value = input;
  const wrapper = {
    ...mapValues(chainableFunctions, f => (...args) => {
      value = f(value, ...args);
      return wrapper;
    }),
    value: () => value
  };
  return wrapper;
};

const result = chain([1, 2, 3])
  .map(v => v * 2)
  .filter(v => v % 2 === 0)
  .value();

console.log('result', result);
