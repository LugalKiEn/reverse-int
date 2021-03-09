module.exports = function reverse (n) {
    let absN = Math.abs(n);
    return Number(absN.toString().split("").reverse().join(""))
//   return Number(n.toString().split("").map(function(item, index) { if (item = "-") { n.splice(index, 1)}}).reverse().join(""));
}
