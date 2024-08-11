import Hello from "./Hello.jsx";
import KgButton from "./KgButton";
import Sparkles from "react-sparkle";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <KgButton></KgButton>
      <div style={{ position: "relative" }}>
        <h1>This is sparkling effect</h1>
        <Sparkles
          color="red"
          count={20}
          minSize={7}
          maxSize={12}
          overflowPx={80}
          fadeOutSpeed={30}
          flicker={false}
        />
      </div>

      <Hello></Hello>
    </>
  );
}

export default App;
