/**
 * Created by Ivaylo on 5/4/2018.
 */

function extractUniqueWords(input) {
    let pattern = /\w+/g;
    let words = new Set();

    for (let line of input) {
        let matches = line.match(pattern);
        matches.forEach(match => words.add(match.toLowerCase()));
    }
    console.log(Array.from(words.keys()).join(', '));
}

extractUniqueWords([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
        "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
        "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
        "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
        "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
        "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
        "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."

])