import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div>
    
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="*" element ={<Navigate to ="/login"/>}/>
      </Routes>
    

     
    </div>
    </Router>
  );
}

export default App;
