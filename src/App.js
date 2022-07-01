import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Twitter from './Containers/Twitter/Twitter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Twitter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
