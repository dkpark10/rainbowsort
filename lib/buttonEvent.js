function createRainbowColor() {
  const max = 255;
  let rainbowColor = new Array();

  function convertingHex(number) {
    const hex = number.toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  }

  // 빨강 -> 노랑
  (function () {
    const cvtRedtoYellow = Array.from({ length: max }, (v, index) => index)
      .map((element, index) => {
        if(element % 5 == 0){
          const hex = convertingHex(element);
          return `#FF${hex}00`;
        }
      });
    rainbowColor = rainbowColor.concat(cvtRedtoYellow);
  })();

  // 노랑 -> 초록
  (function () {
    const cvtYellowtoGreen = Array.from({ length: max }, (v, index) => max - index)
      .map((element, index) => {
        if(element % 5 == 0){
          const hex = convertingHex(element);
          return `#${hex}FF00`;
        }
      });
    rainbowColor = rainbowColor.concat(cvtYellowtoGreen);
  })();

  // 초록 -> 아쿠아
  (function () {
    const cvtGreentoAqua = Array.from({ length: max }, (v, index) => index)
      .map((element, index) => {
        if(element % 5 == 0){
          const hex = convertingHex(element);
          return `#00FF${hex}`;
        }
      });
    rainbowColor = rainbowColor.concat(cvtGreentoAqua);
  })();

  // 아쿠아 -> 파랑
  (function () {
    const cvtAquatoBlue = Array.from({ length: max }, (v, index) => max - index)
      .map((element, index) => {
        if(element % 5 == 0){
          const hex = convertingHex(element);
          return `#00${hex}FF`;
        }
      });
    rainbowColor = rainbowColor.concat(cvtAquatoBlue);
  })();

  // 파랑 -> 보라
  (function () {
    const cvtBluetoViolet = Array.from({ length: max }, (v, index) => index)
      .map((element, index) => {
        if(element % 5 == 0){
          const hex = convertingHex(element);
          return `#${hex}00FF`;
        }
      });
    rainbowColor = rainbowColor.concat(cvtBluetoViolet);
  })();

  return rainbowColor;
}

window.onload = function () {

  const rainbow = createRainbowColor();
  const len = rainbow.length;
  console.log(len);

  const shuffledList = Array.from({length:len}, (v,i) => i + 1)
  .map((element, curidx, arr) => {
    const random = Math.floor(Math.random() * arr.length);
    arr[curidx] = arr[random];
    arr[random] = element;
    return arr;
  })[0];

  for (let i = 0; i < len; i++) {
    const sp = document.createElement('span');
    sp.id = `element${i}`;
    sp.style.height = `${shuffledList[i] / 2}px`;
    sp.style.backgroundColor = rainbow[shuffledList[i] - 1];
    document.getElementById('sortBoard').appendChild(sp);
  }

  const swparr = [];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const e1 = document.getElementById(`element${i}`);
      const e2 = document.getElementById(`element${j}`);
      if (shuffledList[i] > shuffledList[j]) {
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
        swparr.push({ e1: e1.id, e2: e2.id });
      }
    }
  }

  document.getElementById('run').addEventListener('click', () => {
    swparr.map((element, curidx, arr) => {
      setTimeout(() => {

        const e1 = document.getElementById(element.e1);
        const e2 = document.getElementById(element.e2);
        let e1height = e1.clientHeight;
        let e2height = e2.clientHeight;

        let e1color = window.getComputedStyle(e1).backgroundColor;
        let e2color = window.getComputedStyle(e2).backgroundColor;

        [e1height, e2height] = [e2height,e1height];
        [e1color, e2color] = [e2color, e1color];

        e1.style.height = `${e1height}px`;
        e2.style.height = `${e2height}px`;
        e1.style.backgroundColor = `${e1color}`;
        e2.style.backgroundColor = `${e2color}`;
      }, 1);
    });
  });
}