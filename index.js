
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i <= 3; i++) {
      arr.push(musicians[i] + " plays " + instruments[i]);
  }
    return arr; 
}

function johnLennonFacts(facts) {
  while (facts.length >= 0) {
    var i = 0;
    var newFacts = [];
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}