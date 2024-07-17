import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AppHeader from "./components/AppHeader";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clientconfig";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppHeader />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
