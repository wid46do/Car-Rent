import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';
import Detail from './pages/Detail';
import AddCars from './pages/AddCars';
import ListCars from './pages/ListCars';
import Payment from './pages/Payment';
import BankDetail from './pages/BankDetail';
import Etiket from './pages/Etiket';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store"
import { getCarData } from './actions/carActions';

store.dispatch(getCarData());

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
   <Routes>
     <Route exact path='/' element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     <Route path='/search' element={<SearchPage/>} />
     <Route path='/result' element={<ResultPage/>} />
     <Route path='/detail/:carId' element={<Detail/>} />
     <Route path='/method' element={<Payment/>} />
     <Route path='/pay' element={<BankDetail/>} />
     <Route path='/tiket' element={<Etiket/>} />
     <Route path='/add' element={<AddCars/>} />
     <Route path='/list' element={<ListCars/>} />
   </Routes>
   </BrowserRouter>
    </Provider>
  );
}

export default App;
