import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toggle from "./pages/Toggle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/toggle" exact element={<Toggle />}>


          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
