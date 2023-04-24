import * as React from 'react';
import RadioComp from './RadioComp';
import { Switch } from '@material-ui/core';
import SwitchComp from './SwitchComp';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../store/slice';
import InputComp from './InputComp';
import SelectComp from './SelectComp';
import GroupComp from './GroupComp';
import { useSelector } from 'react-redux';
export default function IgnoreComp(props) {
    const dispatch = useDispatch()
    const {jsonKey,value,op,action} = props.conditions[0]
    const [advanced,setAdvanced] = useState(false)

    const handleToggle = ()=>{
        setAdvanced(!advanced)
      }
    let myState = useSelector((state)=>{
      
        return state.form
      })
   
     let isDisplay = false;
     if(op === '==')
    {
        if(jsonKey.includes('.'))
        { 
            try{
            isDisplay = (myState[jsonKey.slice(0,jsonKey.indexOf('.'))][jsonKey.slice(1+jsonKey.indexOf('.'))]===value) && (action==='enable') 
            }
            catch{
            dispatch(update({parent:'root',value:{},jsonKey:jsonKey.slice(0,jsonKey.indexOf('.'))}))
             }
        } 
        else isDisplay = (myState[jsonKey]===value) && (action==='enable')
    }

 let showToggle = true;
  return (
    <div className={"rounded m-1 p-4" + (isDisplay && "border")} >
       {isDisplay && 
       <div>
           <label className='text-md border-b border-violet-800 '>
                {props.label}
           </label>
       </div>}
       {isDisplay && props.subParams.map((elem,key)=>{
        showToggle = showToggle && elem.validate.required
        switch(elem.uiType)
           {
            case 'Select':
            return (elem.validate.required || advanced) &&<SelectComp level={elem.level}   menu={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder} parent={props.jsonKey}/>
            case 'Input':
            return (elem.validate.required || advanced) &&<InputComp level={elem.level}  icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder} parent={props.jsonKey}/>
            case 'Radio':
            return (elem.validate.required || advanced) &&<RadioComp  level={elem.level} validate={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent={props.jsonKey}/>
            case 'Group':
            return (elem.validate.required || advanced) &&<GroupComp  level={elem.level} subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey}  parent={props.jsonKey}/>
            case 'Ignore':
            return (elem.validate.required || advanced) &&<IgnoreComp  level={elem.level}  subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} conditions={elem.conditions} parent={props.jsonKey} />
            case 'Switch':
            return (elem.validate.required || advanced) &&<SwitchComp  level={elem.level} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent={props.jsonKey} />
           
           }
           
       })
       
       }
       {
        isDisplay && !showToggle &&       
        <div>
           <label className='text-sm'>Show Advanced fields</label>
           <Switch  color="primary" size="small" checked={advanced} onChange={handleToggle} />
         </div>
 
       } 
    </div>
  );
}
