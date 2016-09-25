
function titleCase(str) {
  var word, i;
  str = str.split(' ');
  for(i = 0; i < str.length; i++) {
    word = str[i].toLowerCase().split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    str[i] = word;
  }
  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
