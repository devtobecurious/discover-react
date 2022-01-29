import { useEffect, useState } from 'react';
import { Row, Col, TextInput, Button, Icon } from 'react-materialize';

const LoginForm = props => {
    const defaultState = { form: {isValid: false}, login: { isValid: false, value: ''}, password: { isValid: false, value: ''} };
    const [localState, setLocalState] = useState(defaultState);

    const submitHandler = events => {
        events.preventDefault();
        if (localState.form.isValid) {
            props.onLogin(localState.login.value, localState.password.value);
        }
    };

    const emailUpdate = events => {
        setLocalState(prevState => ({...prevState, login: { value: events.target.value, isValid: events.target.value !== ''}}));
    };

    const passwordUpdate = events => {
        setLocalState(prevState => ({...prevState, password: { value: events.target.value, isValid: events.target.value !== ''}}));
    };

    useEffect(() => {
        setLocalState(prevState => ({...prevState, form: { isValid: prevState.login.isValid && prevState.password.isValid}}));
    }, [localState.login.isValid, localState.password.isValid]);

    return (
        <>
            <form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <TextInput
                            email
                            id="email-41"
                            label="Email"
                            onChange={emailUpdate}
                            validate
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextInput
                            id="password-48"
                            label="Mot de passe"
                            onChange={passwordUpdate}
                            password
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            node="button"
                            type="submit"
                            waves="light"
                            disabled={!localState.form.isValid}
                        >
                            Se connecter
                            <Icon right>
                                send
                            </Icon>
                        </Button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default LoginForm;