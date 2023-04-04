// 1번문제

// let picture = `
//          ,r\'\"7
// r\`-_   ,\'  ,/
//  \\. \". L_r\'
//    \`~\\/
//       |
//       |
//       `
// console.log(picture);

// 2번문제

// const year1 = 2000;
// const year2 = 1999;

// let leapYear = year => {
//   if (year % 4 == 0 && year % 100 != 0){
//     console.log(1);
//   }
//   else if (year % 100 == 0 && year % 400 == 0){
//     console.log(1);
//   }
//   else {
//     console.log(0);
//   }
// };

// // 윤년이다
// leapYear(year1);
// // 윤년이 아니다
// leapYear(year2);

// 3번문제

// const N = 24;

// let blank = '';
// let star = '';

// for (let i = 1; i <= N; i++) {
//   star += '*'
//   for (let j = 0; j < N - i; j++) {
//     blank += ' ';
//   }
//   console.log(blank + star);
//   blank = '';
// }

// 4번문제

// const C1 = [5, 50, 50, 70, 80, 100];
// const C2 = [7, 100, 95, 90, 80, 70, 60, 50];
// const C3 = [3, 70, 90, 80];
// const C4 = [3, 70, 90, 81];

// let func = lst => {
//   const num = lst.shift();
//   const sum = lst.reduce((acc, curr) => acc + curr, 0)
//   const mean = sum / num;
//   let cnt = 0;

//   lst.forEach(e => {
//     if (mean > e){
//       cnt += 1;
//     }
//   });

//   console.log((cnt / num).toFixed(3));
// }

// func(C1);
// func(C2);
// func(C3);
// func(C4);

// 5번문제

// const N  = 2;

// let func = n =>{
//   for (let i = 1; i < 10; i++){
//     console.log(`${N} * ${i} = ${N*i}`);
//   }
// }

// func(N);
