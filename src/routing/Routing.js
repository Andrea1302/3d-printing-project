import { Routes, Route } from "react-router-dom";

// App
import App from "../App";

//Pages
import BowlsPage from "../pages/BowlsPage";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bowls" element={<BowlsPage />} />
      </Routes>
    </>
  );
}

export default Routing;
