var arr = [1, "Rostik", 5, "str", 6];

function randArr(all_elems) {
  var rand_num = Math.floor(Math.random() * all_elems.length);
  return all_elems[rand_num];
}

alert(randArr(arr));
