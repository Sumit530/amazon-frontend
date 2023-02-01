import { Divider } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
//import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add_user = () => 
 {
    
        const [udata, setUdata] = useState({
            fname: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: ""
        });
    
        // console.log(udata);
    
        const adddata = (e) => {
            const { name, value } = e.target;
            // console.log(name,value);
    
            setUdata((pre) => {
                return {
                    ...pre,
                    [name]: value
                }
            })
        };
    
        const senddata = async (e) => {
            e.preventDefault();
    
            const { fname, email, mobile, password, cpassword } = udata;
            try {
                const res = await fetch("/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fname, email, mobile, password, cpassword
                    })
                });
    
                const data = await res.json();
                // console.log(data);
    
                if (res.status === 422 || !data) {
                    toast.error("Invalid Details 👎!", {
                        position: "top-center"
                    });
                } else {
                    setUdata({
                        ...udata, fname: "", email: "",
                        mobile: "", password: "", cpassword: ""
                    });
                    toast.success("added succefully 😃!", {
                        position: "top-center"
                    });
                }
            } catch (error) {
                console.log("front end ka catch error hai" + error.message);
            }
        }
    
        return (
            <section>
                <div className="sign_container mt-4">
                    <div className="sign_header mt-2">
                    <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" height={50} /> </NavLink>
                    </div>
                    <div className="sign_form mt-4">
                        <form method="POST">
                   
                            <div className="form_data">
                                <label htmlFor="name">User name</label>
                                <input type="text" name="fname"
                                    onChange={adddata}
                                    value={udata.fname}
                                    id="name" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="email">User email</label>
                                <input type="email" name="email"
                                    onChange={adddata}
                                    value={udata.email}
                                    id="email" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="mobile">User Mobile number</label>
                                <input type="number" name="mobile"
                                    onChange={adddata}
                                    value={udata.mobile}
                                    id="mobile" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">User Password</label>
                                <input type="password" name="password"
                                    onChange={adddata}
                                    value={udata.password}
                                    id="password" placeholder="At least 6 characters" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="passwordg">Password again</label>
                                <input type="password" name="cpassword"
                                    onChange={adddata}
                                    value={udata.cpassword}
                                    placeholder="At least 6 characters"
                                    id="passwordg" />
                            </div>
                            <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
    
                            <Divider />
    
                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <NavLink to="/login">login</NavLink>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        )
    }
export default Add_user