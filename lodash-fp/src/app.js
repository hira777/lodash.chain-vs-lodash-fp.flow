import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';

const filterMap = flow(
  map(v => v * 2),
  filter(v => v % 2 === 0)
);

console.log('result', filterMap([1, 2, 3]));
