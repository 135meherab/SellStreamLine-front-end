import Login from './Components/Login'
import { Routes, Route,} from 'react-router-dom';
import DashboardPage from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';


function App() {
  return (
      <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
      <Route path="/home" element={ <PrivateRoute><Home /></PrivateRoute> }/>
      <Route path="/dashboard/*" element={ <PrivateRoute><DashboardPage /></PrivateRoute> }/>
      </Routes>
      </>
  )
}

export default App