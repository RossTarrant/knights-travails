class chessGraph{
    constructor(size){
        this.size = size;
        this.board = new Map();
        this.MOVEVARIANTS=[
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2],
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1]
        ]
    }

    createVertices(){
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                let coord = `${[i,j]}`;
                this.board.set(coord,[]);
            }
        }
    }

    createEdges(){
        // Represents graph as an adjacency list, using a Map to store the data
        for(let [vertice] of this.board){
            let arr = [];
            for(let moveVariant = 0; moveVariant < this.MOVEVARIANTS.length; moveVariant++){
                let coord = vertice.split(',')
                let i = parseInt(coord[0])
                let j = parseInt(coord[1])
                
                let newI = i + this.MOVEVARIANTS[moveVariant][0];
                let newJ = j + this.MOVEVARIANTS[moveVariant][1];

                if(!(newI > 8 || newJ > 8 || newI < 0 || newJ < 0)){
                    arr.push([newI,newJ]);
                }
            }
            this.board.set(vertice, arr);
        }
    }

    knightMoves(startCoord, endCoord){
        endCoord = `${endCoord[0]},${endCoord[1]}`
        let visitedCoords = [];
        let queue = [];
        queue.push(startCoord);
        visitedCoords.push(startCoord);

        while(queue.length > 0){
            let currentCoord = queue.pop();
            //console.log(this.board.get(currentCoord)); // NEED TO REPLACE

            for(let value of this.board.get(currentCoord)){
                console.log(value);
            }
        }
    }
}

let graph = new chessGraph(8);
graph.createVertices();
graph.createEdges();
graph.knightMoves("0,0", [2,3]);

/*

for(let [key, value] of graph.board){
    console.log(key, value)
}

*/