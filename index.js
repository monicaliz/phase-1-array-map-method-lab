const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// returns an array with title case tutorial names
//split strings at each space so each word is an element
//how to access first letter? charAt? how to access part of string? slice?


const titleCased = () => {
    return tutorials.map(tutorial => tutorial.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "))
  }
  

