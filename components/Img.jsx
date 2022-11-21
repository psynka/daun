import React from "react";

export const Img = ({content}) =>{
    return(
        <ul>
            {content.map((el,i)=>(
                <li key={i}>{el.url}</li>
            ))}
        </ul>

    );

};