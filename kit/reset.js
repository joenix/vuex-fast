// Use Foreach
import deepeach from './deepeach';

// Use Is
import is from './is';

// Use Noop
import noop from './noop';

// Transfer
function transfer(value, custom = {}) {
  // No Value
  if ([undefined, null, 'undefined', 'null'].includes(value)) {
    return '';
  }

  // Set Types
  const types = Object.assign(
    {
      [String]: '',
      [Number]: -1,
      [Array]: [],
      [Object]: {},
      [Function]: () => {},
      [Promise]: new Promise(noop),
    },
    custom
  );

  // Get Default of Constructor
  return types[value.constructor];
}

// Export
export default (target, custom) => {
  // Export Result of Deepeach
  return deepeach(target, value => {
    // return {
    //   [key]: transfer(value, custom)
    // };
    return transfer(value, custom);
  });
};
