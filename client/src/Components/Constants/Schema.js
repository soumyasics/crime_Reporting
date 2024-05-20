import * as yup from 'yup';

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol

export const LoginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

export const CitizenRegistrationSchema  = yup.object().shape({
    firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    lastname: yup.string().min(1,"Enter minimum 1 characters").required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be 10 digit number").max(9999999999, "Phone number must be 10 digit number").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    dob: yup.string().required("Required"),
    aadhar: yup.string().min(12,"Aadhaar number must be a 12 digit number").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
    housename: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    street: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    state: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    nationality: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    pincode: yup.number().min(100000,"Pincode must be a 6 digit number").max(999999,"Pincode must be a 6 digit number").required(),
    gender: yup.string().min(2,"Enter minimum 2 characters").required("Required"),

})

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});