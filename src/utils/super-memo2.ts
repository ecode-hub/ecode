/**
 * superMemo2 算法，参考自 https://github.com/sunaiwen/supermemo2.js
 * 
 * 算法实现步骤查看 https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 */

/**
 * @params {number} the old factor of the previous day
 * @params {number} the quality of review
 */
function calcFactor(oldFac: number, quality: number): number {
  return oldFac + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
}

/**
* @params {number} a number between 0~5 representing the quality of review. 0 is the worse while 5 is the best.
* @params {number} the factor of last schedual
*/
function superMemo2(quality: number, lastSchedule: number, lastFactor: number) {
  let newFac;
  let curSchedule;

  if (quality == null || quality < 0 || quality > 5) {
    quality = 0;
  }

  if (quality < 3) {
    newFac = lastFactor;
    curSchedule = 1;
  } else {
    if (lastSchedule === 1) {
      curSchedule = 6;
      newFac = lastFactor;
    } else if (lastSchedule == null) {
      curSchedule = 1;
      newFac = 2.5;
    } else {
      newFac = calcFactor(lastFactor, quality);
      if (newFac < 1.3) {
        newFac = 1.3;
      }
      curSchedule = Math.round(lastSchedule * newFac);
    }
  }

  return {
    factor: newFac,
    schedule: curSchedule,
    isRepeatAgain: quality < 4
  };
}

export {
  superMemo2
};