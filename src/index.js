import { createRoot } from "react-dom/client";
import Battleship from "./Battleship";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Battleship />);
