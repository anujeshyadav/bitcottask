import DebouncingApi from "./Component/UseDebouncingSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import BitcotTask from "./Component/BitCotNew";
import Observer from "./Component/Observer";
import MynewObserver from "./Component/MynewObserver";

function App() {
  return (
    <div className="">
      <div className="App">
        {/* <DebouncingApi /> */}
        <BitcotTask />
        {/* <Observer /> */}
        {/* <MynewObserver /> */}
      </div>
    </div>
  );
}

export default App;
