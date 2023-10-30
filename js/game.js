class Game {
    constructor() {


    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
            gameState: state
        });
    }

    start() {
        player = new Player();
        playerCount = player.getCount();

        form = new Form()
        form.display();

       

        nukes = createGroup()
        bullets = createGroup()

        player1 = createSprite(300, 600, 50, 50);
        player1.scale = 0.5
        player1.addImage(playerImg)

        player2 = createSprite(500, 600, 50, 50);
        player2.scale = 0.5
        player2.addImage(player2Img)

    }

    play() {
        
        Player.getPlayersInfo()

        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
        }
        
        if (keyDown('RIGHT_ARROW')) {
            player.position.x = player.position.x + 20
        }
        if (keyDown('LEFT_ARROW')) {
            player.position.x = player.position.x - 20
        }

        if (keyDown('RIGHT_ARROW')) {
            player2.position.x = player2.position.x + 20
        }
        if (keyDown('LEFT_ARROW')) {
            player2.position.x = player2.position.x - 20
        }


        if (keyWentUp('SPACE')) {
            var bullet = createSprite(player.x, player.y, 20, 20)
            bullet.velocityY = -7
            bullet.addImage(bulletsImg)
            bullet.scale = 0.025
            bullets.add(bullet)
        }

        if (keyWentUp('SPACE')) {
            var bullet = createSprite(player2.x, player2.y, 20, 20)
            bullet.velocityY = -7
            bullet.addImage(bulletsImg)
            bullet.scale = 0.025
            bullets.add(bullet)
        }

        for (var i = bullets.length - 1; i >= 0; i--) {
            for (var j = 0; j < nukes.length; j++) {
                if (bullets[i].overlap(nukes[j])) {
                    bullets[i].remove()
                    nukes[j].remove()
                    score = score + 10
                }
            }


        }
        this.spawnEnemies()
        drawSprites();
        textSize(20)
        text('score:' + score, 100, 100)

    }

    spawnEnemies() {
        if (World.frameCount % 100 == 0) {
            var nuke = createSprite(width / 2, -100, 40, 70)
            nuke.x = Math.round(random(0, width))
            nuke.velocityY = 5
            nuke.addImage(nukeImg)
            nuke.scale = 0.5
            nukes.add(nuke)
        }
    }

}