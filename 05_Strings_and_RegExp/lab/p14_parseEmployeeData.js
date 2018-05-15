/**
 * Created by Ivaylo on 4/30/2018.
 */

function parseEmployeeData(data){
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([A-Za-z0-9\s-]+)$/;

    for (let item of data) {
        let match = regex.exec(item);
        if (match){
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }
    }
}


