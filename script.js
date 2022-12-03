const choices = ['rock', 'paper', 'scissors']

const game = () => {
    const numRounds = parseInt(prompt("How many rounds do you want to play?"))

    // Score Variables
    let userWins = 0
    let pcWins = 0

    // Play Rounds
    for(i = 0; i < numRounds; i++) {
      result = playRound()
      switch(result.result) {
        case 1:
            userWins++
            console.log(`User has won this round! ${result.user} beats ${result.pc}`)
            break
        case -1:
            pcWins++
            console.log(`PC has won this round! ${result.pc} beats ${result.user}`)
            break
        case 0:
            i--
            console.log("This round was a draw! Let's repeat")
            break
      }
    }


    if(userWins > pcWins) console.log(`User has won! Score: ${userWins} - ${pcWins}`)
    else if (pcWins > userWins) console.log(`PC has won! Score: ${userWins} - ${pcWins}`)
    else console.log(`It was a draw! Score: ${userWins} - ${pcWins}`)
}


const playRound = () => {
    let userSelection = prompt("What's your move? (rock / paper / scissors)").toLowerCase()
    computerSelection = computerPlay()
    return getResult(userSelection, computerSelection);
}

const computerPlay = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}

const getResult = (userSelection, computerSelection) => {
    switch (userSelection + computerSelection) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        return {"user": userSelection, "pc": computerSelection, "result": 1}
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        return {"user": userSelection, "pc": computerSelection, "result": -1}
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
        return {"user": userSelection, "pc": computerSelection, "result": 0}
    }
}

console.log("Welcome to best rock paper scissors game in the world!")

game();