function bubbleSort(arr){
  let swaped;
  
  for(let x = 0; x < arr.length - 1; x++){
    for(let y = 0; y < arr.length - 1 - x; y++){
      if(arr[y] > arr[y+1]){
        [arr[y],arr[y+1]] = [arr[y+1],arr[y]];
        swaped = true;
      }
    }

    if(!swaped){
      break;
    }
  }
  return arr;
}