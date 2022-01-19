import { config } from "../../../shared/config/api";
import { LocalStorageService } from "./local-storage-service";

class AuthenticationService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }

    async login(email, password) {
        const url = config.apis.authentication.url;

        const response = await fetch(url);
        const user = await response.json();

        this.localStorageService.save(user);

        return user;
    }

    getCurrent() {
        return this.localStorageService.get();
    }
}

export default new AuthenticationService(new LocalStorageService());