import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Table2 from './components/user/table/table2.user';
import NavbarHeader from './components/header/navbar.header';
import Table from './components/user/table/table.user';

function App() {
  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path='/table2' element={<Table2 />} />
        <Route path='/' element={<Table/>}/>
      </Routes>
    </>
  );
}

export default App;
