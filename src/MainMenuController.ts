export default class MainMenuController {
    private game: any;
    private playGameButton: HTMLButtonElement;
    private humanPlayersInput: HTMLInputElement;
    private aiPlayersInput: HTMLInputElement;
  
    constructor(game: any) {
      this.game = game;
  
      this.humanPlayersInput = document.createElement("input");
      this.humanPlayersInput.placeholder = "Enter number of human players";
  
      this.aiPlayersInput = document.createElement("input");
      this.aiPlayersInput.placeholder = "Enter number of computer players";
  
      this.playGameButton = document.createElement("button");
      const buttonText = document.createTextNode("Start Game!");
      this.playGameButton.appendChild(buttonText);
  
      this.playGameButton.addEventListener("click", this.switchContext.bind(this));
    }
  
    init(data: any) {
      document.body.appendChild(this.humanPlayersInput);
      document.body.appendChild(this.aiPlayersInput);
      document.body.appendChild(this.playGameButton);
    }
  
    private switchContext() {
      document.body.removeChild(this.humanPlayersInput);
      document.body.removeChild(this.aiPlayersInput);
      document.body.removeChild(this.playGameButton);
  
      this.game.switchContext({
        numOfHumanPlayers: parseInt(this.humanPlayersInput.value),
        numOfAIPlayers: parseInt(this.aiPlayersInput.value),
      });
    }
  }