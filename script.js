const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  // Check if the key exists in the sampleObject
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Test the function
console.log(hasKey("red")); // Output: true
console.log(hasKey("blue")); // Output: false
console.log(hasKey("white")); // Output: true

