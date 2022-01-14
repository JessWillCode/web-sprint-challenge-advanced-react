import { useState } from "react";


const useForm = (initVal) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initVal);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
  
    return ([values, showSuccessMessage, handleChanges, handleSubmit]);
  }

  export default useForm;