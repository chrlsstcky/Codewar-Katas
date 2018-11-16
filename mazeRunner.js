/*you will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.*/ 


var maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

var directions = ["N","N","N","N","N","E","E","E","E","E"];

const mazeRunner = (maze, directions) =>{
  console.log(maze, directions)
  let joinedMaze = maze.join(',').split(',')
  let position = joinedMaze.indexOf('2')
  for(var i = 0; i < directions.length; i++){
    if(directions[i] === 'N'){
      position = position - Math.sqrt(joinedMaze.length)  
    }else if(directions[i] === 'S'){
      position = position + Math.sqrt(joinedMaze.length) 
    }else if(directions[i] === 'W'){
      position = position - 1 
    }else if(directions[i] === 'E'){
      position = position + 1 
    }
    if(joinedMaze[position] === '1' || joinedMaze[position] === undefined){
      return console.log('Dead')
    }else if(joinedMaze[position] === '3'){
      return console.log('Finish')
    }
  }
  return console.log('Lost')
}

mazeRunner(maze, directions)
