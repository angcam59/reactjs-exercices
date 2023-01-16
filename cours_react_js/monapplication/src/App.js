import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from'./pages/Page1';

import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/page1" exact element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
