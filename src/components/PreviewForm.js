import React from 'react'
import SelectComp from './SelectComp'
import InputComp from './InputComp'
import GroupComp from './GroupComp'
import RadioComp from './RadioComp'
import IgnoreComp from './IgnoreComp';
import SwitchComp from './SwitchComp'
import { useDispatch } from 'react-redux'
import { flushState,submitState } from '../store/slice'
import { Switch } from '@material-ui/core'
import { Button } from '@mui/material'
import { useState } from 'react'
const PreviewForm = (props) => {
    const [advanced,setAdvanced] = useState(true)
    const [cancel,setCancel] = useState(false)
    const dispatch = useDispatch()
    const handleToggle = ()=>{
      setAdvanced(!advanced)
    }
    const jsonObj = JSON.parse(props.jsonSchema)
    //function to sort json based on field values
    function sort_by_field(array, field){
      return array.sort(function(a, b){
          if( a[field] > b[field] ){
              return 1;
          }
          if( a[field] < b[field] ){
              return -1;
          }
          return 0;
      });
  }
  //sorting the outermost objects of the array
  sort_by_field(jsonObj,"sort")
  //sorting the subParamaters field in each object
  jsonObj.map((element,key)=>{
    if(element.subParameters)
    sort_by_field(element.subParameters,"sort")
  })
    
    
  return (
    <div >
    {(jsonObj.length>0) &&
     <form className='p-2 border shadow-violet-500 shadow-md  rounded-md m-4 '>
      {
        //mapping the outermost UI Components 
        jsonObj.map((elem,key)=>{

          //switching components based on UI Type

           switch(elem.uiType)
           {
            case 'Select':
            return (elem.validate.required || advanced) &&<SelectComp level={elem.level}  menu={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder} parent='root'/>
            case 'Input':
            return (elem.validate.required || advanced) &&<InputComp level={elem.level}  icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder} parent='root'/>
            case 'Radio':
            return (elem.validate.required || advanced) &&<RadioComp  level={elem.level} validate={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent='root'/>
            case 'Group':
            return (elem.validate.required || advanced) &&<GroupComp  level={elem.level} subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent='root' />
            case 'Ignore':
            return (elem.validate.required || advanced) &&<IgnoreComp  level={elem.level}  subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent='root' conditions={elem.conditions} />
            case 'Switch':
            return (elem.validate.required || advanced) &&<SwitchComp  level={elem.level} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} parent='root' />
            default:
            return
           }
        })
      }
     {(jsonObj.length > 0) &&
      <div className='p-1 my-4 flex justify-between'>
         <div>
           <label className='text-sm'>Show Advanced fields</label>
           <Switch  color="primary" size="small" checked={advanced} onChange={handleToggle} />
         </div>
         <div className='flex w-[50%] justify-evenly'>
            <Button  onClick={(e)=>{dispatch(flushState({})); setCancel(!cancel);}} className='text-sm' variant='contained' >
              Cancel
            </Button>
            <Button  onClick={(e)=>{dispatch(submitState({}))}} className='text-sm ml-2 ' variant='contained' >
              Submit
            </Button>
         </div>
      </div>}
    </form>}
    </div>
  )
}

export default PreviewForm

