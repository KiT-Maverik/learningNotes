    function countWords(inputWords) {
      var countedNames = inputWords.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
return countedNames;
    }

    module.exports = countWords