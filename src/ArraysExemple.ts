/*Arrays sont dynamque en JavaScript, donc possible d'avoir
plusieurs types dans le même array. Si passé à une fonction qui
s'attend le type number, ça ne va pas marcher*/ 
let numbers = [1, 2, '3'];
console.log(numbers);

//Donc, applique le type à l'array
let numbersTyped: number[] = [1, 2, 3];
numbers[3] = 4;
console.log(numbersTyped);

numbersTyped.forEach(number => number + 1);
numbersTyped.forEach(number => console.log(number));


