let origin = "0 - 0";
let dest;
let gridSize = 50;

let arr = new Array(gridSize);


function makeGraph(diagonal){
    let graph = new Graph();

    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr.length; y++){
            graph.addVertex(x,y,`${x} - ${y}`);

            if(x > 0){
                if(diagonal && y > 0){
                    graph.addAdj(`${x} - ${y}`,new Vertex(x-1,y-1,`${x-1} - ${y-1}`));
                }

                graph.addAdj(`${x} - ${y}`,new Vertex(x-1,y,`${x-1} - ${y}`));

                if(diagonal && y < arr.length - 1){
                    graph.addAdj(`${x} - ${y}`,new Vertex(x-1,y+1,`${x-1} - ${y+1}`));
                }
            }

            if(y > 0){
                graph.addAdj(`${x} - ${y}`,new Vertex(x,y-1,`${x} - ${y-1}`));
            }

            if(y < arr.length - 1){
                graph.addAdj(`${x} - ${y}`,new Vertex(x,y+1,`${x} - ${y+1}`));
            }

            if(x < arr.length - 1){
                if(diagonal && y > 0){
                    graph.addAdj(`${x} - ${y}`,new Vertex(x+1,y-1,`${x+1} - ${y-1}`));
                }

                graph.addAdj(`${x} - ${y}`,new Vertex(x+1,y,`${x+1} - ${y}`));

                if(diagonal && y < arr.length - 1){
                    graph.addAdj(`${x} - ${y}`,new Vertex(x+1,y+1,`${x+1} - ${y+1}`));
                }
            }
        }
    }

    return graph;
}





let stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });


let w = window.innerWidth/gridSize;
let h = window.innerHeight/gridSize;

let rect;
let layer = new Konva.Layer();

function setup(){
    stage.destroyChildren();

    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr.length; y++){
            rect = new Konva.Rect({
                x: x*w,
                y: y*h,
                width: w,
                height: h,
                stroke: 'black',
                strokeWidth: 1,
            }).on('click', function (e) {
                dest = `${parseInt(e.currentTarget.attrs.x/w)} - ${parseInt(e.currentTarget.attrs.y/h)}`
                this.fill("black");
                layer.draw();
            });
            
            layer.add(rect);
        }
    }

    stage.add(layer);
}

function findPath(){
    let diagonal = document.getElementById("diagonalCheck").checked ? true : false;
    let graph = makeGraph(diagonal);
    let path = graph.BFS(origin,dest);

    for(let v = graph.vertices[dest]; v != null; v = path[v.key]){
        rect = new Konva.Rect({
                x: v.x*w,
                y: v.y*h,
                width: w,
                height: h,
                stroke: 'black',
                strokeWidth: 1,
                fill: 'green'
              });
            
            layer.add(rect);
    }

    stage.add(layer);
    
}









