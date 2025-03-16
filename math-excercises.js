console.log("-------------------TEST-------------------");

//1. Zaokrąglanie liczb
//Napisz funkcję, która przyjmuje liczbę i zwraca jej wartość zaokrągloną w dół, w górę i do najbliższej liczby całkowitej.

console.log(Math.floor(2.5));
console.log(Math.ceil(3.4));
console.log(Math.round(10.2));

//2. Losowanie liczby
//Napisz funkcję, która zwróci losową liczbę całkowitą z przedziału od 1 do 10.

function rounding() {
  const random = Math.floor(Math.random() * 10) + 1;

  console.log(`Solution: ${random}`);
  return random;
}

rounding();

//3. Największa i najmniejsza liczba
//Stwórz funkcję, która przyjmuje trzy liczby i zwraca największą i najmniejszą z nich.

function foo() {
  const numRaw = [1, -1, 10];

  const theSmallest = Math.min(...numRaw);
  console.log(`The smallest num: ${theSmallest}`);

  const theHighest = Math.max(...numRaw);
  console.log(`The highest: ${theHighest}`);

  return { theSmallest, theHighest };
}

foo();

//4. Potęgowanie
//Napisz funkcję, która przyjmuje dwie liczby: podstawę i wykładnik, a następnie zwraca wynik potęgowania.

const firstNum = 8;

const secondNum = 2;

function exponetiation(base, exponent) {
  const pow = Math.pow(base, exponent);
  console.log(pow);
}

exponetiation(firstNum, secondNum);

function alternativeExponetiation(base, exponent) {
  console.log(base ** exponent);
}

alternativeExponetiation(8, 2);

//5. Rzut kostką
//Zasymuluj rzut sześcienną kostką i zwróć losową liczbę.

function rollDice() {
  const firstTry = Math.floor(Math.random() * 6) + 1;
  console.log(`Throw: ${firstTry}`);
}

rollDice();
