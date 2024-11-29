export function numberDot(num) {
    let data = null;
    if (num > 0) {
        data = num.toLocaleString(navigator.language, { minimumFractionDigits: 2 });
    } else if (num < 0) {
        data = '(' + Math.abs(num).toLocaleString(navigator.language, { minimumFractionDigits: 2 }) + ')';
    }
    return data;
}

const functions = {
    numberDot
}

export default functions;