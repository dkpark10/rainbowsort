const init = true;
window.onload = function () {

  const elementList = new Array();

  let idx = 1;
  let element = document.getElementById('element1');
  while (element) {
    elementList.push(element);
    idx++;
    element = document.getElementById(`element${idx}`);
  }

  // for(let i=0; i<1000; i++){
  //   document.getElementById(`element${i + 1}`).style.height = `${(i + 1) / 2}px`;
  // }

  document.getElementById('run').addEventListener('click', function () {


    const ele1 = elementList[1];
    const ele2 = elementList[10];
    let ele1height = ele1.clientHeight;
    let ele2height = ele2.clientHeight;
    [ele1height, ele2height] = [ele2height, ele1height];
    ele1.style.height = `${ele1height / 2}px`;
    ele2.style.height = `${ele2height / 2}px`;


    //   const size = elementList.length;

    //   console.log('들어감??');
    //   for (let i = 0; i < size - 1; i++) {
    //     for (let j = i + 1; j < size; j++) {

    //       const ele1 = elementList[i];
    //       const ele2 = elementList[j];
    //       let ele1height = ele1.clientHeight;
    //       let ele2height = ele2.clientHeight;
    //       if (ele1height > ele2height) {
    //         [ele1height, ele2height] = [ele2height, ele1height];
    //         ele1.style.height = `${ele1height / 2}px`;
    //         ele2.style.height = `${ele2height / 2}px`;
    //       }
    //     }
    //   }
    // });
  });
}