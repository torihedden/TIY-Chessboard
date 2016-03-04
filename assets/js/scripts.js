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
  }//closes board generator

//replace later with unicode
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

  for (var x = 0; x < 8; x++){
    var currentSquare = $(".square")[x];
    $(currentSquare).append(board[0][x]);
  }

  for (var x = 8; x < 16; x++){
    var currentSquare = $(".square")[x];
    $(currentSquare).append(board[1][x]);
  }

  var board = "board1"

  $("#back").click(function(){
    board = "board" + 0;
    console.log(board);
  });

  $("#forward").click(function(){
    board = "board" + 1;
    console.log(board);
  });

});
