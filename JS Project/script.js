class Calculator {
  constructor(currentNum, previousNum, display) {
    let operator;
    this.operator = undefined;
    this.currentNum = currentNum 
    this.previousNum = previousNum
    this.display = display
  }

  appendNum(num) {
    this.currentNum = this.currentNum.toString() + num.toString(); 

  }

  backSpace() {
    const slice = this.currentNum.toString().slice(0,-1);
    this.currentNum = slice;
    console.log(this.currentNum);
  }

  clear() {
    this.currentNum = "";
    this.previousNum = "";
    this.operator = "";
  }

  equal() {
    if (this.currentNum === "") return
    if (isNaN(currentNum) || isNaN(previousNum)) return
    this.compute();
    this.operator = undefined;
  }

  chooseOperation(operation) {
    this.operator = operation;
    if (this.currentNum === "") return
    if (this.previousNum !== "" ) {
      this.compute()
      return
    }
    this.display.innerText = "";
    this.previousNum = this.currentNum;
    this.currentNum = "";
  }

  compute() {
    switch (this.operator) {
      case "+":
        this.previousNum = parseFloat(this.previousNum) + parseFloat(this.currentNum);
        break ;

      case "-":
        this.previousNum = parseFloat(this.previousNum) - parseFloat(this.currentNum);
        break;

      case "*":
        this.previousNum = parseFloat(this.previousNum) * parseFloat(this.currentNum);
        break;
      
      case "÷":
        this.previousNum = parseFloat(this.previousNum) / parseFloat(this.currentNum);
        break;

      default:
        return

      }
      console.log(this.previousNum)
      this.currentNum = "";
      this.display.innerText = this.previousNum;
  }

  update() {
    this.display.innerText = this.currentNum;
  }
}


const numbers = document.querySelectorAll('[data-number]');
const backSpace = document.querySelector("[data-backspace]");
const equals = document.querySelector("[data-equals]");
const operation = document.querySelectorAll("[data-operation]");
const display = document.querySelector('[data-display]');
const clear = document.querySelector('[data-clear]');
let currentNum = '';
let previousNum = '';

const calculator = new Calculator(currentNum, previousNum, display);


numbers.forEach(num => {
  num.addEventListener('click', () => {
    calculator.appendNum(num.dataset.number);
    calculator.update();
  })
})

backSpace.addEventListener('click', () => {
  calculator.backSpace(currentNum);
  calculator.update();
})

clear.addEventListener('click', () => {
  calculator.clear();
  calculator.update();
})

operation.forEach(o => {
  o.addEventListener('click', () => {
    calculator.chooseOperation(o.dataset.operation);
  })
})

equals.addEventListener('click', () => {
  calculator.equal();
})

