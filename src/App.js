import Login from './components/Login';
import Register from './components/Register';
import{Routes,Route}from'react-router-dom'
import Home from './components/Home';
import './App.css'
function App() {
  return (
     <><Routes>
      
      <Route element={<Home/>} path="/" />
      <Route  element={<Register/>} path="/register"/> 
      <Route element={<Login/>} path="/login"/></Routes></>
  );
}

export default App;
