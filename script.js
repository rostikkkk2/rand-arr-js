function randArr() {
  var arr = [1, "Rostik", 5, "str", 6];
  var res = Math.floor(Math.random() * arr.length);
  return arr[res];
}

alert(randArr());
