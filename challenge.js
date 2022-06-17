var challengeStartTime;
var challengeEndTime;
var challengeisEnding = false;
var challengeSceneNumber = 0;

function drawChallenge()
{
    background(255, 255, 255);
    if(!challengeisEnding) challengeEndTime = new Date();
    fill(0, 0, 0);
    textAlign(CENTER);
    text((challengeEndTime - challengeStartTime)/1000 + " sec",windowWidth/2,100);
    fill(255, 255, 255);
    if(!galleryIsSceneSeleted)
    {
        modeNumber = 0;
    }
    galleryCurrentScene = galleryScenes[challengeSceneNumber].Scene;
    var vol = galleryCurrentScene.draw();
    if(vol == 50)
    {
        challengeSceneNumber += 1;
    }
    if(challengeSceneNumber == 10)
    {
        challengeisEnding = true;
    }
    push();
    fill(0, 0, 0, 80);
    textSize(100);
    textStyle(BOLD)
    text("50",windowWidth/2,windowHeight/2);
    pop();
    bgm.setVolume(vol/100);
}

function mouseClickedChallenge()
{
    galleryCurrentScene.mouseClick();
}

function mouseReleaseChallenge()
{
    galleryCurrentScene.mouseRelease();
}