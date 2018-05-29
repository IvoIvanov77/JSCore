/**
 * Created by Ivaylo on 4/28/2018.
 */
function solve(number){
    let value = number.toString();

    while(getAverage_02(value) <= 5){
        value += 9;
    }
    console.log(value);

    function getAverage_02(number) {
        let count = number.length;
        let n = number;
        let sum = 0;
        while(n > 0){
            sum += n % 10;
            n = Math.floor(n / 10)
        }
        return sum / count;
    }

    function getAverage_01(number) {
        let count = number.toString().length;

        let sum = 0;
        for(let i = 0; i < count; i ++){
            sum += Number(number.toString()[i]);
        }
        return sum / count;
    }
}







