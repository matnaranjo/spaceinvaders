class alienboss{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    draw(){
        let alienboss = new Path2D();
        alienboss.lineTo(this.x,this.y-25);
        alienboss.lineTo(this.x-10,this.y-25);
        alienboss.lineTo(this.x-10,this.y-20);
        alienboss.lineTo(this.x-35,this.y-20);
        alienboss.lineTo(this.x-35,this.y-15);
        alienboss.lineTo(this.x-40,this.y-15);
        alienboss.lineTo(this.x-40,this.y-10);
        alienboss.lineTo(this.x-45,this.y-10);
        alienboss.lineTo(this.x-45,this.y-5);
        alienboss.lineTo(this.x-55,this.y-5);
        alienboss.lineTo(this.x-55,this.y);
        alienboss.lineTo(this.x-60,this.y);
        alienboss.lineTo(this.x-60,this.y+5);
        alienboss.lineTo(this.x-70,this.y+5);
        alienboss.lineTo(this.x-70,this.y+10);
        alienboss.lineTo(this.x-90,this.y+10);
        alienboss.lineTo(this.x-90,this.y+20);
        alienboss.lineTo(this.x-105,this.y+20);
        alienboss.lineTo(this.x-105,this.y+40);
        alienboss.lineTo(this.x-80,this.y+40);
        alienboss.lineTo(this.x-80,this.y+45);
        alienboss.lineTo(this.x-75,this.y+45);
        alienboss.lineTo(this.x-75,this.y+50);
        alienboss.lineTo(this.x-65,this.y+50);
        alienboss.lineTo(this.x-65,this.y+45);
        alienboss.lineTo(this.x-60,this.y+45);
        alienboss.lineTo(this.x-60,this.y+40);
        alienboss.lineTo(this.x-10,this.y+40);
        alienboss.lineTo(this.x-10,this.y+45);
        alienboss.lineTo(this.x-5,this.y+45);
        alienboss.lineTo(this.x-5,this.y+50);
        
        alienboss.lineTo(this.x+5,this.y+50);
        alienboss.lineTo(this.x+5,this.y+45);
        alienboss.lineTo(this.x+10,this.y+45);
        alienboss.lineTo(this.x+10,this.y+40);
        alienboss.lineTo(this.x+60,this.y+40);
        alienboss.lineTo(this.x+60,this.y+45);
        alienboss.lineTo(this.x+65,this.y+45);
        alienboss.lineTo(this.x+65,this.y+50);
        alienboss.lineTo(this.x+75,this.y+50);
        alienboss.lineTo(this.x+75,this.y+45);
        alienboss.lineTo(this.x+80,this.y+45);
        alienboss.lineTo(this.x+80,this.y+40);
        alienboss.lineTo(this.x+105,this.y+40);
        alienboss.lineTo(this.x+105,this.y+20);
        alienboss.lineTo(this.x+90,this.y+20);
        alienboss.lineTo(this.x+90,this.y+10);
        alienboss.lineTo(this.x+70,this.y+10);
        alienboss.lineTo(this.x+70,this.y+5);
        alienboss.lineTo(this.x+60,this.y+5);
        alienboss.lineTo(this.x+60,this.y);
        alienboss.lineTo(this.x+55,this.y);
        alienboss.lineTo(this.x+55,this.y-5);
        alienboss.lineTo(this.x+45,this.y-5);
        alienboss.lineTo(this.x+45,this.y-10);
        alienboss.lineTo(this.x+40,this.y-10);
        alienboss.lineTo(this.x+40,this.y-15);
        alienboss.lineTo(this.x+35,this.y-15);
        alienboss.lineTo(this.x+35,this.y-20);
        alienboss.lineTo(this.x+10,this.y-20);
        alienboss.lineTo(this.x+10,this.y-25);
        alienboss.closePath();
        ctx.fillStyle="#fc0320";
        ctx.fill(alienboss);


    }
}
class alien1 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooting_confirmation;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y+40;
        this.bullet_x=0;
    }
    reset(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y+40;
        this.bullet_x=0;
    }
    draw(Xpos, animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 10;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 10;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png";

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
        }
        if (this.alive==2){
            this.alive=3;
        }
        
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
    shoot(){
        if (this.alive==1 && this.shooted==0){  
            if (this.shooted==0){
                this. shooting_confirmation = Math.floor(Math.random() * 70);
                if (this.shooting_confirmation==10){
                    this.shooted=1;
                }
            }
            if (this.shooted==1){
                let  bulletXpos = 0;
                let bulletYPos = 0;
                let imageheight = 15;
                let imagewidth = 8;
                this.bullet_x = this.x;
                this.bullet_y=this.y+40;
                const sprites = new Image();
                sprites.src = "./sprites/shoots/alien_shoot1.png";
                ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);
            }
        }
    }
    bullet_movement(){
        if (this.shooted==1){
            let  bulletXpos = 0;
            let bulletYPos = 0;
            let imageheight = 15;
            let imagewidth = 8;
            this.alien_bullet_speed++;
            const sprites = new Image();
            sprites.src = "./sprites/shoots/alien_shoot1.png";
            ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);

            if (this.alien_bullet_speed==4){
                this.bullet_y+=3;
                this.alien_bullet_speed=0;
            }

            if (this.bullet_y>850){
                this.shooted=0;
                this.bullet_y=this.y+40;
            }
        }
    }
    bullet_touches_tank(tankx){
        let hit = 0;
        if (this.shooted==1){
            let tanky = 800;
            if ((tankx < this.bullet_x+21)&&(tankx+65 > this.bullet_x+29) && (tanky<this.bullet_y)&&(tanky+25>this.bullet_y+15)){
                this.shooted=0;
                hit = 1;
                this.bullet_y=this.y+40;
            }
        }
        return hit;
    }
}
class alien2 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooting_confirmation;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y+40;
        this.bullet_x=0;
    }

    reset(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y+40;
        this.bullet_x=0;
    }

    draw(Xpos, animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 130;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 130;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png"

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);    
            }
        }  
        if (this.alive==2){
            this.alive=3;
        }
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
    shoot(){
        if (this.alive==1 && this.shooted==0){  
            if (this.shooted==0){
                this. shooting_confirmation = Math.floor(Math.random() * 70);
                if (this.shooting_confirmation==10){
                    this.shooted=1;
                }
            }
            if (this.shooted==1){
                let  bulletXpos = 0;
                let bulletYPos = 0;
                let imageheight = 15;
                let imagewidth = 8;
                this.bullet_x=this.x;
                this.bullet_y=this.y+40;
                const sprites = new Image();
                sprites.src = "./sprites/shoots/alien_shoot1.png";
                ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);
            }
        }
    }
    bullet_movement(){
        if (this.shooted==1){
            let  bulletXpos = 0;
            let bulletYPos = 0;
            let imageheight = 15;
            let imagewidth = 8;
            this.alien_bullet_speed++;
            const sprites = new Image();
            sprites.src = "./sprites/shoots/alien_shoot1.png";
            ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);

            if (this.alien_bullet_speed==4){
                this.bullet_y+=3;
                this.alien_bullet_speed=0;
            }

            if (this.bullet_y>850){
                this.shooted=0;
                this.bullet_y=this.y+40;
            }
        }
    }
    bullet_touches_tank(tankx){
        let hit = 0;
        if (this.shooted==1){
            let tanky = 800;
            if ((tankx < this.bullet_x+21)&&(tankx+65 > this.bullet_x+29) && (tanky<this.bullet_y)&&(tanky+25>this.bullet_y+15)){
                this.shooted=0;
                hit = 1;
                this.bullet_y=this.y+40;
            }
        }
        return hit;
    }
}
class alien3 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooting_confirmation;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y+40;
        this.bullet_x=0;
    }
    reset(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
        this.shooted=0;
        this.alien_bullet_speed=0;
        this.bullet_y=this.y;
        this.bullet_x=0;
    }
    draw(Xpos,animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 70;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 70;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png";

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);    
            }
        }
        if (this.alive==2){
            this.alive=3;
        }
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
    shoot(){
        if (this.alive==1 && this.shooted==0){  
            if (this.shooted==0){
                this. shooting_confirmation = Math.floor(Math.random() * 70);
                if (this.shooting_confirmation==10){
                    this.shooted=1;
                }
            }
            if (this.shooted==1){
                let  bulletXpos = 0;
                let bulletYPos = 0;
                let imageheight = 15;
                let imagewidth = 8;
                this.bullet_x=this.x;
                this.bullet_y=this.y+40;
                const sprites = new Image();
                sprites.src = "./sprites/shoots/alien_shoot1.png";
                ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);
            }
        }
    }
    bullet_movement(){
        if (this.shooted==1){
            let  bulletXpos = 0;
            let bulletYPos = 0;
            let imageheight = 15;
            let imagewidth = 8;
            this.alien_bullet_speed++;
            const sprites = new Image();
            sprites.src = "./sprites/shoots/alien_shoot1.png";
            ctx.drawImage(sprites, bulletXpos, bulletYPos, 5, 10, this.bullet_x+21, this.bullet_y,imagewidth, imageheight);

            if (this.alien_bullet_speed==4){
                this.bullet_y+=3;
                this.alien_bullet_speed=0;
            }

            if (this.bullet_y>850){
                this.shooted=0;
                this.bullet_y=this.y+40;
                
            }
        }
    }
    bullet_touches_tank(tankx){
        let hit = 0;
        if (this.shooted==1){
            let tanky = 800;
            if ((tankx < this.bullet_x+21)&&(tankx+65 > this.bullet_x+29) && (tanky<this.bullet_y)&&(tanky+25>this.bullet_y+15)){
                this.shooted=0;
                hit = 1;
                this.bullet_y=this.y+40;
            }
        }
        return hit;
    }
}
class shelter {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.left=0;
        this.leftcenter=0;
        this.rightcenter=0;
        this.right=0;
        this.shelter_draw_number;
        this.shelter_draw_string;
        this.addYLeft=0;
        this.addYLeftCenter=0;
        this.addYRightCenter=0;
        this.addYRight=0;
    }
    hit(bulletx, bullety, bulletexists){
        let hit =bulletexists;
        if (bulletx>this.x && bulletx+8<this.x+44 && bullety>(this.y+this.addYLeft) &&this.left<3000){
            this.addYLeft+=33;
            this.left+=1000;
            hit=0;
        }
        if (bulletx>this.x+36 && bulletx+8<this.x+79 && bullety>(this.y+this.addYLeftCenter) && this.leftcenter<200){
            this.addYLeftCenter+=25;
            this.leftcenter+=100;
            hit=0;
        }
        if (bulletx>this.x+71 && bulletx+8<this.x+114 && bullety>(this.y+this.addYRightCenter) && this.rightcenter<20){
            this.addYRightCenter+=25;
            this.rightcenter+=10;
            hit=0;
        }
        if (bulletx>this.x+106 && bulletx+8<this.x+150 && bullety>(this.y+this.addYRight) && this.right<3){
            this.addYRight+=33;
            this.right+=1;
            hit=0;
        }
        this.shelter_draw_number= this.left+this.leftcenter+this.rightcenter+this.right;
        this.shelter_draw_string = this.shelter_draw_number.toString();
        return hit;
    }
    hit_by_tank(bulletx, bullety, bulletexists){
        let hit = bulletexists;
        if (bulletx>this.x-2 && bulletx+8<this.x+44 && bullety<(this.y+100) &&this.left<3000){
            hit=0;
        }
        if (bulletx>this.x+36 && bulletx+8<this.x+79 && bullety<(this.y+45) && this.leftcenter<200){
            hit=0;
        }
        if (bulletx>this.x+71 && bulletx+8<this.x+114 && bullety<(this.y+45) && this.rightcenter<20){
            hit=0;
        }
        if (bulletx>this.x+106 && bulletx+8<this.x+150 && bullety<(this.y+100) && this.right<3){
            hit=0;
        }
        return hit;
    }
    draw(){
        let shelterPosX =0;
        let shelterPosY =0;
        let imagewidth = 150;
        let imageheight = 100;
        const sprites = new Image();
        sprites.src = "./sprites/shelter/"+this.shelter_draw_string+".png";
        ctx.drawImage(sprites,shelterPosX, shelterPosY,imagewidth, imageheight, this.x,this.y, imagewidth, imageheight );
    }

}
class tank{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.lifes=3;
        this.x_bullet = 0;
        this.y_bullet = 0;
        this.bullet_exists=0;
        this.alive = 0;
    }
    reset(x,y){
        this.x=x;
        this.y=y;
        this.x_bullet = 0;
        this.y_bullet = 0;
        this.alive = 0;
    }
    draw(Xpos){
        if (this.alive==0){
            let tankXPos =  0;
            let tankYPos = 5;
            let imageheight = 25;
            let imagewidth = 65;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/tank/tank.png";
            ctx.drawImage(sprites, tankXPos,tankYPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
        }
    }
    draw_shoot(Xpos, Ypos){
        this.x_bullet=Xpos;
        this.y_bullet=Ypos;
        let  bulletXpos = 0;
        let bulletYPos = 0;
        let imageheight = 10;
        let imagewidth = 5;
        const sprites = new Image();
        sprites.src = "./sprites/shoots/tank_shoot.png";
        ctx.drawImage(sprites, bulletXpos, bulletYPos, imagewidth, imageheight, this.x_bullet, this.y_bullet, imagewidth, imageheight);
    }
    draw_explotion(Xpos,tank_animation){
        if (this.alive==1){
            let tankXPos1 =  0;
            let tankYPos1 = 0;
            let tankXPos2 = 75;
            let tankYPos2 = 0;
            let imageheight = 50;
            let imagewidth = 65;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/tank_explotion.png";

            if (tank_animation==1){
                ctx.drawImage(sprites, tankXPos1,tankYPos1, imagewidth,imageheight, this.x,this.y-25,imagewidth,imageheight);    
            }
            if (tank_animation==2){
            ctx.drawImage(sprites, tankXPos2,tankYPos2, imagewidth,imageheight, this.x,this.y-25,imagewidth,imageheight);    
            }
        }
    }
    draw_lifes(){
        let lifesXPos=0;
        let lifesYPos=0;
        let screenXPos=10;
        let screenYPos=10;
        let imagewidth=33;
        let imageheight=30;
        const sprites = new Image();
        sprites.src = "./sprites/tank/lifes.png";

        if (this.lifes==3){
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos,screenYPos,imagewidth, imageheight);
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos+45,screenYPos,imagewidth, imageheight);
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos+90,screenYPos,imagewidth, imageheight);
        }
        if (this.lifes==2){
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos,screenYPos,imagewidth, imageheight);
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos+45,screenYPos,imagewidth, imageheight);
        }
        if (this.lifes==1){
            ctx.drawImage(sprites,lifesXPos,lifesYPos,imagewidth,imageheight,screenXPos,screenYPos,imagewidth, imageheight);
        }
    }
}
function presentationText(){
    
}


let level =0;
let distance = 70;
let xprime = 310;
let xalienkiller = 600;
let yalienkiller = 800;
let alienspeed = 0;
let alien_change_speed = 100;
let direction = 0;
let animation = 1;
let burning_animation = 1;
let bullet_speed = 0;
let bulletX=0;
let bulletY=800;
let shooting_counter = 0;
let someone_hit = new Array(60);
let tank_explotion_timer = 0;
let tank_burning_animation_limit = 1000;
let game_stage = 0;

const alien1row1 = new alien1(xprime+(0*distance),100);
const alien2row1 = new alien1(xprime+(1*distance),100);
const alien3row1 = new alien1(xprime+(2*distance),100);
const alien4row1 = new alien1(xprime+(3*distance),100);
const alien5row1 = new alien1(xprime+(4*distance),100);
const alien6row1 = new alien1(xprime+(5*distance),100);
const alien7row1 = new alien1(xprime+(6*distance),100);
const alien8row1 = new alien1(xprime+(7*distance),100);
const alien9row1 = new alien1(xprime+(8*distance),100);
const alien10row1 = new alien1(xprime+(9*distance),100);

const alien1row2 = new alien1(xprime+(0*distance),160);
const alien2row2 = new alien1(xprime+(1*distance),160);
const alien3row2 = new alien1(xprime+(2*distance),160);
const alien4row2 = new alien1(xprime+(3*distance),160);
const alien5row2 = new alien1(xprime+(4*distance),160);
const alien6row2 = new alien1(xprime+(5*distance),160);
const alien7row2 = new alien1(xprime+(6*distance),160);
const alien8row2 = new alien1(xprime+(7*distance),160);
const alien9row2 = new alien1(xprime+(8*distance),160);
const alien10row2 = new alien1(xprime+(9*distance),160);

const alien1row3 = new alien2(xprime+(0*distance),220);
const alien2row3 = new alien2(xprime+(1*distance),220);
const alien3row3 = new alien2(xprime+(2*distance),220);
const alien4row3 = new alien2(xprime+(3*distance),220);
const alien5row3 = new alien2(xprime+(4*distance),220);
const alien6row3 = new alien2(xprime+(5*distance),220);
const alien7row3 = new alien2(xprime+(6*distance),220);
const alien8row3 = new alien2(xprime+(7*distance),220);
const alien9row3 = new alien2(xprime+(8*distance),220);
const alien10row3 = new alien2(xprime+(9*distance),220);

const alien1row4 = new alien2(xprime+(0*distance),280);
const alien2row4 = new alien2(xprime+(1*distance),280);
const alien3row4 = new alien2(xprime+(2*distance),280);
const alien4row4 = new alien2(xprime+(3*distance),280);
const alien5row4 = new alien2(xprime+(4*distance),280);
const alien6row4 = new alien2(xprime+(5*distance),280);
const alien7row4 = new alien2(xprime+(6*distance),280);
const alien8row4 = new alien2(xprime+(7*distance),280);
const alien9row4 = new alien2(xprime+(8*distance),280);
const alien10row4 = new alien2(xprime+(9*distance),280);

const alien1row5 = new alien3(xprime+(0*distance),340);
const alien2row5 = new alien3(xprime+(1*distance),340);
const alien3row5 = new alien3(xprime+(2*distance),340);
const alien4row5 = new alien3(xprime+(3*distance),340);
const alien5row5 = new alien3(xprime+(4*distance),340);
const alien6row5 = new alien3(xprime+(5*distance),340);
const alien7row5 = new alien3(xprime+(6*distance),340);
const alien8row5 = new alien3(xprime+(7*distance),340);
const alien9row5 = new alien3(xprime+(8*distance),340);
const alien10row5 = new alien3(xprime+(9*distance),340);

const alien1row6 = new alien3(xprime+(0*distance),400);
const alien2row6 = new alien3(xprime+(1*distance),400);
const alien3row6 = new alien3(xprime+(2*distance),400);
const alien4row6 = new alien3(xprime+(3*distance),400);
const alien5row6 = new alien3(xprime+(4*distance),400);
const alien6row6 = new alien3(xprime+(5*distance),400);
const alien7row6 = new alien3(xprime+(6*distance),400);
const alien8row6 = new alien3(xprime+(7*distance),400);
const alien9row6 = new alien3(xprime+(8*distance),400);
const alien10row6 = new alien3(xprime+(9*distance),400);

const shelter1 = new shelter(140,650);
const shelter2 = new shelter(430,650);
const shelter3 = new shelter(720,650);
const shelter4 = new shelter(1010,650);

const alienkiller = new tank(xalienkiller, yalienkiller);

window.onload=function (){
    canv = document.getElementById("background_animation");
    ctx = canv.getContext("2d");
    canv.width = 1300;
    canv.height = 850;
    document.addEventListener("keydown",tankMovement);
    document.addEventListener("keydown", shoot);
    let spaceinvaders = setInterval(game,2);
}

function draw_characters(){
    alien1row1.draw(xprime+(0*distance), animation);
    alien2row1.draw(xprime+(1*distance),animation);
    alien3row1.draw(xprime+(2*distance),animation);
    alien4row1.draw(xprime+(3*distance),animation);
    alien5row1.draw(xprime+(4*distance),animation);
    alien6row1.draw(xprime+(5*distance),animation);
    alien7row1.draw(xprime+(6*distance),animation);
    alien8row1.draw(xprime+(7*distance),animation);
    alien9row1.draw(xprime+(8*distance),animation);
    alien10row1.draw(xprime+(9*distance),animation);

    alien1row2.draw(xprime+(0*distance),animation);
    alien2row2.draw(xprime+(1*distance),animation);
    alien3row2.draw(xprime+(2*distance),animation);
    alien4row2.draw(xprime+(3*distance),animation);
    alien5row2.draw(xprime+(4*distance),animation);
    alien6row2.draw(xprime+(5*distance),animation);
    alien7row2.draw(xprime+(6*distance),animation);
    alien8row2.draw(xprime+(7*distance),animation);
    alien9row2.draw(xprime+(8*distance),animation);
    alien10row2.draw(xprime+(9*distance),animation);

    alien1row3.draw(xprime+(0*distance),animation);
    alien2row3.draw(xprime+(1*distance),animation);
    alien3row3.draw(xprime+(2*distance),animation);
    alien4row3.draw(xprime+(3*distance),animation);
    alien5row3.draw(xprime+(4*distance),animation);
    alien6row3.draw(xprime+(5*distance),animation);
    alien7row3.draw(xprime+(6*distance),animation);
    alien8row3.draw(xprime+(7*distance),animation);
    alien9row3.draw(xprime+(8*distance),animation);
    alien10row3.draw(xprime+(9*distance),animation);

    alien1row4.draw(xprime+(0*distance),animation);
    alien2row4.draw(xprime+(1*distance),animation);
    alien3row4.draw(xprime+(2*distance),animation);
    alien4row4.draw(xprime+(3*distance),animation);
    alien5row4.draw(xprime+(4*distance),animation);
    alien6row4.draw(xprime+(5*distance),animation);
    alien7row4.draw(xprime+(6*distance),animation);
    alien8row4.draw(xprime+(7*distance),animation);
    alien9row4.draw(xprime+(8*distance),animation);
    alien10row4.draw(xprime+(9*distance),animation);

    alien1row5.draw(xprime+(0*distance),animation);
    alien2row5.draw(xprime+(1*distance),animation);
    alien3row5.draw(xprime+(2*distance),animation);
    alien4row5.draw(xprime+(3*distance),animation);
    alien5row5.draw(xprime+(4*distance),animation);
    alien6row5.draw(xprime+(5*distance),animation);
    alien7row5.draw(xprime+(6*distance),animation);
    alien8row5.draw(xprime+(7*distance),animation);
    alien9row5.draw(xprime+(8*distance),animation);
    alien10row5.draw(xprime+(9*distance),animation);

    alien1row6.draw(xprime+(0*distance),animation);
    alien2row6.draw(xprime+(1*distance),animation);
    alien3row6.draw(xprime+(2*distance),animation);
    alien4row6.draw(xprime+(3*distance),animation);
    alien5row6.draw(xprime+(4*distance),animation);
    alien6row6.draw(xprime+(5*distance),animation);
    alien7row6.draw(xprime+(6*distance),animation);
    alien8row6.draw(xprime+(7*distance),animation);
    alien9row6.draw(xprime+(8*distance),animation);
    alien10row6.draw(xprime+(9*distance),animation);
}
function draw_shelter(){

    alien1row1.shooted=shelter1.hit(alien1row1.bullet_x+21,alien1row1.bullet_y,alien1row1.shooted);
    alien2row1.shooted=shelter1.hit(alien2row1.bullet_x+21,alien2row1.bullet_y,alien2row1.shooted);
    alien3row1.shooted=shelter1.hit(alien3row1.bullet_x+21,alien3row1.bullet_y,alien3row1.shooted);
    alien4row1.shooted=shelter1.hit(alien4row1.bullet_x+21,alien4row1.bullet_y,alien4row1.shooted);
    alien5row1.shooted=shelter1.hit(alien5row1.bullet_x+21,alien5row1.bullet_y,alien5row1.shooted);
    alien6row1.shooted=shelter1.hit(alien6row1.bullet_x+21,alien6row1.bullet_y,alien6row1.shooted);
    alien7row1.shooted=shelter1.hit(alien7row1.bullet_x+21,alien7row1.bullet_y,alien7row1.shooted);
    alien8row1.shooted=shelter1.hit(alien8row1.bullet_x+21,alien8row1.bullet_y,alien8row1.shooted);
    alien9row1.shooted=shelter1.hit(alien9row1.bullet_x+21,alien9row1.bullet_y,alien9row1.shooted);
    alien10row1.shooted=shelter1.hit(alien10row1.bullet_x+21,alien10row1.bullet_y,alien10row1.shooted);

    alien1row2.shooted=shelter1.hit(alien1row2.bullet_x+21,alien1row2.bullet_y,alien1row2.shooted);
    alien2row2.shooted=shelter1.hit(alien2row2.bullet_x+21,alien2row2.bullet_y,alien2row2.shooted);
    alien3row2.shooted=shelter1.hit(alien3row2.bullet_x+21,alien3row2.bullet_y,alien3row2.shooted);
    alien4row2.shooted=shelter1.hit(alien4row2.bullet_x+21,alien4row2.bullet_y,alien4row2.shooted);
    alien5row2.shooted=shelter1.hit(alien5row2.bullet_x+21,alien5row2.bullet_y,alien5row2.shooted);
    alien6row2.shooted=shelter1.hit(alien6row2.bullet_x+21,alien6row2.bullet_y,alien6row2.shooted);
    alien7row2.shooted=shelter1.hit(alien7row2.bullet_x+21,alien7row2.bullet_y,alien7row2.shooted);
    alien8row2.shooted=shelter1.hit(alien8row2.bullet_x+21,alien8row2.bullet_y,alien8row2.shooted);
    alien9row2.shooted=shelter1.hit(alien9row2.bullet_x+21,alien9row2.bullet_y,alien9row2.shooted);
    alien10row2.shooted=shelter1.hit(alien10row2.bullet_x+21,alien10row2.bullet_y,alien10row2.shooted);

    alien1row3.shooted=shelter1.hit(alien1row3.bullet_x+21,alien1row3.bullet_y,alien1row3.shooted);
    alien2row3.shooted=shelter1.hit(alien2row3.bullet_x+21,alien2row3.bullet_y,alien2row3.shooted);
    alien3row3.shooted=shelter1.hit(alien3row3.bullet_x+21,alien3row3.bullet_y,alien3row3.shooted);
    alien4row3.shooted=shelter1.hit(alien4row3.bullet_x+21,alien4row3.bullet_y,alien4row3.shooted);
    alien5row3.shooted=shelter1.hit(alien5row3.bullet_x+21,alien5row3.bullet_y,alien5row3.shooted);
    alien6row3.shooted=shelter1.hit(alien6row3.bullet_x+21,alien6row3.bullet_y,alien6row3.shooted);
    alien7row3.shooted=shelter1.hit(alien7row3.bullet_x+21,alien7row3.bullet_y,alien7row3.shooted);
    alien8row3.shooted=shelter1.hit(alien8row3.bullet_x+21,alien8row3.bullet_y,alien8row3.shooted);
    alien9row3.shooted=shelter1.hit(alien9row3.bullet_x+21,alien9row3.bullet_y,alien9row3.shooted);
    alien10row3.shooted=shelter1.hit(alien10row3.bullet_x+21,alien10row3.bullet_y,alien10row3.shooted);

    alien1row4.shooted=shelter1.hit(alien1row4.bullet_x+21,alien1row4.bullet_y,alien1row4.shooted);
    alien2row4.shooted=shelter1.hit(alien2row4.bullet_x+21,alien2row4.bullet_y,alien2row4.shooted);
    alien3row4.shooted=shelter1.hit(alien3row4.bullet_x+21,alien3row4.bullet_y,alien3row4.shooted);
    alien4row4.shooted=shelter1.hit(alien4row4.bullet_x+21,alien4row4.bullet_y,alien4row4.shooted);
    alien5row4.shooted=shelter1.hit(alien5row4.bullet_x+21,alien5row4.bullet_y,alien5row4.shooted);
    alien6row4.shooted=shelter1.hit(alien6row4.bullet_x+21,alien6row4.bullet_y,alien6row4.shooted);
    alien7row4.shooted=shelter1.hit(alien7row4.bullet_x+21,alien7row4.bullet_y,alien7row4.shooted);
    alien8row4.shooted=shelter1.hit(alien8row4.bullet_x+21,alien8row4.bullet_y,alien8row4.shooted);
    alien9row4.shooted=shelter1.hit(alien9row4.bullet_x+21,alien9row4.bullet_y,alien9row4.shooted);
    alien10row4.shooted=shelter1.hit(alien10row4.bullet_x+21,alien10row4.bullet_y,alien10row4.shooted);

    alien1row5.shooted=shelter1.hit(alien1row5.bullet_x+21,alien1row5.bullet_y,alien1row5.shooted);
    alien2row5.shooted=shelter1.hit(alien2row5.bullet_x+21,alien2row5.bullet_y,alien2row5.shooted);
    alien3row5.shooted=shelter1.hit(alien3row5.bullet_x+21,alien3row5.bullet_y,alien3row5.shooted);
    alien4row5.shooted=shelter1.hit(alien4row5.bullet_x+21,alien4row5.bullet_y,alien4row5.shooted);
    alien5row5.shooted=shelter1.hit(alien5row5.bullet_x+21,alien5row5.bullet_y,alien5row5.shooted);
    alien6row5.shooted=shelter1.hit(alien6row5.bullet_x+21,alien6row5.bullet_y,alien6row5.shooted);
    alien7row5.shooted=shelter1.hit(alien7row5.bullet_x+21,alien7row5.bullet_y,alien7row5.shooted);
    alien8row5.shooted=shelter1.hit(alien8row5.bullet_x+21,alien8row5.bullet_y,alien8row5.shooted);
    alien9row5.shooted=shelter1.hit(alien9row5.bullet_x+21,alien9row5.bullet_y,alien9row5.shooted);
    alien10row5.shooted=shelter1.hit(alien10row5.bullet_x+21,alien10row5.bullet_y,alien10row5.shooted);

    alien1row6.shooted=shelter1.hit(alien1row6.bullet_x+21,alien1row6.bullet_y,alien1row6.shooted);
    alien2row6.shooted=shelter1.hit(alien2row6.bullet_x+21,alien2row6.bullet_y,alien2row6.shooted);
    alien3row6.shooted=shelter1.hit(alien3row6.bullet_x+21,alien3row6.bullet_y,alien3row6.shooted);
    alien4row6.shooted=shelter1.hit(alien4row6.bullet_x+21,alien4row6.bullet_y,alien4row6.shooted);
    alien5row6.shooted=shelter1.hit(alien5row6.bullet_x+21,alien5row6.bullet_y,alien5row6.shooted);
    alien6row6.shooted=shelter1.hit(alien6row6.bullet_x+21,alien6row6.bullet_y,alien6row6.shooted);
    alien7row6.shooted=shelter1.hit(alien7row6.bullet_x+21,alien7row6.bullet_y,alien7row6.shooted);
    alien8row6.shooted=shelter1.hit(alien8row6.bullet_x+21,alien8row6.bullet_y,alien8row6.shooted);
    alien9row6.shooted=shelter1.hit(alien9row6.bullet_x+21,alien9row6.bullet_y,alien9row6.shooted);
    alien10row6.shooted=shelter1.hit(alien10row6.bullet_x+21,alien10row6.bullet_y,alien10row6.shooted);
    shelter1.draw();

    alien1row1.shooted=shelter2.hit(alien1row1.bullet_x+21,alien1row1.bullet_y,alien1row1.shooted);
    alien2row1.shooted=shelter2.hit(alien2row1.bullet_x+21,alien2row1.bullet_y,alien2row1.shooted);
    alien3row1.shooted=shelter2.hit(alien3row1.bullet_x+21,alien3row1.bullet_y,alien3row1.shooted);
    alien4row1.shooted=shelter2.hit(alien4row1.bullet_x+21,alien4row1.bullet_y,alien4row1.shooted);
    alien5row1.shooted=shelter2.hit(alien5row1.bullet_x+21,alien5row1.bullet_y,alien5row1.shooted);
    alien6row1.shooted=shelter2.hit(alien6row1.bullet_x+21,alien6row1.bullet_y,alien6row1.shooted);
    alien7row1.shooted=shelter2.hit(alien7row1.bullet_x+21,alien7row1.bullet_y,alien7row1.shooted);
    alien8row1.shooted=shelter2.hit(alien8row1.bullet_x+21,alien8row1.bullet_y,alien8row1.shooted);
    alien9row1.shooted=shelter2.hit(alien9row1.bullet_x+21,alien9row1.bullet_y,alien9row1.shooted);
    alien10row1.shooted=shelter2.hit(alien10row1.bullet_x+21,alien10row1.bullet_y,alien10row1.shooted);

    alien1row2.shooted=shelter2.hit(alien1row2.bullet_x+21,alien1row2.bullet_y,alien1row2.shooted);
    alien2row2.shooted=shelter2.hit(alien2row2.bullet_x+21,alien2row2.bullet_y,alien2row2.shooted);
    alien3row2.shooted=shelter2.hit(alien3row2.bullet_x+21,alien3row2.bullet_y,alien3row2.shooted);
    alien4row2.shooted=shelter2.hit(alien4row2.bullet_x+21,alien4row2.bullet_y,alien4row2.shooted);
    alien5row2.shooted=shelter2.hit(alien5row2.bullet_x+21,alien5row2.bullet_y,alien5row2.shooted);
    alien6row2.shooted=shelter2.hit(alien6row2.bullet_x+21,alien6row2.bullet_y,alien6row2.shooted);
    alien7row2.shooted=shelter2.hit(alien7row2.bullet_x+21,alien7row2.bullet_y,alien7row2.shooted);
    alien8row2.shooted=shelter2.hit(alien8row2.bullet_x+21,alien8row2.bullet_y,alien8row2.shooted);
    alien9row2.shooted=shelter2.hit(alien9row2.bullet_x+21,alien9row2.bullet_y,alien9row2.shooted);
    alien10row2.shooted=shelter2.hit(alien10row2.bullet_x+21,alien10row2.bullet_y,alien10row2.shooted);

    alien1row3.shooted=shelter2.hit(alien1row3.bullet_x+21,alien1row3.bullet_y,alien1row3.shooted);
    alien2row3.shooted=shelter2.hit(alien2row3.bullet_x+21,alien2row3.bullet_y,alien2row3.shooted);
    alien3row3.shooted=shelter2.hit(alien3row3.bullet_x+21,alien3row3.bullet_y,alien3row3.shooted);
    alien4row3.shooted=shelter2.hit(alien4row3.bullet_x+21,alien4row3.bullet_y,alien4row3.shooted);
    alien5row3.shooted=shelter2.hit(alien5row3.bullet_x+21,alien5row3.bullet_y,alien5row3.shooted);
    alien6row3.shooted=shelter2.hit(alien6row3.bullet_x+21,alien6row3.bullet_y,alien6row3.shooted);
    alien7row3.shooted=shelter2.hit(alien7row3.bullet_x+21,alien7row3.bullet_y,alien7row3.shooted);
    alien8row3.shooted=shelter2.hit(alien8row3.bullet_x+21,alien8row3.bullet_y,alien8row3.shooted);
    alien9row3.shooted=shelter2.hit(alien9row3.bullet_x+21,alien9row3.bullet_y,alien9row3.shooted);
    alien10row3.shooted=shelter2.hit(alien10row3.bullet_x+21,alien10row3.bullet_y,alien10row3.shooted);

    alien1row4.shooted=shelter2.hit(alien1row4.bullet_x+21,alien1row4.bullet_y,alien1row4.shooted);
    alien2row4.shooted=shelter2.hit(alien2row4.bullet_x+21,alien2row4.bullet_y,alien2row4.shooted);
    alien3row4.shooted=shelter2.hit(alien3row4.bullet_x+21,alien3row4.bullet_y,alien3row4.shooted);
    alien4row4.shooted=shelter2.hit(alien4row4.bullet_x+21,alien4row4.bullet_y,alien4row4.shooted);
    alien5row4.shooted=shelter2.hit(alien5row4.bullet_x+21,alien5row4.bullet_y,alien5row4.shooted);
    alien6row4.shooted=shelter2.hit(alien6row4.bullet_x+21,alien6row4.bullet_y,alien6row4.shooted);
    alien7row4.shooted=shelter2.hit(alien7row4.bullet_x+21,alien7row4.bullet_y,alien7row4.shooted);
    alien8row4.shooted=shelter2.hit(alien8row4.bullet_x+21,alien8row4.bullet_y,alien8row4.shooted);
    alien9row4.shooted=shelter2.hit(alien9row4.bullet_x+21,alien9row4.bullet_y,alien9row4.shooted);
    alien10row4.shooted=shelter2.hit(alien10row4.bullet_x+21,alien10row4.bullet_y,alien10row4.shooted);

    alien1row5.shooted=shelter2.hit(alien1row5.bullet_x+21,alien1row5.bullet_y,alien1row5.shooted);
    alien2row5.shooted=shelter2.hit(alien2row5.bullet_x+21,alien2row5.bullet_y,alien2row5.shooted);
    alien3row5.shooted=shelter2.hit(alien3row5.bullet_x+21,alien3row5.bullet_y,alien3row5.shooted);
    alien4row5.shooted=shelter2.hit(alien4row5.bullet_x+21,alien4row5.bullet_y,alien4row5.shooted);
    alien5row5.shooted=shelter2.hit(alien5row5.bullet_x+21,alien5row5.bullet_y,alien5row5.shooted);
    alien6row5.shooted=shelter2.hit(alien6row5.bullet_x+21,alien6row5.bullet_y,alien6row5.shooted);
    alien7row5.shooted=shelter2.hit(alien7row5.bullet_x+21,alien7row5.bullet_y,alien7row5.shooted);
    alien8row5.shooted=shelter2.hit(alien8row5.bullet_x+21,alien8row5.bullet_y,alien8row5.shooted);
    alien9row5.shooted=shelter2.hit(alien9row5.bullet_x+21,alien9row5.bullet_y,alien9row5.shooted);
    alien10row5.shooted=shelter2.hit(alien10row5.bullet_x+21,alien10row5.bullet_y,alien10row5.shooted);

    alien1row6.shooted=shelter2.hit(alien1row6.bullet_x+21,alien1row6.bullet_y,alien1row6.shooted);
    alien2row6.shooted=shelter2.hit(alien2row6.bullet_x+21,alien2row6.bullet_y,alien2row6.shooted);
    alien3row6.shooted=shelter2.hit(alien3row6.bullet_x+21,alien3row6.bullet_y,alien3row6.shooted);
    alien4row6.shooted=shelter2.hit(alien4row6.bullet_x+21,alien4row6.bullet_y,alien4row6.shooted);
    alien5row6.shooted=shelter2.hit(alien5row6.bullet_x+21,alien5row6.bullet_y,alien5row6.shooted);
    alien6row6.shooted=shelter2.hit(alien6row6.bullet_x+21,alien6row6.bullet_y,alien6row6.shooted);
    alien7row6.shooted=shelter2.hit(alien7row6.bullet_x+21,alien7row6.bullet_y,alien7row6.shooted);
    alien8row6.shooted=shelter2.hit(alien8row6.bullet_x+21,alien8row6.bullet_y,alien8row6.shooted);
    alien9row6.shooted=shelter2.hit(alien9row6.bullet_x+21,alien9row6.bullet_y,alien9row6.shooted);
    alien10row6.shooted=shelter2.hit(alien10row6.bullet_x+21,alien10row6.bullet_y,alien10row6.shooted);
    shelter2.draw();

    alien1row1.shooted=shelter3.hit(alien1row1.bullet_x+21,alien1row1.bullet_y,alien1row1.shooted);
    alien2row1.shooted=shelter3.hit(alien2row1.bullet_x+21,alien2row1.bullet_y,alien2row1.shooted);
    alien3row1.shooted=shelter3.hit(alien3row1.bullet_x+21,alien3row1.bullet_y,alien3row1.shooted);
    alien4row1.shooted=shelter3.hit(alien4row1.bullet_x+21,alien4row1.bullet_y,alien4row1.shooted);
    alien5row1.shooted=shelter3.hit(alien5row1.bullet_x+21,alien5row1.bullet_y,alien5row1.shooted);
    alien6row1.shooted=shelter3.hit(alien6row1.bullet_x+21,alien6row1.bullet_y,alien6row1.shooted);
    alien7row1.shooted=shelter3.hit(alien7row1.bullet_x+21,alien7row1.bullet_y,alien7row1.shooted);
    alien8row1.shooted=shelter3.hit(alien8row1.bullet_x+21,alien8row1.bullet_y,alien8row1.shooted);
    alien9row1.shooted=shelter3.hit(alien9row1.bullet_x+21,alien9row1.bullet_y,alien9row1.shooted);
    alien10row1.shooted=shelter3.hit(alien10row1.bullet_x+21,alien10row1.bullet_y,alien10row1.shooted);

    alien1row2.shooted=shelter3.hit(alien1row2.bullet_x+21,alien1row2.bullet_y,alien1row2.shooted);
    alien2row2.shooted=shelter3.hit(alien2row2.bullet_x+21,alien2row2.bullet_y,alien2row2.shooted);
    alien3row2.shooted=shelter3.hit(alien3row2.bullet_x+21,alien3row2.bullet_y,alien3row2.shooted);
    alien4row2.shooted=shelter3.hit(alien4row2.bullet_x+21,alien4row2.bullet_y,alien4row2.shooted);
    alien5row2.shooted=shelter3.hit(alien5row2.bullet_x+21,alien5row2.bullet_y,alien5row2.shooted);
    alien6row2.shooted=shelter3.hit(alien6row2.bullet_x+21,alien6row2.bullet_y,alien6row2.shooted);
    alien7row2.shooted=shelter3.hit(alien7row2.bullet_x+21,alien7row2.bullet_y,alien7row2.shooted);
    alien8row2.shooted=shelter3.hit(alien8row2.bullet_x+21,alien8row2.bullet_y,alien8row2.shooted);
    alien9row2.shooted=shelter3.hit(alien9row2.bullet_x+21,alien9row2.bullet_y,alien9row2.shooted);
    alien10row2.shooted=shelter3.hit(alien10row2.bullet_x+21,alien10row2.bullet_y,alien10row2.shooted);

    alien1row3.shooted=shelter3.hit(alien1row3.bullet_x+21,alien1row3.bullet_y,alien1row3.shooted);
    alien2row3.shooted=shelter3.hit(alien2row3.bullet_x+21,alien2row3.bullet_y,alien2row3.shooted);
    alien3row3.shooted=shelter3.hit(alien3row3.bullet_x+21,alien3row3.bullet_y,alien3row3.shooted);
    alien4row3.shooted=shelter3.hit(alien4row3.bullet_x+21,alien4row3.bullet_y,alien4row3.shooted);
    alien5row3.shooted=shelter3.hit(alien5row3.bullet_x+21,alien5row3.bullet_y,alien5row3.shooted);
    alien6row3.shooted=shelter3.hit(alien6row3.bullet_x+21,alien6row3.bullet_y,alien6row3.shooted);
    alien7row3.shooted=shelter3.hit(alien7row3.bullet_x+21,alien7row3.bullet_y,alien7row3.shooted);
    alien8row3.shooted=shelter3.hit(alien8row3.bullet_x+21,alien8row3.bullet_y,alien8row3.shooted);
    alien9row3.shooted=shelter3.hit(alien9row3.bullet_x+21,alien9row3.bullet_y,alien9row3.shooted);
    alien10row3.shooted=shelter3.hit(alien10row3.bullet_x+21,alien10row3.bullet_y,alien10row3.shootd);

    alien1row4.shooted=shelter3.hit(alien1row4.bullet_x+21,alien1row4.bullet_y,alien1row4.shooted);
    alien2row4.shooted=shelter3.hit(alien2row4.bullet_x+21,alien2row4.bullet_y,alien2row4.shooted);
    alien3row4.shooted=shelter3.hit(alien3row4.bullet_x+21,alien3row4.bullet_y,alien3row4.shooted);
    alien4row4.shooted=shelter3.hit(alien4row4.bullet_x+21,alien4row4.bullet_y,alien4row4.shooted);
    alien5row4.shooted=shelter3.hit(alien5row4.bullet_x+21,alien5row4.bullet_y,alien5row4.shooted);
    alien6row4.shooted=shelter3.hit(alien6row4.bullet_x+21,alien6row4.bullet_y,alien6row4.shooted);
    alien7row4.shooted=shelter3.hit(alien7row4.bullet_x+21,alien7row4.bullet_y,alien7row4.shooted);
    alien8row4.shooted=shelter3.hit(alien8row4.bullet_x+21,alien8row4.bullet_y,alien8row4.shooted);
    alien9row4.shooted=shelter3.hit(alien9row4.bullet_x+21,alien9row4.bullet_y,alien9row4.shooted);
    alien10row4.shooted=shelter3.hit(alien10row4.bullet_x+21,alien10row4.bullet_y,alien10row4.shooted);

    alien1row5.shooted=shelter3.hit(alien1row5.bullet_x+21,alien1row5.bullet_y,alien1row5.shooted);
    alien2row5.shooted=shelter3.hit(alien2row5.bullet_x+21,alien2row5.bullet_y,alien2row5.shooted);
    alien3row5.shooted=shelter3.hit(alien3row5.bullet_x+21,alien3row5.bullet_y,alien3row5.shooted);
    alien4row5.shooted=shelter3.hit(alien4row5.bullet_x+21,alien4row5.bullet_y,alien4row5.shooted);
    alien5row5.shooted=shelter3.hit(alien5row5.bullet_x+21,alien5row5.bullet_y,alien5row5.shooted);
    alien6row5.shooted=shelter3.hit(alien6row5.bullet_x+21,alien6row5.bullet_y,alien6row5.shooted);
    alien7row5.shooted=shelter3.hit(alien7row5.bullet_x+21,alien7row5.bullet_y,alien7row5.shooted);
    alien8row5.shooted=shelter3.hit(alien8row5.bullet_x+21,alien8row5.bullet_y,alien8row5.shooted);
    alien9row5.shooted=shelter3.hit(alien9row5.bullet_x+21,alien9row5.bullet_y,alien9row5.shooted);
    alien10row5.shooted=shelter3.hit(alien10row5.bullet_x+21,alien10row5.bullet_y,alien10row5.shooted);

    alien1row6.shooted=shelter3.hit(alien1row6.bullet_x+21,alien1row6.bullet_y,alien1row6.shooted);
    alien2row6.shooted=shelter3.hit(alien2row6.bullet_x+21,alien2row6.bullet_y,alien2row6.shooted);
    alien3row6.shooted=shelter3.hit(alien3row6.bullet_x+21,alien3row6.bullet_y,alien3row6.shooted);
    alien4row6.shooted=shelter3.hit(alien4row6.bullet_x+21,alien4row6.bullet_y,alien4row6.shooted);
    alien5row6.shooted=shelter3.hit(alien5row6.bullet_x+21,alien5row6.bullet_y,alien5row6.shooted);
    alien6row6.shooted=shelter3.hit(alien6row6.bullet_x+21,alien6row6.bullet_y,alien6row6.shooted);
    alien7row6.shooted=shelter3.hit(alien7row6.bullet_x+21,alien7row6.bullet_y,alien7row6.shooted);
    alien8row6.shooted=shelter3.hit(alien8row6.bullet_x+21,alien8row6.bullet_y,alien8row6.shooted);
    alien9row6.shooted=shelter3.hit(alien9row6.bullet_x+21,alien9row6.bullet_y,alien9row6.shooted);
    alien10row6.shooted=shelter3.hit(alien10row6.bullet_x+21,alien10row6.bullet_y,alien10row6.shooted);
    shelter3.draw();

    alien1row1.shooted=shelter4.hit(alien1row1.bullet_x+21,alien1row1.bullet_y,alien1row1.shooted);
    alien2row1.shooted=shelter4.hit(alien2row1.bullet_x+21,alien2row1.bullet_y,alien2row1.shooted);
    alien3row1.shooted=shelter4.hit(alien3row1.bullet_x+21,alien3row1.bullet_y,alien3row1.shooted);
    alien4row1.shooted=shelter4.hit(alien4row1.bullet_x+21,alien4row1.bullet_y,alien4row1.shooted);
    alien5row1.shooted=shelter4.hit(alien5row1.bullet_x+21,alien5row1.bullet_y,alien5row1.shooted);
    alien6row1.shooted=shelter4.hit(alien6row1.bullet_x+21,alien6row1.bullet_y,alien6row1.shooted);
    alien7row1.shooted=shelter4.hit(alien7row1.bullet_x+21,alien7row1.bullet_y,alien7row1.shooted);
    alien8row1.shooted=shelter4.hit(alien8row1.bullet_x+21,alien8row1.bullet_y,alien8row1.shooted);
    alien9row1.shooted=shelter4.hit(alien9row1.bullet_x+21,alien9row1.bullet_y,alien9row1.shooted);
    alien10row1.shooted=shelter4.hit(alien10row1.bullet_x+21,alien10row1.bullet_y,alien10row1.shooted);

    alien1row2.shooted=shelter4.hit(alien1row2.bullet_x+21,alien1row2.bullet_y,alien1row2.shooted);
    alien2row2.shooted=shelter4.hit(alien2row2.bullet_x+21,alien2row2.bullet_y,alien2row2.shooted);
    alien3row2.shooted=shelter4.hit(alien3row2.bullet_x+21,alien3row2.bullet_y,alien3row2.shooted);
    alien4row2.shooted=shelter4.hit(alien4row2.bullet_x+21,alien4row2.bullet_y,alien4row2.shooted);
    alien5row2.shooted=shelter4.hit(alien5row2.bullet_x+21,alien5row2.bullet_y,alien5row2.shooted);
    alien6row2.shooted=shelter4.hit(alien6row2.bullet_x+21,alien6row2.bullet_y,alien6row2.shooted);
    alien7row2.shooted=shelter4.hit(alien7row2.bullet_x+21,alien7row2.bullet_y,alien7row2.shooted);
    alien8row2.shooted=shelter4.hit(alien8row2.bullet_x+21,alien8row2.bullet_y,alien8row2.shooted);
    alien9row2.shooted=shelter4.hit(alien9row2.bullet_x+21,alien9row2.bullet_y,alien9row2.shooted);
    alien10row2.shooted=shelter4.hit(alien10row2.bullet_x+21,alien10row2.bullet_y,alien10row2.shooted);

    alien1row3.shooted=shelter4.hit(alien1row3.bullet_x+21,alien1row3.bullet_y,alien1row3.shooted);
    alien2row3.shooted=shelter4.hit(alien2row3.bullet_x+21,alien2row3.bullet_y,alien2row3.shooted);
    alien3row3.shooted=shelter4.hit(alien3row3.bullet_x+21,alien3row3.bullet_y,alien3row3.shooted);
    alien4row3.shooted=shelter4.hit(alien4row3.bullet_x+21,alien4row3.bullet_y,alien4row3.shooted);
    alien5row3.shooted=shelter4.hit(alien5row3.bullet_x+21,alien5row3.bullet_y,alien5row3.shooted);
    alien6row3.shooted=shelter4.hit(alien6row3.bullet_x+21,alien6row3.bullet_y,alien6row3.shooted);
    alien7row3.shooted=shelter4.hit(alien7row3.bullet_x+21,alien7row3.bullet_y,alien7row3.shooted);
    alien8row3.shooted=shelter4.hit(alien8row3.bullet_x+21,alien8row3.bullet_y,alien8row3.shooted);
    alien9row3.shooted=shelter4.hit(alien9row3.bullet_x+21,alien9row3.bullet_y,alien9row3.shooted);
    alien10row3.shooted=shelter4.hit(alien10row3.bullet_x+21,alien10row3.bullet_y,alien10row3.shooted);

    alien1row4.shooted=shelter4.hit(alien1row4.bullet_x+21,alien1row4.bullet_y,alien1row4.shooted);
    alien2row4.shooted=shelter4.hit(alien2row4.bullet_x+21,alien2row4.bullet_y,alien2row4.shooted);
    alien3row4.shooted=shelter4.hit(alien3row4.bullet_x+21,alien3row4.bullet_y,alien3row4.shooted);
    alien4row4.shooted=shelter4.hit(alien4row4.bullet_x+21,alien4row4.bullet_y,alien4row4.shooted);
    alien5row4.shooted=shelter4.hit(alien5row4.bullet_x+21,alien5row4.bullet_y,alien5row4.shooted);
    alien6row4.shooted=shelter4.hit(alien6row4.bullet_x+21,alien6row4.bullet_y,alien6row4.shooted);
    alien7row4.shooted=shelter4.hit(alien7row4.bullet_x+21,alien7row4.bullet_y,alien7row4.shooted);
    alien8row4.shooted=shelter4.hit(alien8row4.bullet_x+21,alien8row4.bullet_y,alien8row4.shooted);
    alien9row4.shooted=shelter4.hit(alien9row4.bullet_x+21,alien9row4.bullet_y,alien9row4.shooted);
    alien10row4.shooted=shelter4.hit(alien10row4.bullet_x+21,alien10row4.bullet_y,alien10row4.shooted);

    alien1row5.shooted=shelter4.hit(alien1row5.bullet_x+21,alien1row5.bullet_y,alien1row5.shooted);
    alien2row5.shooted=shelter4.hit(alien2row5.bullet_x+21,alien2row5.bullet_y,alien2row5.shooted);
    alien3row5.shooted=shelter4.hit(alien3row5.bullet_x+21,alien3row5.bullet_y,alien3row5.shooted);
    alien4row5.shooted=shelter4.hit(alien4row5.bullet_x+21,alien4row5.bullet_y,alien4row5.shooted);
    alien5row5.shooted=shelter4.hit(alien5row5.bullet_x+21,alien5row5.bullet_y,alien5row5.shooted);
    alien6row5.shooted=shelter4.hit(alien6row5.bullet_x+21,alien6row5.bullet_y,alien6row5.shooted);
    alien7row5.shooted=shelter4.hit(alien7row5.bullet_x+21,alien7row5.bullet_y,alien7row5.shooted);
    alien8row5.shooted=shelter4.hit(alien8row5.bullet_x+21,alien8row5.bullet_y,alien8row5.shooted);
    alien9row5.shooted=shelter4.hit(alien9row5.bullet_x+21,alien9row5.bullet_y,alien9row5.shooted);
    alien10row5.shooted=shelter4.hit(alien10row5.bullet_x+21,alien10row5.bullet_y,alien10row5.shooted);

    alien1row6.shooted=shelter4.hit(alien1row6.bullet_x+21,alien1row6.bullet_y,alien1row6.shooted);
    alien2row6.shooted=shelter4.hit(alien2row6.bullet_x+21,alien2row6.bullet_y,alien2row6.shooted);
    alien3row6.shooted=shelter4.hit(alien3row6.bullet_x+21,alien3row6.bullet_y,alien3row6.shooted);
    alien4row6.shooted=shelter4.hit(alien4row6.bullet_x+21,alien4row6.bullet_y,alien4row6.shooted);
    alien5row6.shooted=shelter4.hit(alien5row6.bullet_x+21,alien5row6.bullet_y,alien5row6.shooted);
    alien6row6.shooted=shelter4.hit(alien6row6.bullet_x+21,alien6row6.bullet_y,alien6row6.shooted);
    alien7row6.shooted=shelter4.hit(alien7row6.bullet_x+21,alien7row6.bullet_y,alien7row6.shooted);
    alien8row6.shooted=shelter4.hit(alien8row6.bullet_x+21,alien8row6.bullet_y,alien8row6.shooted);
    alien9row6.shooted=shelter4.hit(alien9row6.bullet_x+21,alien9row6.bullet_y,alien9row6.shooted);
    alien10row6.shooted=shelter4.hit(alien10row6.bullet_x+21,alien10row6.bullet_y,alien10row6.shooted);
    shelter4.draw();

}
function draw_explotion(){
    alien1row1.explotion(xprime+(0*distance));
    alien2row1.explotion(xprime+(1*distance));
    alien3row1.explotion(xprime+(2*distance));
    alien4row1.explotion(xprime+(3*distance));
    alien5row1.explotion(xprime+(4*distance));
    alien6row1.explotion(xprime+(5*distance));
    alien7row1.explotion(xprime+(6*distance));
    alien8row1.explotion(xprime+(7*distance));
    alien9row1.explotion(xprime+(8*distance));
    alien10row1.explotion(xprime+(9*distance));

    alien1row2.explotion(xprime+(0*distance));
    alien2row2.explotion(xprime+(1*distance));
    alien3row2.explotion(xprime+(2*distance));
    alien4row2.explotion(xprime+(3*distance));
    alien5row2.explotion(xprime+(4*distance));
    alien6row2.explotion(xprime+(5*distance));
    alien7row2.explotion(xprime+(6*distance));
    alien8row2.explotion(xprime+(7*distance));
    alien9row2.explotion(xprime+(8*distance));
    alien10row2.explotion(xprime+(9*distance));

    alien1row3.explotion(xprime+(0*distance));
    alien2row3.explotion(xprime+(1*distance));
    alien3row3.explotion(xprime+(2*distance));
    alien4row3.explotion(xprime+(3*distance));
    alien5row3.explotion(xprime+(4*distance));
    alien6row3.explotion(xprime+(5*distance));
    alien7row3.explotion(xprime+(6*distance));
    alien8row3.explotion(xprime+(7*distance));
    alien9row3.explotion(xprime+(8*distance));
    alien10row3.explotion(xprime+(9*distance));

    alien1row4.explotion(xprime+(0*distance));
    alien2row4.explotion(xprime+(1*distance));
    alien3row4.explotion(xprime+(2*distance));
    alien4row4.explotion(xprime+(3*distance));
    alien5row4.explotion(xprime+(4*distance));
    alien6row4.explotion(xprime+(5*distance));
    alien7row4.explotion(xprime+(6*distance));
    alien8row4.explotion(xprime+(7*distance));
    alien9row4.explotion(xprime+(8*distance));
    alien10row4.explotion(xprime+(9*distance));

    alien1row5.explotion(xprime+(0*distance));
    alien2row5.explotion(xprime+(1*distance));
    alien3row5.explotion(xprime+(2*distance));
    alien4row5.explotion(xprime+(3*distance));
    alien5row5.explotion(xprime+(4*distance));
    alien6row5.explotion(xprime+(5*distance));
    alien7row5.explotion(xprime+(6*distance));
    alien8row5.explotion(xprime+(7*distance));
    alien9row5.explotion(xprime+(8*distance));
    alien10row5.explotion(xprime+(9*distance));

    alien1row6.explotion(xprime+(0*distance));
    alien2row6.explotion(xprime+(1*distance));
    alien3row6.explotion(xprime+(2*distance));
    alien4row6.explotion(xprime+(3*distance));
    alien5row6.explotion(xprime+(4*distance));
    alien6row6.explotion(xprime+(5*distance));
    alien7row6.explotion(xprime+(6*distance));
    alien8row6.explotion(xprime+(7*distance));
    alien9row6.explotion(xprime+(8*distance));
    alien10row6.explotion(xprime+(9*distance));
}
function draw_bullet(){
    alien1row1.shoot();
    alien2row1.shoot();
    alien3row1.shoot();
    alien4row1.shoot();
    alien5row1.shoot();
    alien6row1.shoot();
    alien7row1.shoot();
    alien8row1.shoot();
    alien9row1.shoot();
    alien10row1.shoot();

    alien1row2.shoot();
    alien2row2.shoot();
    alien3row2.shoot();
    alien4row2.shoot();
    alien5row2.shoot();
    alien6row2.shoot();
    alien7row2.shoot();
    alien8row2.shoot();
    alien9row2.shoot();
    alien10row2.shoot();

    alien1row3.shoot();
    alien2row3.shoot();
    alien3row3.shoot();
    alien4row3.shoot();
    alien5row3.shoot();
    alien6row3.shoot();
    alien7row3.shoot();
    alien8row3.shoot();
    alien9row3.shoot();
    alien10row3.shoot();

    alien1row4.shoot();
    alien2row4.shoot();
    alien3row4.shoot();
    alien4row4.shoot();
    alien5row4.shoot();
    alien6row4.shoot();
    alien7row4.shoot();
    alien8row4.shoot();
    alien9row4.shoot();
    alien10row4.shoot();

    alien1row5.shoot();
    alien2row5.shoot();
    alien3row5.shoot();
    alien4row5.shoot();
    alien5row5.shoot();
    alien6row5.shoot();
    alien7row5.shoot();
    alien8row5.shoot();
    alien9row5.shoot();
    alien10row5.shoot();

    alien1row6.shoot();
    alien2row6.shoot();
    alien3row6.shoot()
    alien4row6.shoot();
    alien5row6.shoot();
    alien6row6.shoot();
    alien7row6.shoot();
    alien8row6.shoot();
    alien9row6.shoot();
    alien10row6.shoot();
}
function draw_bullet_movement(){
    alien1row1.bullet_movement();
    alien2row1.bullet_movement();
    alien3row1.bullet_movement();
    alien4row1.bullet_movement();
    alien6row1.bullet_movement();
    alien5row1.bullet_movement();
    alien7row1.bullet_movement();
    alien8row1.bullet_movement();
    alien9row1.bullet_movement();
    alien10row1.bullet_movement();

    alien1row2.bullet_movement();
    alien2row2.bullet_movement();
    alien3row2.bullet_movement();
    alien4row2.bullet_movement();
    alien5row2.bullet_movement();
    alien6row2.bullet_movement();
    alien7row2.bullet_movement();
    alien8row2.bullet_movement();
    alien9row2.bullet_movement();
    alien10row2.bullet_movement();

    alien1row3.bullet_movement();
    alien2row3.bullet_movement();
    alien3row3.bullet_movement();
    alien4row3.bullet_movement();
    alien5row3.bullet_movement();
    alien6row3.bullet_movement();
    alien7row3.bullet_movement();
    alien8row3.bullet_movement();
    alien9row3.bullet_movement();
    alien10row3.bullet_movement();

    alien1row4.bullet_movement();
    alien2row4.bullet_movement();
    alien3row4.bullet_movement();
    alien4row4.bullet_movement();
    alien5row4.bullet_movement();
    alien6row4.bullet_movement();
    alien7row4.bullet_movement();
    alien8row4.bullet_movement();
    alien9row4.bullet_movement();
    alien10row4.bullet_movement();

    alien1row5.bullet_movement();
    alien2row5.bullet_movement();
    alien3row5.bullet_movement();
    alien4row5.bullet_movement();
    alien5row5.bullet_movement();
    alien6row5.bullet_movement();
    alien7row5.bullet_movement();
    alien8row5.bullet_movement();
    alien9row5.bullet_movement();
    alien10row5.bullet_movement();

    alien1row6.bullet_movement();
    alien2row6.bullet_movement();
    alien3row6.bullet_movement();
    alien4row6.bullet_movement();
    alien5row6.bullet_movement();
    alien6row6.bullet_movement();
    alien7row6.bullet_movement();
    alien8row6.bullet_movement();
    alien9row6.bullet_movement();
    alien10row6.bullet_movement();
}
function draw_lifes(){
    alienkiller.draw_lifes();
}
function impact_on_tank(){
    someone_hit[0] = alien1row1.bullet_touches_tank(alienkiller.x);
    someone_hit[1] = alien2row1.bullet_touches_tank(alienkiller.x);
    someone_hit[2] = alien3row1.bullet_touches_tank(alienkiller.x);
    someone_hit[3] = alien4row1.bullet_touches_tank(alienkiller.x);
    someone_hit[4] = alien5row1.bullet_touches_tank(alienkiller.x);
    someone_hit[5] = alien6row1.bullet_touches_tank(alienkiller.x);
    someone_hit[6] = alien7row1.bullet_touches_tank(alienkiller.x);
    someone_hit[7] = alien8row1.bullet_touches_tank(alienkiller.x);
    someone_hit[8] = alien9row1.bullet_touches_tank(alienkiller.x);
    someone_hit[9] = alien10row1.bullet_touches_tank(alienkiller.x);

    someone_hit[10] = alien1row2.bullet_touches_tank(alienkiller.x);
    someone_hit[11] = alien2row2.bullet_touches_tank(alienkiller.x);
    someone_hit[12] = alien3row2.bullet_touches_tank(alienkiller.x);
    someone_hit[13] = alien4row2.bullet_touches_tank(alienkiller.x);
    someone_hit[14] = alien5row2.bullet_touches_tank(alienkiller.x);
    someone_hit[15] = alien6row2.bullet_touches_tank(alienkiller.x);
    someone_hit[16] = alien7row2.bullet_touches_tank(alienkiller.x);
    someone_hit[17] = alien8row2.bullet_touches_tank(alienkiller.x);
    someone_hit[18] = alien9row2.bullet_touches_tank(alienkiller.x);
    someone_hit[19] = alien10row2.bullet_touches_tank(alienkiller.x);

    someone_hit[20] = alien1row3.bullet_touches_tank(alienkiller.x);
    someone_hit[21] = alien2row3.bullet_touches_tank(alienkiller.x);
    someone_hit[22] = alien3row3.bullet_touches_tank(alienkiller.x);
    someone_hit[23] = alien4row3.bullet_touches_tank(alienkiller.x);
    someone_hit[24] = alien5row3.bullet_touches_tank(alienkiller.x);
    someone_hit[25] = alien6row3.bullet_touches_tank(alienkiller.x);
    someone_hit[26] = alien7row3.bullet_touches_tank(alienkiller.x);
    someone_hit[27] = alien8row3.bullet_touches_tank(alienkiller.x);
    someone_hit[28] = alien9row3.bullet_touches_tank(alienkiller.x);
    someone_hit[29] = alien10row3.bullet_touches_tank(alienkiller.x);

    someone_hit[30] = alien1row4.bullet_touches_tank(alienkiller.x);
    someone_hit[31] = alien2row4.bullet_touches_tank(alienkiller.x);
    someone_hit[32] = alien3row4.bullet_touches_tank(alienkiller.x);
    someone_hit[33] = alien4row4.bullet_touches_tank(alienkiller.x);
    someone_hit[34] = alien5row4.bullet_touches_tank(alienkiller.x);
    someone_hit[35] = alien6row4.bullet_touches_tank(alienkiller.x);
    someone_hit[36] = alien7row4.bullet_touches_tank(alienkiller.x);
    someone_hit[37] = alien8row4.bullet_touches_tank(alienkiller.x);
    someone_hit[38] = alien9row4.bullet_touches_tank(alienkiller.x);
    someone_hit[39] = alien10row4.bullet_touches_tank(alienkiller.x);

    someone_hit[40] = alien1row5.bullet_touches_tank(alienkiller.x);
    someone_hit[41] = alien2row5.bullet_touches_tank(alienkiller.x);
    someone_hit[42] = alien3row5.bullet_touches_tank(alienkiller.x);
    someone_hit[43] = alien4row5.bullet_touches_tank(alienkiller.x);
    someone_hit[44] = alien5row5.bullet_touches_tank(alienkiller.x);
    someone_hit[45] = alien6row5.bullet_touches_tank(alienkiller.x);
    someone_hit[46] = alien7row5.bullet_touches_tank(alienkiller.x);
    someone_hit[47] = alien8row5.bullet_touches_tank(alienkiller.x);
    someone_hit[48] = alien9row5.bullet_touches_tank(alienkiller.x);
    someone_hit[49] = alien10row5.bullet_touches_tank(alienkiller.x);

    someone_hit[50] = alien1row6.bullet_touches_tank(alienkiller.x);
    someone_hit[51] = alien2row6.bullet_touches_tank(alienkiller.x);
    someone_hit[52] = alien3row6.bullet_touches_tank(alienkiller.x)
    someone_hit[53] = alien4row6.bullet_touches_tank(alienkiller.x);
    someone_hit[54] = alien5row6.bullet_touches_tank(alienkiller.x);
    someone_hit[55] = alien6row6.bullet_touches_tank(alienkiller.x);
    someone_hit[56] = alien7row6.bullet_touches_tank(alienkiller.x);
    someone_hit[57] = alien8row6.bullet_touches_tank(alienkiller.x);
    someone_hit[58] = alien9row6.bullet_touches_tank(alienkiller.x);
    someone_hit[59] = alien10row6.bullet_touches_tank(alienkiller.x);

    if(someone_hit.indexOf(1) !== -1){
        alienkiller.alive=1;
    }
}
function destruction_check(){
    alien1row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
}
function character_reset(){
    alien1row1.reset(xprime+(0*distance),100);
    alien2row1.reset(xprime+(1*distance),100);
    alien3row1.reset(xprime+(2*distance),100);
    alien4row1.reset(xprime+(3*distance),100);
    alien5row1.reset(xprime+(4*distance),100);
    alien6row1.reset(xprime+(5*distance),100);
    alien7row1.reset(xprime+(6*distance),100);
    alien8row1.reset(xprime+(7*distance),100);
    alien9row1.reset(xprime+(8*distance),100);
    alien10row1.reset(xprime+(9*distance),100);

    alien1row2.reset(xprime+(0*distance),160);
    alien2row2.reset(xprime+(1*distance),160);
    alien3row2.reset(xprime+(2*distance),160);
    alien4row2.reset(xprime+(3*distance),160);
    alien5row2.reset(xprime+(4*distance),160);
    alien6row2.reset(xprime+(5*distance),160);
    alien7row2.reset(xprime+(6*distance),160);
    alien8row2.reset(xprime+(7*distance),160);
    alien9row2.reset(xprime+(8*distance),160);
    alien10row2.reset(xprime+(9*distance),160);

    alien1row3.reset(xprime+(0*distance),220);
    alien2row3.reset(xprime+(1*distance),220);
    alien3row3.reset(xprime+(2*distance),220);
    alien4row3.reset(xprime+(3*distance),220);
    alien5row3.reset(xprime+(4*distance),220);
    alien6row3.reset(xprime+(5*distance),220);
    alien7row3.reset(xprime+(6*distance),220);
    alien8row3.reset(xprime+(7*distance),220);
    alien9row3.reset(xprime+(8*distance),220);
    alien10row3.reset(xprime+(9*distance),220);

    alien1row4.reset(xprime+(0*distance),280);
    alien2row4.reset(xprime+(1*distance),280);
    alien3row4.reset(xprime+(2*distance),280);
    alien4row4.reset(xprime+(3*distance),280);
    alien5row4.reset(xprime+(4*distance),280);
    alien6row4.reset(xprime+(5*distance),280);
    alien7row4.reset(xprime+(6*distance),280);
    alien8row4.reset(xprime+(7*distance),280);
    alien9row4.reset(xprime+(8*distance),280);
    alien10row4.reset(xprime+(9*distance),280);

    alien1row5.reset(xprime+(0*distance),340);
    alien2row5.reset(xprime+(1*distance),340);
    alien3row5.reset(xprime+(2*distance),340);
    alien4row5.reset(xprime+(3*distance),340);
    alien5row5.reset(xprime+(4*distance),340);
    alien6row5.reset(xprime+(5*distance),340);
    alien7row5.reset(xprime+(6*distance),340);
    alien8row5.reset(xprime+(7*distance),340);
    alien9row5.reset(xprime+(8*distance),340);
    alien10row5.reset(xprime+(9*distance),340);

    alien1row6.reset(xprime+(0*distance),400);
    alien2row6.reset(xprime+(1*distance),400);
    alien3row6.reset(xprime+(2*distance),400);
    alien4row6.reset(xprime+(3*distance),400);
    alien5row6.reset(xprime+(4*distance),400);
    alien6row6.reset(xprime+(5*distance),400);
    alien7row6.reset(xprime+(6*distance),400);
    alien8row6.reset(xprime+(7*distance),400);
    alien9row6.reset(xprime+(8*distance),400);
    alien10row6.reset(xprime+(9*distance),400);

    alienkiller.reset(xalienkiller, yalienkiller);
}
function tankMovement(evt){
    if (alienkiller.alive==0){
        switch (evt.keyCode) {
            case 37:
                if (xalienkiller>35){
                    xalienkiller-=10;
                }
                break;
            case 39:
                if (xalienkiller<1230){
                    xalienkiller+=10;
                }
                break;
        }
    }
}
function shoot(evt){
    switch (evt.keyCode){
        case 32:
            alienkiller.bullet_exists = 1;
            break;
    }
}

function tanks_hits_shelter(){
    alienkiller.bullet_exists = shelter1.hit_by_tank(alienkiller.x_bullet, alienkiller.y_bullet, alienkiller.bullet_exists);
    alienkiller.bullet_exists = shelter2.hit_by_tank(alienkiller.x_bullet, alienkiller.y_bullet, alienkiller.bullet_exists);
    alienkiller.bullet_exists = shelter3.hit_by_tank(alienkiller.x_bullet, alienkiller.y_bullet, alienkiller.bullet_exists);
    alienkiller.bullet_exists = shelter4.hit_by_tank(alienkiller.x_bullet, alienkiller.y_bullet, alienkiller.bullet_exists);
}

let inicio = 0;

function game(){
    if (inicio==0){
        inicio=1;
        distance = 70;
        xprime = 310;
        xalienkiller = 600;
        yalienkiller = 800;
        alienspeed = 0;
        direction = 0;
        animation = 1;
        alienkiller.bullet_exists = 0;
        bullet_speed = 0;
        bulletX=0;
        bulletY=800;
        shooting_counter =0;
        tank_explotion_timer = 0;
        // Character reset
        character_reset();
    }
    if (inicio ==1 && alienkiller.alive==0 && alienkiller.lifes>=1){
        ctx.clearRect(0, 0, canv.width, canv.height);
        if (alienspeed<alien_change_speed){
            alienspeed++;
        }
        // Alien animation selected per cycle
        if (alienspeed==alien_change_speed){
            shooting_counter++;
            if (animation==1){
                animation=2;
            }
            else{
                animation=1;
            }
        }
        // Alien animations #1 and #2 drawn
        // Tank drawn too
        draw_characters();
        alienkiller.draw(xalienkiller); 
        //shelter drawn
        draw_shelter();
        //Lifes drawn
        draw_lifes();
        // EXPLOTION SECUENCE 
        draw_explotion();  
        // aliens move to the left
        if (alienspeed==alien_change_speed && direction==1){
            alienspeed=0;
            xprime-=10;
            if (xprime==10){
                direction = 0;
            }
        }
        // aliens move to the right
        if (alienspeed==alien_change_speed && direction==0){
            alienspeed=0;
            xprime+=10;
            if (xprime==610){
                direction = 1;
            }
        }
        // if bullet is invoked on screen 
        if (alienkiller.bullet_exists==1){
            if (bullet_speed == 0){
                bulletX = xalienkiller+30;
            } 
            bulletY -= 5;
            alienkiller.draw_shoot(bulletX, bulletY);
            bullet_speed ++;

            if (bulletY==0){
                alienkiller.bullet_exists=0;
                bulletY = 800;
                bullet_speed= 0;
            }
            // Tank bullet hits shelter?
            tanks_hits_shelter();
            if (alienkiller.bullet_exists==0){
                bulletY = 800;
                bullet_speed= 0;
            }
        }
        //alines can shoot too
        if (shooting_counter ==5){
            draw_bullet();
            shooting_counter=0;
        }
        //draw bullet every 5 cycles
        draw_bullet_movement();
        // Does tank gets hit by alien bullet?
        impact_on_tank();
        // if alien collides with bullet
        destruction_check();
        if (alien1row1.alive==2 || alien2row1.alive==2 || alien3row1.alive==2 || alien4row1.alive==2 ||alien5row1.alive==2 ||alien6row1.alive==2 ||alien7row1.alive==2 ||alien8row1.alive==2 ||alien9row1.alive==2 ||alien10row1.alive==2 ||alien1row2.alive==2 || alien2row2.alive==2 || alien3row2.alive==2 || alien4row2.alive==2 ||alien5row2.alive==2 ||alien6row2.alive==2 ||alien7row2.alive==2 ||alien8row2.alive==2 ||alien9row2.alive==2 ||alien10row2.alive==2 ||alien1row3.alive==2 || alien2row3.alive==2 || alien3row3.alive==2 || alien4row3.alive==2 ||alien5row3.alive==2 ||alien6row3.alive==2 ||alien7row3.alive==2 ||alien8row3.alive==2 ||alien9row3.alive==2 ||alien10row3.alive==2 ||alien1row4.alive==2 || alien2row4.alive==2 || alien3row4.alive==2 || alien4row4.alive==2 ||alien5row4.alive==2 ||alien6row4.alive==2 ||alien7row4.alive==2 ||alien8row4.alive==2 ||alien9row4.alive==2 ||alien10row4.alive==2 ||alien1row5.alive==2 || alien2row5.alive==2 || alien3row5.alive==2 || alien4row5.alive==2 ||alien5row5.alive==2 ||alien6row5.alive==2 ||alien7row5.alive==2 ||alien8row5.alive==2 ||alien9row5.alive==2 ||alien10row5.alive==2||alien1row6.alive==2 || alien2row6.alive==2 || alien3row6.alive==2 || alien4row6.alive==2 ||alien5row6.alive==2 ||alien6row6.alive==2 ||alien7row6.alive==2 ||alien8row6.alive==2 ||alien9row6.alive==2 ||alien10row6.alive==2){
            alienkiller.bullet_exists=0;
            alienkiller.y_bullet = 800;
            alienkiller.x_bullet=0
            bullet_speed= 0;
            bulletY =800;
        }


        if (alien1row1.alive==3 && alien2row1.alive==3 && alien3row1.alive==3 && alien4row1.alive==3 && alien5row1.alive==3 && alien6row1.alive==3 && alien7row1.alive==3 && alien8row1.alive==3 && alien9row1.alive==3 && alien10row1.alive==3 && alien1row2.alive==3 && alien2row2.alive==3 && alien3row2.alive==3 && alien4row2.alive==3 && alien5row2.alive==3 && alien6row2.alive==3 && alien7row2.alive==3 && alien8row2.alive==3 && alien9row2.alive==3 && alien10row2.alive==3 && alien1row3.alive==3 && alien2row3.alive==3 && alien3row3.alive==3 && alien4row3.alive==3 && alien5row3.alive==3 && alien6row3.alive==3 && alien7row3.alive==3 && alien8row3.alive==3 && alien9row3.alive==3 && alien10row3.alive==3 && alien1row4.alive==3 && alien2row4.alive==3 && alien3row4.alive==3 && alien4row4.alive==3 && alien5row4.alive==3 && alien6row4.alive==3 && alien7row4.alive==3 &&alien8row4.alive==3 && alien9row4.alive==3 && alien10row4.alive==3 && alien1row5.alive==3 && alien2row5.alive==3 && alien3row5.alive==3 && alien4row5.alive==3 && alien5row5.alive==3 && alien6row5.alive==3 && alien7row5.alive==3 && alien8row5.alive==3 && alien9row5.alive==3 && alien10row5.alive==3 && alien1row6.alive==3 && alien2row6.alive==3 && alien3row6.alive==3 && alien4row6.alive==3 && alien5row6.alive==3 && alien6row6.alive==3 && alien7row6.alive==3 && alien8row6.alive==3 && alien9row6.alive==3 && alien10row6.alive==3){
            inicio = 0;
            alien_change_speed-=10;
        }
        console.log(alienkiller.lifes);
        tank_explotion_timer=0;
    }
    if (alienkiller.alive==1 && tank_explotion_timer<=tank_burning_animation_limit){
        console.log("aca");
        ctx.clearRect(0, 0, canv.width, canv.height);

        if (alienspeed<100){
            alienspeed++;
        }
        // Alien animation selected per cycle
        if (alienspeed==100){
            if (animation==1){
                animation=2;
            }
            else{
                animation=1;
            }
            alienspeed=0;
        }

        // Tank burning animation
        if (tank_explotion_timer==50 || tank_explotion_timer==150 || tank_explotion_timer==250 || tank_explotion_timer==350 || tank_explotion_timer==450 || tank_explotion_timer==550 || tank_explotion_timer==650 || tank_explotion_timer==750 || tank_explotion_timer==850 || tank_explotion_timer==950){
            burning_animation =2;
        }
        if (tank_explotion_timer==100 || tank_explotion_timer==200 || tank_explotion_timer==300 || tank_explotion_timer==400 || tank_explotion_timer==500 || tank_explotion_timer==600 || tank_explotion_timer==700 || tank_explotion_timer==800 || tank_explotion_timer==900 || tank_explotion_timer==1000){
            burning_animation =1;
        }
        // Alien animations #1 and #2 drawn
        // Tank drawn too
        // Shelter gets drawn too
        draw_characters();
        draw_shelter();
        alienkiller.draw_explotion(xalienkiller,burning_animation); 

        tank_explotion_timer++;
        if (tank_explotion_timer==tank_burning_animation_limit){
            inicio=1;
            alienkiller.alive=0;
            alienkiller.lifes--;
        }
    }
}