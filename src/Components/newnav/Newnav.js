import React,{useState} from 'react'
import "../newnav/newnav.css";
import { Drawer } from 'rsuite';
import {Placeholder,Button } from 'rsuite'
import { style } from '@mui/system';

const Newnav = () => {
    const [open,setOpen] =  useState(false)
    const [open1,setOpen1] =  useState(false)
    document.querySelectorAll(".sidenavRow").forEach(row => {
        row.addEventListener("click", () => {
            document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
            document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
        });
    });


    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p onClick={()=>setOpen(true)}><i className="fas fa-shopping-cart"></i> All</p>
                    <Drawer backdrop="static"  placement='left' size={'xs'} style={{width:"20rem"}}  className="drawer"  open={open} onClose={() => setOpen(false)}>
                     <Drawer.Header  style={{background:"#131921",height:"5rem",padding:"-10px"}} >

                  <Drawer.Title style={{color:"white"}} > Hello , Sign in </Drawer.Title>

             </Drawer.Header>
               <Drawer.Body style={{paddingBottom:"10px",width:"100%",position:"absolute",overflowX:"hidden"}}>
 <div id="main-container" style={{width:"100%",position:"absolute",left:10}}>
    <div class="sidenavContentHeader" onClick={()=>{setOpen1(true);console.log("hey")}}>Trending</div>
    <a href="#">
      <div class="sidenavContent">Best Sellers</div>
    </a>
    <a href="#">
      <div class="sidenavContent">New Releases</div>
    </a>
    <a href="#">
      <div class="sidenavContent">Movers and Shakers</div>
    </a>
    <hr />
    <div class="sidenavContentHeader">Digital Content And Devices</div>
    <a href="#" onClick={()=>{document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Prime Video</div>
    <a href="#"><div class="sidenavContent">All Videos</div></a>`;  document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
    document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";}}>
      <div class="sidenavRow">
        <div >Prime Video</div>

        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#" >
      <div class="sidenavRow" style={{animation:"subBack .3s forwards"}}>
        <div >Amazon Music</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Kindle E-readers & Books</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Audible Audiobooks</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <hr />
    <div class="sidenavContentHeader">Shop By Department</div>
    <a href="#">
      <div class="sidenavRow">
        <div>Amazon Fresh</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Books</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Films, TV, Music & Games</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Electronics & Computers</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <div class="sidenavContainer" id="firstContainer">
      <hr />
      <a href="#">
        <div class="sidenavRow">
          <div>Home, Garden, Pets & DIY</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Toys, Children & Baby</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Clothes, Shoes, Jewellery & Accessories</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Sports & Outdoors</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Food & Grocery</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Health & Beauty</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Car & Motorbike</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Business, Industry & Science</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
    </div>
    <div class="sidenavRowDropdown" id="firstDropDown" onclick="firstDropDown()">
      <div>See All</div>
      <i class="fas fa-chevron-down" >
      </i>
    </div>
    <hr />
    <div class="sidenavContentHeader">Programs & Features</div>
    <a href="#">
      <div class="sidenavRow">
        <div>Gift Cards & Top Up</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Find a Gift</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Handmade</div>
        <i class="fas fa-chevron-right"></i>
      </div>
    </a>
    <a href="#">
      <div class="sidenavRow">
        <div>Amazon Launchpad</div>
        <i class="fas fa-chevron-right" ></i>
      </div>
    </a>

    <div class="sidenavContainer" id="secondContainer">
      <hr />
      <a href="#">
        <div class="sidenavContent">Made In Italy</div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Home Services</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavContent">Prime Wardrobe</div>
      </a>
      <a href="#">
        <div class="sidenavRow">
          <div>Amazon Business</div>
          <i class="fas fa-chevron-right" ></i>
        </div>
      </a>
      <a href="#">
        <div class="sidenavContent">Amazon Second Chance</div>
      </a>
    </div>
    <div class="sidenavRowDropdown" id="secondDropDown" >
      <div>See All</div>
      <i class="fas fa-chevron-down" >
      </i>
    </div>
    <hr />
    <div class="sidenavContentHeader">Help & Settings</div>
    <a href="#">
      <div class="sidenavContent">Your Account</div>
    </a>
    <a href="#">
      <div class="sidenavContent">Currency Settings</div>
    </a>
    <a href="#">
      <div class="sidenavContent">Customer Service</div>
    </a>
    <a href="#">
      <div class="sidenavContent">Sign In</div>
    </a>
    <div ></div>
  </div>
    < div id="sub-container" style={{width:"18rem"}}>
        <div id="mainMenu" onClick={()=>{document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
        document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";}}>
          <i class="fas fa-chevron-left" style={{color: "#8e9090"}} ></i> MAIN MENU
        </div>
        <hr />
        <div id="sub-container-content">
          {/* <!-- <div class="sidenavContentHeader">Prime Video</div>
          <a href="#"><div class="sidenavContent">All Videos</div></a> --> */}
        </div>
      </div>
            </Drawer.Body>
        </Drawer>
                    <p>Mobiles</p>
                    <p>Best Sellers</p>
                    <p>Fashion</p>
                    <p>Customer Service</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Today's Deals</p>
                    <p>Amazon Pay</p>
                </div>
                <div className="right_data">
                    <img src="nav.jpg" alt="navdata" />
                </div>
            </div>
        </div>
    )
}

export default Newnav
