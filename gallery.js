var gallerySceneNumber;
var degree = 0;
var scenes = [1,2,3,4,5];
var basicFontSize = 30;
var galleryisVolumeChanageMode = false;
var galleryBackCircle;
var galleryVolumeCircle;
var galleryZeroVector;
var galleryVolumeVector;
var galleryCenterVector;
var galleryVolume = 0;
var galleryScenes = [];
var galleryArrowVector;
var galleryCurrentScene;
var galleryIsSceneSeleted = false;

function setupGallery(){
    galleryBackCircle = new Circle();
    galleryVolumeCircle = new Circle();
    
    galleryBackCircle.x = windowWidth/2;
    galleryBackCircle.y = windowHeight;
    galleryBackCircle.diameter = 500;
    
    galleryVolumeCircle.diameter = 50;
    galleryVolumeCircle.x = -215;
    galleryVolumeCircle.y = 0;
    galleryVolumeCircle.color = 0, 0, 0;

    galleryZeroVector = createVector(-250,0);
    galleryCenterVector = createVector(windowWidth/2,windowHeight)
    galleryVolumeVector = createVector(windowWidth/2-250,windowHeight);

    for(var i = 0 ; i < 10; i++)
    {
        var tmp = new SceneCircle();
        var x = galleryCenterVector.x + 500 * cos(PI + 0.13 + 0.32 * i);
        var y = galleryCenterVector.y + 500 * sin(PI + 0.13 + 0.32 * i);
        tmp.setup(x, y, 150);
        tmp.sIndex = i + 1;
        galleryScenes.push(tmp);
    }

    // 씬 세팅
    galleryScenes[0].stitle = "Canon";
    galleryScenes[1].stitle = "Pi";
    galleryScenes[2].stitle = "Tower";
    galleryScenes[3].stitle = "Race";
    galleryScenes[4].stitle = "Reverse";
    galleryScenes[5].stitle = "Tab";
    galleryScenes[6].stitle = "Timing";
    galleryScenes[7].stitle = "Wheel";
    galleryScenes[8].stitle = "Vibrate";
    galleryScenes[9].stitle = "Shake";
    
    galleryScenes[0].Scene = new SceneCanon();
    galleryScenes[1].Scene = new ScenePi();
    galleryScenes[2].Scene = new SceneTower();
    galleryScenes[3].Scene = new SceneRace();
    galleryScenes[4].Scene = new SceneReverse();
    galleryScenes[5].Scene = new SceneButton();
    galleryScenes[6].Scene = new SceneTiming();
    galleryScenes[7].Scene = new SceneWheel();
    galleryScenes[8].Scene = new SceneSpeed();
    galleryScenes[9].Scene = new SceneWeight();

    galleryCurrentScene = galleryScenes[0].Scene;

    galleryArrowVector = createVector(-400,0);
}

function drawGallery(){
    background(255,255,255);
    drawGalleryTitle();
    if(!galleryIsSceneSeleted){
        drawGalleryVolume();
        drawGalleryMoveButton();
    } else {
        galleryVolume = galleryCurrentScene.draw();
    }
    bgm.setVolume(galleryVolume/100);
}

function drawGalleryTitle()
{
    fill(0, 0, 0);
    textSize(50);
    textAlign(CENTER,CENTER);
    text('Sound Control Gallery', windowWidth / 2, 100);
    fill(255, 255, 255);
}

function drawGalleryVolume()
{
    galleryVolumeVector = p5.Vector.sub(createVector(mouseX,mouseY),galleryCenterVector);
    galleryVolumeVector.setMag(215);
    if(galleryisVolumeChanageMode)
    {
        if(galleryVolumeVector.y > 0 && galleryVolumeVector.x < 0) galleryVolumeVector = createVector(-215,0);
        if(galleryVolumeVector.y > 0 && galleryVolumeVector.x > 0) galleryVolumeVector = createVector(215,0);
        galleryVolumeCircle.x = galleryVolumeVector.x;
        galleryVolumeCircle.y = galleryVolumeVector.y;
        var degree = degrees(galleryZeroVector.angleBetween(galleryVolumeVector));
        if(degree < 0 && degree < -90) degree = 180;
        if(degree < 0 && degree > -90) degree = 0
        galleryVolume = Math.ceil(map(degree, 0, 180, 0, 100));
        galleryArrowVector = createVector(galleryVolumeVector.x,galleryVolumeVector.y);
        galleryArrowVector.setMag(400);
    }
    galleryBackCircle.draw();
    push();
    translate(galleryCenterVector.x,galleryCenterVector.y);
    galleryVolumeCircle.draw();
    pop();
    drawGalleryVolumeText();
    for(var i = 0; i < 10; i++)
    {
        var c = Math.floor(galleryVolume/10);
        if(i == c){
            galleryScenes[i].drawblack();
            galleryCurrentScene = galleryScenes[i].Scene;
        }
        else
        {
            galleryScenes[i].draw();
        }
    }
    drawArrow(galleryCenterVector,galleryArrowVector);
}

function drawGalleryMoveButton()
{
    push();
    if(!isMouseInRect(mouseX,mouseY,galleryCenterVector.x-50,galleryCenterVector.y-100,100,100))
    {
        rect(galleryCenterVector.x-50,galleryCenterVector.y-100,100,100);
        fill(0, 0, 0);
        textStyle(BOLD);
        textSize(20);
        text("SELECT",galleryCenterVector.x,galleryCenterVector.y - 50);
    }
    else
    {
        fill(0, 0, 0);
        rect(galleryCenterVector.x-50,galleryCenterVector.y-100,100,100);
        fill(255, 255, 255);
        textStyle(BOLD);
        textSize(20);
        text("SELECT",galleryCenterVector.x,galleryCenterVector.y - 50);
    }
    pop();
}


function mouseClickedGallery()
{
    if(!galleryIsSceneSeleted)
    {
        if(dist(galleryCenterVector.x,galleryCenterVector.y,mouseX,mouseY) < 250)
        {
            galleryVolumeCircle.diameter = 50;
            galleryVolumeCircle.x = mouseX;
            galleryVolumeCircle.y = mouseY;
            galleryisVolumeChanageMode = true;
        }
        if(isMouseInRect(mouseX,mouseY,galleryCenterVector.x-50,galleryCenterVector.y-100,100,100))
        {
            galleryIsSceneSeleted = true;
        }
    }
    else
    {
        galleryCurrentScene.mouseClick();
    }
}

function mouseReleaseGallery()
{
    if(!galleryIsSceneSeleted)
    {
        galleryVolumeCircle.diameter = 50;
        galleryisVolumeChanageMode = false;
    }
    else
    {
        galleryCurrentScene.mouseRelease();
    }
}

function drawGalleryVolumeText()
{
    image(icon, windowWidth/2 - 40, 170, 50, 50);
    fill(0, 0, 0);
    text(galleryVolume,windowWidth/2 + 50,197);
    fill(255, 255, 255);
}

class Circle{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.diameter = 10;
        this.color = (255, 255, 255);
    }

    setup(x,y,d)
    {
        this.x = x;
        this.y = y;
        this.diameter = d;
    }

    draw(){
        fill(this.color);
        circle(this.x, this.y, this.diameter);
        fill(255, 255, 255);
    }
}

class SceneCircle{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.diameter = 10;
        this.stitle = "Box";
        this.sIndex = 0;
        this.Scene;
        this.color = (255, 255, 255);
    }

    setup(x,y,d)
    {
        this.x = x;
        this.y = y;
        this.diameter = d;
    }

    draw(){
        fill(this.color);
        circle(this.x, this.y, this.diameter);
        push();
        fill(0, 0, 0);
        text(this.sIndex,this.x,this.y);
        fill(255, 255, 255);
        pop();
        fill(255, 255, 255);
    }

    drawblack(){
        fill(0, 0, 0);
        circle(this.x, this.y, this.diameter);
        fill(255, 255, 255);
        push();
        textSize(20);
        text(this.stitle,this.x,this.y);
        pop();
    }
}

function drawArrow(base,vec) {
    push();
    fill(0, 0, 0);
    translate(base.x, base.y);
    rotate(vec.heading());
    let arrowSize = 14;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}