import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import './index.css'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './component/Navbar';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>

</Routes>
</BrowserRouter>


    </>
  );
}

export default App;
