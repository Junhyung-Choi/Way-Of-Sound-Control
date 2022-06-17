class SceneWheel{
    constructor()
    {
        this.Title = "Wheel"; 
        this.volume = 0;
        this.angle = 0;
        this.rotateSpeed = 0;
        this.isSet = true;
    }
    
    draw()
    {
        push();
        angleMode(DEGREES);
        translate(200,200);
        fill(255, 255, 255);
        rect(0, 0, 1520,600);
        this.drawContent();
        fill(255, 255, 255);
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
        image(icon,730,315,100,100);
        triangle(770,150,763,140,777,140);
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        push();
        translate(770,370);
        rotate(-this.angle);
        this.drawWheel();
        pop();
        this.angle += this.rotateSpeed;
        if(this.rotateSpeed > 0)
        {
            this.rotateSpeed -= .1;
        }
        if(this.rotateSpeed < 0)
        {
            this.rotateSpeed = 0;
        }
        if(this.rotateSpeed == 0 && !this.isSet)
        {
            var type = (this.angle + 18) % 360;
            type = int(type / 36);
            console.log(this.angle);
            switch(type){
                case 0:
                    this.volume += 5;
                    break;
                case 1:
                    this.volume += 4;
                    break;
                case 2:
                    this.volume += 3;   
                    break;
                case 3:
                    this.volume += 2;
                    break;
                case 4:
                    this.volume += 1;
                    break;
                case 5:
                    this.volume += 50;
                    break;
                case 6:
                    this.volume *= 2;
                    break;
                case 7:
                    this.volume -= 1;
                    break;
                case 8:
                    this.volume -= 5;
                    break;
                case 9:
                    this.volume -= 20;
                    break;
            }
            if(this.volume > 100) this.volume = 100;
            if(this.volume < 0) this.volume = 0;
            this.isSet = true;
        }
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + this.volume,770, 50);
    }

    drawWheel()
    {
        push();
        circle(0,0,400);
        for(var i = 0; i < 10; i++)
        {
            arc(0,0,400,400,36 * i, 36 * i +36, PIE);
        }
        fill(0, 0, 0);
        textSize(32);
        textAlign(CENTER,CENTER);
        text("+5",0,-165);
        text("+4",80,-120);
        text("+3",140,-35);
        text("+2",140,45);
        text("+1",80,120);
        text("+50",0,165);
        text("*2",-90,130);
        text("-1",-150,50);
        text("-5",-150,-50);
        text("-20",-90,-130);
        pop();
    }

    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
        if(isMouseInRect(mouseX-200,mouseY-200,1200,250,100,100))
        {
            fill(0, 0, 0);
            rect(1200,250,100,100);
            fill(255, 255, 255);
            textSize(40);
            textAlign(CENTER,CENTER);
            text("Spin!",1200 + 50,250 +50);
        } else 
        {
            fill(255, 255, 255);
            rect(1200,250,100,100);
            fill(0, 0, 0);
            textSize(30);
            textAlign(CENTER,CENTER);
            text("Spin!",1200+50,250+50);
            fill(255, 255, 255);
        }
    }
    
    spin()
    {
        this.isSet = false;
        this.rotateSpeed = random([15,20,25]);
    }

    mouseClick()
    {
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            angleMode(RADIANS);
            galleryIsSceneSeleted = false;
        }
        if(isMouseInRect(mouseX-200,mouseY-200,1200,250,100,100))
        {
            this.spin();
        }
    }

    
    mouseRelease()
    {

    }
}