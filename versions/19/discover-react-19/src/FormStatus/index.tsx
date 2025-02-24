import { useFormStatus } from "react-dom";

const action = async () => {
    console.info('yyy')
    await new Promise(resolve => {
        setTimeout(resolve, 1500);
    })
}

const Submit = () => {
    const status = useFormStatus();
    return <button type="submit" disabled={status.pending}>Save</button>
}

export const FormStatus = () => {   

    return (
        <form action={action}>
            <Submit></Submit>
        </form>
    )
}