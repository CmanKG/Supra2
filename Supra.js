function setup(){
    canvas=createCanvas(800,500)
    canvas.center()
    }
    function preload(){
    img=loadImage("anthracite-supra-vented-hood.avif")
    }
    function draw(){
    image(img,0,0,800,500)
    }