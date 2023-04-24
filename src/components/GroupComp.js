import * as React from 'react';
import { useState } from 'react';
import RadioComp from './RadioComp';
import InputComp from './InputComp';
import IgnoreComp from './IgnoreComp';
import SwitchComp from './SwitchComp';
import { Switch } from '@material-ui/core';
import SelectComp from './SelectComp';
export default function GroupComp(props) {
    const [advanced,setAdvanced] = useState(false)
    const handleToggle = ()=>{
        setAdvanced(!advanced)
      }
      let showToggle = true;
  return (
    <div className='border rounded m-1 p-4'>
       <div className='w-full'>
           <label className='text-md border-b w-full block border-violet-400 '>
                {props.label}
           </label>
       </div>
       {props.subParams.map((elem,key)=>{
        showToggle = showToggle && elem.validate.required
        switch(elem.uiType)
           {
            case 'Select':
            return (elem.validate.required || advanced) &&<SelectComp level={elem.level}  menu={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder}  parent={props.jsonKey}/>
            case 'Input':
            return (elem.validate.required || advanced) &&<InputComp level={elem.level}  icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder} parent={props.jsonKey}/>
            case 'Radio':
            return (elem.validate.required || advanced) &&<RadioComp  level={elem.level} validate={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent={props.jsonKey}/>
            case 'Group':
            return (elem.validate.required || advanced) &&<GroupComp  level={elem.level} subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent={props.jsonKey} />
            case 'Ignore':
            return (elem.validate.required || advanced) &&<IgnoreComp  level={elem.level}  subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} conditions={elem.conditions} parent={props.jsonKey} />
            case 'Switch':
            return (elem.validate.required || advanced) &&<SwitchComp  level={elem.level} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent={props.jsonKey} />
            
           }
       })
       
       }
    {  !showToggle &&
      <div>
           <label className='text-sm'>Show Advanced fields</label>
           <Switch  color="primary" size="small" checked={advanced} onChange={handleToggle} />
         </div> 
    }
    </div>
  );
}
