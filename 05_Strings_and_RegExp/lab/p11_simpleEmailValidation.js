/**
 * Created by Ivaylo on 4/30/2018.
 */



function validateEmail(email) {
    return /^[a-zA-Z\d]+@[a-z]+(\.\w+)+$/g.test(email) ? "Valid" : "Invalid";
}
