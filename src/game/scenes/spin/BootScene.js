import { Scene } from 'phaser'
import wheel from '@/game/assets/spin/wheel.png'
import pin from '@/game/assets/spin/pin.png'
import logo from '@/game/assets/logo.jpg'
import background from '@/game/assets/background.jpg'
import coin from '@/game/assets/spin/coin.png'
import coin_json from '@/game/assets/spin/coin.json'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('wheel', wheel)
    this.load.image('pin', pin)
    this.load.image('logo', logo)
    this.load.image('background', background)
    this.load.atlas('coin', coin, coin_json);
    // image.scale.setTo(0.1,0.1);
    // this.load.image('bomb', bomb)
    // this.load.audio('thud', [thudMp3, thudOgg])
    this.add.text(this.game.renderer.width/2.5, this.game.renderer.height/2.2, 'Loading ...').setOrigin(0)
    this.loadingBar = this.add.graphics({
        fillStyle: {color: 0xffffff}
      })
    
    this.load.on('progress', (percent)=>{
      this.loadingBar.fillRect(0, this.game.renderer.height/2, this.game.renderer.width * percent, 10)
    })
  }

  create () {
    // this.scene.start('MenuScene')
    this.scene.start('PulaPutiScene')
    
  }
}