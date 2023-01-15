import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="memory" />
          <div className="caption text-center m-4">
            <a
              href="https://github.com/anastasiia-bilova/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              <div>Designed &amp; Built by Anastasiia Bilova</div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
