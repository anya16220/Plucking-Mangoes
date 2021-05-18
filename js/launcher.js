class Launcher {
    constructor(bodyA, pointB) {
      var options = {
          bodyA: bodyA ,
          pointB: pointB,
          length: 50,
          stiffness: 0.1
      }
    this.launch  = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.launch);
    }
    display(){
      if(this.sling.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
    }
    fly(){
      this.launch.bodyA = null
    }
  }