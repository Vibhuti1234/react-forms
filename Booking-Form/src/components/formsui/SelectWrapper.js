import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useFormikContext, useField } from 'formik';


 const SelectWrapper=({
     name,
     options,
     ...otherProps
 })=>{
    const {setFieldValue} = useFormikContext();

    const [field, meta] = useField(name);

   const onChangeHandler=event=>{
   
    const {value}=event.target;
    setFieldValue(name,value);

   }

    const configSelect={
        ...field,
        ...otherProps,
        select:true,
        variant:'outlined',
        fullWidth:true,
        onChange:onChangeHandler
       
    };
    if(meta && meta.touched && meta.error){
        configSelect.error=true;
        configSelect.helperText=meta.error;
    }
    return (<TextField {...configSelect}>
         {Object.keys(options).map((item,pos) => {
             return(
                <MenuItem key={pos} value={item}>
                {options[item]}
              </MenuItem>
             )
           
             })}
        </TextField>);

 }

 export default SelectWrapper;