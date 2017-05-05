var game = new Phaser.Game(640, 600, Phaser.AUTO, 'play', { preload: preload, create: create, update: update });

    var platforms;
    var player;
    var score = 0;
    var scoreText;

    var vihollinen = 0;

    var enemies;

    var audio = new Audio('lehma.mp3');
    audio.play();

    function preload(game) {
        game.load.image('putin', 'sky.png');
        game.load.image('ground', 'dirt.png');
        game.load.image('star', 'leaf.gif');
        game.load.spritesheet('dude', 'cows.png', 40, 34);
        game.load.image('enemy', 'dude.png');  
    }

    //tein tälle oman metodin, ni tähtiä voi luoda myös sillon, kun lehmä saa niitä syötyä.
    function createStar(game) {
        //  Create a star inside of the 'stars' group
        var star = stars.create(Math.random() * 640, 0, 'star');
        vihollinen += 1;
            //  Let gravity do its thing
        star.body.gravity.y = 6;

            //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.5 + Math.random() * 0.2;
    }

<<<<<<< HEAD
        //  This just gives each star a slightly random bounce value
    star.body.bounce.y = 0.5 + Math.random() * 0.2;
}

function createEnemy(game) {
    //  Create a star inside of the 'stars' group

    
   for (var i = 0; i < 2; i++)
    {
   // var enemy = enemies.create(Math.random() * 10) //Math.random()*550, 'enemy');
          var enemy = enemies.create(0, Math.random() * 600, 'enemy');

    enemy.body.gravity.x= ((Math.random() * 10) + 1)*10;
    

    //  This just gives each star a slightly random bounce value
    enemy.body.bounce.y = 1.0;
    

    enemy.body.velocity.x =((Math.random() * 10) + 1)*20

    //enemy.body.velocity.x =((Math.random() * 10) + 1)*17

    
   // }
        //  Let gravity do its thing
    
    var enemy = enemies.create(0, Math.random() * 600, 'enemy');

        //  Let gravity do its thing
    //enemy.body.gravity.y = 6;
=======
    function createEnemy(game) {
>>>>>>> origin/master

        var enemy = enemies.create(0, Math.random() * 600, 'enemy');
        //  This just gives each star a slightly random bounce value
<<<<<<< HEAD
    enemy.body.bounce.y = 1.0;
    enemy.body.bounce.x = 1.0;
    enemy.body.gravity.x= ((Math.random() * 10) + 1)*10;
    enemy.body.collideWorldBounds = true;
    enemy.physicsBodyType = Phaser.Physics.P2JS;

}
}

function create(game) {
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
    
    

    //  A simple background for our game
    game.add.sprite(0, 0, 'putin');
 
    console.log("vittu");

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //.scale.setTo(2, 2);
    //ground.scale.setTo(5,5);
    //ground.scale.setTo(8,8);
    //ground.scale.setTo(11,11);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 350, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(-400, 200, 'ground');

    ledge.body.immovable = true;
    
     // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0], 10, true);
    player.animations.add('right',  [1], 10, true);
    
    stars = game.add.group();
    stars.enableBody = true;
    
    enemies = game.add.group();
    enemies.enableBody = true;

    //  Here we'll create 10 of them evenly spaced apart
    for (var i = 0; i < 10; i++)
    {
       createStar(game);
      
=======
        enemy.body.bounce.y = 1.0;
        enemy.body.bounce.x = 1.0;
        enemy.body.gravity.x = ((Math.random() * 10) + 1) * 10;
        enemy.body.gravity.y = ((Math.random() * 10) + 1) * 10;
        enemy.body.collideWorldBounds = true;
        enemy.physicsBodyType = Phaser.Physics.P2JS;
        enemy.body.velocity.x = ((Math.random() * 10) + 1) * 20;
        enemy.body.velocity.y = ((Math.random() * 10) + 1) * 17;

>>>>>>> origin/master
    }

    function create(game) {
        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.startSystem(Phaser.Physics.P2JS);

        //  A simple background for our game
        game.add.sprite(0, 0, 'putin');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        // Here we create the ground.
        var ground = platforms.create(0, game.world.height - 64, 'ground');

        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;

        //  Now let's create two ledges
        var ledge = platforms.create(400, 350, 'ground');

        ledge.body.immovable = true;

        ledge = platforms.create(-400, 200, 'ground');

        ledge.body.immovable = true;

<<<<<<< HEAD
function gameOver(player,enemy){
  player.kill();
    console.log("game over")
}
=======
         // The player and its settings
        player = game.add.sprite(32, game.world.height - 150, 'dude');
>>>>>>> origin/master

        //  We need to enable physics on the player
        game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        player.animations.add('left', [0], 10, true);
        player.animations.add('right',  [1], 10, true);

        stars = game.add.group();
        stars.enableBody = true;

        enemies = game.add.group();
        enemies.enableBody = true;

        //  Here we'll create 10 of them evenly spaced apart
        for (var i = 0; i < 10; i++)
        {
           createStar(game); 
        }

        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    function update() {

     var hitPlatform = game.physics.arcade.collide(player, platforms);
        var cursors = game.input.keyboard.createCursorKeys();

        player.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            //  Move to the left
            player.body.velocity.x = -150;

            player.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 150;

            player.animations.play('right');
        }
        else
        {
            //  Stand still
            player.animations.stop();
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down && hitPlatform)
        {
            player.body.velocity.y = -350;
        }
        //game.physics.arcade.collide(stars, platforms);
        //game.physics.arcade.collide(enemies, platforms);
        game.physics.arcade.overlap(player, stars, collectStar, null, this);
        game.physics.arcade.overlap(player, enemies, gameOver(), null, this);

        }

    function gameOver() {
        game.state.start('gameOver');
    }

    //tästä saa pisteitä ja samalla ilmestyy uusi tähti.
    function collectStar (player, star) {

        // Removes the star from the screen
        star.kill();
        score += 10;
        scoreText.text = 'Score: ' + score;
        createStar(game);
        if (score % 50 == 0 ) {
            createEnemy(game);
        }
    }
<<<<<<< HEAD
}

=======
>>>>>>> origin/master
