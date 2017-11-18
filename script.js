var arr = [1, "Rostik", 5, "str", 6];

function randArr(any_arr) {
  var res = Math.floor(Math.random() * any_arr.length);
  return any_arr[res];
}

alert(randArr(arr));
