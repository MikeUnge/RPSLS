function playMove(){
    // main function
    // get the selected text (players choice)
    var e = document.getElementById("move");
    var player = e.options[e.selectedIndex].text;
    
    // check if the input is real
    if((player == "Rock") || (player == "Paper") || (player == "Scissor") || (player == "Lizard") || (player == "Spock")){
        var bot = robot();

        // get the bots choice
        if(bot == 1){ bot = "Rock"; } 
        else if(bot == 2){ bot = "Paper"; }
        else if (bot == 3){ bot = "Scissor"; }
        else if (bot == 4){ bot = "Lizard"; }
        else { bot = "Spock"; }

        // get the win, tie, and loses
        var tie = parseInt(document.getElementById("tie").innerText);
        var win = parseInt(document.getElementById("win").innerText);
        var lose = parseInt(document.getElementById("lose").innerText);

        // check if the player, the robot or none of both wins
        if((player == "Rock" && bot == "Lizard") || (player == "Lizard" && bot == "Spock") || (player == "Spock" && bot == "Scissor") || (player == "Scissor" && bot == "Paper") || (player == "Paper" && bot == "Rock") || (player == "Rock" && bot == "Scissor") || (player == "Lizard" && bot == "Paper") || (player == "Spock" && bot == "Rock") || (player == "Scissor" && bot == "Lizard") || (player == "Paper" && bot == "Spock")){
            win++;
            document.getElementById("win").innerHTML = "<h4>" +win +"</h4>";
            document.getElementById("small_headline").innerHTML = "<h3><small>You win!</small></h3>";
        } else if(player == bot){
            tie++;
            document.getElementById("tie").innerHTML = "<h4>" +tie +"</h4>";
            document.getElementById("small_headline").innerHTML = "<h3><small>Thats a draw!</small></h3>";
        } else {
            lose++;
            document.getElementById("lose").innerHTML = "<h4>" +lose +"</h4>";
            document.getElementById("small_headline").innerHTML = "<h3><small>Robot wins!</small></h3>";
        }
        document.getElementById("playerImg").src="img/" + player + ".svg";
        document.getElementById("playerImg").style="transform:rotate(0deg); width:150px; height:150px;";
        document.getElementById("robotImg").src="img/" + bot + ".svg";
        document.getElementById("robotImg").style="transform:rotate(0deg); width:150px; height:150px;";
        console.log("Player: " + player + " | Bot: " + bot);    // debugging
        console.log("Player: " + win + " | Bot: " + lose);      // debugging
    } else if(player == "-- Select Move --"){
        swal({
            type: 'error',
            title: 'Cannot do this...',
            text: 'Please select an option and try it again.'
          });
    } else {
        // when this message comes you fucked it up mate
        swal({
            type: 'error',
            title: 'Something went wrong...',
            text: 'Reload the page and try it again.'
          });
          location.reload(); 
    }
}

function robot(){
    // get a random integer so the bot gets a random decission
    var rd = 0;
    while(rd == 0){
        // get a radom string between 0-10
        var n = Math.floor(Math.random() * 11);
        //console.log(n);
        var i;
        // create a random number as many times as the n variable is
        for(i = 0; i < n; i++){
            rd = Math.floor(Math.random() * 6);
        }
    }
    //console.log(rd);    // debugging
    return rd;  // return the number
}