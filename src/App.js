
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Addcontact from './components/Addcontact'
import Details from './components/Details';
import './components/App.css'

function App() {
// like
  return (
    <div className='App'>

      <Router>
     <Navbar/>
        <Routes>
        <Route path='/' element={
          <div style={{width:'90%',margin:'0 auto'}}> <Home/> </div>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/addproduct' element={<Addcontact/>}/>
        <Route path='/product/:productId' element={<Details/>}/>
      
        </Routes>
      </Router>
    </div>

  );
}

export default App;
