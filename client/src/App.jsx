// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Component Imports
import { Landing, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Dashboard</div>} />
      <Route path='/register' element={<div>Register Page</div>} />
      <Route path='/landing' element={<Landing />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
