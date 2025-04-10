import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './modules/layout';
import Fpage from './modules/Fpage';
import Contactme from './modules/Contactme';
import About from './modules/About';
import Portfolio from './modules/Portfolio';
import Errorpage from './modules/Errorpage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Fpage />} />
          <Route path="contact" element={<Contactme />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<Errorpage/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
