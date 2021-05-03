import {useState, useEffect} from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname:'',
        address1:'',
        address2:'',
        email:'',
        pincode:'',
        phone:'',
        freeshipping:'',
        instant:''
    })
    const [errors, setErrors] = useState({})

    const handleFormInputChange = event =>{
        const {name, value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    };

    const handleFormSubmit = event => {
        event.preventDefault();

        setErrors(validate(values));
    };

    return {handleFormInputChange, values, handleFormSubmit, errors};
}

export default useForm;