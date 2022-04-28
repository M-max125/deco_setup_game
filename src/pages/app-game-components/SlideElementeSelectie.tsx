import React from "react";

export const SlideElementeSelectie:React.FC<{
    imgSource? : string,
    onClick? : (e:any)=>void
}> = (props)=>{
    return<>
        <div className="el-app-no" onClick={props.onClick}>
            <img src={props.imgSource} alt=""/>
        </div>
    </>
}