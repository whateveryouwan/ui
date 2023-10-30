class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");
    }

    setElementsPosition() {
        this.titleImg.position(120, 50);
        this.input.position(width / 2 - 110, height / 2 );
        this.playButton.position(width / 2 - 90, height / 2 + 80);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
        console.log(this.input.position)
    
    }

      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }

      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }
    
    
      display(){
        this.setElementsPosition();
        this.setElementsStyle(); 
        this.handleMousePressed()
    }

}