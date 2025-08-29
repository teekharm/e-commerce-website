"use client";
import {useState} from "react";

export default function Dropdown({ title, children}){
    const [open, setOpen] = useState(false);
    function Toggle(){
        setOpen(!open);
    }
    return(
        <div className="w-full flex flex-col ">
            <div className="flex justify-between">
                <a
                href="#"
                className="flex justify-between gap-1 items-center hover:text-blue-400"
                >
                    {title}
                </a>
                <button onClick={Toggle}>
                    <img className="h-3" src="/icons8-expand-arrow-24.png"></img>
                </button>

            </div>
            {open && (
                <div className="w-full flex-col justify-center items-center px-2">
                    {children}
                </div>
            )}
        </div>
    );
}