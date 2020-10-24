module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Massive wants a string!");
    return string.replace(/\s/g, "");
};
module.exports = function upper(string) {
    if (typeof string !== "string") throw new TypeError("Massive wants a string!");
    return string.toUpperCase();
};
