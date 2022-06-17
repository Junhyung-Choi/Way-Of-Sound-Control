class SceneButton{
    constructor()
    {
        this.Title = "Button"; 
        this.volume = 0;
        this.dSpeed = 0.25;
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
        this.drawIcon();
        this.drawButton();
    }

    drawVolumeFill()
    {
        this.volume -= this.dSpeed;
        if(this.volume < 0) this.volume = 0;
        var h = map(this.volume,0,100,0,300);
        fill(0, 0, 0);
        rect(760,400 - h, 20, h);
    }

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,760,410,20,20);
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        rect(760,100,20,300);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + int(this.volume),770, 50);
        textSize(20);
    }

    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
        if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
        {
            fill(0, 0, 0);
            rect(720,450,100,100);
            fill(255, 255, 255);
            textSize(40);
            textAlign(CENTER,CENTER);
            text("Tab!",770,500);
        } else 
        {
            fill(255, 255, 255);
            rect(720,450,100,100);
            fill(0, 0, 0);
            textSize(30);
            text("Tab!",770,500);
            fill(255, 255, 255);
        }
    }
    

    mouseClick()
    {
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            galleryIsSceneSeleted = false;
        }
        if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
        {
            this.volume += 5;
            if(this.volume > 100) this.volume = 100;
            if(this.volume < 0) this.volume = 0;
        }
    }
    
    mouseRelease()
    {

    }
}