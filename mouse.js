function mousePressed()
{
    switch(modeNumber){
        // 시작 화면
        case 0:
            mouseClickedMenu();
            break;

        // 갤러리 모드
        case 1:
            mouseClickedGallery();
            break;

        // 랜덤 모드
        case 2:
            mouseClickedRandom();
            break;

        // 챌린지 모드
        case 3:
            mouseClickedChallenge();
            break;
    }
    if(isMouseInRect(mouseX,mouseY,1800,50,100,100))
    {
        modeNumber = 0;
    } 
}

function mouseReleased()
{
    switch(modeNumber){
        // 시작 화면
        case 0:
            mouseReleaseMenu();
            break;
        // 갤러리 모드
        case 1:
            mouseReleaseGallery();
            break;

        // 랜덤 모드
        case 2:
            mouseReleaseRandom();
            break;

        // 챌린지 모드
        case 3:
            mouseReleaseChallenge();
            break;
    }   
}