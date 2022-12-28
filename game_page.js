player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1+ ": ";
document.getElementById("player_2").innerHTML = player2+ ": ";

document.getElementById("player_1_score").innerHTML = player1_score
document.getElementById("player_2_score").innerHTML = player2_score

document.getElementById("player_question_turn").innerHTML = "Question Turn: "+player1;
document.getElementById("player_answer_turn").innerHTML = "Answer Turn: "+player2;

function submit()
{
    player1_input = document.getElementById("player1_input").value;
    player2_input = document.getElementById("player2_input").value;
    question_word = "<h4 id='display_number'> Q. "+ player1_input + "x" +player2_input+" </h4>";
    answer = Number(player1_input) * Number(player2_input)
    input_box = "Answer: <input type='text' id='input_box' class='answer_box' placeholder='Type your word'>";
    button_check = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_word + input_box + button_check;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("word_input").value = " ";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    if(input_box == answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question_turn").innerHTML = "Question Turn - "+ player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question_turn").innerHTML = "Question Turn - "+ player1;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer_turn").innerHTML = "Answer Turn - "+ player2;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer_turn").innerHTML = "answer Turn - "+ player1;
    }

    document.getElementById("output").innerHTML = " ";
}