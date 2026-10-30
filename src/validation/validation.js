import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email : Yup.string()
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Email is invalid") 
          .required("Email is Required"),
          
   password : Yup.string()
              .min(6,"Password should be 6 character")
              .required("password is required")

});

export const RegisterSchema = Yup.object({

  username : Yup.string()
             .min(5,'username Should be atleast 5 character')
             .required('username is required'),


  email : Yup.string()
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Email is invalid") 
          .required("Email is Required"),

    
          
   password : Yup.string()
              .min(6,"Password should be 6 character")
              .required("password is required"),


   confirmPassword : Yup.string()
              .oneOf([Yup.ref('password')],'password should be same')
              .required("confirm password is required"),

});

