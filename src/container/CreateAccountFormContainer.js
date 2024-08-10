import React, {useState} from 'react';
import CreateAccountFormComponent from '../component/CreateAccountFormComponent';

const validPhoneNumber = /^\d{1,10}$/;

function CreateAccountFormContainer() {
const [formState, setFormState] = useState({});

const handleChange = ({target}) => {

const {name, value} = target;

setFormState((prevState) => ({
...prevState, [name]: value
}));

/*const phoneNumber = event.target.value;
const isValid = validPhoneNumber.test(phoneNumber);
if(isValid) {
setPhone(phoneNumber);
}*/

};

function handleSubmit(event) {
event.preventDefault();
alert(JSON.stringify(formState,'',2));
};

return(
<CreateAccountFormComponent currentState={formState} updateState={handleChange} submitForm={handleSubmit}/>
);
}

export default CreateAccountFormContainer;