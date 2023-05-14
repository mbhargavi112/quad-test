import logo from './logo.svg';
import './App.css';
import List from './list';
import "bootstrap/dist/css/bootstrap.min.css"
import Details from './details';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';



function App() {

  

  return (
    <div className="d-flex">
      {/* <List />
       */}
       <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<List />}></Route>
          <Route path='/details' element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
