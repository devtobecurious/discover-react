import { Suspense, use } from "react"
import { ErrorBoundary } from "react-error-boundary"

type MessageProps = {
    messagePromise: Promise<string>
}

export const Message = ({messagePromise}: MessageProps) => {
    const content = use(messagePromise)

    return <p>Message : {content}</p>
}

export const MessageContainer = ({messagePromise}: MessageProps) => {
    return (
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
         <Suspense fallback={<p>Downloading ...</p>}>
            <Message messagePromise={messagePromise}></Message>
         </Suspense>
         </ErrorBoundary>
    )
}

export const GotMessage = () => {
    const promise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const result = (Math.random() * 10) % 2;
            if(result == 0) {
                resolve('Hello !');
            } else {
                reject('Failed');
            }
        }, 1500);
    })

    return (
        <>
            <MessageContainer messagePromise={promise}></MessageContainer>
        </>
    )
}