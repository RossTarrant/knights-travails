# knights-travails

## Problem ##
Build a function `knightMoves()` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

The problem can be expressed as two coordinates that are passed into the function as parameters. The function would be called in the following format:

`knightMoves([0,0],[1,2]) == [[0,0],[1,2]]`

`knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]`

`knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]`

The program should provide a response which explains how many moves it would take to get from the starting coordinate to the end coordinate. It will also display the path that would be taken to achieve this. An example of the format is displayed below:

![image](https://user-images.githubusercontent.com/14926097/215722568-fbe0bd89-f2a3-4cdc-957a-b3e86a27335f.png)

## Solution ##

When an instance of the class `chessGraph` is created, the constructor will take in the size of the board as a parameter which will be used to create a board size of the users choosing. The constructor also initialises the `board` map.

`createVertices()` is called by the constructor and sets size x size keys that are added to the `board` map. Keys are set as coordinates (going up to the size of the board e.g. [1,3] , [4,7] etc.) and the values are initially set to be empty arrays.

`createEdges()` represents the graph as an adjacency list. It iterates through all of the key values (vertices of the graph) that are stored in the `board` map. For each vertice, it will then loop through the possible move variants of a knight piece in a game of chess. Valid moves are added to an array and invalid moves (e.g. moves that would go off the board) are discarded. The array (which represents all of the neighbours of a vertice) is then added as a value to its respective key. This implementation allows me to represent all possible neighbours of each vertice of the graph.

`knightMoves(startCoord, endCoord)` takes in two coordinates as parameters. (WRITEUP TO BE FINISHED)

## Challenges ##
- Deciding the data structure to store the graph was a challenging process. Initially I decided to use a 2D array to store the vertices/edges of the graph as an adjacency matrix, however upon implementation it began to appear overly complicated for its purpose. I then came across Maps which I could use to represent the vertices/edges of the graph as an adjacency list. I had not used Maps prior to this project so it was a great opportunity to learn about how they can be used.

- The implementation of the adjacency list was relatively simple and did not take too long to complete. However the searching algorithm took a very long time to implement and was a significant challenge when completing the project. I was aware that both a Breadth First Search (BFS) and a Depth First Search  (DFS) were both viable solutions to traversing a graph. I attempted to implement both before settling on a BFS algorithm to traverse the tree. I believe that a BFS algorithm works better for finding the shortest path to the ending coordinate as it will search for all neighbours of the starting coordinate (one node traversed) to then searching the neighbours neighbours (two nodes traversed) and so on. I created a queue system to implement this algorithm.
