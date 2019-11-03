class Stack{
  constructor(arr = []){
    this.itens = arr;
  }

  push(element){
    this.itens[this.itens.length] = element;
  }

  pop(){
    let value;
    if(!this.isEmpty()){
      value = this.itens[this.itens.length - 1];
      this.itens.length--;
    }

    return value;
  }

  peek(){
    let value;
    if(!this.isEmpty()){
      value = this.itens[this.itens.length - 1];
    }
    
    return value;
  }

  isEmpty(){
    return this.itens.length == 0;
  }

  clear(){
    this.itens = [];
  }

  size(){
    return this.itens.length;
  }
}
