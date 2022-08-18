import deepForEach from "deep-for-each";

export const parsing = (check) => {
  var seriesArray = [];
  var seriesScore = [];
  var counter = 0;
  var seriesNumber, firstShot, secondShot, thirdShot;

  deepForEach(check.series, (value, key, subject, path) => {
    switch (key) {
      case "seriesNumber":
        seriesNumber = value;
        break;
      case "score":
        if (counter === 0) {
          firstShot = value;
        } else if (counter === 1) {
          secondShot = value;
        } else if (counter === 2) {
          thirdShot = value;
          counter = 0;
          seriesScore.push(firstShot + secondShot + thirdShot);
          seriesArray.push({
            key: seriesNumber,
            number: seriesNumber,
            firstShot: firstShot,
            secondShot: secondShot,
            thirdShot: thirdShot,
          });
          break;
        }
        ++counter;
        break;
      default:
        break;
    }
  });

  console.log("seriesArray", seriesArray);
  console.log("seriesScore", seriesScore);

  return { seriesArray, seriesScore };
};
