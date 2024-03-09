import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClokSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}

export default App;
