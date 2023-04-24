import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../store/slice';
import { RadioGroup, Radio } from '@material-ui/core';
import React from 'react'
const RadioComp = (props) => {
    const [input,setInput] = useState(props.validate.defaultValue)
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(update({jsonKey  : props.jsonKey,value:input,parent:props.parent})) 
       })
    const handleChange = (e)=>{
        setInput(e.target.value)
    }

  return (
    <div className='my-4'>
    
      <RadioGroup onClick={handleChange} value={input} className='flex justify-start'  row sx={{ my: 1 }}>
      {
        props.validate.options.map((Element,key)=>{
            return(
                 <div className='w-[50%]  text-center bg-violet-100 block border-violet-800 border m-0'>
                    <label>{Element.label}</label>
                    <Radio value={Element.value} color='primary' />
                 </div>   
  
            )
        })
      }
      </RadioGroup>
    </div>
  )
}

export default RadioComp