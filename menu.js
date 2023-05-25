var menuVolume = 0;
var menuVolumeX = 0;
var menuVolumeMinX = 0;
var menuVolumeWidth = 0;
var menuVolumeMinY = 0;
let menuisVolumeChangeMode = false;
var menuisWrongClicked = false;

var isSoundLooped = false;

function setupMenu()
{
    menuVolumeMinX = windowWidth/2 - 240;
    menuVolumeWidth = 500;
    menuVolumeMinY = 800;
    menuVolumeX = map(menuVolume,0,100,0,menuVolumeWidth);
}

function drawMenu()
{
    background(255,255,255);
    drawMenuTitle();
    drawMenuVolume();
    drawMenuMode();
    drawGoButton();
}

function drawMenuTitle()
{
    fill(0, 0, 0);
    textSize(50);
    textAlign(CENTER,CENTER);
    text('Way of Sound Control', windowWidth / 2, 100);
    fill(255, 255, 255);
}

function drawMenuVolume()
{
    if(menuisVolumeChangeMode)
    {
        menuVolume = Math.ceil(map(mouseX, menuVolumeMinX, menuVolumeMinX + menuVolumeWidth, 0, 100));
        menuVolumeX = mouseX - menuVolumeMinX;
        if(menuVolume > 100) menuVolume = 100;
        if(menuVolumeX > menuVolumeWidth) menuVolumeX = menuVolumeWidth;
        if(menuVolumeX < 0) menuVolumeX = 0;
        if(menuVolume < 0) menuVolume = 0;
    }
    bgm.setVolume(menuVolume/100);
    image(icon, menuVolumeMinX - 75, menuVolumeMinY, 50, 50);
    fill(255, 255, 255);
    rect(menuVolumeMinX, menuVolumeMinY, 500, 50);
    fill(0, 0, 0);
    rect(menuVolumeMinX, menuVolumeMinY, menuVolumeX, 50);
    textSize(30);
    textAlign(LEFT,TOP);
    text(menuVolume.toString(), menuVolumeMinX + menuVolumeWidth + 30 , menuVolumeMinY + 10);
    fill(255, 255, 255);
}

function drawMenuMode()
{
    fill(0, 0, 0);
    var tX = map(menuVolume,0,100,450,1450);
    triangle(tX, 290, tX-25, 265, tX+25, 265);
    fill(255, 255, 255);
    drawRect(450,300,300,300,tX,"Gallery");
    drawRect(800,300,300,300,tX,"Random");
    drawRect(1150,300,300,300,tX,"Challenge");
    fill(255, 255, 255);
}

function drawRect(x,y,w,h,triX,sentence)
{
    if(x <= triX && triX <= x + w)
    {
        fill(0, 0, 0)
        rect(x,y,w,h);
        fill(255, 255, 255);
        textSize(basicFontSize + 10);
        textAlign(CENTER,CENTER);
        text(sentence,x+150,y+130);
        text("Mode",x+150,y+170);
        textSize(basicFontSize);
    }
    else
    {
        rect(x,y,w,h);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text(sentence,x+150,y+130);
        text("Mode",x+150,y+170);
        fill(255, 255, 255);
    }
}

function drawGoButton()
{
    rect(900,menuVolumeMinY - 150, 100, 100);
    fill(0, 0, 0);
    textAlign(CENTER,CENTER);
    textSize(basicFontSize + 10);
    text("GO",900 + 50,menuVolumeMinY-150 + 50);
    textAlign(LEFT,CENTER);
    if(menuisWrongClicked)
    {
        text("No Mode Selected",1100,menuVolumeMinY-150+50);
    }
    fill(255, 255, 255);
    textSize(basicFontSize);
}

function mouseClickedMenu()
{
    if(!isSoundLooped)
    {
        bgm.loop();
        isSoundLooped = true;
    }
    menuisWrongClicked = false;
    menuisVolumeChangeMode = isMouseInRect(mouseX,mouseY,menuVolumeMinX, menuVolumeMinY, menuVolumeWidth, 50);
    // 450, 800  , 1150
    if(isMouseInRect(mouseX,mouseY,900,menuVolumeMinY-150,100,100))
    {
        var tX = map(menuVolume,0,100,450,1450);
        if(450 <= tX && tX <= 750)
        {
            modeNumber = 1;
        } 
        else if(800 <= tX && tX <= 1100)
        {
            galleryIsSceneSeleted = true;
            randomScene = int(random() * 10);
            modeNumber = 2;
        } 
        else if(1150 <= tX && tX <= 1450)
        {
            setupGallery();
            galleryIsSceneSeleted = true;
            challengeSceneNumber = 0;
            challengeStartTime = new Date();
            modeNumber = 3;
        }
        else
        {
            menuisWrongClicked = true;
        }
    }
}

function mouseReleaseMenu()
{
    menuisVolumeChangeMode = false;
}