import Phaser from 'phaser'
import BootScene from './scenes/spin/BootScene'
import MenuScene from './scenes/spin/MenuScene'
import RoletaScene from './scenes/spin/Roleta'
import PulaPutiScene from './scenes/spin/PulaPuti'
import ColorGameScene from './scenes/spin/ColorGame'

function launch() {
    new Phaser.Game({
      type: Phaser.AUTO,
      width: 350,
      height: 550,
      parent: 'game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 400 },
          debug: false
        }
      },
      scene: [BootScene, RoletaScene, MenuScene, PulaPutiScene, ColorGameScene]
    })
  }
  
  export default launch
  export { launch }