// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './styles/index.css';
import Layout from './components/Layout';
import HomePage from './features/Home';
import AboutPage from './features/About';
import ServicesPage from './features/Services';
import PortfolioPage from './features/Portfolio';
import ContactPage from './features/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;