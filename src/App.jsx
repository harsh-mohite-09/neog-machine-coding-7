import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContinentPage from "./pages/ContinentPage";
import CountryPage from "./pages/CountryPage";
import DestinationPage from "./pages/DestinationPage";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="/:continent" element={<ContinentPage />} />
      <Route path="/:continent/:country" element={<CountryPage />} />
      <Route
        path="/:continent/:country/:destination"
        element={<DestinationPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
