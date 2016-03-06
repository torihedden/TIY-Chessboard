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

boardPlacer(3, 1, knight, white);

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


});
