function insertionSort(arr){
  
  for(let x = 1; x < arr.length; x++){
    let j = x - 1;
    let aux = arr[x];

    while(j >= 0 && aux < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = aux;
  }
  
  return arr;
}
