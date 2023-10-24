// import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import Signin from './Signin';
function App() {
  return (
  //   <Router>
  //   <div className="App">
  //     <Header></Header>
  //     <Routes>
  //     <Route path='/' element={<Home/>}>
  //     </Route>
  //     <Route path='/checkout' element={<Checkout/>}></Route>
  //     <Route path='/login' element={<Signin/>}></Route>
  //     </Routes>
  //   </div>
  //  </Router>
  //1
  //   <Router>
  //   <div className="App">
  //     <Routes>
  //       <Route path='/' element={<Header /><Home />} />
  //       <Route path='/checkout' element={<Header /><Checkout />} />
  //       <Route path='/login' element={<Signin />} />
  //     </Routes>
  //   </div>
  // </Router>
  //2
  // <Router>
  //     <div className="App">
  //       <Header />
  //       <Routes>
  //         <Route
  //           path='/'
  //           element={
  //             <Outlet>
  //               <Home />
  //             </Outlet>
  //           }
  //         />
  //         <Route path='/checkout' element={<Outlet><Checkout /></Outlet>} />
  //         <Route path='/login' element={<Signin />} />
  //       </Routes>
  //     </div>
  //   </Router>
  //3
  <Router>
  <div className="App">
  <Routes>
    <Route
      path='/'
      element={
        <>
          <Header />
          <Home />
        </>
      }
    />
    <Route
      path='/checkout'
      element={
        <>
          <Header />
          <Checkout />
        </>
      }
    />
    <Route path='/login' element={<Signin />} />
  </Routes>
</div>
</Router>
  );
}

export default App;
