import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("WorldModel Tests", () => {
  it("moves snake forward with update", () => {
    const snake = new Snake();
    const world = new WorldModel(snake);

    world.update(3); // should move right 3 spaces
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(0);
  });

  it("turns the snake and updates", () => {
    const snake = new Snake();
    const world = new WorldModel(snake);

    world.update(2);           // (2,0)
    snake.turnLeft();          // now facing up
    world.update(1);           // (2,-1)

    
    expect(snake.position.x).toBe(2);
    expect(snake.position.y).toBe(-1);
    expect(world.snake).toBe(snake) 
  });
});