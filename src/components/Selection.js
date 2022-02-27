import React from "react";
import { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
    const [selectionStyle, setSelectionStyle] = useState({background:''});
    return (
        <>
            <div className="fix-box" style = {selectionStyle} onClick = {() => {
                props.applyColor(setSelectionStyle);
            }}>
                <h2 className="subheading">Selection</h2>
            </div>
        </>
    )
}

export default Selection;
