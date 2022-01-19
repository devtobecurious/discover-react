import { LocalStorageService } from "../../features/users/Authentication/local-storage-service";

const authenticateHeader = () => {
    const service = new LocalStorageService();
    const user = service.get();
    let header = {}; 

    if (user && user.token) {
        header = {
            Authorization: `Bearer ${user.token}`
        };
    }

    return header;
} 

export default authenticateHeader;