class SceneWeight{
    constructor()
    {
        this.Title = "Weight"; 
        this.volume = 0;
        this.posX = 720;
        this.posY = 300;
        this.isShaking = false;
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
        this.drawVolumeFill();
        this.drawGuide();
        this.drawShake();
        this.drawIcon();
        this.drawButton();
    }

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,1350,515,25,25);
        fill(255, 255, 255);
    }

    drawGuide()
    {
        push();
        noStroke();
        fill(112, 128, 144);
        textSize(80);
        text("SHAKE!",770,300);
        pop();
    }

    drawVolumeBox()
    {
        rect(1350,25,25,480);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + int(this.volume), 770, 50);
    }

    drawVolumeFill()
    {
        var h = map(this.volume,0,100,0,480);
        fill(0, 0, 0);
        rect(1350,505 - h, 25, h);
    }

    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
    }
    
    drawShake()
    {
        if(this.isShaking)
        {
            this.posX = mouseX - 200 - 25;
            this.posY = mouseY - 200 - 25;
            this.volume += abs(mouseX - pmouseX) * 0.001;
            this.volume -= abs(mouseY - pmouseY) * 0.001;
        }
        if(this.posX < 50) this.posX = 50;
        if(this.posX > 1400) this.posX = 1400;
        if(this.posY < 50) this.posY = 50;
        if(this.posY > 550) this.posY = 550;
        image(icon,this.posX,this.posY,50,50);
    }

    mouseClick()
    {
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            galleryIsSceneSeleted = false;
        }
        if(isMouseInRect(mouseX-200,mouseY - 200, this.posX,this.posY,50,50))
        {
            this.isShaking = true;
        }
    }
    
    mouseRelease()
    {
        this.isShaking = false;

    }
}