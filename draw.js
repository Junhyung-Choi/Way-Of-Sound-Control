var sceneNumber = 0;
var modeNumber = 0;

function draw() {
    switch(modeNumber){
        // 시작 화면
        case 0:
            drawMenu();
            break;

        // 갤러리 모드
        case 1:
            drawGallery();
            break;

        // 랜덤 모드
        case 2:
            drawRandom();
            break;

        // 챌린지 모드
        case 3:
            drawChallenge();
            break;
    }
    drawHomeButton();
}

function drawHomeButton()
{
    if(isMouseInRect(mouseX,mouseY,1800,50,100,100))
    {
        fill(0, 0, 0);
        rect(1800,50,100,100);
        fill(255, 255, 255);
        textSize(20);
        textAlign(CENTER,CENTER);
        text("HOME", 1850, 100);
    } 
    else
    {
        fill(255, 255, 255);
        rect(1800,50,100,100);
        fill(0, 0, 0);
        textSize(20);
        textAlign(CENTER,CENTER);
        text("HOME", 1850, 100);
    }
}

function isMouseInRect(mx,my,x,y,w,h)
{
    if(x < mx && mx < x + w  && y < my && my < y + h) return true;
    else return false;
}