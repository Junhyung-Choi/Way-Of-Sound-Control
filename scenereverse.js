class SceneReverse{
    constructor()
    {
        this.Title = "Race"; 
        this.volume = 0;
        this.startY = 315;
        this.isVolumeChangingMode = false;
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

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,30,250,100,100);
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        rect(200,285,1250,30);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + this.volume,770, 100);
    }

    drawVolumeFill()
    {
        if(this.isVolumeChangingMode)
        {
            this.startY = mouseY - 200;
            if(this.startY < 285) this.startY = 285;
            if(this.startY > 315) this.startY = 315;
            this.volume = int(map(315-this.startY,0,30,0,100));
        }
        rect(200,this.startY,1250,315 - this.startY);
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
        if(isMouseInRect(mouseX-200,mouseY-200,200,285,1250,30))
        {
            this.isVolumeChangingMode = true;
        }
    }
    
    mouseRelease()
    {
        this.isVolumeChangingMode = false;
    }
}