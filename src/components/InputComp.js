import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';
import TextField from '@mui/material/TextField';
import { useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';
import { update } from '../store/slice';
export default function InputComp(props) {
    const [input,setInput] = useState("")
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(update({jsonKey  : props.jsonKey,value:input})) 
       })
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
  return (
   <div className='flex justify-between border p-2'>
        <div>
        <label className='text-lg'>{props.label}</label>
        {(props.description.length > 0 ) && <Tooltip  title={props.description} >
          <IconButton>
            <InfoIcon/>
          </IconButton>
        </Tooltip>}
        </div>
        <TextField value={input} onChange={handleChange} className='w-[50%] p-0' id="filled-basic"  placeholder={props.placeholder} variant="filled" />
   </div>
  );
}