/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triangles = 0;
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] !== i + 1) {
      if (preferences[i] == i - 1) {
        break;
      }
      var theFirstLove = preferences[i];
      var theSecondLove = preferences[theFirstLove - 1];
      var theThirdLove = preferences[theSecondLove - 1];
      if (i == theThirdLove - 1) {
        triangles++;
        preferences[i] = 0;
        preferences[(theFirstLove - 1)] = 0;
        preferences[(theSecondLove - 1)] = 0;
      }
    }
  }
  return triangles;
};
