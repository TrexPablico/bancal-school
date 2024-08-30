import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resources from "./Components/Resources";
import ResourceDetail from "./Components/ResourceDetail"; // Make sure this path is correct
import MainLayout from "./Components/MainLayout"; // Import the MainLayout component

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Resources />
            </MainLayout>
          }
        />
        <Route
          path="/resource/:id"
          element={
            <MainLayout>
              <ResourceDetail />
            </MainLayout>
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
