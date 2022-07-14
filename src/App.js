import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/shared/Alert";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <HomePage />
                    </>
                  }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/users/:login" element={<UserDetail />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
