import { Scene } from 'phaser'

export default class MenuScene extends Scene {

    constructor () {
        super({ key: 'MenuScene' })
      }
    
    /**
     * 
     */
    preload () {
    
    }

    /**
     * 
     */
    create(){
        console.log('creating menu scene')
        this.add.image(0,0,'background').setOrigin(0).setScale(0.7).setDepth(0)
        this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.20, 'logo').setScale(0.1).setDepth(1)
        this.add.text(this.game.renderer.width /2.6, this.game.renderer.height * 0.30, 'Mang Kanor').setOrigin(0).setDepth(1)

        var roleta = this.add.text(this.game.renderer.width /2.8, this.game.renderer.height / 2, '< Roleta >').setOrigin(0).setDepth(1)        
        var colorgame = this.add.text(this.game.renderer.width /2.8, this.game.renderer.height / 1.85, '< Color Game >').setOrigin(0).setDepth(1) 
        var pulaputi = this.add.text(this.game.renderer.width /2.8, this.game.renderer.height / 1.7, '< Pula Puti >').setOrigin(0).setDepth(1) 
        this.add.text(this.game.renderer.width /2.8, this.game.renderer.height / 1.5, '< Options >').setOrigin(0).setDepth(1)

        roleta.setInteractive()
        roleta.on('pointerup', ()=>{
            this.scene.start('RoletaScene')
        })

        colorgame.setInteractive()
        colorgame.on('pointerup', ()=>{
            this.scene.start('ColorGameScene')
        })

        pulaputi.setInteractive()
        pulaputi.on('pointerup', ()=>{
            this.scene.start('PulaPutiScene')
        })
    }
}