import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js'
import { TilingSprite } from '@pixi/sprite-tiling'
import { Texture, BaseTexture  } from '@pixi/core'
import cat from '../../assets/images/cat.png'
import clouds from '../../assets/images/clouds.png'
import bg from '../../assets/images/bg.png'
import ground from '../../assets/images/ground.png'
import player from '../../assets/images/player.png'

const Demo: React.FC = () => {


  const computeHexagonPoints = (width: number, height: number, edge: number): number[][] => {
    let centerX = width /2 ;
    let centerY = height / 2;
    let x = edge * Math.sqrt(3) / 2
    let y = edge / 2
    let left = centerX - x
    let top = centerY - 2 * y
    let x1, x2, x3, x4, x5, x6;
    let y1, y2, y3, y4, y5, y6;

    x5 = x6 = left
    x2 = x3 = left + 2 * x
    x1 = x4 = left + x

    y1 = top
    y2 = y6 = top + y
    y3 = y5 = top + 3 * y
    y4 = top + 4 * y

    let points = []
    points[0] = [x1, y1]
    points[1] = [x2, y2]
    points[2] = [x3, y3]
    points[3] = [x4, y4]
    points[4] = [x5, y5]
    points[5] = [x6, y6]

    return points

  }

  console.log(computeHexagonPoints(300, 300 , 10).flat(2))

  const load = () => {

    let width = document.body.clientWidth || document.documentElement.clientWidth
    let height = document.body.clientHeight || document.documentElement.clientHeight

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({
      width: width,
      height: height,
      antialias: true,    // default: false
    });

    let rectangle = new PIXI.Graphics();
    let w = (120 * Math.sqrt(3) / 2) * 2
    let h = 120 * 2

    rectangle.lineStyle(1, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawPolygon(computeHexagonPoints(w, h , 120).flat(2));
    rectangle.endFill();
    rectangle.x = w / 2;
    rectangle.y = h / 2;
    rectangle.pivot.set(w / 2, h / 2)
    app.stage.addChild(rectangle);

    let rectangle1 = new PIXI.Graphics();
    rectangle1.lineStyle(1, 0xFF3300, 1);
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawPolygon(computeHexagonPoints(w, h, 120).flat(2));
    rectangle1.endFill();
    rectangle1.x = w / 2 + w + 1;
    rectangle1.y = h / 2;
    rectangle1.pivot.set(w / 2, h / 2)
    app.stage.addChild(rectangle1);

    let rectangle2 = new PIXI.Graphics();
    rectangle2.lineStyle(1, 0xFF3300, 1);
    rectangle2.beginFill(0x66CCFF);
    rectangle2.drawPolygon(computeHexagonPoints(w, h, 120).flat(2));
    rectangle2.endFill();
    rectangle2.x = w / 2 + 2 * w + 1 + 1;
    rectangle2.y = h / 2;
    rectangle2.pivot.set(w / 2, h / 2)
    app.stage.addChild(rectangle2);

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    (document as any).querySelector('#pixi').appendChild(app.view);

    // load the texture we need
    app.loader
      .add('bunny', cat)
      .add('clouds', clouds)
      .add('bg', bg)
      .add('ground', ground)
      .add('player', player)
      .load((loader, resources) => {

      console.log('resources', resources)

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit

        // rectangle1.rotation += 0.02
      });
    });

  }

  useEffect(() => {

    window.onload = () => {
      load()
    }


  }, [])

  return (
    <div id="pixi"></div>
  );
}

export default Demo;
