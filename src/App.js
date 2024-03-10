import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './page/report';
import CreateStore from './page/CreateStore';
import Home from './page/Home';
import SelectStall from './page/SelectStall';
import Admin_dashboard from './page/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/CreateStore' element={<CreateStore />} />
        <Route path='/SelectStall' element={<SelectStall />} />
        <Route path='/Admin' element={<Admin_dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
