import Snake from "../models/Snake";
import Point from "../utils/Point";

const moveSnakes = (times: number, turn: boolean = false) => {
  const greenSnake = new Snake(new Point(5, 5), 3);
  const maroonSnake = new Snake(new Point(10, 10), 3);
  let totalSquaresX = 0;
  let totalSquaresY = 0

  for (let i = 0; i < times; i++) {
    
    greenSnake.move();
    maroonSnake.move();
    greenSnake.move();
    totalSquaresX += 1;
    if (turn) { //start right
      greenSnake.turnLeft();
      maroonSnake.turnLeft();//Face UP
      maroonSnake.move();// r/u move
      totalSquaresY -= 1;
      greenSnake.move();
      maroonSnake.turnRight();//face right
      maroonSnake.move();// u/r move
      totalSquaresX += 1;
      maroonSnake.turnRight();//face down
      greenSnake.move();
      maroonSnake.move();// r/d move
      totalSquaresY += 1;
      maroonSnake.turnLeft();//Face right
      maroonSnake.move();// d/r move
      totalSquaresX += 1;
      maroonSnake.turnRight();//face down
      maroonSnake.turnRight();//face left
      maroonSnake.move();// d/l move
      maroonSnake.move();
      maroonSnake.move();
      totalSquaresX -= 3;
      maroonSnake.turnLeft();//Face down
      maroonSnake.move();// l/d move
      totalSquaresY += 1;
      maroonSnake.turnRight();//face left
      maroonSnake.turnRight();//face up
      maroonSnake.move();// l/u move
      totalSquaresY -= 1;
      maroonSnake.turnLeft();//Face left
      maroonSnake.move();// u/l move
      maroonSnake.move();
      totalSquaresX -= 2;
      maroonSnake.turnRight();//face up
      maroonSnake.turnRight();//face right
      
      

    }
  }

  return { actual: maroonSnake.position, expected: new Point(totalSquaresX,totalSquaresY)  };
};

describe("Snake Tests", function () {
  const tests = [0, 3, 10, 4].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of (0,0)",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>{
      expect(tests[index].expected.x).toBe(tests[index].actual.x)
      expect(tests[index].expected.y).toBe(tests[index].actual.y)
  });
  });
});


describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});

export {};
