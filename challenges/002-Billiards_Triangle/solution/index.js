// function pyramid(balls) {
//   let totalLevels = 0;
//   let currentLevelBalls = 0;
//   while (balls > 0) {
//     if (currentLevelBalls < totalLevels) {
//       currentLevelBalls++;
//     } else {
//       currentLevelBalls = 0;
//       totalLevels++;
//     }
//     balls--;
//   }
//   return totalLevels;
// }

// function pyramid(balls, levels = 0) {
//   if (balls <= levels) return levels;
//   levels++;
//   return pyramid(balls - levels, levels);
// }

function pyramid(balls) {
  let levels = 0;
  while (balls > levels) {
    levels++;
    balls -= levels;
  }
  return levels;
}

