function solution(num){
  const arr = [];
  for (let i = 1; i <= num; i++){
    if (num % i == 0)
    {
      arr.push(i);
    }
  }
  return arr;
}

const N = 110;
console.log(solution(N));