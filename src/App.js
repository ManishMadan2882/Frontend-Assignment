import './App.css';
import { useEffect,useState } from 'react';
import PreviewForm from './components/PreviewForm';

function App() {
  const [text,setText] = useState("[]");
  const [Schema,setSchema] = useState("[]");
  
  function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
  
  const handleChange = (e)=>{
    
    setText(e.target.value)
 
  }
  const updateSchema = ()=>{
    if(text === '')
    setSchema('[]')
      if(isJsonString(text))
      {setSchema(text)}
  }
  useEffect(()=>{updateSchema()})
  return (
    <div className='flex justify-around  flex-wrap'>
        <div className='w-[50%]  h-[100%]  p-4 '>
          <h1 className='text-center  border-b-2 border-violet-700 mb-2 '>UI Schema</h1>
          <label className='block'>Enter Schema as per the syntax</label>
          <textarea value={text} onChange={(e)=>{handleChange(e)}} className='font-custom bg-slate-50 p-2 w-[95%] h-[90%] mt-2 border-slate-600 border shadow-sm shadow-purple-600' name="uischema" rows="23" cols="45" >
          </textarea>
        </div>
       
        <div className= 'w-[50%] border-l-violet-800 border-l-2 p-4'>
          <h1 className='text-center border-b-violet-600 border-b-2'>Preview</h1>
         
          
          <PreviewForm jsonSchema={Schema}/>                
           
        
        </div>
    </div>
  );
}

export default App;
