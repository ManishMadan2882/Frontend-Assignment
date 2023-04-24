
import React from 'react'
import { useDispatch } from "react-redux";
import { update } from "../store/slice";
import { useState,useEffect } from "react";
import { Checkbox } from "@material-ui/core";
 const SwitchComp = (props) => {
    const [input,setInput] = useState(false)
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(update({
            parent:props.parent,
            jsonKey  : props.jsonKey
            ,value:input
        })) 
       })
    const handleChange = (e)=>{
        setInput(!input)
    }
  return (
    <div className="flex justify-start p-1 m-1">
        <Checkbox color="primary" size="medium" checked={input} onChange={handleChange} />

      <label>
         {props.label}
      </label>
    
    
    </div>
  )
}
export default SwitchComp