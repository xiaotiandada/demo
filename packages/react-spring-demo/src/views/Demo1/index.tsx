import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import { TilingSprite } from '@pixi/sprite-tiling'
import { Texture, BaseTexture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'
import anime from 'animejs'
import cat from '../../assets/images/cat.png'
import clouds from '../../assets/images/clouds.png'
import bg from '../../assets/images/bg.png'
import ground from '../../assets/images/ground.png'
import player from '../../assets/images/player.png'

const Demo1: React.FC = () => {
  const load = () => {
    let width = window.innerWidth
    let height = window.innerHeight

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({
      width: width,
      height: height,
      antialias: true, // default: false
    })

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    ;(document as any).querySelector('#pixi').appendChild(app.view)

    // load the texture we need
    app.loader
      .add('bunny', cat)
      .add('clouds', clouds)
      .add('bg', bg)
      .add('ground', ground)
      .add('player', player)
      .load((loader, resources) => {
        console.log('resources', resources)

        const tilingSpriteBg = new PIXI.TilingSprite(
          resources.bg.texture,
          width,
          height
        )
        app.stage.addChild(tilingSpriteBg)

        const tilingSprite = new PIXI.TilingSprite(
          resources.clouds.texture,
          width,
          263
        )
        app.stage.addChild(tilingSprite)

        const tilingSpriteGround = new PIXI.TilingSprite(
          resources.ground.texture,
          width,
          133
        )
        tilingSpriteGround.y = height - 133
        app.stage.addChild(tilingSpriteGround)

        const spritePlayer = new PIXI.Sprite(resources.player.texture)

        spritePlayer.anchor.set(0.5)

        spritePlayer.x = width * 0.2
        spritePlayer.y = height * 0.5

        console.log('spritePlayer', spritePlayer)
        app.stage.addChild(spritePlayer)

        anime({
          targets: spritePlayer,
          x: {
            value: spritePlayer.x + 20,
            duration: 2000,
            easing: 'easeInOutCubic',
          },
          loop: true,
          direction: 'alternate',
        })

        anime({
          targets: spritePlayer,
          duration: 750,
          y: {
            value: spritePlayer.y + 10,
            easing: 'easeInOutQuad',
          },
          loop: true,
          direction: 'alternate',
        })

        const angle = 0.02
        spritePlayer.rotation = angle
        anime({
          targets: spritePlayer,
          duration: 1000,
          rotation: {
            value: -angle,
            easing: 'easeInOutQuad',
          },
          loop: true,
          direction: 'alternate',
        })

        // Listen for frame updates
        app.ticker.add(() => {
          tilingSprite.tilePosition.x -= 4
          tilingSpriteGround.tilePosition.x -= 1
        })
      })

  }

  useEffect(() => {
    window.onload = () => {
      load()
    }
  }, [])

  return <div id="pixi"></div>
}

export default Demo1
