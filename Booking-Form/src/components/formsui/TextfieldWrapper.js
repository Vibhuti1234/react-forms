import TextField from '@material-ui/core/TextField';
import { useField, Form, FormikProps, Formik } from 'formik';
import React from 'react';

const TextFieldWrapper=({ name, ...otherProps })=>{
    const [field, meta] = useField(name);

    const configTextField={
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    };
    if(meta && meta.touched && meta.error){
        configTextField.error=true;
        configTextField.helperText=meta.error;
    }
    return (
        <TextField {...configTextField} />
    );
}

export default TextFieldWrapper;