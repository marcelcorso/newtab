r = Math.random;
var parts = [
  'aeioe', // vowels 
  'bcdfghklmnpqrstvwxzy' // consonants
];

function makew(size) {
  var text = " ";
  var parti = parts.length;
  for (var i = 0; i < size; i++) {
    text += parts[i%parti].charAt(Math.floor(r() * parts[i%parti].length));
  }
  return text;
}

var b = document.getElementsByTagName('body')[0];

var wordNo = (r() * 1000) + 5000;
for (var i = 0; i < wordNo; i++) {
  var wordSize = (r() * 10) + 4;
  var word = makew(wordSize);
  var tobornottob = r() < 0.001;
  if (tobornottob) {
    var bee = document.createElement('b');
    bee.append(word);
    word = bee; 
  }
  b.append(word);
}

function rcolor() {
  return "rgba(" + Math.floor(r()*255) + ","+Math.floor(r()*255)+","+Math.floor(r()*255)+","+r()+")";
}

var sqrAttrs = ['top', 'left', 'height', 'width'];
var sqrAttrsLen = sqrAttrs.length;  

function bootSqr(div) {
    setInterval(function() {
      var attr = sqrAttrs[Math.floor((r()*10) % sqrAttrsLen)]; // get one of the attrs
      var val = div.style[attr];
      var rval = parseInt(val.replace('px', ''))
      div.style[attr] = rval + ((r()*100) - 50) + "px";

    }, 100);
} 

var sqrNo = (r() * 50) + 1;
for (var i = 0; i < sqrNo; i++) {
  var div = document.createElement('div');
  div.style.background = rcolor();
  div.style.top = ((r() * document.documentElement.clientHeight) + 0) + "px";
  div.style.left = ((r() * document.documentElement.clientWidth) + 0) + "px";
  div.style.height =  ((r() * 100) + 100) + "px";
  div.style.width = ((r() * 100) + 100) + "px";
  b.append(div);  

  bootSqr(div);
}

