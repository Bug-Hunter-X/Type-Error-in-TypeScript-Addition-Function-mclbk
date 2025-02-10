function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
      throw new Error('Invalid input types. Both arguments must be numbers.');
  }
}

let result1 = addSafe(10, 20); 
console.log(result1); // 30

// Or by type assertion if you can ensure the value is a number in the runtime
let result2 = add(10, parseInt("20") as number); 
console.log(result2); // 30

let result3 = addSafe(10, "20"); // throws Error