import { useEffect, useRef, useState } from "react";

const MovieForm = props => {
    const titleInputRef = useRef();

    const [userInput, setUserInput] = useState({
        title: {
            value: '',
            isValid: false,
            isTouched: false
        },
        form: {
            valid: false
        }
    });

    useEffect(() => {
        setUserInput(prevState => ({...prevState, form: { valid: prevState.title.isValid }}));
    }, [userInput.title.isValid]);

    const changeTitle = event => {
        setUserInput(prevState => ({...prevState, title: { value: event.target.value, isValid: event.target.value !== '', isTouched: true}}));
    }

    const focusTitle = event => {
        setUserInput(prevState => ({...prevState, title: { value: event.target.value, isValid: event.target.value !== '', isTouched: true}}));
    }

    const submitForm = event => {
        event.preventDefault();        
        console.info(titleInputRef.current.value);


        
        props.onSave(userInput);
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                <input type="text" ref={titleInputRef} value={userInput.title.value} 
                       onChange={changeTitle} onFocus={focusTitle} />
                { !userInput.title.isValid && userInput.title.isTouched && <span>Requis !</span> }
                <button disabled={!userInput.form.valid}>{props.buttonLabel}</button>
            </div>
        </form>
    );
};

export default MovieForm;