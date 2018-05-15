/**
 * Created by Ivaylo on 5/3/2018.
 */

function townsToJson(strArr) {

    let objArr = [];

    for (let str of strArr.slice(1)) {
        let [townName, lat, long] = splitItem(str);

        let town = {
            Town:townName,
            Latitude:Number(lat),
            Longitude:Number(long)
        };
        objArr.push(town);
    }

    function splitItem(item) {
        return item.split(/\s*\|\s*/)
            .filter(i => i !== '')
            .map(i => i.trim());
    }
    return JSON.stringify(objArr);
}

