import { useState } from "react"
import { Thread } from "../Thread"
import { deliver } from "./actions"

export const MessageWithOptimistic = () => {
    const [messages, setMessages] = useState<{text: string, sending ?: boolean, key ?: number}[]>([{text: 'Hello !', sending: false, key: 1}])

    const sendMessage = async (formData: FormData) => {
        const receivedMessage = await deliver(formData.get('message'))

        if(! receivedMessage) {
            return;
        }
        setMessages(messages => [...messages, { text: receivedMessage }])
    }

    return <Thread messages={messages} sendMessage={sendMessage}></Thread>
}