/**
 * Created by Ivaylo on 5/30/2018.
 */

function solve(inputArr){
   let numbers = [];

    for (let item of inputArr) {
        if(Number(item)){
            numbers.push(item)
        }else{
            if(numbers.length < 2){
                console.log(('Error: not enough operands!'));
                return;
            }
            let secondOperand = numbers.pop();
            let firstOperand = numbers.pop();
            switch (item){
                case '+' : numbers.push(firstOperand + secondOperand);
                    break;
                case '-' : numbers.push(firstOperand - secondOperand);
                    break;
                 case '*' : numbers.push(firstOperand * secondOperand);
                    break;
                 case '/' : numbers.push(firstOperand / secondOperand);
                    break;

            }
        }
    }

    if(numbers.length === 1){
        console.log(numbers.pop());
    }else{
        console.log('Error: too many operands!')
    }
}



