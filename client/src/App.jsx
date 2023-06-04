// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Component Imports
import { ProtectedRoute, Landing, Register, Login, NotFound } from './pages';
import {
  GroupedLayout,
  Goals,
  AllMonths,
  AddMonth,
  Summary,
  Settings,
} from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <GroupedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Goals />} />
        <Route path='/all-months' element={<AllMonths />} />
        <Route path='/add-month' element={<AddMonth />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
      <Route path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
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
