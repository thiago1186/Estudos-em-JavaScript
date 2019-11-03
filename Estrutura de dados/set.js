class Set{
  constructor(){
    this.set = {};
  }

  add(value){
    if(!this.has(value)){
      this.set[value] = value;
      return true;
    }

    return false;
  }

  delete(value){
    if(this.has(value)){
      delete(this.set[value]);
      return true;
    }

    return false;
  }

  has(value){
    return this.set[value] ? true : false;
  }

  clear(){
    this.set = {};
  }

  size(){
    return Object.keys(this.set).length;
  }

  values(){
    return Array.from(Object.keys(this.set));
  }

  union(set){
    let setUnion = new Set();

    for(let key in this.set){
      setUnion.add(key);
    }

    for(let key in set.set){
      setUnion.add(key);
    }

    return setUnion;
  }

  intersection(set){
    let intersectSet = new Set();

    for(let key in this.set){
      if(set.has(key)){
        intersectSet.add(key);
      }
    }

    return intersectSet;
  }

  difference(set){
    let differenceSet = new Set();

    for(let key in this.set){
      if(!set.has(key)){
        differenceSet.add(key);
      }
    }

    return differenceSet;
  }

  subset(set){
    let subSet = new Set();

    if(this.size() > set.size()){
      return false;
    }

    for(let key in this.set){
      if(!set.has(key)){
        return false;
      }
    }
    return true;
  }
}
