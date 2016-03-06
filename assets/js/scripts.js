$(document).ready(function(){
  'use strict';

//generates the game board's styled squares on page load
  for (var i = 0; i < 8; i++){
    if (i % 2 === 0){
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
    } else {
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
      $("#board-area").append("<div class = 'white square'></div>");
      $("#board-area").append("<div class = 'black square'></div>");
    }
  }//closes board

//unsure if I need this
var king = "king"
var queen = "queen"
var bishop = "bishop"
var rook = "rook"
var knight = "knight"
var pawn = "pawn"

var white = "white"
var black = "black"

//places piece in again given location
var piecePlace = function(index, piece, color){
  $($(".square")[index]).append("<img src = 'assets/imgs/" + piece + color + ".png'></img>");
}

//converts position in 2D array to equivalent position in 1D array
var arrayConverter = function(x, y){
  var z =  8 * y + x;
  return z;
}

var boardPlacer = function(x, y, piece, color){
  piecePlace(arrayConverter(x, y), piece, color);
}

  var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];
  //fills the game board with the elements in the array

for (var i = 0 ; i < 8; i++){
  for (var j = 0; j < 8; j++){
    var currentPiece = board[i][j];
    if (currentPiece !== " "){
      var color
      if (currentPiece === currentPiece.toUpperCase()) {
        color = black; //AKA the piece was already upper case
      } else {
        color = white;
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
      }
      boardPlacer(j, i, pieceID, color)
    }
  }
}
//test for upper/lower case from:
//http://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip



});
