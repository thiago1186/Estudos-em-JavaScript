class Node{
  constructor(key){
    this.key = key;
    this.left;
    this.right;
  }
}

class BinaryTree{
  constructor(){
    this.root;
  }

  insert(key){
    let node =  new Node(key);

    if(!this.root){
      this.root = node;
    }else{
      this._insertNode(this.root,node);
    }
  }

  _insertNode(node,newNode){
    if(newNode.key < node.key){
      if(!node.left){
        node.left = newNode;
      }else{
        this._insertNode(node.left,newNode);
      }
    }else{
      if(!node.right){
        node.right = newNode;
      }else{
        this._insertNode(node.right,newNode);
      }
    }
  }

  search(key){
    return this._searchNode(this.root,key);
  }

  _searchNode(node,key){
    if(!node){
      return false;
    }

    if(key < node.key){
      return this._searchNode(node.left,key);
    }

    if(key > node.key){
      return this._searchNode(node.right,key);
    }

    return true;
  }

  min(){
    return this._minNode(this.root);
  }

  max(){
    return this._maxNode(this.root);
  }

  search(key){
    return this._searchNode(this.root,key);
  }

  _searchNode(node,key){
    if(!node){
      return false;
    }

    if(key < node.key){
      return this._searchNode(node.left,key);
    }
    
    if(key > node.key){
      return this._searchNode(node.right,key);
    }

    return true;
  }

  _minNode(node){    
    if(node){

      while(node.left){
        node = node.left;
      }

      return node.key;
    }

    return null;
  }

  _maxNode(node){    
    if(node){

      while(node.right){
        node = node.right;
      }

      return node.key;
    }

    return null;
  }

  inOrderPrint(callback){
    this._inOrderPrintNode(this.root,callback);
  }

  preOrderPrint(callback){
    this._preOrderPrintNode(this.root,callback);
  }

  posOrderPrint(callback){
    this._posOrderPrintNode(this.root,callback);
  }

  _inOrderPrintNode(node,callback){
    if(node){
      this._inOrderPrintNode(node.left,callback);
      callback(node.key);
      this._inOrderPrintNode(node.right,callback);
    }
  }

  _preOrderPrintNode(node,callback){
    if(node){
      callback(node.key);
      this._preOrderPrintNode(node.left,callback);
      this._preOrderPrintNode(node.right,callback);
    }
  }

  _posOrderPrintNode(node,callback){
    if(node){
      this._posOrderPrintNode(node.left,callback);
      this._posOrderPrintNode(node.right,callback);
      callback(node.key);
    }
  }

  remove(key){
    this.root = this._removeNode(this.root,key);
  }

  _removeNode(node,key){
    if(!node){
      return null
    }

    if(key < node.key){
      node.left = this._removeNode(node.left,key);
      return node;
    }

    if(key > node.key){
      node.right = this._removeNode(node.right,key);
      return node;
    }


    if(!node.left && !node.right){
      node = null;
    }else if(node.left && !node.right){
      node =  node.left;
    }else if(!node.left && node.right){
      node =  node.right;
    }else{
      let nodeMin = this._findMinNode(node.right);
      node.key = nodeMin.key;
      node.right = this._removeNode(node.right,nodeMin.key);
    }

     return node;
  }

  _findMinNode(node){
    while(node && node.left){
      node = node.left;
    }

    return node;
  }
}
