import { useOptimistic, useRef } from "react"

type ThreadProps = {
    messages: {text: string, sending ?: boolean, key ?: number}[]
    sendMessage: (formData: FormData) => Promise<void>
}

export const Thread = ({messages, sendMessage}: ThreadProps) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    //const [optimisticMessages] = useOptimistic(
        messages,
        (state, newMessage: string) => {
            return [
                ...state, 
                {
                    text: newMessage, 
                    sending: true
                }
            ]
        }
    )

    // const formAction = async (formData: FormData) => {
    // si pas d'optimistic
    //     await sendMessage(formData);
    // }
    const formAction = async (formData: FormData) => {
        const message = formData.get('message')?.toString()
        if(! message) {
            return;
        }

        addOptimisticMessage(message)
        formRef.current?.reset()

        await sendMessage(formData);
    }

    return (
        <>
            {
                optimisticMessages.map((message, index) => (
                    <div key={index}>
                        {message.text} 
                        {!!message.sending && <small>(Sending ...)</small>}
                    </div>
                ))
            }

            <form ref={formRef} action={formAction}>
                <input type="text" name="message"></input>
                <button type="submit">Send</button>
            </form>
        </>
    )
}