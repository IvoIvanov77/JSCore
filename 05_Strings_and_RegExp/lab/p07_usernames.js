/**
 * Created by Ivaylo on 4/30/2018.
 */

// 'peshoo@gmail.com'
function extractUsernames(input) {
    let usernames = [];

    for (let email of input) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(part => username += part[0]);
        usernames.push(username);
    }
    return usernames.join(', ');
}