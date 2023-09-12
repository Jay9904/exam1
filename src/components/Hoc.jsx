import React, { useState } from "react";
import './style.css';


export default function Hoc() {
    return <>
        <HocTst />
        <HocRed />
        
    </>
}

const HocRed = () => {
    return <HocTst />;
}

const HocTst = () => {
    return <>
        <h1>This one is H1</h1>
        <p>This one is p</p>
    </>
}


