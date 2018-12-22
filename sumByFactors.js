/*Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

  Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

  Notes:

    It can happen that a sum is 0 if some numbers are negative!

  Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

      In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.*/

function addNums(factors, num){
  let factsAndNums = []
  let currentNumAndSum = []
  for(var i = 0; i < factors.length; i++){
    currentNumAndSum.push(factors[i], 0)
    for(var j = 0; j < num.length; j++){
      if(num[j] % factors[i] === 0 && factors[i] !== num[j]){
        currentNumAndSum[1] += num[j] 
      }
    }
    factsAndNums.push(currentNumAndSum)  
    currentNumAndSum = []
  }
  return factsAndNums
}

function sumOfDivided(lst) {
  let nonRootFactors = []
  let rootFactors = []
  lst.forEach((num)=>{
    if(num % 2 === 0 && !rootFactors.includes(2)) rootFactors.push(2)
    if(num % 3 === 0 && !rootFactors.includes(3)) rootFactors.push(3)
    for(var i = 4; i <= num; i++){
      if(num % i === 0 && i % 2 !== 0 && i % 3 !== 0 && !rootFactors.includes(i)) rootFactors.push(i)
     }
  })
  return addNums(rootFactors, lst)
}

sumOfDivided([12, 15, 17, 34, 51])
