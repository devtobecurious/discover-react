import { useActionState } from "react"
import { addToCart } from "./services"

export const AddToCart = () => {
    const [message, formAction, isPending] = useActionState(addToCart, null)

    return (
        <form action={formAction}>
            {!isPending && <b>{message}</b>}
            <button type="submit" disabled={isPending}>Add to cart</button>
        </form>
    )
}