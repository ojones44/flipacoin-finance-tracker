// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Component Imports
import { Landing, Register, Login, Dashboard, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Dashboard />} />
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
