class menuScene extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        
        this.load.image('play','assets/Play.png');
        this.load.image('creditsButton','assets/Credit.png');
        this.load.image('menuBackground', 'assets/bg2.png');
        this.load.image('exitMain', 'assets/Exit.png');

    }

    create(){
        
        this.add.image(400, 300, 'menuBackground');
        const playButton = this.add.image(400,250,'play').setScale(0.5);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {this.scene.start('gamelvl');
        score = 0;
        boxCollected = 0;});
        
        const creditButton = this.add.image(400,350,'creditsButton').setScale(0.5);
        creditButton.setInteractive();
        creditButton.on('pointerdown', () => {this.scene.start('credits')});
        
        const exitGame = this.add.image(400,450,'exitMain').setScale(.5);
        exitGame.setInteractive();
        exitGame.on('pointerdown', () => {alert('Game Exited')});

    }

    update(){

    }
}