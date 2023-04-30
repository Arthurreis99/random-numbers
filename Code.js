function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
  function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
  }
  
  function main() {
    let numbers = generateRandomNumbers(10);
    console.log("Lista de números gerados aleatoriamente:");
    console.log(numbers);
    let average = calculateAverage(numbers);
    console.log("Média dos números:");
    console.log(average);
  }
  
  main();
