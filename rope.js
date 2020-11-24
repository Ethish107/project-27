class Rope
{
 constructor(body1,body2,offsetX,offsetY)
 {
  this.offsetX = offsetX
  this.offsetY = offsetY
  var options={
    bodyA:body1,
    bodyB:body2,

   pointB:{x:this.offsetX,y:this.offsetY}
  }
  this.rope = Constraint.create(options);
  World.add(world,this.rope);
 }
 display()
 {
  var posA = this.rope.bodyA.position;
  var posB = this.rope.bodyB.position;

  strokeWeight (4)
   var ancAx = posA.x;
   var ancAy = posA.y;  

   var ancBx = posB.x + this.offsetX;
   var ancBy = posB.y + this.offsetY;

   line(ancAx,ancAy,ancBx,ancBy);
 }

}