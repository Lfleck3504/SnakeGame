import Snake from "./models/Snake";
import WorldModel from "./models/WorldModel";
import Point from "./utils/Point";
import  ActorCollisionHandlers  from "./collision/ActorCollisionHandlers";

describe("WorldModel Tests", () => {
  it("moves snake forward with update", () => {
    const snake = new Snake(new Point(5, 5), 3);
    const handlers = new ActorCollisionHandlers();
    const world = new WorldModel(handlers);

    world.addActor(snake);
    world.update(3); // should move right 3 spaces

    expect(snake.position.x).toBe(8);
    expect(snake.position.y).toBe(5);
  });

  it("turns the snake and updates", () => {
    const snake = new Snake(new Point(5, 5), 3);
    const handlers = new ActorCollisionHandlers();
    const world = new WorldModel(handlers);

    world.addActor(snake);
    world.update(2);           // moves to (7, 5)
    snake.turnLeft();          // now facing up
    world.update(1);           // moves to (7, 4)

    expect(snake.position.x).toBe(7);
    expect(snake.position.y).toBe(4);

    // Check if snake is still in world
    expect(world.actorsArray.includes(snake)).toBe(true);
  });
});