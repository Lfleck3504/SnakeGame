class Point {
    private readonly xcoord: number;
    private readonly ycoord: number;
  
    constructor(x: number, y: number) {
      this.xcoord = x;
      this.ycoord = y;
    }
  
    get x(): number {
      return this.xcoord;
    }
  
    get y(): number {
      return this.ycoord;
    }
  }
export default Point;