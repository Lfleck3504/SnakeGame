import Food from "./models/Food";
import WorldModel from "./models/WorldModel";

export default class WorldLoader {
  readData(levelData: string[], world: WorldModel): void {
    levelData.forEach((line, y) => {
      const chars = line.split("");

      chars.forEach((char, x) => {
        if (char === "f") {
          world.addActor(new Food(x, y));
        }
      });
    });
  }
}