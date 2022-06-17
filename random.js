var randomScene = 0;
function drawRandom()
{
    background(255, 255, 255);
    if(!galleryIsSceneSeleted)
    {
        modeNumber = 0;
    }
    var i = randomScene;
    galleryCurrentScene = galleryScenes[i].Scene;
    var vol = galleryCurrentScene.draw();
    bgm.setVolume(vol/100);
}

function mouseClickedRandom()
{
    galleryCurrentScene.mouseClick();
}

function mouseReleaseRandom()
{
    galleryCurrentScene.mouseRelease();
}