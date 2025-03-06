import { useEffect, useState } from "react"

export const ListeningBrowser = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        function handleMove(e: { clientX: number; clientY: number }) {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('pointermove', handleMove)

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    })

    const newStyle = {
        position: 'absolute',
        backgroundColor: 'darkRed',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: 40,
        height: 40,
        left: -20,
        top: -20,
    } satisfies React.CSSProperties

    return (
        <>
            <div style={newStyle}></div>
        </>
    )
}