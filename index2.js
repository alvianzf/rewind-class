const axios = require('axios')

function generateNumber(a, b, c) {

    const num = [a, b, c]
    let possibility = []
  
    console.log({num})
  
    for (let i = 0 ; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if (i != j) {
          for (let k = 0; k < 3; k++) {
            if (i != k && j != k) {
              possibility.push(Number(`${num[i]}${num[j]}${num[k]}`))
            }
          }
        }
      }
    }
    return possibility
  }
  
generateNumber(1,2,3)

function permutations(a, b, c) {
    const num = [a,b,c];
    let result = [];
    let length = num.length
    
    console.log(length)
    
    for (var i = 0; i < 3; i++) {
        let nextNumber = i + 1
        let lastNumber = i + 2
        if (nextNumber > 2) {
            nextNumber -= 3
        }
        if (lastNumber > 2) {
            lastNumber -= 3
        }


        let firstIteration = `${num[i]}${num[nextNumber]}${num[lastNumber]}`
        let lastIteration = `${num[i]}${num[lastNumber]}${num[nextNumber]}`
        result.push(firstIteration, lastIteration)
    }

    console.log(result)

}

permutations(1,2,3)

async function getData() {
    try{
        const response = await axios('https://api.github.com/users');
        return response
    } catch(err){
        console.log(`Error ${err}`);
    }
}

getData().then(res => console.log(res))