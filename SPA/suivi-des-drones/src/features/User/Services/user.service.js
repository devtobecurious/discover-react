import { apis } from "../../../environments/apis";
import storageService from "./local-storage.service";

class UserService {
    constructor(localStorageService) {
        this.storageService = localStorageService;
    }

    async log(email, password) {
        const header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        };

        const response = await fetch(apis.user.authenticate.url, header);
        const result = await response.json();

        if (result) {
            this.storageService.save('user', result);
        }

        return result;
    }

    get() {
        return this.storageService.get('user');
    }
}

const userService = new UserService(storageService);

export default userService;
