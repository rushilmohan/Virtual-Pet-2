class Food{
    constructor(){
        this.image = loadImage("images/milk.png");
        this.foodStock = foodStock;
        this.lastfed = lastfed;
    }
    getFoodStock(){
        return foodS;
    }

    updateFoodStock(){
        
       
        if(foodS <= 0){
            foodS=0;
        }else{
            foodS=foodS-1;
        }
    
        
    }

    deductFood(){
        if(foodS > 0){
            foodS = foodS -1;
        } 
    }


    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,220,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
    }
}