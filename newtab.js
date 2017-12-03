var parts = [
  'aeioe', // vowels 
  'bcdfghklmnpqrstvwxzy' // consonants
];

function makew(size) {
  var text = " ";
  var parti = parts.length;
  for (var i = 0; i < size; i++) {
    text += parts[i%parti].charAt(Math.floor(Math.random() * parts[i%parti].length));
  }
  return text;
}

var b = document.getElementsByTagName('body')[0];

var wordNo = (Math.random() * 1000) + 5000;
for (var i = 0; i < wordNo; i++) {
  var wordSize = (Math.random() * 10) + 4;
  var word = makew(wordSize);
  var tobornottob = Math.random() < 0.0001;
  if (tobornottob) {
    var bee = document.createElement('b');
    bee.append(word);
    word = bee; 
  }
  b.append(word);
}
