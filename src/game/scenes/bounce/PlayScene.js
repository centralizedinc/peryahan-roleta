import { Scene } from 'phaser'


export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    
    this.add.image(400, 300, 'sky')
    var score = 0;
    var scoreText = this.add.text(10, 10, "Score: 0", { font: "65px Arial", fill: "#ff0044", align: "center" });
    const bomb = this.physics.add.image(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(200, 20)

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 })
      score += 10;
      scoreText.setText('Score: ' + score);
    })
  }

  update () {
  }
}