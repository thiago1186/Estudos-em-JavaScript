function merge(left,right){
  let result = [];
  let x = 0;
  let y = 0;

  while(x < left.length && y < right.length){
    if(left[x] < right[y]){
      result.push(left[x++]);
    }else{
      result.push(right[y++]);
    }
  }

  while(x < left.length){
    result.push(left[x++]);
  }

  while(y < right.length){
    result.push(right[y++]);
  }

  return result;
}

function mergeSort(arr){  
  if(arr.length == 1){
    return arr;
  }

  let mid = arr.length/2;
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  
  return merge(mergeSort(left),mergeSort(right));
}
