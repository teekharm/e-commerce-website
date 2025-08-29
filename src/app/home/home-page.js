"use client"
import { useState } from "react";
import Swiper from "swiper";
import Navbar from "./sections/navbar";
import Slider from "../components/slider";
import NavDrawer from "../components/nav-drawer";

export default function HomePage(){
    const [drawer , setDrawer] = useState(false);
    function ControlDrawer() {
        setDrawer(!drawer)
    }
    return(
        <div>
           <Navbar toggle={ControlDrawer} drawerOpen={drawer}/> 
           {drawer && <NavDrawer/>}
           <Slider/>
          
        </div>
    )
}