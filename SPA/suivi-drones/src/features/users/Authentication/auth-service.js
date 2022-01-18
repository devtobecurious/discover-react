import { config } from "../../../shared/config/api";

class AuthenticationService {
    async login(email, password) {
        const url = config.apis.authentication.url;

        const response = await fetch(url);
        const user = await response.json();

        return user;
    }
}

export default new AuthenticationService();