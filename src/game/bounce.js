import Phaser from 'phaser'
import BootScene from './scenes/bounce/BootScene'
import PlayScene from './scenes/bounce/PlayScene'

function launch() {
    new Phaser.Game({
      type: Phaser.AUTO,
      width: 400,
      height: 500,
      parent: 'game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 400 },
          debug: false
        }
      },
      scene: [BootScene, PlayScene]
    })
  }
  
  export default launch
  export { launch }