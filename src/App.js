import Report from './page/report';
import CreateStore from './page/CreateStore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/report' element={<Report />} />
        <Route path='/CreateStore' element={<CreateStore />} />
      </Routes>
    </Router>
  );
}

export default App;
