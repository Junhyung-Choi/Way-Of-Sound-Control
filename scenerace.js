class SceneRace{
    constructor()
    {
        this.Title = "Race"; 
        this.volume = 0;
        this.screen = 1;
        this.y = 0;
        this.x = 500;
        this.height = 600;
        this.width = 1520;
        this.speed = 2;
        this.score = 0;
        this.roadY = 50;
        this.roadSpeed = 3;
    }
    
    draw()
    {
        push();
        translate(200,200);
        fill(255, 255, 255);
        rect(0, 0, 1520,600);
        this.drawContent();
        pop();
        return this.volume;
    }

    drawContent()
    {
        this.drawVolumeBox();
        // this.drawIcon();
        this.drawButton();
    }

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,30,250,100,100);
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        if(this.screen == 1){
            this.gameOn()
        }else if(this.screen == 2){
            this.endScreen()
        }	
    }

    gameOn(){
        push();
        this.drawRoad();
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + this.volume, 770,100);
        image(icon,this.x,this.y,20,20);


        var posx = mouseX - 200;
        if(posx < 25) posx = 25;
        if(posx > 1495) posx = 1495;
        rectMode(CENTER);
        rect(posx,570,50,30);
        this.y += this.speed;
        this.roadY += this.roadSpeed;
        if(this.y>this.height){
            this.volume -=1
            if(this.volume < 0) this.volume = 0;
            this.y = 0;
        }
        if(this.y > this.height-50 && this.x > mouseX-200-20 && this.x < mouseX-200+20){
            this.y = 0
            this.speed+=.2
            this.volume+= 5
            if(this.volume > 100) this.volume = 100;
        }
        if(this.y== 0){
            this.pickRandom();
        }
        if(this.roadY > this.height)
        {
            this.roadY = -60;
        }
        pop();
        fill(255, 255, 255);
        stroke(255,255,255);
        rect(0,600,1520,100);
        rect(0,-60,1520,60);
    }
    
    pickRandom(){
        this.x= random(20,this.width-20)
    }

    reset(){
        this.score=0;
        this.speed=2;
        this.y=-20;
    }

    drawRoad()
    {
        rect(70,this.roadY,10,60);
        // rect(370,this.roadY,10,60);
        rect(670,this.roadY,10,60);
        // rect(970,this.roadY,10,60);
        rect(1270,this.roadY,10,60);
        rect(70,this.roadY + 120,10,60);
        // rect(370,this.roadY + 120,10,60);
        rect(670,this.roadY + 120,10,60);
        // rect(970,this.roadY + 120,10,60);
        rect(1270,this.roadY + 120,10,60);
        rect(70,this.roadY + 240,10,60);
        // rect(370,this.roadY + 240,10,60);
        rect(670,this.roadY + 240,10,60);
        // rect(970,this.roadY + 240,10,60);
        rect(1270,this.roadY + 240,10,60);
        rect(70,this.roadY + 360,10,60);
        // rect(370,this.roadY + 360,10,60);
        rect(670,this.roadY + 360,10,60);
        // rect(970,this.roadY + 360,10,60);
        rect(1270,this.roadY + 360,10,60);
        rect(70,this.roadY + 480,10,60);
        // rect(370,this.roadY + 480,10,60);
        rect(670,this.roadY + 480,10,60);
        // rect(970,this.roadY + 480,10,60);
        rect(1270,this.roadY + 480,10,60);
        if(this.roadY > 60) this.roadY = -60;
    }


    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
    }
    

    mouseClick()
    {
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            galleryIsSceneSeleted = false;
        }
        if(this.screen == 2)
        {
            this.screen = 1;
            this.reset();
        }
    }
    
    mouseRelease()
    {

    }
}