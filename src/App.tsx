import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AppHeader from "./components/AppHeader";

function App() {
  // console.log(import.meta.env.VITE_APY_KEY);
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
