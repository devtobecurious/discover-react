export const EmptyNote = () => {
    async function createNoteAction() {
        'use server'
        
        await new Promise(resolve => {
            setTimeout(resolve, 1500)
        })
    }

    return <button onClick={createNoteAction}>Hello</button>
}