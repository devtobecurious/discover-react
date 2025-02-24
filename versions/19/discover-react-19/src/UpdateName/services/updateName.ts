export const updateName = (name: string): Promise<string|null> => {
    return new Promise(resolve => {
        console.info(name)
        setTimeout(() => {
            resolve(null)
        }, 1500)
    })
}