class Vertex{
    constructor(x,y,key){
        this.x = x;
        this.y = y;
        this.key = key;
    }
}

class Graph{
    constructor(){
        this.vertices = {};
        this.adjList = {};
    }

    addVertex(x,y,vertex){
        this.vertices[vertex]  = new Vertex(x,y,vertex);
    }

    addAdj(keyA,VertexB){
        if(!this.adjList[keyA]){
            this.adjList[keyA] = [];
        }

        this.adjList[keyA].push(VertexB);
    }

    _initColor(){
        let colors = [];

        for(let item in this.vertices){
            colors[item]  = "white";
        }

        return colors;
    }

    BFS(origin,dest){
        let colors = this._initColor();
        
        let queue = [];
        let vertex;
        let path = {};

        queue.push(this.vertices[origin]);

        while(queue.length > 0){
            vertex = queue.shift();
            colors[vertex.key] = "grey";

            for(let x = 0; x < this.adjList[vertex.key].length; x++){
                if(colors[this.adjList[vertex.key][x].key] == "white"){
                    colors[this.adjList[vertex.key][x].key] = "grey";
                    queue.push(this.adjList[vertex.key][x]);

                    path[this.adjList[vertex.key][x].key] = vertex;
                }
            }

            colors[vertex.key] = "black";

            if(vertex.key == dest){
                return path;
            }
        }


    }
}