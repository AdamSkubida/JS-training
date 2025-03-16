//KLASA MATH

//Math.floor(num) -> zaokrągla w dół do liczby całkowitej

console.log(Math.floor(1.8)); // === 1
console.log(Math.floor(10.6)); // === 10

//Math.ceil(num) -> zaokrągla w górę do liczby całkowitej

console.log(Math.ceil(2.2)); // === 3
console.log(Math.ceil(20.7)); // === 21

//Math.round(num) -> zaokrągla do najbliższej liczby całkowitej

console.log(Math.round(2.5)); // === 3
console.log(Math.round(5.2)); // === 5

//Math.max(num1, num2, ...) -> zwraca największą z podanych liczb

console.log(Math.max(1, 2, -1, 6)); // === 6

//Math.min(num1, num2, ...) -> zwraca najmniejszą z podanych liczb

console.log(Math.min(5, 10, -2, -10, 8)); // === -10

//Math.pow(base, exponent) -> operacja potęgowania (base = podstawa, exponent = wykładnik)

console.log(Math.pow(2, 4)); // === 2^4 = 16

console.log(Math.pow(10, -2)); // === 10^-2 = 1/100 = 0.01

//Math.random() -> zwraca zmiennoprzecinkową liczbę pseudolosową

console.log(Math.random()); // z  zakresu [0, 1)

console.log(Math.random() * (100 - 90) + 90); // z zakresu od 90 do 100

console.log(Math.random() * (10 - 1) + 1); // z zakresu od 1 do 10
