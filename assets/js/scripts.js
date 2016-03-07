$(document).ready(function(){
  'use strict';

//generates the game board's styled squares on page load
  for (var i = 0; i < 8; i++){
    if (i % 2 === 0){
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
    } else {
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
    }
  }//closes board

var board //use this to pass a different array in to the board building functions?

var king = "king"
var queen = "queen"
var bishop = "bishop"
var rook = "rook"
var knight = "knight"
var pawn = "pawn"

var white = "white"
var black = "black"

//places piece in any given location
var piecePlace = function(index, piece, color){
  $($(".square")[index]).html("<img src = 'assets/imgs/" + piece + color + ".png'></img>");
}

//converts position in 2D array to equivalent position in 1D array
var arrayConverter = function(x, y, board){
  var z =  board[y].length * y + x; //each row array is length 8, you could use the constant 8 instead
  return z; //z is the index of the square in $(".square")
}

//combines array converter and piece location functions
var boardPlacer = function(x, y, piece, color, board){
  piecePlace(arrayConverter(x, y, board), piece, color);
}

//I wanted to do this DRYer, but for now it's wet
  var board0 = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  var board1 = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','p',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p',' ','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  var board2 = [
    ['R','N','B','Q','K','B',' ','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ','N',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','p',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p',' ','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  var board3 = [
    ['R','N','B','Q','K','B',' ','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ','N',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','p','p',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p',' ',' ','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

  var board4 = [
    ['R','N','B','Q','K','B',' ','R'],
    ['P','P','P','P',' ','P','P','P'],
    [' ',' ',' ',' ','P','N',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','p','p',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p',' ',' ','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

var board5 = [
  ['R','N','B','Q','K','B',' ','R'],
  ['P','P','P','P',' ','P','P','P'],
  [' ',' ',' ',' ','P','N',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ','p','p',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','p',' '],
  ['p','p',' ',' ','p','p',' ','p'],
  ['r','n','b','q','k','b','n','r'] ];

var board6 = [
  ['R','N','B','Q','K','B',' ','R'],
  ['P','P','P',' ',' ','P','P','P'],
  [' ',' ',' ',' ','P','N',' ',' '],
  [' ',' ',' ','P',' ',' ',' ',' '],
  [' ',' ','p','p',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','p',' '],
  ['p','p',' ',' ','p','p',' ','p'],
  ['r','n','b','q','k','b','n','r'] ];

var board7 =  [
  ['R','N','B','Q','K','B',' ','R'],
  ['P','P','P',' ',' ','P','P','P'],
  [' ',' ',' ',' ','P','N',' ',' '],
  [' ',' ',' ','P',' ',' ',' ',' '],
  [' ',' ','p','p',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','p',' '],
  ['p','p',' ',' ','p','p','b','p'],
  ['r','n','b','q','k',' ','n','r'] ];

var board8 = [
  ['R','N','B','Q','K',' ',' ','R'],
  ['P','P','P',' ','B','P','P','P'],
  [' ',' ',' ',' ','P','N',' ',' '],
  [' ',' ',' ','P',' ',' ',' ',' '],
  [' ',' ','p','p',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','p',' '],
  ['p','p',' ',' ','p','p','b','p'],
  ['r','n','b','q','k',' ','n','r'] ];

var board9 = [
  ['R','N','B','Q','K',' ',' ','R'],
  ['P','P','P',' ','B','P','P','P'],
  [' ',' ',' ',' ','P','N',' ',' '],
  [' ',' ',' ','P',' ',' ',' ',' '],
  [' ',' ','p','p',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','n','p',' '],
  ['p','p',' ',' ','p','p','b','p'],
  ['r','n','b','q','k',' ',' ','r'] ];

var currentBoardIndex = 0
//the page should load with the initial board setup in place

var boards = [board0, board1, board2, board3, board4, board5, board6, board7, board8, board9]

//fills the game board with the elements in the array
var drawBoard = function(board){
  for (var i = 0 ; i < 8; i++){
    for (var j = 0; j < 8; j++){
      var currentPiece = board[i][j];
      if (currentPiece !== " "){
        var color
        if (currentPiece === currentPiece.toUpperCase()) {
          color = black; //AKA the piece was already upper case
        } else {
          color = white; //AKA the piece was lower case
        }
        var pieceID
        switch(currentPiece.toUpperCase()){
        case "R":
            pieceID = rook
            break;
        case "N":
            pieceID = knight
            break;
        case "B":
            pieceID = bishop
            break;
        case "Q":
            pieceID = queen
            break;
        case "K":
            pieceID = king
            break;
        case "P":
            pieceID = pawn
            break;
        default:
            console.log("something's wrong")
            //this should never happen if pieces are typed in correctly but just in case
        }
        boardPlacer(j, i, pieceID, color, board)
      } else {
        $($(".square")[arrayConverter(j, i, board)]).html(" ");
        //empties the old piece's position
      }
    }
  }
}
//test for upper/lower case from:
//http://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip

drawBoard(boards[currentBoardIndex]);
//the site needs to load with the initial setup in place, AKA board at index boards[0]

  $("#rewind").click(function(){
    currentBoardIndex = 0
    drawBoard(boards[currentBoardIndex])
  });

  //on click of forward, currentBoardIndex ++
  $("#forward").click(function(){
    currentBoardIndex++
    drawBoard(boards[currentBoardIndex])
  });

  //on click of back, currentBoardIndex --
  $("#back").click(function(){
    currentBoardIndex--
    drawBoard(boards[currentBoardIndex])
  });

  $("#fastforward").click(function(){
    currentBoardIndex = (boards.length)-1
    drawBoard(boards[currentBoardIndex])
  });



//Note: To be able to use the clearInterval() method, you must use a global variable when creating the interval method.
//However, now this executes on page load. if I put boardPlay inside play event listener, pause won't work

  $("#play").click(function(){
    var boardPlay =   setInterval(function(){
        currentBoardIndex++
        drawBoard(boards[currentBoardIndex]);
      }, 500);

 });

 $("#pause").click(function(){
    window.clearInterval(boardPlay);
 });

});
