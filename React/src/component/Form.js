import React from 'react';
import Style from './Form.module.css'
import { useState } from 'react';

export const Form = (props) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [nameIsValid, setNameisValid] = useState(false);
    const [mailIsValid, setMailIsValid] = useState(false);
    
    const [enteredName, setEnteredName]=useState(false);
    const [enteredMail, setEnteredMail]=useState(false);

    const nameInputBlurHandler = (event)=>{
        setEnteredName(true);
    }
    const mailInputBlureHandler = (event)=>{
        setEnteredMail(true);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        if (nameIsValid && mailIsValid && enteredName===true && enteredMail===true) {
            props.onConfirm({
                name,
                mail
            });
        }
    }


    const nameInputChangHandler = event => {
        const newName = event.target.value.trim();
        setName(newName);
        const regex = /^[A-Za-z]+$/g; //not special caracter
        const numberRegex = /[^\d]/g; // not number
        const length = newName.length;
        setNameisValid(newName !== '' && regex.test(newName) && numberRegex.test(newName) && length > 2);
    }

    const mailInputChangHandler = event => {
        const newMail = event.target.value.trim();
        const regularExpression =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //just email
        setMail(newMail);
        setMailIsValid(newMail !== '' && regularExpression.test(newMail))
    }


    return (
        <div className={Style.formdiv}>
            <form onSubmit={formSubmitHandler}>
                <label><p>Name:</p>
                    <p> <input typer="text"
                        onChange={nameInputChangHandler}
                        onBlur={nameInputBlurHandler}>
                    </input>
                    </p>
                    {nameIsValid === false && enteredName=== true && <p className={Style.error}>Please enter a real name or not leave the field blank. </p>}
                </label>
                <label>
                    <p>E-mail:</p>
                    <p>  <input typer="email" onChange={mailInputChangHandler} onBlur={mailInputBlureHandler}></input></p>
                    {mailIsValid === false && enteredMail=== true && <p className={Style.error}>Please enter a real mail or not leave the field blank.</p>}
                </label>
                <p>
                    <button type='submit'>Submit</button>
                </p>
            </form>
        </div>
    )
}

export default Form