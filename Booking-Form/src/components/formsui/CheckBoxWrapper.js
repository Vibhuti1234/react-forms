import React from 'react';

import { Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const CheckBoxWrapper = ({
    name,
    label,
    legend,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const handleChange = (event) => {
        const { checked } = event.target;
        setFieldValue(name, checked);

    }
    const configCheckBox = {
        ...field,
        ...otherProps,
        onChange: handleChange
    }
    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
        configFormControl.helperText = meta.error;
    }

    return (
        <FormControl {...configFormControl}>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox {...configCheckBox} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>);


}

export default CheckBoxWrapper;