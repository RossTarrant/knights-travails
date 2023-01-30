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
                // Create an initial vertice for each cell of the board (Num of cells = board size ^ 2)
                let coord = `${[i,j]}`;
                this.board.set(coord,[]);
            }
        }
    }

    createEdges(){
        // Represents graph as an adjacency list, using a Map to store the data
        for(let [vertice] of this.board){
            let arr = [];
            // Loop through the 8 combinations of move variants
            for(let moveVariant = 0; moveVariant < this.MOVEVARIANTS.length; moveVariant++){
                let coord = vertice.split(',')
                let i = parseInt(coord[0])
                let j = parseInt(coord[1])
                
                let newI = i + this.MOVEVARIANTS[moveVariant][0];
                let newJ = j + this.MOVEVARIANTS[moveVariant][1];

                // Ensure no coords go outside of the range of the board
                if(!(newI >= 8 || newJ >= 8 || newI < 0 || newJ < 0)){
                    arr.push([newI,newJ]);
                }
            }
            // Add vertice to adjacency list
            this.board.set(vertice, arr);
        }
    }

    knightMoves(startCoord, endCoord){
        // Initialise array of visited coordinates/nodes and initialise a queue
        const visitedCoords = [];
        const queue = [];
        endCoord = `${endCoord[0]},${endCoord[1]}`
        // Push the starting coordinate to the queue, along with its "path" which is currently just itself
        queue.push([startCoord, [startCoord]]);
        while(queue.length > 0){
            // FIFO - first in the queue will then be taken out and visited
            let coord = queue.shift();
            // Split the coordinate into its two parts, the coord itself and the path (I could probably find a more efficient way to do this)
            let currentCoord = coord[0];
            let path = coord[1];
            currentCoord = `${currentCoord[0]},${currentCoord[1]}`;
            visitedCoords.push(currentCoord);
            // If the end coordinate is located, end function and return path take. As the search is breadth first, it should always return the shortest path
            if(currentCoord === endCoord){
                return path;
            }
            const neighbours = this.board.get(currentCoord);
            for(let neighbour of neighbours){
                if(!visitedCoords.includes(neighbour)){
                    // If the neighbour hasn't been visited yet, it is added to the queue (along with its path until now)
                    queue.push([neighbour, [...path, neighbour]]);
                }
            }
        }
    }
}

// Below is used just as testing purposes
let graph = new chessGraph(8);
let path = graph.knightMoves([0, 0], [6, 2]);
console.log(`It would take ${path.length - 1} moves to get from 0,0 to 4,2 !`)
console.log(`You would follow the route:`)
for(let coord of path){ console.log(coord) }