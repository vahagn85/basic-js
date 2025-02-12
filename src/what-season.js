const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    if (
      Object.prototype.toString.call(date) !== "[object Date]" ||
      isNaN(date.getTime())
    ) {
      throw new Error("Invalid date!");
    }
    let seasons = ["spring", "summer", "autumn (fall)", "winter"];
    let month = date.getMonth() + 1;
    let season = "";
    switch (month) {
      case 12:
      case 1:
      case 2:
        season = seasons[3];
        break;
      case 3:
      case 4:
      case 5:
        season = seasons[0];
        break;
      case 6:
      case 7:
      case 8:
        season = seasons[1];
        break;
      case 9:
      case 10:
      case 11:
        season = seasons[2];
        break;
    }
    return season;
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
