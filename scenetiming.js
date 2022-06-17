class SceneTiming{
    constructor()
    {
        this.Title = "Timing"; 
        this.posx = 700;
        this.speed = 4;
        this.volume = 0;
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
        this.drawTriangle();
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
        rect(760,100,20,300);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + this.volume,770, 50);
        textSize(20);
        text("+5",770,440);
        text("-1",700,440);
        text("-1",840,440);
    }

    drawVolumeFill()
    {
        var h = map(this.volume,0,100,0,300);
        fill(0, 0, 0);
        rect(760,400 - h, 20, h);
    }
    
    drawTriangle()
    {
        fill(0, 0, 0);
        this.posx += this.speed;
        if(this.posx < 700 || this.posx > 850) this.speed *= -1;
        triangle(this.posx,410,this.posx - 6,420,this.posx + 6, 420);
        fill(255, 255, 255);
    }

    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
        if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
        {
            fill(0, 0, 0);
            rect(720,470,100,100);
            fill(255, 255, 255);
            textSize(40);
            textAlign(CENTER,CENTER);
            text("SET",770,520);
        } else 
        {
            fill(255, 255, 255);
            rect(720,470,100,100);
            fill(0, 0, 0);
            textSize(30);
            text("SET",770,520);
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
            if(this.posx >= 760 && this.posx <= 780)
            {
                this.volume += 5;
            } else
            {
                this.volume -= 1;
            }
            if(this.volume > 100) this.volume = 100;
            if(this.volume < 0) this.volume = 0;
        }
    }
    
    mouseRelease()
    {

    }
}