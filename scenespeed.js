class SceneSpeed{
    constructor()
    {
        this.Title = "Speed"; 
        this.volume = 0;
        this.posx = 775;
        this.posy = 150;
        this.size = 20;
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
        this.drawIcon();
        this.drawButton();
    }

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,this.posx,this.posy,this.size,this.size);
        this.posx += random(-1,1) * 2;
        this.posy += random(-1,1) * 2;
        if(this.posy > 500) this.posy = 500;
        if(this.posy < 0) this.posy = 0;
        if(this.posx > 1300) this.posx = 1300;
        if(this.posx < 0) this.posx = 0;
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        imageMode(CENTER);
        rectMode(CENTER);
        rect(1350,100,45,45);
        image(icon,1350,100,15,15);
        rect(1350,150,45,45);
        image(icon,1350,150,20,20);
        rect(1350,200,45,45);
        image(icon,1350,200,30,30);
        rect(1350,250,45,45);
        image(icon,1350,250,40,40);
        rect(1350,300,45,45);
        imageMode(CORNER);
        fill(0, 0, 0);
        textSize(20);
        text("Miss",1350,300);
        text("+10",1410,100);
        text("+5",1410,150);
        text("+3",1410,200);
        text("+1",1410,250);
        text("-1",1410,300);
        textAlign(CENTER,CENTER);
        textSize(50);
        if(this.volume > 100) this.volume = 100;
        if(this.volume < 0) this.volume = 0;
        text("Current Volume: " + this.volume, 770, 50);
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
        if(isMouseInRect(mouseX - 200, mouseY - 200, this.posx, this.posy, this.size, this.size))
        {
            if(this.size == 15)
                this.volume += 4;
            if(this.size == 20)
                this.volume += 3;
            if(this.size == 30)
                this.volume += 2;
            if(this.size == 40)
                this.volume += 1;
            this.posx = random() * 1350;
            this.posy = random() * 600;
            this.size = random([15,20,30,40]);
        } else {
            this.volume -= 1;
        }
    }
    
    mouseRelease()
    {

    }
}