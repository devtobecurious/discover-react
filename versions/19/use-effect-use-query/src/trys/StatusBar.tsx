import { useOnlineStatus } from "../core/hooks/useOnlineStatus";

export const StatusBar = () => {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ En ligne' : '❌ Déconnecté'}</h1>;
}