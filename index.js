// console.log(1 + '1')
// console.log(4 - '1')
// console.log('b' + 'a' + + 'a' + 'a')

// console.log('a' == 'a')
// console.log([] == [])
//  [1 2 3 4] == [5 6 7 8]


const human = {
    name: 'Brendan Eich',
    website: 'https://brendaneich.com',
    twitter: 'https://twitter.com/BrendanEich',
    github: 'https://github.com/BrendanEich',
    'about-me':
      'Brendan Eich is an American technologist and creator of the JavaScript programming language',
    // multiword property name must be quoted
  }

  const {name, website, twitter} = human

  const fruits = ['Apple', 'Orange', 'Grape']

  let newFruit = [...fruits]

// function datax(...nilai) {
//     console.log(nilai)
// }

// datax(5,3,6)
// datax(2,3)

function sumOfN(...num) {

    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }

    return sum
}

// console.log(sumOfN(1,2,3,4,5))

// function greetings(...greeting) {
//     console.log(greeting)
// }

// greetings({name: "alvian", age: "32", occupation: "Nganggur"})

// Destructuring

// MOD
// 4 / 2 = 2 ... 0
// 5 / 2 = 2 ... 1
// 2 mod 5 = 2
// 10 mod 100 = 10
// 7 mod 3 = 1
// 9 mod 5 = 4

// Practice 1
                                    // start
function sumOfNumbers(n) {          // input number 
    let total = 0                   // declare total as 0
  
    for (var i = 1; i <= n; i++) {  // pengulangan dari 1 sampai n
      total +=i                     // jumlahkan total dengan total sebelumnya ditambah variabel i (1, 2, 3, 4, .. n)
    }
  
    return total                    // mengembalikan nilai total yang sudah dijumlahykan
  }                                 // end

// Practice 2

// 
// Write a pseudocode for this problem statement:
// >  Write an algorithm that will take in two numbers and print the larger of them out to the console.  

// Example:  
// Input: `5`, `8`  
// Output: `8`

// START
// INPUT FIRST NUMBER as firstNumber
// INPUT SECOND NUMBER as secondNmmber
// CHECK IF FIRST NUMBER > SECOND NUMBER
// PRINT FIRST NUMBER
// ELSE
// PRINT SECOND NUMBER
// END

// function checkLarger(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         console.log(firstNumber)
//     } else {
//         console.log(secondNumber)
//     }
// }

// checkLarger(110, 8)

// *
// **
// ***
// ****
// *****
// ******
 
// START
// Create function with input of n
// Create Var Star
// LOOP 'a' as many as n
// LOOP 'b' as many as a
// Star += "*"
// END LOOP b
// PRINT Star
// Star = ""
// END LOOP a
// END

// START
// DEFINE ROW = 6
// DEFINE STAR
// LOOP FROM 1 to 6
// TAMBAH 1 STAR SETIAP LOOPING
// END

const row = 6
let star = ''
for (let i = 1; i <= 6; i++) {
    star += '*'
    // console.log(star)
}


//pseudocode
//START (A,B,C)
//theNumber = JOIN ABC
//possibility = []
//LOOP i < theNumber.length; i++
//Swap [i] to [i+1]
//swap [-i] t0 [-i - 1]

function generateNumber(...num){
  let joinNumber = num.join()

  let possibility = []
  for (let i = 0; i < joinNumber.length; i++) {
    let temp
    
    
  }
}

function gerenerateNumber(a, b, c) {

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