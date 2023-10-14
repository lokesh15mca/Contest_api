import "./styles.css";
import { A } from "./Components/A";

export default function App() {
  console.log("App");
  return (
    <div className="App">
      <h1>Hello Context API</h1>
      <A />
    </div>
  );
}
