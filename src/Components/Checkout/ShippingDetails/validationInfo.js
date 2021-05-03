export default function validationInfo(values){
    let errors = {};
    if (!values.firstname.trim()){
        errors.firstname = "*FirstName Required";
    }

    if (!values.lastname.trim()){
        errors.lastname = "*Lastname Required";
    }

    if (!values.address1.trim()){
        errors.address1 = "*Address 1 Required";
    }

    if (!values.address2.trim()){
        errors.address2 = "*Address 2 Required";
    }

    if(!values.email){
        errors.email = "*Email Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "*Email Address is Invalid";
    }

    if (!values.pincode.trim()){
        errors.pincode = "*Pin Code Required";
    }

    if (!values.phone.trim()){
        errors.phone = "*Phone Number Required";
    }
    return errors;
}