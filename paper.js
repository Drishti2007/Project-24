class Paper{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction: 0.5,
            density : 1.2



        } 

        this.body = Bodies.circle(x,y,20,options)
        this.width = width;
        this.height = height;
        World.add(World, this.body); 
    }

    display(){

        fill("yellow");
        rectMode(CENTER); 
        rect(this.body.position.x, this.body.position.y,40);
    }
}