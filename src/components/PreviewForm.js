import React from 'react'
import SelectComp from './SelectComp'
import InputComp from './InputComp'
import GroupComp from './GroupComp'
import RadioComp from './RadioComp'
import IgnoreComp from './IgnoreComp';
const PreviewForm = (props) => {
   
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
    
 //hun jedha object ae sade kol onu form ich chadna haiga h
    
  return (
    <div>
    <form>
      {
        jsonObj.map((elem,key)=>{
           switch(elem.uiType)
           {
            case 'Select':
            return <SelectComp  menu={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder}/>
            case 'Input':
            return <InputComp icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} placeholder={elem.placeholder}/>
            case 'Radio':
            return <RadioComp validate={elem.validate} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey}/>
            case 'Group':
            return <GroupComp subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} />
            case 'Ignore':
            return <IgnoreComp subParams = {elem.subParameters} icon={elem.icon} label={elem.label} description={elem.description} jsonKey={elem.jsonKey} />
            default:
            return
           }
        })
      }
    </form>
    </div>
  )
}

export default PreviewForm

