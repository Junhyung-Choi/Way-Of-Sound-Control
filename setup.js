var bgm;
var icon;

function preload()
{
    soundFormats('m4a');
    bgm = loadSound('src/sound/bgm.m4a');
    icon = loadImage('src/img/sound_icon.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupMenu();
    setupGallery();
}
