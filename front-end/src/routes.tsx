import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import NewUser from './pages/NewUser';
import EditUser from './pages/EditUser';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/users" replace />}
        />
        <Route path="/users" element={<Home />} />
        <Route path="/new" element={<NewUser />} />
        <Route path="/users/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
