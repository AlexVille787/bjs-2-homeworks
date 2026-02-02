function getArrayParams(...arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
let avg = sum / arr.length
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
if(arr.length === 0) return 0;
return arr.reduce((sum,curr)=>sum+curr,0)
}

function differenceMaxMinWorker(...arr) {
if(arr === 0) return 0;
  let min = Math.min(...arr);
let max = Math.max(...arr);
let difference = max-min;
return difference;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
 if (arr.length === 0) return 0;
 for(let i=0;i<arr.length;i++){
  if(arr[i] %2 === 0){
    sumEvenElement += arr[i];
  }
  else {
    sumOddElement += arr[i];
  }
 }
 return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
 if (arr.length === 0) return 0;
 for(let i=0;i<arr.length;i++){
   if(arr[i] %2 === 0){
    sumEvenElement += arr[i];
    countEvenElement += 1;
   }
 }
 if(countEvenElement === 0 ) return 0;
 return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
let allResult = [];
  for(let i=0; i<arrOfArr.length;i++){
let elementOfarray = arrOfArr[i];
let funcResult = func(...elementOfarray);
allResult.push(funcResult);
}
let maxResult = Math.max(...allResult);
return maxResult;
}
