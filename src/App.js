
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Users from './Users';
import UserList from './UserList';
import Product from './Product';
import ProductList from './ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className='app-body'>
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/users-list' element={<UserList />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/product-list' element={<ProductList/>}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
