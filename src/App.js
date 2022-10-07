import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>  

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
