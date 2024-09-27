const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	switch (userInput) {
		case "rock":
			return userInput;
			break;

		case "paper":
			return userInput;
			break;

		case "scissors":
			return userInput;
			break;

		default:
			console.log("error");
	}
};

const getComputerChoice = () => {
	const randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0:
			return "rock";
			break;

		case 1:
			return "paper";
			break;

		case 2:
			return "scissors";
			break;

		default:
			console.log("error");
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return "game was a tie.";
	} else if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return "computer won";
		} else {
			return "user won";
		}
	} else if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			return "computer won";
		} else {
			return "user won";
		}
	} else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return "computer won";
		} else {
			return "user won";
		}
	}
};

const playGame = () => {
	const userChoice = getUserChoice("scissors");
	console.log("userChoice:", userChoice);
	const computerChoice = getComputerChoice();
	console.log("computerChoice:", computerChoice);

	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
