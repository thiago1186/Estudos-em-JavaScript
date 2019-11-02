class Node{
  constructor(element){
    this.element = element;
    this.next;
  }
}


class linkedList{
  constructor(){
    this.head;
    this.length = 0;
  }

  append(element){
    let node = new Node(element);

    if(this.isEmpty()){
      this.head = node;
    }else{
      let current = this.head;
      
      while(current.next){
        current  = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  insert(element,position){
    let node = new Node(element);

    if(position >= 0 && position <= this.size()){
      if(position == 0){
        node.next = this.head;
        this.head = node;
      }else{
        let current = this.head;
        let previous;
        let index = 0;

        while(index++ < position){
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.next = current;
      }

      this.length++;
    }
  }

  toString(){
    let stringList = "";

    if(!this.isEmpty()){
      let current = this.head;
      
      stringList += `${current.element}`;

      while(current.next){
        current = current.next;
        stringList += `,${current.element}`
      }
    }
    
    return stringList;
  }

  remove(element){
    let removed;
      
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  removeAt(position){
    let removed;

    if(position >=0 && position < this.size()){
      if(position == 0){
        removed = this.head.element;
        this.head = this.head.next;
      }else{
        let current = this.head;
        let previous;
        let index = 0;

        while(index++ < position){
          previous = current;
          current = current.next;
        }
        removed = current.element;
        previous.next = current.next; 
      }

      this.length--;
    } 
    return removed;
  }

  indexOf(element){
    let index = -1;
    let current = this.head;
    
    while(current){
      index++;

      if(current.element == element){
        return index;
      }
      current = current.next;
    }
    
    return -1;
  }

  isEmpty(){
    return this.length == 0;
  }

  size(){
    return this.length;
  }
}
