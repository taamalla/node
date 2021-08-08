
const number = process.argv.slice(2);
const result = number.reduce((acc, num) =>{
    return acc + Number(num)
}, 0);
console.log(result)