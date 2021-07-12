import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js'
import cat from '../../assets/images/cat.png'

const Home: React.FC = () => {

  const load = () => {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({
      antialias: true,    // default: false
    });

    let rectangle = new  PIXI.Graphics();
    rectangle.lineStyle(2, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawPolygon([

      182, 64,
      313, 64,
      362, 162,
      313,260,
      182,260,
      131,162,

    ]);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 170;
    app.stage.addChild(rectangle);

    let style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fill: "white",
      stroke: '#ff3300',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    });
    let message = new PIXI.Text("Hello Pixi!", style);
    message.position.set(54, 96);
    app.stage.addChild(message);



    // The application will create a canvas element for you that you
    // can then insert into the DOM
    (document as any).querySelector('#pixi').appendChild(app.view);

    // load the texture we need
    app.loader.add('bunny', cat).load((loader, resources) => {

      console.log('resources', resources)

        // This creates a texture from a 'bunny.png' image
        const bunny = new PIXI.Sprite(resources.bunny.texture);

        // Setup the position of the bunny
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;

        // Rotate around the center
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // Add the bunny to the scene we are building
        app.stage.addChild(bunny);

        // Listen for frame updates
        app.ticker.add(() => {
            // each frame we spin the bunny around a bit
            bunny.rotation += 0.01;
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

export default Home;
