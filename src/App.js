import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './css/Style.css'
import Main from './layout/Main';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoute } from './route/Route'
import { PrivateRoute } from './route/PrivateRoute';
import MainPrivate from './layout/private/Main';

function App() {
  let accesType = 1
  return (
    <>
      <BrowserRouter>
        {!accesType === 1 ? (
          <Main>
            <Routes>
              {PublicRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Main>
        ) : (
          <MainPrivate>
            <Routes>
              {PrivateRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </MainPrivate>
        )}
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
