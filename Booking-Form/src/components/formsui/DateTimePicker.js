import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';
const DateTimePicker = ({
    name,
    ...otherProps
}) => {

    const [field, meta] = useField(name);

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        variant: 'outlined',
        fullWidth: true,
        type: 'date',
        InputLabelProps: {
            shrink: true,
        }

    };
    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = meta.error;
    }
    return (
        <TextField {...configDateTimePicker} />
    );
}

export default DateTimePicker;