import * as React from 'react';
import Button from '@mui/material/Button';
import RadioComp from './RadioComp';
import InputComp from './InputComp';
import IgnoreComp from './IgnoreComp';
import SelectComp from './SelectComp';
export default function GroupComp(props) {
    
  return (
    <div className='border rounded'>
       <div>
           <label className='text-lg border-b border-violet-800 '>
                {props.label}
           </label>
       </div>
       {props.subParams.map((elem,key)=>{
           switch(elem.uiType)
           {
            case 'Select':
            return <SelectComp  menu={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder}/>
            case 'Input':
            return <InputComp icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder}/>
            case 'Radio':
            return <RadioComp  validate={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey}/>
            case 'Group':
            return <GroupComp subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} />
            case 'Ignore':
            return <IgnoreComp subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} />
         
           }
       })}
    </div>
  );
}
