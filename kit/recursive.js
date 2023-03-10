// Set Recursion
function recursion(data, prop, value, callback, can) {
  // the First
  const first = data.shift();

  // if Check Can
  if (can(data)) {
    // Set Prop
    prop[first] = callback(first);

    // in Recursion
    return recursion(data, prop[first], value, callback, can);
  }

  // Set Prop
  prop[first] = callback(first, true);
}

// Export
export default recursion;
