import { Divider } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
//import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Add_product = () => {
           
    const[title,settitle] = useState({});
    const[price,setprice] = useState({});

    const prices = (e) => {
        const current = price;
        current[e.target.name] = e.target.value;
        setprice(current);
    }
    const titles = (e) => {
        const current = title;
        current[e.target.name] = e.target.value;
        settitle(current);
    }
    const [udata, setUdata] = useState({
                id: "",
                discription: "",
                discount: "",
                tagline : ""
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
        
                const { id ,description,discount,tagline  } = udata;
                try {
                    const res = await fetch("/addproduct", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id ,title,price,description,discount,tagline
                        })
                    });
        
                    const data = await res.json();
                    console.log(data);
        
                    if (res.status === 422 || !data) {
                        toast.error("Invalid Details 👎!", {
                            position: "top-center"
                        });
                    } else {
                        setUdata({
                            ...udata,id: "",description: "",discount: "",tagline : ""
                        });
                        setprice({});
                        settitle({});
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
                    <div className="sign_container mt-5">
                        <div className="sign_header mt-2">
                        <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
                        </div>
                        <div className="sign_form mt-3">
                            <form method="POST">
                                <h1>add product</h1>
                                <div className="form_data">
                                    <label htmlFor="id">id</label>
                                    <input type="text" name="id"
                                        onChange={adddata}
                                        value={udata.id}
                                        id="id" />
                                </div>
                                
                                <div className="form_data">
                                    <label htmlFor="shortTitle">short title</label>
                                    <input type="text" name="shortTitle"
                                        onChange={titles}
                                        value={udata.title}
                                        id="shortTitle" />
                                </div>
                                <div className="form_data">
                                    <label htmlFor="longTitle">Long title</label>
                                    <input type="text" name="longtitle"
                                        onChange={titles}
                                        value={udata.title}
                                        id="longTitle" />
                                </div>
                                <div className="form_d">
                                    <label htmlFor="price">MRP</label>
                                    <span>

                                    <input type="text" name="mrp"
                                        onChange={prices}
                                        value={udata.price}
                                        id="price" placeholder="" />
                                        <span>
                                        <label htmlFor="price">cost</label>
                                        <input type="text" name="cost"
                                        onChange={prices}
                                        value={udata.price}
                                        id="price" placeholder="" />
                                        </span>
                                        </span>
                                        <span>
                                        <label htmlFor="price">discount percent</label>
                                        <input type="text" name="discount"
                                        onChange={prices}
                                        value={udata.price}
                                        id="price" placeholder="" />
                                        </span>
                                </div>
                                <div className="form_data">
                                    <label htmlFor="passwordg">description</label>
                                    <input type="text" name="description"
                                        onChange={adddata}
                                        value={udata.description}
                                        id="passwordg" />
                                </div>
                                <div className="form_data">
                                    <label htmlFor="passwordg">discount line</label>
                                    <input type="text" name="discount"
                                        onChange={adddata}
                                        value={udata.discount}
                                        id="passwordg" />
                                </div>
                                <div className="form_data">
                                    <label htmlFor="passwordg">tagline</label>
                                    <input type="text" name="tagline"
                                        onChange={adddata}
                                        value={udata.tagline}
                                        id="passwordg" />
                                </div>
                                <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
        
                                <Divider />
                            </form>
                        </div>
                        <ToastContainer />
                    </div>
                </section>
    
    
    
  )
}

export default Add_product