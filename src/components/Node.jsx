import React, { useEffect } from 'react'

const Node = (props) => {

    useEffect(() => {
        // console.log(props.id);
    });

   return (
       <button id={props.id} className = {props.nodeType} onClick={props.onClick}></button>
   )

}

export default Node;