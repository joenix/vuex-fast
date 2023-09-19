// Use Check
import check from './check';

// Use Is
import is from './is';

// Use Each
import foreach from './foreach';

// Use Recursive
import recursive from './recursive';

// Export
export default data => {
  // Only Loop First Level
  return check(data) || !is(data, Object)
    ? data
    : foreach(data, (value, key) => {
        // Get Multiple
        const multiple = key.split('.');

        // Check Structure
        if (multiple.length > 1) {
          // Save First
          const first = multiple[0];

          // Set Property
          const property = {};

          // Use Recursion for Transfer
          recursive(
            // Origin Object
            multiple,

            // Target Object
            property,

            // Target Value
            value,

            // Hook Callback
            (current, last) => (last ? value : {}),

            // Rule Check-In
            data => data.length,
          );

          // Json
          return { key: first, value: property[first] };
        }

        return value;
      });
};
