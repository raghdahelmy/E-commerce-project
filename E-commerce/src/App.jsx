import Home from './Home '
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Refund from './components/Refund';
import Fotter from './components/Fotter';
function App(){  
return (
    <>
   <Home/>
   <BrowserRouter>
      <Routes>
        <Route path="/Refund" element={<Refund />} />
        {/* Other routes */}
      </Routes>
      <Fotter />
    </BrowserRouter>
    </>
  )
}

export default App;
