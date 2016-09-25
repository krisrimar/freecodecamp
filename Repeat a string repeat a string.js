function repeatStringNumTimes(str, num) {
  var i, arr = [];
  if(num > 0) {
    for(i = 0; i < num; i++) {
      arr.push(str);
    }
    return arr.join('');
  }
  
  return "";
  
}

repeatStringNumTimes("abc", 3);