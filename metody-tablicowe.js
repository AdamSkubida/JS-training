//METODY TABLICOWE

//split -> zmienia słowa i zdania w tablice

const word = "apple";

const method = word.split(""); //array = ['a', 'p', 'p', 'l', 'e'];
console.log(method);

const secoundMethod = word.split(" "); //array = ['apple'];
console.log(secoundMethod);

//---------------------------\\

const sentence = "I like cars";

const sentenceMethod = sentence.split(" "); // array = ['I', 'like', 'cars'];
console.log(sentenceMethod);

const secondSentenceMethod = sentence.split(""); // array = ['I', ' ', 'l', 'i', 'k', 'e', ' ', 'c', 'a', 'r', 's'];
console.log(secondSentenceMethod);

//---------------------------------------------------------------------------------\\

//unshift() -> dodaje element do tablicy jako pierwszy
//shift() -> usuwa pierwszy element
//push() -> dodaje ostatni element do tablicy
//pop() -> usuwa ostatni element

function foo(word) {
  let firstLetter = "";
  let lastLetter = "";

  const lettersArr = word.split("");
  console.log(`Splitted word: [${lettersArr}]`);

  firstLetter = lettersArr[0];
  lastLetter = lettersArr[lettersArr.length - 1];
  console.log(`Fist letter: ${firstLetter}`);
  console.log(`Last letter: ${lastLetter}`);

  const unshiftMethod = lettersArr.unshift(lastLetter);
  console.log(`Unshifted array: [${lettersArr}]`);

  const shiftMethid = lettersArr.shift();
  console.log(`Shifted array: [${lettersArr}]`);

  const pushMethod = lettersArr.push(firstLetter);
  console.log(`Pushed array: [${lettersArr}]`);

  const popMethod = lettersArr.pop();
  console.log(`Popped arrey: [${lettersArr}]`);
}

foo(word);
