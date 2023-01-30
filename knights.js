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
        this.createVertices();
        this.createEdges();
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

                if(!(newI >= 8 || newJ >= 8 || newI < 0 || newJ < 0)){
                    arr.push([newI,newJ]);
                }
            }
            this.board.set(vertice, arr);
        }
    }

    knightMoves(startCoord, endCoord){
        const visitedCoords = [];
        const queue = [];
        endCoord = `${endCoord[0]},${endCoord[1]}`
        queue.push([startCoord, [startCoord]]);
        while(queue.length > 0){
            let coord = queue.shift();
            let currentCoord = coord[0];
            let path = coord[1];
            currentCoord = `${currentCoord[0]},${currentCoord[1]}`;
            visitedCoords.push(currentCoord);
            if(currentCoord === endCoord){
                return path;
            }
            const neighbours = this.board.get(currentCoord);
            for(let neighbour of neighbours){
                if(!visitedCoords.includes(neighbour)){
                    queue.push([neighbour, [...path, neighbour]]);
                }
            }
        }
    }
}

let graph = new chessGraph(8);
let path = graph.knightMoves([0, 0], [6, 2]);
console.log(`It would take ${path.length - 1} moves to get from 0,0 to 4,2 !`)
console.log(`You would follow the route:`)
for(let coord of path){ console.log(coord) }