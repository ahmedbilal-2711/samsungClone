import React from "react";
import Space from "./spaceCom"
const boxWrapper=(props)=>{
    return(
        <div className="w-5/6 m-auto flex flex-col justify-center">
            <Space/>
            {props.children}
            <Space/>
        </div>
    )
}

export default boxWrapper;