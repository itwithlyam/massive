function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

module.exports.small = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Massive wants a string!");
    return string.replace(/\s/g, "");
};
module.exports.big = function upper(string) {
    if (typeof string !== "string") throw new TypeError("Massive wants a string!");
    return string.toUpperCase();
};
/* module.exports.apiget = function apis(link) {
    if (typeof link !== "string") throw new TypeError("Massive wants a API link as a string!");
    fetch(link)
        .then(response => response.json())
        .then(responseData => {
            return responseData;
        })
        .catch((err) => {
            throw new TypeError(err);
        })
    // Making a GET request using an axios instance from a connected library
    axios.get(link)
        .then(response => {
            return (response.data);
        })
        .catch(error => {
            throw new TypeError(`You need to use a valid API URL! Error: ${error}`)
        })
}*/
module.exports.write = function writer(text) {
    console.log(text);
};
module.exports.calculate = function calculator(num1, num2, func) {
    if (!isInt(num1) || !isInt(num2) || typeof func !== "string") throw new TypeError("Massive wants: massive.calculate(num1, num2, function)");
    if (func === 'add') console.log(num1 + num2);
    if (func === 'subtract') console.log(num1 - num2);
    if (func === 'divide') console.log(num1 / num2);
    if (func === 'multiply') console.log(num1 * num2);
    throw new TypeError("Please use the functions add, subtract, multiply or divide.");

};
