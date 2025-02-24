export const addToCart = async (prevState: string | null) => {
    await new Promise(resolve => {
        setTimeout(resolve, 1500);
    })

    console.info('prevState', prevState)

    return 'Added ';
}