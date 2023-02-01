import Navbaar from './Components/header/Navbaar';
import Newnav from './Components/newnav/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/footer/Footer';
import Signup from './Components/signup_signin/SignUp';
import Sign_in from './Components/signup_signin/Sign_in';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import  Maincom from './Components/admin/Maincom';
import  Admin_nav from './Components/admin/Admin_nav';
import  Product_view from './Components/admin/Product_view';
import User_view from './Components/admin/User_view';
import Add_product from './Components/admin/Add_product'; 
import Add_user from './Components/admin/Add_user';
import './App.css';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Switch, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])
  const adminAccount = sessionStorage.getItem('auth')

  return (
    <>
      {
        data ? (
          <>
         
        <Newnav />
          <Navbaar />
            <Switch>
              <Route exact path="/">
                <Maincomp />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Sign_in />
              </Route>
              <Route exact path="/getproductsone/:id">
                <Cart />
              </Route>
              <Route exact path="/buynow">
                <Buynow />
              </Route>
              {
                adminAccount == 'admin'?
                <>
                <Admin_nav/>
                <Route exact path="/viewuser">
                <User_view/>
              </Route>
                    <Route exact path="/viewproduct">
                <Product_view/>
              </Route>
              <Route exact path="/addproduct">
                <Add_product/>
              </Route>
              <Route exact path="/adduser">
                <Add_user/>
              </Route>
              
              <Route exact path="/admin">
                < Maincom/>
              </Route> 
                </>:<Sign_in/>
              }
            </Switch>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
