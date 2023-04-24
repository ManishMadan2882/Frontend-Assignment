import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../store/slice';
import { IconButton, Tooltip } from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';
import {Select,MenuItem} from '@mui/material/';

const SelectComp = (props) => {
    const [input,setInput] = useState(props.menu.defaultValue)
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(update({
            jsonKey  : props.jsonKey
            ,value:input,
            parent:props.parent
        })) 
       })
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='flex m-1 justify-between'>
    <div>
        <label className='text-md'>{props.label}</label>
        {(props.description.length > 0 ) && <Tooltip  title={props.description} >
          <IconButton >
            <InfoIcon className='w-[5px]' variant="outlined"/>
          </IconButton>
        </Tooltip>}
        </div>
        <Select
        placeholder={props.placeholder}
         className='w-[50%] h-10'
         value={input}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={props.icon}
        >
          {props.menu.options.map((elem,key)=>{
            return (<MenuItem  value={elem.value}>{elem.label}</MenuItem>)
          })}
          
        </Select>
    </div>
  )
}

export default SelectComp