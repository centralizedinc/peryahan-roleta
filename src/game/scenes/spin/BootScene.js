import { Scene } from 'phaser'
import wheel from '@/game/assets/spin/wheel.png'
import pin from '@/game/assets/spin/pin.png'
import coin from '@/game/assets/spin/coin.png'
import coin_json from '@/game/assets/spin/coin.json'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('wheel', wheel)
    this.load.image('pin', pin)
    this.load.atlas('coin', coin, coin_json);
    // image.scale.setTo(0.1,0.1);
    // this.load.image('bomb', bomb)
    // this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
    
  }
}