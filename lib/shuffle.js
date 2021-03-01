module.exports = function (len) {

  const arr = Array.from({length:len}, (v, index) => index);

  const shuffle = arr.map((elment, index, arr) => {
    const random = Math.floor((Math.random() * arr.length));
    arr[index] = arr[random];
    arr[random] = element;
    return arr;
  })[0];

  return function(){
    return shuffle;
  };
}