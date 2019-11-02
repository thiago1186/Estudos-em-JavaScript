class PriorityItem{
  constructor(element,priority = 10){
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.itens = [];
  }

  enqueue(element,priority){
    let item = new PriorityItem(element,priority);

    let added = false;
    for(let x = 0; x < this.size(); x++){
      if(this.itens[x].priority >  item.priority){

        for(let y = this.itens.length; y >= x+1; y--){
          this.itens[y] = this.itens[y-1];
        }

        this.itens[x] = item;
        added = true;
        break;
      }
    }

    if(!added){
      this.itens[this.itens.length] = item;  
    }
    
  }

  dequeue(){
    let value = this.itens[0];

    if(!this.isEmpty()){
      for(let x = 0; x < this.size(); x++){
        this.itens[x] = this.itens[x+1];
      }

      this.itens.length--;
    }

    return value;
  }

  isEmpty(){
    return this.itens.length == 0;
  }

  size(){
    return this.itens.length;
  }
}
