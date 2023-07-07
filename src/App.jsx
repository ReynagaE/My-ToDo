import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<TasksPage/>} />
          <Route path='/add-task' element={<TaskFormPage/>} />
          <Route path='/tasks/:id' element={<TaskFormPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;