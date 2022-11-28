console.log("hello world");

function addNumbers(start, end) {
    let result = 0
    for (let i = start; i <= end; i++) {
        result = result + 1;
    }
    return result
}

addNumbers(1, 100)