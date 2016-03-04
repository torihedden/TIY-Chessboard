$(document).ready(function(){
  'use strict';

//generates the game board's styled squares
  for (var i = 0; i < 8; i++){
    if (i % 2 === 0){
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
    } else {
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
      $("#board-area").append("<div class = 'white'>white</div>");
      $("#board-area").append("<div class = 'black'>black</div>");
    }
  }

});
