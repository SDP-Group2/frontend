import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './page/report';
import CreateStore from './page/CreateStore';
import Home from './page/Home';
import SelectStall from './page/SelectStall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/CreateStore' element={<CreateStore />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/SelectStall' element={<SelectStall />} />
      </Routes>
    </Router>
  );
}

export default App;
