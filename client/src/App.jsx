import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import { Toaster, toast } from "sonner";
import About from "./pages/About";

import { NextUIProvider } from "@nextui-org/react";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NextUIProvider>
        <Toaster richColors position="top-center" />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <NotFound />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
