import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AdminDashboard from './Pages/Dashboard';
import AppLayout from './layout/app-layout';
import AccessDenied from './Pages/Access-denied';
import Login from './Pages/login';
import ProtectedRoute from './components/protected-route';




const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/dashboard',
        element:
        <ProtectedRoute>
        <AdminDashboard/>
        </ProtectedRoute>,
      },
      {
        path:'/',
        element:
        <Login/>,
      },

      {
        path:'/access-denied',
        element:<AccessDenied/>,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>

  );
}

export default App
