/**
 * Created by erikaoneal on 5/3/16.
 */
var player1_array = [];
var player2_array = [];
var play_count = 1;
var cell_count = 3;
var cell_win_count = 3;
var click = false;
var player1_wins = 0;
var player2_wins = 0;

function make_move() {
    //main function executed on click. add image to block, call check_win, call check_draw, increase play_count
    if(play_count == 1 || play_count%2 == 1){
       // var x = 'x';
        $('<img>').hasClass('.x').show();
      //  var x = $('<div>').addClass('img-responsive').html('<img src="images/x.png">');
      //  $(x).appendTo('<div>');
        play_count++;
        check_win();
        check_draw();
    }
    else{
       // var o = 'o';
        $('<img>').hasClass('.o').show();
       // var o = $('<div>').addClass('img-responsive').html('<img src="images/o.png">'); //addClass
      //  $(o).appendTo('<div>');
        play_count++;
        check_win();
        check_draw();
    }
}

function check_win(object) {
    //loop through array to compare wins
}

function check_draw() {
    //see if gameboard is full and no win is present
}

function game_board() {
    //dynamically creates board according to cell_count
}

function reset() {
    //clear all the objects in arrays, clear gameboard
    function reset() {
        player_1 = [];
        player_2 = [];
        play_count = 1;
        cell_count = 3;
        player1_wins = 0;
        player2_wins = 0;
        $('.x, .o').(); // remove or toggle class??

    }

}
function display() {
    //shows stats, and highlights which player's turn it is
    If(win)
    { //player 1 wins needs from check win
        wins1++;
        $('.').text(' ' + player1_wins);
    }
    else{
        wins2++;
        $('.').text(' ' + player2_wins);
    }



}

$(document).ready(function(){
    $('.image-responsive').hide();
    $('').click(function(){
       make_move();
    });

    $('.reset').click(function(){
        reset();
    })


})

