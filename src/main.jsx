import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/responsive.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Map from './Map.jsx'
import Profile from './Profile.jsx'
import EventDetail from './EventDetail.jsx'
import BankHome from './BankHome.jsx'
import BankSettings from './BankSettings.jsx'
import BankTransfer from './BankTransfer.jsx'
import BankStatements from './BankStatements.jsx'
import ScrollToTop from './components/util/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/bank" element={<BankHome />} />
        <Route path="/bank/settings" element={<BankSettings />} />
        <Route path="/bank/transfer" element={<BankTransfer />} />
        <Route path="/bank/statements" element={<BankStatements />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
