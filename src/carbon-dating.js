const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  let n = parseFloat(sampleActivity);
  if (isNaN(n) || n > MODERN_ACTIVITY || n <= 0) {
    return false;
  }
  // k=0.693/t
  let k = 0.693 / HALF_LIFE_PERIOD;
  // t=ln(N0/N)/k
  let age = Math.log(MODERN_ACTIVITY / n) / k;
  return Math.ceil(age);
}

module.exports = {
  dateSample,
};
