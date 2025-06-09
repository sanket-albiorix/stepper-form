import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./pages/Home"));
const AddEmployee = lazy(() => import("./pages/AddEmployee"));

function App() {
  // reset data
  localStorage.removeItem("emp");
  return (
    <Router>
      <Routes>
        <Route
          path="/add-employee"
          element={
            <Suspense
              key="emp"
              fallback={<div className="full-page-loading">Loading...</div>}
            >
              <AddEmployee />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense
              key="home"
              fallback={<div className="full-page-loading">Loading...</div>}
            >
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
