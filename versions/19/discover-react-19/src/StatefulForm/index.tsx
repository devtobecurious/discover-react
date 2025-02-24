import { useActionState } from "react"

async function increment(previousState : number, formData: FormData) {
    console.info('formData', formData)
    return previousState + 1
}

export const StatefulForm = () => {
    const [state, formAction] = useActionState(increment, 0)

    return (
        <form >
            {state}
            <input name="name"></input>

            <button formAction={formAction}>Increment</button>
        </form>
    )
}