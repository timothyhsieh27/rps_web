$(document).ready(function(){
  let draws = 0;
  let wins = 0;
  let losses = 0;
  play_round(draws, wins, losses)

  function play_round(draws, wins, losses){

    $('.rock').click(function(){
      human_choice = 'rock'
      state_human_choice(draws, wins, losses, human_choice)
    });

    $('.paper').click(function(){
      human_choice = 'paper'
      state_human_choice(draws, wins, losses, human_choice)
    });

    $('.scissors').click(function(){
      human_choice = 'scissors'
      state_human_choice(draws, wins, losses, human_choice)
    });
  }

  function state_human_choice(draws, wins, losses, human_choice){
    let human_choice_statement = 'You selected ' + human_choice + '.'
    $('.results').empty().append(human_choice_statement)
    generate_computer_selection(draws, wins, losses, human_choice)
  }

  function generate_computer_selection(draws, wins, losses, human_choice){
    const choices = ["rock", "paper", "scissors"];
    const computer_choice = Math.floor(Math.random() * 3);
    let computer_selection_statement =('The computer selected ' + choices[computer_choice] + '.')
    let computer_selection = choices[computer_choice]
    $('.results').append(computer_selection_statement)
    calculate_win(human_choice, choices, computer_choice, draws, wins, losses)
  };

  function calculate_win(human_choice, choices, computer_choice, draws, wins, losses){
    if (human_choice == choices[computer_choice - 1]){
      $('.results').append("The computer won this round.")
      losses += 1
    }
    else if (human_choice == choices[computer_choice]){
      $('.results').append("This round is a draw.")
      draws += 1
    }
    else {
      $('.results').append("You won this round!")
      wins += 1
    }
    check_game_over(draws, wins, losses)
  }

  function check_game_over(draws, wins, losses){
    if (draws + wins + losses == 5) {
      $('.results').append("Game Over!")
    }
    else {
      $('.results').append(" Select a choice to play another round.")
      play_round(draws, wins, losses)
    }
  }

});
