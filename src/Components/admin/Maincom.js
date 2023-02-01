import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Product_view from './Product_view'
import User_view from './User_view'
import Admin_nav from './Admin_nav';
import { Logincontext } from '../context/Contextprovider';
import {Switch,Route} from "react-router-dom"
const Maincom = () => {
  const history = useHistory();
  const account = sessionStorage.getItem('auth');

  if(!account){
  
    console.log("error")
    history.push("/login")
  }
  return (
    <>
    <Admin_nav/>
    
    <Switch>
    <Route exact path="/addproduct" element={<User_view/>}></Route>
    </Switch>
    </>
  )
}

export default Maincom