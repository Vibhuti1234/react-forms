import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './App.css';
import Header from './components/Header';
import TextFieldWrapper from './components/formsui/TextfieldWrapper';

import SelectWrapper from './components/formsui/SelectWrapper';
import countries from './data/countries.json';
import DateTimePicker from './components/formsui/DateTimePicker';
import CheckBoxWrapper from './components/formsui/CheckBoxWrapper';
import ButtonWrapper from './components/formsui/ButtonWrapper';


const useStyles = makeStyles((theme) => ({

  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: '20px'

  },
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  pin: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: ''

};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  // phone:Yup.number().integer().typeError('Please enter a valid phone number').required('Required')
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  pin: Yup.string().required('Required').matches(/^[0-9]+$/, "Must be only digits").min(6, 'Must be exactly 6 digits').max(6, 'Must be exactly 6 digits'),
  arrivalDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required').required('Accept Terms & Conditions is required')



});


const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik initialValues={{
              ...INITIAL_FORM_STATE
            }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}


            >


              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
                      Your Details
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name='firstName' label='First Name' />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name='lastName' label='Last Name' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='email' label='Email' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='phone' label='Phone' />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='addressLine1' label='Address Line 1' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='addressLine2' label='Address Line 2' />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name='city' label='City' />
                  </Grid>

                  <Grid item xs={6}>
                    <TextFieldWrapper name='state' label='State' />
                  </Grid>
                  <Grid item xs={9}>
                    <SelectWrapper name='country' label='Country' options={countries} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextFieldWrapper name='pin' label='PIN' />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Booking Information
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name='arrivalDate' label='Arrival Date' />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name='departureDate' label='Departure Date' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='message'
                      label='Message'
                      multiline
                      rows={4}
                    />

                  </Grid>
                  <Grid item xs={12}>
                    <CheckBoxWrapper name='termsOfService' legend='Terms Of Service' label='Accept' />

                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper>
                      Submit
                    </ButtonWrapper>
                  </Grid>

                </Grid>



              </Form>

            </Formik>
          </div>
        </Container>
      </Grid>

    </Grid>

  );

}


export default App;
