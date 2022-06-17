import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Dashboard";
import Campaigns from "./pages/Campaigns";
import Settings from "./pages/Settings";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Campaigns />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Campaigns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
