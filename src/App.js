import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './css/Style.css'
import Main from './layout/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoute } from './route/Route'

function App() {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Routes>
            {PublicRoute.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Main>
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
