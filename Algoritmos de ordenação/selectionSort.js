function selectionSort(arr){
  
  for(let x = 0; x < arr.length - 1; x++){
    let min = x;

    for(let y = x +1; y < arr.length; y++){
      if(arr[min] > arr[y]){
        min = y;
      }
    }

    if(min != x){
      [arr[min],arr[x]] = [arr[x],arr[min]];
    }
  }
  
  return arr;
}
