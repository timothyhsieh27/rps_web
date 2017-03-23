$(document).ready(function(){

  $('.rock').click(function(){
    human_choice = 'rock'
    state_human_choice(human_choice)
    generate_computer_selection(human_choice)
  });

  $('.paper').click(function(){
    human_choice = 'paper'
    state_human_choice(human_choice)
    generate_computer_selection(human_choice)
  });

  $('.scissors').click(function(){
    human_choice = 'scissors'
    state_human_choice(human_choice)
    generate_computer_selection()
  });

  function state_human_choice(human_choice){
    let human_choice_statement = 'You selected ' + human_choice + '.'
    console.log(human_choice_statement)
  }

  function generate_computer_selection(human_choice){
    const choices = ["rock", "paper", "scissors"];
    const computer_choice = Math.floor(Math.random() * 3);
    let computer_selection_statement =('The computer selected ' + choices[computer_choice] + '.')
    let computer_selection = choices[computer_choice]
    console.log(computer_selection_statement)
    calculate_win(human_choice, choices, computer_choice)
  };

  function calculate_win(human_choice, choices, computer_choice){
    if (human_choice == choices[computer_choice - 1]){
      console.log('The computer won this round.')
      $('.results').empty().append("The computer won this round.")
    }
    else if (human_choice == choices[computer_choice]){
      console.log('This round is a draw.')
      $('.results').empty().append("This round is a draw.")
    }
    else {
      console.log('You won this round!')
      $('.results').empty().append("You won this round!")
    }
  }

});
