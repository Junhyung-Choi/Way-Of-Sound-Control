class SceneCanon{
    constructor()
    {
        this.Title = "Canon"; 
        this.volumefloat = 0;
        this.volume = 0;
        this.isCharging = false;
        this.circleX = 150;
        this.circleY = 300;
        this.isCircleMoving = false;
        this.tmpVolume;
        this.velY = 0;
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
        this.drawVolumeBar()
        this.drawBeforeButton();
        this.drawImage();
        this.drawCircle();
    }

    drawVolumeBar()
    {
        fill(0, 0, 0);
        rect(150,300-5,1300,10);
        textAlign(LEFT);
        textSize(20);
        text(this.volume,1470,300);
        fill(255, 255, 255);
    }

    drawBeforeButton()
    {
        fill(0, 0, 0);
        triangle(15, 30, 35, 20, 35, 40);
        fill(255, 255, 255);
    }
    
    drawImage()
    {
        if(!this.isCharging)
        {
            fill(0, 0, 0);
            image(icon,30,250,100,100);
            fill(255, 255, 255);
            text(this.volume,100,100);
            // circle(150 + map(this.volume,0,100,0,1300), 300, 20);
        }
        else 
        {
            push();
            this.volumefloat += 1;
            if(this.volumefloat > 100) this.volumefloat = 100;
            this.volume = Math.floor(this.volumefloat);
            translate(30+50,250+50);
            // 최대각도 map 으로 채우기
            // var angle =  
            rotate(-(PI/100 * this.volumefloat * 0.2));
            image(icon,-50,-50,100,100);
            pop();
            // circle(150 + map(this.volume,0,100,0,1300), 300, 20);
        }
    }
    
    drawCircle()
    {
        var distance = map(this.volume,0,100,0,1300);
        var half = 150 + distance / 2;
        // 쏘고 날아가는중
        if(this.isCircleMoving)
        {
            fill(0, 0, 0);
            this.circleX += 40;
            this.circleY -= this.velY;
            this.velY -= 2;
            circle(this.circleX,this.circleY,30);
            fill(255, 255, 255);
            if(this.circleY > 300) this.isCircleMoving = false;
        }
        // 충전 안하고 있을때
        else if(!this.isCharging)
        {
            fill(0, 0, 0);
            var cx = map(this.volume,0,100,150,150+1300);
            circle(cx,300,30);
            fill(255, 255, 255);
        }

    }

    mouseClick()
    {
        if(isMouseInRect(mouseX,mouseY,230,450,100,100))
        {
            this.isCharging = true;
            this.isCircleMoving = false;
            this.volumefloat = 0;
            this.volume = 0;
            this.circleX = 150;
            this.circleY = 300;
        }
        if(isMouseInRect(mouseX,mouseY,215,220,30,30))
        {
            galleryIsSceneSeleted = false;
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