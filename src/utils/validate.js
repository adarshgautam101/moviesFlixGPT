export const checkValidateData =(email,password)=>{
 const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); //this test method is comes from regex and return true or false
 const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 if(!isEmailValid) return "Email id Not Valid ";
 if(!isPasswordValid) return "Password is Not Valid";
 return null;
}