import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import styles from './AccessAccountPage.module.css';



function AccessAccountPage() {
const [formState, setFormState] = useState({});

const handleChange = ({target}) => {

const {name, value} = target;

setFormState((prevState) => ({
...prevState,
[name]: value,
})
);

}

function handleSubmit(event){
event.preventDefault();
alert(JSON.stringify(formState,'',2));
}

return(
<div className={styles.container}>
<LoginForm currentState={formState} setupState={handleChange} submitForm={handleSubmit}/>
</div>
);

}

export default AccessAccountPage;