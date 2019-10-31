import { Scene } from 'phaser'
import sky from '@/game/assets/bounce/sky.png'
import bomb from '@/game/assets/bounce/bomb.png'
import thudMp3 from '@/game/assets/bounce/thud.mp3'
import thudOgg from '@/game/assets/bounce/thud.ogg'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
    
  }
}