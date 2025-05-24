
function ReverseCharacters(str) {
  let result = '';
  console.log("Original Input:", str);
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(`i = ${i}, input[i] = '${str[i]}'`);
    result += str[i];
    console.log(`result: '${result}'`);
  }
  return result;
}

// Test cases
console.log("Final Output:", ReverseCharacters("javascript")); 
console.log("Final Output:", ReverseCharacters("elyts"));      
console.log("Final Output:", ReverseCharacters("nadroj"));    
console.log("Final Output:", ReverseCharacters("abc564"));    