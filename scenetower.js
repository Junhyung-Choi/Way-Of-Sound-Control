class SceneTower{
    constructor()
    {
        this.volume = 0;
        this.init();
    }
    
    init()
    {
        this.Title = "Tower"; 
        this.speed = 8;
        // this.volume = 0;
        this.life = 0;
        this.isStart = false;
        this.heightIndex = 0;
        this.xpos = 50;
        this.width = 10;
        this.lastlife = 10;
        this.beforeBars = [];
        this.beforeMinX = 670;
        this.beforeMaxX = 870;
        this.isEnding = false;
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
        this.drawGame();
    }

    drawIcon()
    {
        fill(0, 0, 0);
        image(icon,30,250,100,100);
        fill(255, 255, 255);
    }

    drawVolumeBox()
    {
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("Current Volume: " + this.volume,770, 50);
    }

    drawButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
        if(!this.isStart)
        {
            if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
            {
                fill(0, 0, 0);
                rect(720,450,100,100);
                fill(255, 255, 255);
                textSize(40);
                textAlign(CENTER,CENTER);
                text("Start",770,500);
            } else 
            {
                fill(255, 255, 255);
                rect(720,450,100,100);
                fill(0, 0, 0);
                textSize(30);
                text("Start",770,500);
                fill(255, 255, 255);
            }
        } else 
        {
            if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
            {
                fill(0, 0, 0);
                rect(720,450,100,100);
                fill(255, 255, 255);
                textSize(40);
                textAlign(CENTER,CENTER);
                if(this.isEnding) 
                {
                    textSize(30);
                    text("Restart",770,500);
                }
                else
                    text("Stop",770,500);
            } else 
            {
                fill(255, 255, 255);
                rect(720,450,100,100);
                fill(0, 0, 0);
                textSize(30);
                if(this.isEnding)
                {
                    textSize(20);
                    text("Restart",770,500);
                } 
                else
                    text("Stop",770,500);
                fill(255, 255, 255);
            }
        }
    }

    drawGame()
    {
        fill(0, 0, 0);
        if(this.isStart)
        {
            if(this.heightIndex > 10 || this.lastlife == 0)
            {
                this.isEnding = true;
                // this.init();
            }
            rect(670,425,200,5);
            rect(670,180,200,5);
            this.drawBeforeBars();
            if(!this.isEnding)
            {
                this.drawBar(this.xpos,400 - this.heightIndex * 20,this.lastlife);
                this.xpos += this.speed;
                if(this.xpos > 1300 || this.xpos < 50)
                {
                    this.speed *= -1;
                }
            }
        }
        fill(255, 255, 255);
    }

    drawBar(x,y,life)
    {
        for(var i = 0; i < life; i++)
        {
            rect(x + i * 20, y, 18, 18);
        }
    }

    drawBeforeBars()
    {
        for(var i = 0; i < this.beforeBars.length; i++)
        {
            this.drawBar(this.beforeBars[i][0],400 - this.beforeBars[i][1]*20,this.beforeBars[i][2]);
        }
    }
    

    mouseClick()
    {
        if(isMouseInRect(mouseX-200,mouseY-200,720,450,100,100))
        {
            if(this.isEnding)
            {
                this.isEnding = false;
                this.init();
            }
            if(!this.isStart) 
            {
                this.isStart = true;
                this.volume = 0;
            }
            else this.pressStop();
        }
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            galleryIsSceneSeleted = false;
        }
        if(isMouseInRect(mouseX-200,mouseY-200,600,450,50,100))
        {
            this.volumeIndex -= 1;
            if(this.volumeIndex < 0) this.volumeIndex = 0;
        }
        if(isMouseInRect(mouseX-200,mouseY-200,900,450,50,100))
        {
            this.volumeIndex += 1;
        }
    }

    pressStop()
    {
        var barX = this.xpos;
        var barXright = this.xpos + this.lastlife * 20;
        var length = 200;
        var drawStartX = this.beforeMinX;
        if(barXright >= this.beforeMinX && barX < this.beforeMaxX)
        {
            var life = 10;
            if(barX <= this.beforeMinX)
            {
                length = barXright - this.beforeMinX;
                life = (length - (length % 20)) / 20
            } 
            else if (barXright >= this.beforeMaxX)
            {
                var dif = barX - this.beforeMinX
                drawStartX = this.beforeMinX + (dif - (dif % 20));
                length = this.beforeMaxX - drawStartX;
                life = length / 20;
            }
            this.beforeMinX = drawStartX;
            this.beforeMaxX = drawStartX + 20 * life;
            this.beforeBars.push([drawStartX,this.heightIndex,life]);
            this.xpos = 50;
            this.lastlife = life;
            this.heightIndex += 1;
            this.volume += life;
        } 
        else 
        {
            this.isEnding = true;
        }
    }
    
    mouseRelease()
    {
        if(this.isCharging)
        {
            this.isCharging = false;
            this.isCircleMoving = true;
            this.velY = this.volume / 2 * 0.6;
        } 
    }
}