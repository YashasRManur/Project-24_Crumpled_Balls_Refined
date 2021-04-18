class Balls {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("pink");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}