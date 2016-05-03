/**
 * Created by erikaoneal on 5/3/16.
 */
var player1_array = [];
var player2_array = [];
var play_count = 1;
var cell_count = 3;
var cell_win_count = 3;
var win = false;

function make_move() {
    //main function executed on click. add image to block, call check_win, call check_draw, increase play_count
}

function check_win(object) {
    //loop through array to compare win
    
    if (object.value == 'player1') {
        var temp_check_array = [];
        temp_check_array.push(object);

        //check column win
        for (i = 0; i < player1_array.length; i++) { //fill check array with all x's in that column
            var current_object = player1_array[i];
            if (current_object.column == object.column) {
                temp_check_array.push(current_object);
            }
        }

        if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

            temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                            win = true;
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }
        
        //check row win
        if (!win) {

            var temp_check_array = [];
            temp_check_array.push(object);

            for (i = 0; i < player1_array.length; i++) { //fill check array with all x's in that column
                var current_object = player1_array[i];
                if (current_object.row == object.row) {
                    temp_check_array.push(current_object);
                }
            }

            if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

                temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                    if (a.column > b.row) {
                        return 1;
                    }
                    else if (a.row < b.row) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });

                var first_check_object = temp_check_array[0];
                var current_check_object = temp_check_array[0];

                for (i = 1; i < temp_check_array.length; i++) {

                    for (j = 1; j <= cell_win_count; j++) {
                        if (temp_check_array[i].row == first_check_object.row + j) {
                            current_check_object = temp_check_array[i];

                            if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                                display('Player 1 Wins!');
                            }
                        }
                        else {
                            first_check_object = temp_check_array[i];
                            break;
                        }
                    }

                }
            }
        }

        //check diagonals
        if (!win) {
            temp_check_array = player1_array.splice();

            temp_check_array.sort(function compare(a, b) { //sorting player 1 array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].row == first_check_object.row + j && temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else if (temp_check_array[i].row == first_check_object.row - j && temp_check_array[i].column == first_check_object.column - j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }

    }
}

function check_draw() {
    //see if gameboard is full and no win is present
}

function game_board() {
    //dynamically creates board according to cell_count
}

function reset() {
    //clear all the objects in arrays, clear gameboard
 
}


function display() {
    //shows stats, and highlights which player's turn it is
}

$(document).ready(function() {
    $('.cells').click(make_move);
});
    
   