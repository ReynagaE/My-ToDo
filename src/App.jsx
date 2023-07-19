import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';

import ProtectedRoute from './ProtectedRoute';
import { ListProvider } from './context/ListContext';

function App() {
  return (
    <AuthProvider>
      <ListProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <ProtectedRoute path='/tasks' element={<TasksPage />} />
            <ProtectedRoute path='/add-task' element={<TaskFormPage />} />
            <ProtectedRoute path='/tasks/:id' element={<TaskFormPage />} />
            <ProtectedRoute path='/profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </ListProvider>
    </AuthProvider>
  );
}

export default App;
