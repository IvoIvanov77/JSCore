/**
 * Created by Ivaylo on 6/1/2018.
 */

function solve(input) {
    let validPattern = /^<message(\s*[a-z]+="[\w\s.]+")+>([\s\S]*)<\/message>$/;
    let fromAttribute = /\bfrom="([\w\s.]+)"/;
    let toAttribute = /\bto="([\w\s.]+)"/;

    if(!validPattern.test(input)){
        return 'Invalid message format';
    }

    if(!(fromAttribute.test(input) && toAttribute.test(input))){
        return 'Missing attributes';
    }

    let message = validPattern.exec(input)[2];
    let from = fromAttribute.exec(input)[1];
    let to = toAttribute.exec(input)[1];

    return `<article>
  <div>From: <span class="sender">${from}</span></div>
  <div>To: <span class="recipient">${to}</span></div>
  <div>
    ${toParagraphs(message)}   
  </div>
</article>`;

    function toParagraphs(str) {
        let lines = str.split('\n');
        let result = '';
        for (let line of lines) {
            result += '<p>' + line + '</p>\n';
        }
        return result.trim();
    }
}

console.log(solve('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>'));
console.log(solve('<message from="Alice" timestamp="1497254112">Same old, same old</message>'));
console.log(solve('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>'));
console.log(solve('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old Let\'s go \nout for a beer</message>'));