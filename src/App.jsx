import Navbar from "./components/navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceReceive from "./pages/InvoiceReceive";
import KPI from "./pages/KPI";
import Queue from "./pages/Queue";

export default function App() {
  return (
    <>
    <Navbar/>
    <Sidebar />

    <Router>
      <Routes>
        {/* Route to render the item list */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Route to render the item details for each item */}
        <Route path="/invoice" element={<InvoiceReceive />} />

        <Route path="/kpi" element={<KPI />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </Router>
    </>
  )
}