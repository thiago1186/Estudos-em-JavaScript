class Queue{
  constructor(arr = []){
    this.itens = arr;
  }

  enqueue(element){
    this.itens[this.itens.length] = element;
  }

  dequeue(){
    let value;
    
    if(!this.isEmpty()){
      value = this.itens[0];
      
      for(let x = 0; x < this.size(); x++){
        this.itens[x] = this.itens[x+1];
      }
      
      this.itens.length--;
    }

    return value;
  }

  front(){
    return this.itens[0];
  }

  isEmpty(){
    return this.itens.length == 0;
  }

  size(){
    return this.itens.length;
  }
}
