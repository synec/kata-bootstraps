function helloWorld() {
  return "Hello world!";
}

function fizzBazz(value) {
  if (value % 3 === 0 && value % 5 === 0) return 'FizzBazz';
  if (value % 3 === 0) return 'Fizz';
  if (value % 5 === 0) return 'Bazz';
  return value;
}

function fizzBazz100() {
  return Array(100)
      .fill('')
      .map((item, index) => fizzBazz(index + 1));
}
