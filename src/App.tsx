import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AppHeader from "./components/AppHeader";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clientconfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppHeader />
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
