/**
 * Created by Ivaylo on 4/28/2018.*/

function solve(input) {
    function questionAnswer(question, answer) {
        return `
  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`
    }
    let document = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>'
    for(let i = 0; i < input.length; i += 2){
        let question = input[i];
        let answer = input[i + 1];
        document += questionAnswer(question, answer);
    }
    document += "\n</quiz>";
    console.log(document);
}


