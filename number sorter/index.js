const inputValues = [...document.getElementsByClassName("input-values")];

const sortBtn = document.getElementById("sort");

const outPutArray = document.getElementById("output-array");

const bubbleSort = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++){
    let minIndex = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

const updateUi = (sortFunction) => {
  let newArray = [];
  inputValues.forEach(inputValue => {
    newArray.push(Number(inputValue.value));
  });
  sortFunction(newArray);
  console.log(newArray)
  outPutArray.innerHTML = `[${newArray}]`;
};

sortBtn.addEventListener('click',() => {
  updateUi(selectionSort);
});
