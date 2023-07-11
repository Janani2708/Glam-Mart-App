 import Login from  './components/login';
 import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from'./components/searchbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/sign" element={<SignUp />} >
           </ Route>
           <Route path="/nav" element={ <PrimarySearchAppBar/>}></Route>
      </Routes>
    </BrowserRouter>   
   
    </div>
  );
}

export default App;