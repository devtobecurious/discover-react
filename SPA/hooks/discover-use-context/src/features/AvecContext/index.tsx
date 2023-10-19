import React, { PropsWithChildren, useState } from "react";

export type Context = {
    currentUser?: {nom: string },
    setCurrentUser?: (user: {nom: string }) => void
}
export const PlayerContext = React.createContext<Context>({});

export const AvecContext = (props: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<{nom: string}>({nom: 'tests'});

    return (
        <>
            <h1>Hello !</h1>
            <PlayerContext.Provider value={ {currentUser, setCurrentUser}  }>
                {props.children}
            </PlayerContext.Provider>
        </>
    );
}