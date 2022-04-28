import React from "react";

export const HeaderCategory:React.FC<{
    imgSource? : string,
    onClick? : (e:any)=>void
}> = (props)=>{
    return<>
        <div className="container-element" onClick={props.onClick}>
            <img
                src={props.imgSource}
                alt="category"/>
        </div>
    </>
}