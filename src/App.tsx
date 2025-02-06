import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Car from "./Car";
// import Duck from "./Duck";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
const redCar = new Car('red');
const blueCar = new Car('blue');
redCar.drive(40);
blueCar.drive(36);
redCar.drive(2);
display("Red car drove a total of:", redCar.totalMiles, "miles");
display("Blue car drove a total of:", blueCar.totalMiles, "miles");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
