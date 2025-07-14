// My Week-6 CSI Task
// Written By Shubhanjali Pandey.




// Function to get the first element or first 'n' elements of an array
function first(array, n) {
  // If the input is not a valid array or is empty, return an empty array
  if (!Array.isArray(array) || array.length === 0) return []

  // If no 'n' is provided, return just the first element
  if (n === undefined) {
    return array[0]
  }

  // If 'n' is negative, return an empty array
  if (n < 0) {
    return []
  }

  // Return the first 'n' elements
  return array.slice(0, n)
}

// Test Cases
console.log(first([7, 9, 0, -2]));      
console.log(first([], 3));            
console.log(first([7, 9, 0, -2], 3));   
console.log(first([7, 9, 0, -2], 6));   
console.log(first([7, 9, 0, -2], -3));  
