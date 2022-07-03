module.exports = function reverse (n) {
    let result = 0;
    const absoluteNumber = Math.abs(n);
    let varyNumber = String(absoluteNumber);
    for(let i = 0; i < String(absoluteNumber).length; i++) {
        let lastNumber = varyNumber[varyNumber.length - 1];
        result = `${result}${lastNumber}`;
        varyNumber = varyNumber.slice(0, -1);
    }
    return Number(result);
}
